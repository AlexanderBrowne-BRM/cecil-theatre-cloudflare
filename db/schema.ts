import { index, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const newsletterSignups = sqliteTable(
  'newsletter_signups',
  {
    id: text('id').primaryKey(),
    firstName: text('first_name').notNull(),
    email: text('email').notNull(),
    interests: text('interests').notNull(),
    consent: integer('consent', { mode: 'boolean' }).notNull(),
    source: text('source').notNull().default('website'),
    createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull(),
  },
  (table) => [
    index('idx_newsletter_email').on(table.email),
    index('idx_newsletter_created_at').on(table.createdAt),
  ],
);

export const involvementSubmissions = sqliteTable(
  'involvement_submissions',
  {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    location: text('location'),
    interests: text('interests').notNull(),
    experience: text('experience'),
    availability: text('availability'),
    accommodations: text('accommodations'),
    consent: integer('consent', { mode: 'boolean' }).notNull(),
    status: text('status').notNull().default('new'),
    source: text('source').notNull().default('website'),
    createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull(),
  },
  (table) => [
    index('idx_involvement_email').on(table.email),
    index('idx_involvement_status_created_at').on(
      table.status,
      table.createdAt,
    ),
  ],
);

export const analyticsEvents = sqliteTable(
  'analytics_events',
  {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    pathname: text('pathname').notNull(),
    source: text('source'),
    metadata: text('metadata').notNull().default('{}'),
    createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull(),
  },
  (table) => [
    index('idx_analytics_name_created_at').on(table.name, table.createdAt),
    index('idx_analytics_source_created_at').on(table.source, table.createdAt),
  ],
);
