import type { Metadata } from 'next';
import { ArrowRight, Building2, ExternalLink, TicketCheck } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { organization } from '@/lib/site-content';

export const metadata: Metadata = {
  title: 'Partners',
  description:
    'See the verified operational relationships supporting Cecil Theatre Project’s current production and start a local partnership conversation.',
  alternates: { canonical: '/partners' },
};

export default function PartnersPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Partners"
        title="Local relationships should be specific."
        intro="CTP will publish sponsors and community partners only after roles, permissions, and benefits are confirmed. Here is what is verifiable now."
      />

      <section
        className="section section--ivory"
        aria-labelledby="relationships-heading"
      >
        <div className="site-shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="kicker">Current production relationships</p>
              <h2 id="relationships-heading">Venue, tickets, and licensing.</h2>
            </div>
            <p>
              These listings describe functional roles. They do not imply
              sponsorship or endorsement.
            </p>
          </div>
          <div className="relationship-grid">
            <article>
              <Building2 aria-hidden="true" />
              <p className="relationship-grid__role">Venue</p>
              <h3>Elkton Music Hall</h3>
              <p>Host venue for both December performances.</p>
              <a
                href="https://www.elktonmusichall.com/"
                rel="noreferrer"
                target="_blank"
              >
                Visit venue site <ExternalLink aria-hidden="true" size={16} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </article>
            <article>
              <TicketCheck aria-hidden="true" />
              <p className="relationship-grid__role">Ticket platform</p>
              <h3>Eventeny</h3>
              <p>Official external ticket source for this production.</p>
              <a
                href="https://www.eventeny.com/company/?c=548810"
                rel="noreferrer"
                target="_blank"
              >
                CTP organizer profile{' '}
                <ExternalLink aria-hidden="true" size={16} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </article>
            <article>
              <span className="relationship-grid__mark" aria-hidden="true">
                MTI
              </span>
              <p className="relationship-grid__role">Licensor</p>
              <h3>Music Theatre International</h3>
              <p>
                Little Shop of Horrors is presented through special arrangement
                with MTI.
              </p>
              <a
                href="https://www.mtishows.com/"
                rel="noreferrer"
                target="_blank"
              >
                Visit MTI <ExternalLink aria-hidden="true" size={16} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      <section
        className="section section--navy"
        aria-labelledby="partner-heading"
      >
        <div className="site-shell editorial-grid editorial-grid--light">
          <div>
            <p className="kicker kicker--acid">Start a conversation</p>
            <h2 id="partner-heading">Have a practical way to connect?</h2>
          </div>
          <div className="editorial-copy">
            <p className="lead-copy">
              CTP is interested in specific local conversations around patron
              information, downtown coordination, hospitality, artist support,
              and responsible production needs.
            </p>
            <p>
              No sponsorship package, tax treatment, audience reach, or
              promotional benefit is promised on this page.
            </p>
            <a
              className="button button--acid"
              href={`mailto:${organization.email}?subject=Partnership conversation`}
            >
              Email CTP <ArrowRight aria-hidden="true" size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
