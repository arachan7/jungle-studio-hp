import { pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core';

export const junglePassports = pgTable('jungle_passports', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  plan: text('plan').notNull().default('monthly'), // monthly | yearly
  stripeCustomerId: text('stripe_customer_id'),
  stripeSubscriptionId: text('stripe_subscription_id'),
  status: text('status').notNull().default('trial'), // trial | active | cancelled | expired
  trialStartAt: timestamp('trial_start_at').notNull(),
  trialEndAt: timestamp('trial_end_at').notNull(),
  cancelledAt: timestamp('cancelled_at'),
  expiresAt: timestamp('expires_at'),
  createdAt: timestamp('created_at').defaultNow(),
});

// 解約用のワンタイムコード（本人確認）。email ごとに1件、上書き発行する
export const cancelOtps = pgTable('cancel_otps', {
  email: text('email').primaryKey(),
  codeHash: text('code_hash').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  attempts: integer('attempts').notNull().default(0),
  createdAt: timestamp('created_at').defaultNow(),
});

// Stripe webhook のべき等性確保（同一イベントの二重処理を防ぐ）
export const webhookEvents = pgTable('webhook_events', {
  eventId: text('event_id').primaryKey(),
  createdAt: timestamp('created_at').defaultNow(),
});

// 固定ウィンドウのレートリミット（サーバーレス間で共有するためDBに保持）
export const rateLimits = pgTable('rate_limits', {
  key: text('key').primaryKey(),
  count: integer('count').notNull().default(0),
  windowStart: timestamp('window_start').notNull(),
});
