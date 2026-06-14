import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

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
