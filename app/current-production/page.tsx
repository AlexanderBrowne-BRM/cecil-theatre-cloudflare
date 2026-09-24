import type { Metadata } from 'next';
import { AlertCircle, ArrowRight, Clock, MapPin } from 'lucide-react';
import Link from '@/components/site-link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { NewsletterForm } from '@/components/forms/newsletter-form';
import { TicketLink, TrackedEmailLink } from '@/components/ticket-link';
import {
  currentProduction,
  organization,
  visitFacts,
} from '@/lib/site-content';

export const metadata: Metadata = {
  title: 'Little Shop of Horrors',
  description:
    'See Little Shop of Horrors, Cecil Theatre Project’s inaugural production, December 4–5, 2026 at Elkton Music Hall. This venue is 21+.',
  alternates: { canonical: '/productions/little-shop-of-horrors' },
  openGraph: {
    title: 'Little Shop of Horrors | Cecil Theatre Project',
    description:
      'December 4–5, 2026 at Elkton Music Hall. Two performances. This venue is 21+.',
    url: '/productions/little-shop-of-horrors',
    images: [
      {
        url: '/og-1200.png',
        width: 1200,
        height: 630,
        alt: 'Little Shop of Horrors — December 4–5, 2026 at Elkton Music Hall — Cecil Theatre Project',
      },
    ],
  },
};

