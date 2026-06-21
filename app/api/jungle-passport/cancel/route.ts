import Stripe from 'stripe';
import { getDb } from '@/app/lib/db';
import { junglePassports } from '@/app/lib/schema';
import { and, eq } from 'drizzle-orm';
import { verifyOtp } from '@/app/lib/cancelOtp';
import { checkRateLimit, getClientIp } from '@/app/lib/rateLimit';
import { cleanEnv } from '@/app/lib/env';

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const OTP_RE = /^\d{6}$/;

function normalizeName(value: unknown): string {
  return typeof value === 'string' ? value.trim().slice(0, MAX_NAME_LENGTH + 1) : '';
}

function normalizeEmail(value: unknown): string {
  return typeof value === 'string'
    ? value.trim().toLowerCase().slice(0, MAX_EMAIL_LENGTH + 1)
    : '';
}

function normalizeCode(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  let body: { name?: unknown; email?: unknown; code?: unknown; confirm?: unknown };
  try {
    body = (await request.json()) as {
      name?: unknown;
      email?: unknown;
      code?: unknown;
      confirm?: unknown;
    };
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }

  const normName = normalizeName(body.name);
  const normEmail = normalizeEmail(body.email);
  const normCode = normalizeCode(body.code);
  const confirm = body.confirm === true;

  if (
    !normName ||
    !normEmail ||
    normName.length > MAX_NAME_LENGTH ||
    normEmail.length > MAX_EMAIL_LENGTH ||
    !EMAIL_RE.test(normEmail) ||
    !OTP_RE.test(normCode)
  ) {
    return Response.json({ error: 'Invalid input' }, { status: 400 });
  }

  const ip = getClientIp(request);
  const ipOk = await checkRateLimit(`cancel:ip:${ip}`, 20, 10 * 60);
  const mailOk = await checkRateLimit(`cancel:mail:${normEmail}`, 8, 10 * 60);
  if (!ipOk || !mailOk) {
    return Response.json({ error: 'Too many attempts' }, { status: 429 });
  }

  const valid = await verifyOtp(normEmail, normCode, confirm);
  if (!valid) {
    return Response.json({ error: 'Invalid or expired verification code' }, { status: 401 });
  }

  const db = getDb();
  const rows = await db
    .select()
    .from(junglePassports)
    .where(and(eq(junglePassports.email, normEmail), eq(junglePassports.name, normName)));

  if (rows.length === 0) {
    return Response.json({ error: 'Registration not found' }, { status: 404 });
  }

  const passport = rows[0];

  if (!confirm) {
    return Response.json({
      status: passport.status,
      trialStartAt: passport.trialStartAt,
      trialEndAt: passport.trialEndAt,
      cancelledAt: passport.cancelledAt,
      expiresAt: passport.expiresAt,
    });
  }

  if (passport.status === 'trial') {
    return Response.json(
      { error: 'Cannot cancel during trial period', status: 'trial', trialEndAt: passport.trialEndAt },
      { status: 403 },
    );
  }

  if (passport.status === 'cancelled' || passport.status === 'expired') {
    return Response.json(
      { error: 'Already cancelled', status: passport.status, expiresAt: passport.expiresAt },
      { status: 409 },
    );
  }

  if (!passport.stripeSubscriptionId) {
    return Response.json({ error: 'Subscription not found' }, { status: 500 });
  }

  let sub: Stripe.Subscription;
  try {
    const stripe = new Stripe(cleanEnv('STRIPE_SECRET_KEY'));
    sub = await stripe.subscriptions.update(passport.stripeSubscriptionId, {
      cancel_at_period_end: true,
    });
  } catch (e) {
    console.error('stripe cancellation failed', e);
    return Response.json({ error: 'Cancellation failed' }, { status: 502 });
  }

  const s = sub as unknown as {
    current_period_end?: number;
    items?: { data?: { current_period_end?: number }[] };
  };
  const periodEnd = s.current_period_end ?? s.items?.data?.[0]?.current_period_end;
  if (!periodEnd) {
    return Response.json({ error: 'Unable to determine cancellation date' }, { status: 502 });
  }

  const expiresAt = new Date(periodEnd * 1000);

  await db
    .update(junglePassports)
    .set({ status: 'cancelled', cancelledAt: new Date(), expiresAt })
    .where(eq(junglePassports.id, passport.id));

  return Response.json({ status: 'cancelled', expiresAt });
}
