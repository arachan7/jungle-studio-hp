import Stripe from 'stripe';
import { getDb } from '@/app/lib/db';
import { junglePassports } from '@/app/lib/schema';
import { and, eq } from 'drizzle-orm';

export async function POST(request: Request) {
  const { name, email } = await request.json() as { name: string; email: string };

  if (!name?.trim() || !email?.trim()) {
    return Response.json({ error: '入力エラー' }, { status: 400 });
  }

  const db = getDb();
  const rows = await db
    .select()
    .from(junglePassports)
    .where(and(
      eq(junglePassports.email, email.trim().toLowerCase()),
      eq(junglePassports.name, name.trim()),
    ));

  if (rows.length === 0) {
    return Response.json({ error: '登録情報が見つかりません' }, { status: 404 });
  }

  const passport = rows[0];

  if (passport.status === 'trial') {
    return Response.json({ error: '無料期間中は解約できません' }, { status: 403 });
  }

  if (passport.status === 'cancelled' || passport.status === 'expired') {
    return Response.json({ error: 'すでに解約済みです' }, { status: 409 });
  }

  if (!passport.stripeSubscriptionId) {
    return Response.json({ error: '契約情報が見つかりません' }, { status: 500 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const sub = await stripe.subscriptions.update(passport.stripeSubscriptionId, {
    cancel_at_period_end: true,
  }) as unknown as { current_period_end: number };

  const expiresAt = new Date(sub.current_period_end * 1000);

  await db
    .update(junglePassports)
    .set({ status: 'cancelled', cancelledAt: new Date(), expiresAt })
    .where(eq(junglePassports.id, passport.id));

  return Response.json({ expiresAt });
}