export default function CurrentProductionPage() {
  const eventSchema = currentProduction.performances.map((performance) => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: `${currentProduction.title} — ${performance.date}`,
    description: currentProduction.description,
    startDate: performance.startsAt,
    endDate: performance.endsAt,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: currentProduction.venue.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '107 North Street',
        addressLocality: 'Elkton',
        addressRegion: 'MD',
        postalCode: '21921',
        addressCountry: 'US',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: organization.name,
      url: 'https://cecil-theatre-cloudflare.pages.dev',
    },
    offers: currentProduction.ticketing.tiers.map((tier) => ({
      '@type': 'Offer',
      name: tier.name,
      price: tier.basePrice.replace('$', ''),
      priceCurrency: 'USD',
      url: performance.ticketUrl,
      availabilityStarts: '2026-09-21T00:00:00-04:00',
      validFrom: '2026-09-21T00:00:00-04:00',
    })),
  }));

  return (
    <main id="main-content">
      <section className="show-page-hero" aria-labelledby="show-title">
        <div className="site-shell show-page-hero__grid">
          <div>
            <p className="eyebrow">
              Cecil Theatre Project’s inaugural production
            </p>
            <h1 id="show-title">
              Little Shop <em>of Horrors</em>
            </h1>
            <p className="show-page-hero__lede">
              A darkly comic musical. Two performances. One hungry little
              problem.
            </p>
            <div className="show-page-facts">
              <span>
                <Clock aria-hidden="true" /> Dec. 4 at 7 PM
              </span>
              <span>
                <Clock aria-hidden="true" /> Dec. 5 at 2 PM
              </span>
              <span>
                <MapPin aria-hidden="true" /> Elkton Music Hall
              </span>
              <span>
                <AlertCircle aria-hidden="true" /> 21+ venue
              </span>
            </div>
          </div>
          <div className="show-page-poster">
            <img
              src="/little-shop-promo.webp"
              alt="Little Shop of Horrors neon storefront promotional artwork"
              width="848"
              height="1264"
            />
          </div>
        </div>
      </section>

      <section className="ticket-rail" aria-label="Ticket actions">
        <div className="site-shell ticket-rail__inner">
          <p>Tickets open September 21 at 12:00 AM ET.</p>
          <div>
            <TicketLink
              className="button button--acid"
              href={currentProduction.performances[0].ticketUrl}
              performance="friday"
            >
              Friday tickets
            </TicketLink>
            <TicketLink
              href={currentProduction.performances[1].ticketUrl}
              performance="saturday"
            >
              Saturday tickets
            </TicketLink>
          </div>
        </div>
      </section>

      <section
        className="section section--ivory"
        aria-labelledby="story-heading"
      >
        <div className="site-shell editorial-grid">
          <div>
            <p className="kicker">The story</p>
            <h2 id="story-heading">Be careful what you grow.</h2>
          </div>
          <div className="editorial-copy">
            <p className="lead-copy">{currentProduction.description}</p>
            <p>
              Book and lyrics by {currentProduction.credits.bookAndLyrics}.
              Music by {currentProduction.credits.music}. Presented through
              special arrangement with Music Theatre International.
            </p>
            <p className="fine-print">
              The complete contractual billing block will be added after final
              production-contract review.
            </p>
          </div>
        </div>
      </section>

      <section
        className="section section--paper"
        aria-labelledby="company-heading"
      >
        <div className="site-shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="kicker">Cast & creative team</p>
              <h2 id="company-heading">Meet the people making the work.</h2>
            </div>
            <p>
              The production roster and approved biographies have not yet been
              published by CTP.
            </p>
          </div>
          <div className="pending-panel">
            <span className="pending-panel__tag">Awaiting approval</span>
            <p>
              [Cast, director, music director, designers, and production
              leadership pending approval.]
            </p>
            <Link
              className="text-link"
              href="/productions/little-shop-of-horrors#ticket-alert"
            >
              Get the company announcement{' '}
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section
        id="tickets"
        className="section section--navy"
        aria-labelledby="tickets-heading"
      >
        <div className="site-shell">
          <div className="section-heading section-heading--split section-heading--light">
            <div>
              <p className="kicker kicker--acid">Tickets</p>
              <h2 id="tickets-heading">Pick a date, then a seat type.</h2>
            </div>
            <p>
              All seats are first-come within their designated section. Checkout
              remains on Eventeny.
            </p>
          </div>
          <div className="show-ticket-layout">
            <div className="show-ticket-dates">
              {currentProduction.performances.map((performance) => (
                <article key={performance.id}>
                  <p>{performance.day}</p>
                  <h3>{performance.dateShort}</h3>
                  <span>{performance.time}</span>
                  <TicketLink
                    className="text-link text-link--acid"
                    href={performance.ticketUrl}
                    performance={performance.id}
                  >
                    Choose this performance
                  </TicketLink>
                </article>
              ))}
            </div>
            <div className="show-ticket-tiers">
              {currentProduction.ticketing.tiers.map((tier, index) => (
                <article key={tier.name}>
                  <span className="show-ticket-tiers__index">0{index + 1}</span>
                  <div>
                    <h3>{tier.name}</h3>
                    <p>{tier.details}</p>
                  </div>
                  <div className="show-ticket-tiers__price">
                    <strong>{tier.basePrice}</strong>
                    <span>{tier.onlineTotal} online</span>
                  </div>
                </article>
              ))}
              <p className="fee-note">
                Current totals include listed tax and processing fees. Eventeny
                notes that some payment methods may add fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--ivory" aria-labelledby="faq-heading">
        <div className="site-shell faq-layout">
          <div>
            <p className="kicker">Plan your visit</p>
            <h2 id="faq-heading">Before the house opens.</h2>
            <p>{currentProduction.venue.address}</p>
            <Link className="text-link" href="/plan-your-visit">
              Read the full visit guide
            </Link>
          </div>
          <Accordion
            className="visit-accordion"
            defaultValue={['age']}
            multiple
          >
            <AccordionItem value="age">
              <AccordionTrigger>Why is this production 21+?</AccordionTrigger>
              <AccordionContent>
                <p>
                  The restriction comes from the current venue. It is not a
                  permanent rule for future CTP programming.
                </p>
                <p>
                  Venue staff check ID at entry. Bring a valid, non-expired ID.
                </p>
              </AccordionContent>
            </AccordionItem>
            {visitFacts.slice(1).map((fact, index) => (
              <AccordionItem value={`fact-${index}`} key={fact.title}>
                <AccordionTrigger>{fact.title}</AccordionTrigger>
                <AccordionContent>
                  <p>{fact.summary}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
            <AccordionItem value="doors">
              <AccordionTrigger>
                Doors, late seating & running time
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  [Exact door time, late-seating policy, and production running
                  time pending approval.]
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section
        className="accessibility-callout"
        aria-labelledby="access-heading"
      >
        <div className="site-shell accessibility-callout__grid">
          <div>
            <p className="kicker kicker--acid">Access</p>
            <h2 id="access-heading">Have a question about your visit?</h2>
          </div>
          <div>
            <p>
              The North Street entrance provides step-free access. For
              venue-specific access needs, contact Elkton Music Hall before the
              event. For production questions, contact CTP.
            </p>
            <div className="inline-links">
              <TrackedEmailLink
                eventName="accessibility_contact_click"
                href="mailto:info@elktonmusichall.com"
              >
                Venue access email
              </TrackedEmailLink>
              <TrackedEmailLink
                eventName="accessibility_contact_click"
                href={`mailto:${organization.email}?subject=Accessibility question`}
              >
                Email CTP
              </TrackedEmailLink>
            </div>
            <p className="fine-print">
              [Production-specific accessibility owner and response time pending
              approval.]
            </p>
          </div>
        </div>
      </section>

      <section
        className="section section--paper"
        aria-labelledby="policies-heading"
      >
        <div className="site-shell editorial-grid">
          <div>
            <p className="kicker">Ticket policies</p>
            <h2 id="policies-heading">Know before you order.</h2>
          </div>
          <div className="pending-list">
            <p>[Refund and exchange policy pending approval.]</p>
            <p>[Ticket transfer process pending approval.]</p>
            <p>[Cancellation and postponement terms pending approval.]</p>
            <p className="fine-print">
              Eventeny is the official ticket source for this production, even
              though the venue may use other ticket systems for its regular
              calendar.
            </p>
          </div>
        </div>
      </section>

      <section
        className="section signup-section"
        id="ticket-alert"
        aria-labelledby="production-signup-heading"
      >
        <div className="site-shell signup-layout">
          <div>
            <p className="kicker kicker--acid">What comes next</p>
            <h2 id="production-signup-heading">
              Stay connected beyond opening night.
            </h2>
            <p>
              Choose production updates, future shows, artist calls, or
              volunteer opportunities.
            </p>
          </div>
          <NewsletterForm compact />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
    </main>
  );
}
