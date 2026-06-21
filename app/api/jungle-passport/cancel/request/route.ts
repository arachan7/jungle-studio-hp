import { getDb } from '@/app/lib/db';
import { junglePassports } from '@/app/lib/schema';
import { and, eq } from 'drizzle-orm';
import { issueOtp } from '@/app/lib/cancelOtp';
import { sendCancelOtpEmail } from '@/app/lib/sendCancelOtp';
import { checkRateLimit, getClientIp } from '@/app/lib/rateLimit';

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeName(value: unknown): string {
  return typeof value === 'string' ? value.trim().slice(0, MAX_NAME_LENGTH + 1) : '';
}

function normalizeEmail(value: unknown): string {
  return typeof value === 'string'
    ? value.trim().toLowerCase().slice(0, MAX_EMAIL_LENGTH + 1)
    : '';
}

export async function POST(request: Request) {
  let body: { name?: unknown; email?: unknown };
  try {
    body = (await request.json()) as { name?: unknown; email?: unknown };
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }

  const normName = normalizeName(body.name);
  const normEmail = normalizeEmail(body.email);

  if (
    !normName ||
    !normEmail ||
    normName.length > MAX_NAME_LENGTH ||
    normEmail.length > MAX_EMAIL_LENGTH ||
    !EMAIL_RE.test(normEmail)
  ) {
    return Response.json({ error: 'Invalid name or email' }, { status: 400 });
  }

  const ip = getClientIp(request);
  const ipOk = await checkRateLimit(`otp_req:ip:${ip}`, 10, 60 * 60);
  const mailOk = await checkRateLimit(`otp_req:mail:${normEmail}`, 3, 60 * 60);
  if (!ipOk || !mailOk) {
    return Response.json({ error: 'Too many attempts' }, { status: 429 });
  }

  const db = getDb();
  const rows = await db
    .select({ id: junglePassports.id })
    .from(junglePassports)
    .where(and(eq(junglePassports.email, normEmail), eq(junglePassports.name, normName)));

  if (rows.length > 0) {
    try {
      const code = await issueOtp(normEmail);
      await sendCancelOtpEmail(normEmail, code);
    } catch (e) {
      console.error('cancel OTP send failed', e);
    }
  }

  return Response.json({
    ok: true,
    message: 'If the account exists, a verification code has been sent.',
  });
}
