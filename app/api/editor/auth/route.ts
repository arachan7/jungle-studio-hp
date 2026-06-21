import crypto from 'crypto';
import { cookies } from 'next/headers';
import { generateToken, EDITOR_COOKIE_NAME } from '@/lib/editorAuth';

// IP 別のレート制限（失敗5回で30分ロック）。サーバープロセス内のメモリで管理。
const rateLimit = new Map<string, { count: number; lockedUntil: number }>();

const MAX_ATTEMPTS = 5;
const LOCK_MS = 30 * 60 * 1000; // 30分

function getClientIp(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return req.headers.get('x-real-ip') ?? 'unknown';
}

function timingSafeEqualStr(a: string, b: string): boolean {
  const ab = Buffer.from(a, 'utf8');
  const bb = Buffer.from(b, 'utf8');
  // 長さが異なる場合でもタイミング差を抑えるためダミー比較を行う
  if (ab.length !== bb.length) {
    crypto.timingSafeEqual(ab, ab);
    return false;
  }
  return crypto.timingSafeEqual(ab, bb);
}

export async function POST(req: Request) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword || !process.env.EDITOR_SECRET) {
    return Response.json(
      { error: 'サーバー設定が未完了です（環境変数が不足しています）' },
      { status: 500 },
    );
  }

  const ip = getClientIp(req);
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (entry && entry.lockedUntil > now) {
    const minutes = Math.ceil((entry.lockedUntil - now) / 60000);
    return Response.json(
      { error: `試行回数が上限に達しました。約${minutes}分後にお試しください` },
      { status: 429 },
    );
  }

  let password = '';
  try {
    const body = (await req.json()) as { password?: string };
    password = body.password ?? '';
  } catch {
    password = '';
  }

  const ok = password.length > 0 && timingSafeEqualStr(password, adminPassword);

  if (!ok) {
    const prev = entry && entry.lockedUntil <= now ? { count: 0, lockedUntil: 0 } : entry;
    const count = (prev?.count ?? 0) + 1;
    if (count >= MAX_ATTEMPTS) {
      rateLimit.set(ip, { count, lockedUntil: now + LOCK_MS });
    } else {
      rateLimit.set(ip, { count, lockedUntil: 0 });
    }
    return Response.json({ error: 'パスワードが正しくありません' }, { status: 401 });
  }

  // 成功: カウンタをリセットしてセッション Cookie を発行
  rateLimit.delete(ip);

  const token = generateToken();
  const cookieStore = await cookies();
  cookieStore.set(EDITOR_COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 8 * 60 * 60, // 8時間
  });

  return Response.json({ ok: true });
}
