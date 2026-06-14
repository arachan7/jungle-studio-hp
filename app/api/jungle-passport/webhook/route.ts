import Stripe from 'stripe';
import { getDb } from '@/app/lib/db';
import { junglePassports } from '@/app/lib/schema';
import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');

  if (!sig) {
    return new Response('No signature', { status: 400 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return new Response('Invalid signature', { status: 400 });
  }

  const db = getDb();

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
      .onConflictDoUpdate({
        target: junglePassports.email,
        set: {
          plan,
          stripeCustomerId: customerId,
          stripeSubscriptionId: subscriptionId,
          status: initialStatus,
          trialStartAt: now,
          trialEndAt: trialEnd,
        },
      });
  }

  if (event.type === 'customer.subscription.updated') {
    const sub = event.data.object as unknown as {
      id: string;
      status: string;
      cancel_at_period_end: boolean;
      current_period_end: number;
      trial_end: number | null;
    };

    const rows = await db
      .select({ id: junglePassports.id, status: junglePassports.status })
      .from(junglePassports)
      .where(eq(junglePassports.stripeSubscriptionId, sub.id));

    if (rows.length === 0) return new Response('OK');

    const passport = rows[0];
    const now = new Date();

    if (sub.status === 'active' && passport.status === 'trial') {
      await db
        .update(junglePassports)
        .set({ status: 'active' })
        .where(eq(junglePassports.id, passport.id));
    } else if (sub.cancel_at_period_end && passport.status === 'active') {
      const expiresAt = new Date(sub.current_period_end * 1000);
      await db
        .update(junglePassports)
        .set({ status: 'cancelled', cancelledAt: now, expiresAt })
        .where(eq(junglePassports.id, passport.id));
    }
  }

  if (event.type === 'customer.subscription.deleted') {
    const sub = event.data.object as unknown as { id: string };

    await db
      .update(junglePassports)
      .set({ status: 'expired', expiresAt: new Date() })
      .where(eq(junglePassports.stripeSubscriptionId, sub.id));
  }

  return new Response('OK');
}
