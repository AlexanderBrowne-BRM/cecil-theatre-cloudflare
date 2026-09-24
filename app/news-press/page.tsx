import type { Metadata } from 'next';
import Link from '@/components/site-link';
import { ArrowUpRight, Mail } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { currentProduction, organization } from '@/lib/site-content';

export const metadata: Metadata = {
  title: 'News & Press',
  description:
    'Current facts and media contact information for Cecil Theatre Project and its inaugural production, Little Shop of Horrors.',
  alternates: { canonical: '/news-press' },
};

export default function NewsPressPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="News & press"
        title="Accurate information, without the extra spin."
        intro="CTP is a new organization preparing its inaugural theatrical production. This page keeps the current public facts and media route in one place."
      />

      <section
        className="section section--ivory"
        aria-labelledby="facts-heading"
      >
        <div className="site-shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="kicker">At a glance</p>
              <h2 id="facts-heading">Current public facts</h2>
            </div>
            <p>
              Last reviewed September 6, 2026. Production details may change
              when CTP publishes approved updates.
            </p>
          </div>
          <dl className="press-facts">
            <div>
              <dt>Organization</dt>
              <dd>Cecil Theatre Project</dd>
            </div>
            <div>
              <dt>Position</dt>
              <dd>
                New, locally rooted theatre organization serving Cecil County
              </dd>
            </div>
            <div>
              <dt>Inaugural production</dt>
              <dd>{currentProduction.title}</dd>
            </div>
            <div>
              <dt>Performances</dt>
              <dd>December 4 at 7:00 PM and December 5 at 2:00 PM</dd>
            </div>
            <div>
              <dt>Venue</dt>
              <dd>
                {currentProduction.venue.name},{' '}
                {currentProduction.venue.address}
              </dd>
            </div>
            <div>
              <dt>Venue restriction</dt>
              <dd>21+ with valid, non-expired ID</dd>
            </div>
            <div>
              <dt>Official tickets</dt>
              <dd>Eventeny, with sales opening September 21, 2026</dd>
            </div>
            <div>
              <dt>Licensing</dt>
              <dd>
                Presented through special arrangement with Music Theatre
                International
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        className="section section--paper"
        aria-labelledby="news-heading"
      >
        <div className="site-shell editorial-grid">
          <div>
            <p className="kicker">Updates</p>
            <h2 id="news-heading">No press releases published yet.</h2>
          </div>
          <div className="editorial-copy">
            <p className="lead-copy">
              CTP will add approved announcements, rights-cleared images, and
              production credits here as they are ready.
            </p>
            <p>
              No reviews, testimonials, awards, or coverage are claimed on this
              site.
            </p>
            <Link href="/#updates" className="text-link">
              Join the announcement list
            </Link>
          </div>
        </div>
      </section>

      <section
        className="press-contact"
        aria-labelledby="press-contact-heading"
      >
        <div className="site-shell press-contact__inner">
          <Mail aria-hidden="true" />
          <div>
            <p className="kicker kicker--acid">Media & factual corrections</p>
            <h2 id="press-contact-heading">Contact Cecil Theatre Project</h2>
            <p>
              Use this route for interviews, production facts, approved assets,
              or a correction to public information.
            </p>
          </div>
          <a
            className="button button--acid"
            href={`mailto:${organization.email}?subject=Press inquiry`}
          >
            {organization.email} <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
