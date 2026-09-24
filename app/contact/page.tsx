import type { Metadata } from 'next';
import Link from '@/components/site-link';
import {
  Accessibility,
  ArrowUpRight,
  Newspaper,
  Ticket,
  Users,
} from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { TrackedEmailLink } from '@/components/ticket-link';
import { organization } from '@/lib/site-content';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Cecil Theatre Project about tickets, accessibility, participation, media, partnerships, or general questions.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Contact"
        title="Get your question to the right place."
        intro="Choose the closest route below. CTP currently publishes one organization-owned email address and one verified social account."
      />

      <section
        className="section section--ivory"
        aria-labelledby="routes-heading"
      >
        <div className="site-shell">
          <h2 className="sr-only" id="routes-heading">
            Contact routes
          </h2>
          <div className="contact-route-grid">
            <article>
              <Ticket aria-hidden="true" />
              <p className="kicker">Tickets & patron questions</p>
              <h3>Ask about the show</h3>
              <p>
                Use for ticket-listing questions or production information not
                covered in the visit guide.
              </p>
              <a
                href={`mailto:${organization.email}?subject=Ticket or patron question`}
              >
                Email CTP <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </article>
            <article>
              <Accessibility aria-hidden="true" />
              <p className="kicker">Accessibility</p>
              <h3>Plan an accessible visit</h3>
              <p>
                Use the venue route for building access and CTP’s route for
                production-specific needs.
              </p>
              <div>
                <TrackedEmailLink
                  eventName="accessibility_contact_click"
                  href="mailto:info@elktonmusichall.com"
                >
                  Venue access
                </TrackedEmailLink>
                <TrackedEmailLink
                  eventName="accessibility_contact_click"
                  href={`mailto:${organization.email}?subject=Accessibility question`}
                >
                  Production access
                </TrackedEmailLink>
              </div>
            </article>
            <article>
              <Users aria-hidden="true" />
              <p className="kicker">Artists & volunteers</p>
              <h3>Raise your hand</h3>
              <p>
                The interest form collects role, experience, availability, and
                optional accommodation information.
              </p>
              <Link href="/get-involved">
                Open the interest form{' '}
                <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </article>
            <article>
              <Newspaper aria-hidden="true" />
              <p className="kicker">Media & partnerships</p>
              <h3>Start a factual conversation</h3>
              <p>
                Use for interviews, approved assets, factual corrections, or a
                specific local collaboration.
              </p>
              <a
                href={`mailto:${organization.email}?subject=Media or partnership inquiry`}
              >
                Email CTP <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section
        className="contact-primary"
        aria-labelledby="primary-contact-heading"
      >
        <div className="site-shell contact-primary__inner">
          <div>
            <p className="kicker kicker--acid">Primary contact</p>
            <h2 id="primary-contact-heading">{organization.email}</h2>
          </div>
          <a
            className="button button--acid"
            href={`mailto:${organization.email}`}
          >
            Open email
          </a>
        </div>
      </section>

      <section
        className="section section--paper"
        aria-labelledby="social-heading"
      >
        <div className="site-shell editorial-grid">
          <div>
            <p className="kicker">Verified social account</p>
            <h2 id="social-heading">Follow CTP on Facebook.</h2>
          </div>
          <div className="editorial-copy">
            <p>
              No public phone number, office address, or additional
              organization-owned social account is listed at this time.
            </p>
            <a
              className="text-link"
              href={organization.facebookUrl}
              rel="noreferrer"
              target="_blank"
            >
              Visit the CTP Facebook page{' '}
              <ArrowUpRight aria-hidden="true" size={17} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
