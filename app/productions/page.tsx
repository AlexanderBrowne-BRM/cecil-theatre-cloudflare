import type { Metadata } from 'next';
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';
import Link from '@/components/site-link';
import { NewsletterForm } from '@/components/forms/newsletter-form';
import { PageHero } from '@/components/page-hero';
import { currentProduction } from '@/lib/site-content';

export const metadata: Metadata = {
  title: 'Productions',
  description:
    'Explore current and future Cecil Theatre Project productions in Cecil County, Maryland.',
  alternates: { canonical: '/productions' },
};

export default function ProductionsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Productions"
        title="Stories start here."
        intro="Each CTP production gets its own place for dates, tickets, artists, venue guidance, and access information—ready to grow with the organization."
      />

      <section
        className="section section--ivory productions-index"
        aria-labelledby="on-stage-heading"
      >
        <div className="site-shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="kicker">On stage next</p>
              <h2 id="on-stage-heading">The inaugural production</h2>
            </div>
            <p>
              The current season begins with one show. Additional programming
              will appear here only after it is confirmed by CTP.
            </p>
          </div>

          <article className="production-index-card">
            <div className="production-index-card__art" aria-hidden="true">
              <span>01</span>
            </div>
            <div className="production-index-card__content">
              <p className="eyebrow">{currentProduction.label}</p>
              <h3>{currentProduction.title}</h3>
              <p>{currentProduction.description}</p>
              <div className="production-index-card__facts">
                <span>
                  <CalendarDays aria-hidden="true" /> December 4–5, 2026
                </span>
                <span>
                  <MapPin aria-hidden="true" /> {currentProduction.venue.name}
                </span>
                <span>{currentProduction.ageRestriction} venue</span>
              </div>
              <Link
                className="button button--gold"
                href="/productions/little-shop-of-horrors"
              >
                View production <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section
        className="section signup-section"
        aria-labelledby="production-updates-heading"
      >
        <div className="site-shell signup-layout">
          <div>
            <p className="kicker kicker--acid">What comes next</p>
            <h2 id="production-updates-heading">Follow the next entrance.</h2>
            <p>
              Choose future productions, ticket notices, auditions, artist
              calls, or volunteer updates.
            </p>
          </div>
          <NewsletterForm compact buttonLabel="Join the CTP list" />
        </div>
      </section>
    </main>
  );
}
