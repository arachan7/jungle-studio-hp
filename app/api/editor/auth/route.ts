import crypto from 'crypto';
import { cookies } from 'next/headers';
import { generateToken, EDITOR_COOKIE_NAME } from '@/lib/editorAuth';
import { getClientIp, verifySameOrigin } from '@/lib/editorSecurity';
import { checkRateLimit } from '@/app/lib/rateLimit';

const MAX_FAILED_ATTEMPTS = 5;
const LOCK_WINDOW_SECONDS = 30 * 60;

function timingSafeEqualStr(a: string, b: string): boolean {
  const ab = Buffer.from(a, 'utf8');
  const bb = Buffer.from(b, 'utf8');
  if (ab.length !== bb.length) {
    crypto.timingSafeEqual(ab, ab);
    return false;
  }
  return crypto.timingSafeEqual(ab, bb);
}

export async function POST(req: Request) {
  if (!verifySameOrigin(req)) {
    return Response.json({ error: 'Invalid request origin' }, { status: 403 });
  }

  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword || !process.env.EDITOR_SECRET) {
    return Response.json({ error: 'Editor is not configured' }, { status: 500 });
  }

  let password = '';
  try {
    const body = (await req.json()) as { password?: unknown };
    password = typeof body.password === 'string' ? body.password : '';
  } catch {
    password = '';
  }

  const ok = password.length > 0 && timingSafeEqualStr(password, adminPassword);

  if (!ok) {
    const ip = getClientIp(req);
    let allowed = false;
    try {
      allowed = await checkRateLimit(
        `editor_auth_fail:${ip}`,
        MAX_FAILED_ATTEMPTS,
        LOCK_WINDOW_SECONDS,
      );
    } catch (e) {
      console.error('editor auth rate limit error', e);
      return Response.json({ error: 'Too many login attempts' }, { status: 429 });
    }
    if (!allowed) {
      return Response.json({ error: 'Too many login attempts' }, { status: 429 });
    }
    return Response.json({ error: 'Invalid password' }, { status: 401 });
  }

  const token = generateToken();
  const cookieStore = await cookies();
  cookieStore.set(EDITOR_COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 8 * 60 * 60,
  });

  return Response.json({ ok: true });
}
