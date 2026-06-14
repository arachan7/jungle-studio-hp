import Stripe from 'stripe';
import { getDb } from '@/app/lib/db';
import { junglePassports, webhookEvents } from '@/app/lib/schema';
import { eq } from 'drizzle-orm';
import { cleanEnv } from '@/app/lib/env';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');

  if (!sig) {
    return new Response('No signature', { status: 400 });
  }

  const stripe = new Stripe(cleanEnv('STRIPE_SECRET_KEY'));
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, cleanEnv('STRIPE_WEBHOOK_SECRET'));
  } catch {
    return new Response('Invalid signature', { status: 400 });
  }

  const db = getDb();

  // べき等性: 既に処理済みのイベントはスキップ。
  // 記録は「処理が成功した後」に行う（処理途中で失敗した場合は再送で再処理させ、
  // 記録だけ先行して処理が欠落するのを防ぐ）。ハンドラ自体も upsert / 条件付き更新で冪等。
  const seen = await db
    .select({ eventId: webhookEvents.eventId })
    .from(webhookEvents)
    .where(eq(webhookEvents.eventId, event.id));

  if (seen.length > 0) {
    return new Response('OK');
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const name = session.metadata?.name ?? '';
    const email = session.metadata?.email ?? '';
    const customerId = typeof session.customer === 'string' ? session.customer : '';
    const subscriptionId = typeof session.subscription === 'string' ? session.subscription : '';

    if (!name || !email || !customerId || !subscriptionId) {
      return new Response('Missing data', { status: 400 });
    }

    const plan = session.metadata?.plan === 'yearly' ? 'yearly' : 'monthly';
    const now = new Date();
    const isYearly = plan === 'yearly';
    const initialStatus = isYearly ? 'active' : 'trial';
    const trialEnd = isYearly ? now : new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

    await db
      .insert(junglePassports)
      .values({
        name,
        email,
        plan,
        stripeCustomerId: customerId,
        stripeSubscriptionId: subscriptionId,
        status: initialStatus,
        trialStartAt: now,
        trialEndAt: trialEnd,
      })
      // conflict時は status / trial日付 を上書きしない。
      // checkout.session.completed が遅延・再配信され、subscription.updated で
      // すでに trial→active へ進んだ後に届いても、無料期間や課金状態を巻き戻さないため。
      .onConflictDoUpdate({
        target: junglePassports.email,
        set: {
          plan,
          stripeCustomerId: customerId,
          stripeSubscriptionId: subscriptionId,
        },
      });
  }

  if (event.type === 'customer.subscription.updated') {
    const sub = event.data.object as unknown as {
      id: string;
      status: string;
      cancel_at_period_end: boolean;
      current_period_end?: number;
      items?: { data?: { current_period_end?: number }[] };
      trial_end: number | null;
    };
    // current_period_end はAPI更新でトップレベル→items配下へ移動。両対応。
    const periodEnd = sub.current_period_end ?? sub.items?.data?.[0]?.current_period_end ?? 0;

    const rows = await db
      .select({ id: junglePassports.id, status: junglePassports.status })
      .from(junglePassports)
      .where(eq(junglePassports.stripeSubscriptionId, sub.id));

    if (rows.length === 0) return new Response('OK');

    const passport = rows[0];
    const now = new Date();

    if (sub.status === 'active' && sub.cancel_at_period_end && passport.status === 'active') {
      // 解約予約: 期間満了日まで有効
      const expiresAt = new Date(periodEnd * 1000);
      await db
        .update(junglePassports)
        .set({ status: 'cancelled', cancelledAt: now, expiresAt })
        .where(eq(junglePassports.id, passport.id));
    } else if (sub.status === 'active' && !sub.cancel_at_period_end) {
      // 無料期間終了で課金開始（trial→active）、または解約予約の取り消し（cancelled→active）
      if (passport.status === 'trial' || passport.status === 'cancelled') {
        await db
          .update(junglePassports)
          .set({ status: 'active', cancelledAt: null, expiresAt: null })
          .where(eq(junglePassports.id, passport.id));
      }
    }
  }

  if (event.type === 'customer.subscription.deleted') {
    const sub = event.data.object as unknown as { id: string };

    await db
      .update(junglePassports)
      .set({ status: 'expired', expiresAt: new Date() })
      .where(eq(junglePassports.stripeSubscriptionId, sub.id));
  }

  // 処理成功後にイベントIDを記録（次回以降の再送はスキップされる）
  await db
    .insert(webhookEvents)
    .values({ eventId: event.id })
    .onConflictDoNothing({ target: webhookEvents.eventId });

  return new Response('OK');
}
