CREATE TABLE `analytics_events` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`pathname` text NOT NULL,
	`source` text,
	`metadata` text DEFAULT '{}' NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_analytics_name_created_at` ON `analytics_events` (`name`,`created_at`);--> statement-breakpoint
CREATE INDEX `idx_analytics_source_created_at` ON `analytics_events` (`source`,`created_at`);--> statement-breakpoint
CREATE TABLE `involvement_submissions` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`location` text,
	`interests` text NOT NULL,
	`experience` text,
	`availability` text,
	`accommodations` text,
	`consent` integer NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`source` text DEFAULT 'website' NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_involvement_email` ON `involvement_submissions` (`email`);--> statement-breakpoint
CREATE INDEX `idx_involvement_status_created_at` ON `involvement_submissions` (`status`,`created_at`);--> statement-breakpoint
CREATE TABLE `newsletter_signups` (
	`id` text PRIMARY KEY NOT NULL,
	`first_name` text NOT NULL,
	`email` text NOT NULL,
	`interests` text NOT NULL,
	`consent` integer NOT NULL,
	`source` text DEFAULT 'website' NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_newsletter_email` ON `newsletter_signups` (`email`);--> statement-breakpoint
CREATE INDEX `idx_newsletter_created_at` ON `newsletter_signups` (`created_at`);--> statement-breakpoint
PRAGMA optimize;
