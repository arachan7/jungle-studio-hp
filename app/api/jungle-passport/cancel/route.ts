import Stripe from 'stripe';
import { getDb } from '@/app/lib/db';
import { junglePassports } from '@/app/lib/schema';
import { eq } from 'drizzle-orm';
import { verifyOtp } from '@/app/lib/cancelOtp';
import { checkRateLimit, getClientIp } from '@/app/lib/rateLimit';
import { cleanEnv } from '@/app/lib/env';

// 本人確認コード（OTP）を検証したうえで契約状況を返す。
// confirm=true かつ active のときのみ実際に解約（cancel_at_period_end）を行う。
// 状態はOTP検証成功後にのみ返すため、ユーザー列挙には使えない。
export async function POST(request: Request) {
  const { name, email, code, confirm } = (await request.json()) as {
    name?: string;
    email?: string;
    code?: string;
    confirm?: boolean;
  };
  const normName = name?.trim() ?? '';
  const normEmail = email?.trim().toLowerCase() ?? '';
  const normCode = code?.trim() ?? '';

  if (!normName || !normEmail || !normCode) {
    return Response.json({ error: '入力エラー' }, { status: 400 });
  }

  // レート制限: コード検証の総当たり対策（IP単位）
  const ip = getClientIp(request);
  const ipOk = await checkRateLimit(`cancel:ip:${ip}`, 20, 10 * 60);
  if (!ipOk) {
    return Response.json(
      { error: '試行回数が上限に達しました。しばらく経ってからお試しください' },
      { status: 429 },
    );
  }

  // 解約確定時のみコードを消費（confirmなしの状態確認では消費しない）
  const valid = await verifyOtp(normEmail, normCode, confirm === true);
  if (!valid) {
    // 期限切れ・不一致・試行上限を区別せず一律のメッセージ
    return Response.json(
      { error: '確認コードが正しくないか、有効期限が切れています' },
      { status: 401 },
    );
  }

  const db = getDb();
  const rows = await db
    .select()
    .from(junglePassports)
    .where(eq(junglePassports.email, normEmail));

  if (rows.length === 0) {
    return Response.json({ error: '登録情報が見つかりません' }, { status: 404 });
  }

  const passport = rows[0];

  // 状態確認のみ（confirmなし）: 契約状況を返す
  if (confirm !== true) {
    return Response.json({
      status: passport.status,
      trialStartAt: passport.trialStartAt,
      trialEndAt: passport.trialEndAt,
      cancelledAt: passport.cancelledAt,
      expiresAt: passport.expiresAt,
    });
  }

  // ここから解約実行
  if (passport.status === 'trial') {
    return Response.json(
      { error: '無料期間中は解約できません', status: 'trial', trialEndAt: passport.trialEndAt },
      { status: 403 },
    );
  }

  if (passport.status === 'cancelled' || passport.status === 'expired') {
    return Response.json(
      { error: 'すでに解約済みです', status: passport.status, expiresAt: passport.expiresAt },
      { status: 409 },
    );
  }

  if (!passport.stripeSubscriptionId) {
    return Response.json({ error: '契約情報が見つかりません' }, { status: 500 });
  }

  const stripe = new Stripe(cleanEnv('STRIPE_SECRET_KEY'));
  const sub = await stripe.subscriptions.update(passport.stripeSubscriptionId, {
    cancel_at_period_end: true,
  });

  // Stripe API更新で current_period_end はトップレベルから items 配下へ移動した。
  // 新旧どちらの配置でも拾えるようにフォールバックする。
  const s = sub as unknown as {
    current_period_end?: number;
    items?: { data?: { current_period_end?: number }[] };
  };
  const periodEnd = s.current_period_end ?? s.items?.data?.[0]?.current_period_end;
  if (!periodEnd) {
    return Response.json({ error: '解約日の取得に失敗しました' }, { status: 500 });
  }
  const expiresAt = new Date(periodEnd * 1000);

  await db
    .update(junglePassports)
    .set({ status: 'cancelled', cancelledAt: new Date(), expiresAt })
    .where(eq(junglePassports.id, passport.id));

  return Response.json({ status: 'cancelled', expiresAt });
}
