import { getDb } from '@/app/lib/db';
import { junglePassports } from '@/app/lib/schema';
import { and, eq } from 'drizzle-orm';
import { issueOtp } from '@/app/lib/cancelOtp';
import { sendCancelOtpEmail } from '@/app/lib/sendCancelOtp';
import { checkRateLimit, getClientIp } from '@/app/lib/rateLimit';

// 解約手続きの本人確認コードを登録メールアドレスへ送信する。
// 登録の有無にかかわらず常に同じ応答を返し、メール存在の判定（列挙）を防ぐ。
export async function POST(request: Request) {
  const { name, email } = (await request.json()) as { name?: string; email?: string };
  const normName = name?.trim() ?? '';
  const normEmail = email?.trim().toLowerCase() ?? '';

  if (!normName || !normEmail) {
    return Response.json({ error: '名前とメールアドレスを入力してください' }, { status: 400 });
  }

  // レート制限: IP / メール宛（メール爆撃・総当たり対策）
  const ip = getClientIp(request);
  const ipOk = await checkRateLimit(`otp_req:ip:${ip}`, 10, 60 * 60);
  const mailOk = await checkRateLimit(`otp_req:mail:${normEmail}`, 3, 60 * 60);
  if (!ipOk || !mailOk) {
    return Response.json(
      { error: '試行回数が上限に達しました。しばらく経ってからお試しください' },
      { status: 429 },
    );
  }

  const db = getDb();
  const rows = await db
    .select({ id: junglePassports.id })
    .from(junglePassports)
    .where(and(eq(junglePassports.email, normEmail), eq(junglePassports.name, normName)));

  // 登録メールが存在する場合のみコードを発行・送信する（コードは本人の受信箱にしか届かない）。
  // 未登録でも応答は変えず、メール存在の判定を防ぐ。
  if (rows.length > 0) {
    try {
      const code = await issueOtp(normEmail);
      await sendCancelOtpEmail(normEmail, code);
    } catch (e) {
      // 送信失敗はログのみ。応答は一律にして存在を漏らさない
      console.error('cancel OTP send failed', e);
    }
  }

  return Response.json({
    ok: true,
    message: 'ご登録のメールアドレス宛に確認コードを送信しました（登録がある場合）',
  });
}
