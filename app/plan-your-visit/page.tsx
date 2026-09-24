import type { Metadata } from 'next';
import {
  ArrowUpRight,
  CreditCard,
  IdCard,
  MapPinned,
  UtensilsCrossed,
} from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { TicketLink, TrackedEmailLink } from '@/components/ticket-link';
import {
  currentProduction,
  organization,
  visitFacts,
} from '@/lib/site-content';

export const metadata: Metadata = {
  title: 'Plan Your Visit',
  description:
    'Plan your visit to Little Shop of Horrors at Elkton Music Hall, including the 21+ ID rule, downtown parking, accessible entry, drinks, food, and Friday arrival notes.',
  alternates: { canonical: '/plan-your-visit' },
};

export default function PlanYourVisitPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Plan your visit"
        title="Know where you’re going; know what to bring."
        intro="Little Shop of Horrors plays at Elkton Music Hall in downtown Elkton. Start here for the current venue rules and arrival details."
      />

      <section className="venue-banner" aria-labelledby="venue-heading">
        <div className="site-shell venue-banner__grid">
          <div>
            <p className="kicker kicker--acid">The venue</p>
            <h2 id="venue-heading">Elkton Music Hall</h2>
            <p>{currentProduction.venue.address}</p>
          </div>
          <div className="venue-banner__actions">
            <a
              className="button button--outline"
              href="https://www.google.com/maps/search/?api=1&query=107+North+Street+Elkton+MD+21921"
              rel="noreferrer"
              target="_blank"
            >
              Open map <ArrowUpRight aria-hidden="true" size={17} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              className="text-link text-link--acid"
              href="https://www.elktonmusichall.com/parking-and-directions/"
              rel="noreferrer"
              target="_blank"
            >
              Venue parking guide <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      <section
        className="section section--ivory"
        aria-labelledby="essentials-heading"
      >
        <div className="site-shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="kicker">The essentials</p>
              <h2 id="essentials-heading">Five things to know.</h2>
            </div>
            <p>
              These details come from current CTP ticket listings and the
              venue’s published guidance.
            </p>
          </div>
          <div className="visit-card-grid">
            {visitFacts.map((fact, index) => (
              <article key={fact.title}>
                <span>0{index + 1}</span>
                <h3>{fact.title}</h3>
                <p>{fact.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section section--paper"
        aria-labelledby="parking-heading"
      >
        <div className="site-shell editorial-grid">
          <div>
            <p className="kicker">Parking & arrival</p>
            <h2 id="parking-heading">
              Give Friday a little more breathing room.
            </h2>
          </div>
          <div className="editorial-copy">
            <p className="lead-copy">
              A downtown Christmas tree-lighting event overlaps Friday’s
              performance window. Exact street closures have not been published.
            </p>
            <p>
              Most public parking downtown is free. Options include the lot
              behind the venue, street parking, and several municipal lots
              within one or two blocks. Metered spaces are located toward the
              courthouse end of East Main Street.
            </p>
            <p>
              Watch for private, business-designated, and accessible-space
              signs. Plan extra time to park and walk on Friday.
            </p>
            <a
              className="text-link"
              href="https://www.elktonmusichall.com/wp-content/uploads/2023/04/Map_Parking_EMH_big.png"
              rel="noreferrer"
              target="_blank"
            >
              View the venue’s public-parking map{' '}
              <ArrowUpRight aria-hidden="true" size={17} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      <section
        className="section section--navy"
        aria-labelledby="inside-heading"
      >
        <div className="site-shell">
          <div className="section-heading section-heading--split section-heading--light">
            <div>
              <p className="kicker kicker--acid">Inside the venue</p>
              <h2 id="inside-heading">ID, access, drinks, and seats.</h2>
            </div>
            <p>
              The 21+ rule belongs to this venue and production, not to every
              future CTP event.
            </p>
          </div>
          <div className="inside-grid">
            <article>
              <IdCard aria-hidden="true" />
              <h3>Bring valid ID</h3>
              <p>
                Venue staff check ID at entry, and expired ID is not accepted.
              </p>
            </article>
            <article>
              <MapPinned aria-hidden="true" />
              <h3>Use North Street for access</h3>
              <p>
                The accessible entrance is on North Street. The rear entrance
                has stairs; public venue areas are on the first floor.
              </p>
            </article>
            <article>
              <CreditCard aria-hidden="true" />
              <h3>Paid bar</h3>
              <p>
                Alcoholic and nonalcoholic drinks are available. The venue
                accepts cash and major credit cards.
              </p>
            </article>
            <article>
              <UtensilsCrossed aria-hidden="true" />
              <h3>Plan food separately</h3>
              <p>The venue does not normally serve food.</p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="access-details"
        aria-labelledby="access-details-heading"
      >
        <div className="site-shell access-details__grid">
          <div>
            <p className="kicker">Accessibility</p>
            <h2 id="access-details-heading">
              Tell the right team what you need.
            </h2>
          </div>
          <div>
            <p>
              Elkton Music Hall asks guests with specific access needs to
              contact the venue before the event. CTP can answer
              production-specific questions, but its named accessibility owner
              and response time are still being confirmed.
            </p>
            <div className="contact-cards contact-cards--two">
              <TrackedEmailLink
                eventName="accessibility_contact_click"
                href="mailto:info@elktonmusichall.com"
              >
                <span>Venue access</span>
                <strong>info@elktonmusichall.com</strong>
              </TrackedEmailLink>
              <TrackedEmailLink
                eventName="accessibility_contact_click"
                href={`mailto:${organization.email}?subject=Accessibility question`}
              >
                <span>Production questions</span>
                <strong>{organization.email}</strong>
              </TrackedEmailLink>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section section--ivory"
        aria-labelledby="pending-visit-heading"
      >
        <div className="site-shell editorial-grid">
          <div>
            <p className="kicker">Still to be confirmed</p>
            <h2 id="pending-visit-heading">
              Details CTP will publish before the show.
            </h2>
          </div>
          <ul className="approval-list">
            <li>
              [Exact door time and expected running time pending approval.]
            </li>
            <li>[Late-seating policy pending approval.]</li>
            <li>
              [Final seating layout and accessible-seat process pending
              approval.]
            </li>
            <li>
              [Refund, exchange, transfer, cancellation, and postponement terms
              pending approval.]
            </li>
          </ul>
        </div>
      </section>

      <section
        className="visit-ticket-cta"
        aria-labelledby="visit-ticket-heading"
      >
        <div className="site-shell visit-ticket-cta__inner">
          <div>
            <p className="kicker kicker--acid">Ready to choose?</p>
            <h2 id="visit-ticket-heading">Friday night or Saturday matinee.</h2>
          </div>
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
    </main>
  );
}
