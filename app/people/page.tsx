import type { Metadata } from 'next';
import Link from '@/components/site-link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { board } from '@/lib/site-content';

export const metadata: Metadata = {
  title: 'People',
  description:
    'Meet the board building Cecil Theatre Project and find current information about the Little Shop of Horrors company.',
  alternates: { canonical: '/people' },
};

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);
}

export default function PeoplePage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="People"
        title="Meet the people building the work."
        intro="CTP is governed by a five-person board. Production credits will be added when the inaugural company roster and asset permissions are approved."
      />

      <section
        className="section section--ivory"
        aria-labelledby="board-heading"
      >
        <div className="site-shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="kicker">Organization</p>
              <h2 id="board-heading">Board of directors</h2>
            </div>
            <p>
              Roles below reflect the organization’s currently published team
              page. Biographies are not repeated until CTP approves current
              copy.
            </p>
          </div>
          <div className="people-grid">
            {board.map((person, index) => (
              <article className="person-card" key={person.name}>
                <div
                  className={`person-card__portrait${person.image ? ' person-card__portrait--image' : ''}`}
                >
                  {person.image ? (
                    <img
                      src={person.image}
                      alt={`Portrait of ${person.name}`}
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: person.imagePosition }}
                    />
                  ) : (
                    <span aria-hidden="true">{initials(person.name)}</span>
                  )}
                  <small aria-hidden="true">0{index + 1}</small>
                </div>
                <div>
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section section--paper"
        aria-labelledby="production-people-heading"
      >
        <div className="site-shell editorial-grid">
          <div>
            <p className="kicker">Current production</p>
            <h2 id="production-people-heading">Cast & production company</h2>
          </div>
          <div className="pending-panel">
            <span className="pending-panel__tag">Awaiting approval</span>
            <p>
              [Cast, creative, design, technical, and production-management
              credits pending approval.]
            </p>
            <p>
              No names or biographies will be published here until CTP confirms
              the roster and permissions.
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

      <section className="people-cta" aria-labelledby="people-cta-heading">
        <div className="site-shell people-cta__inner">
          <p className="kicker kicker--acid">
            Want to be part of what comes next?
          </p>
          <h2 id="people-cta-heading">Tell CTP how you make theatre.</h2>
          <Link className="button button--acid" href="/get-involved">
            Get involved
          </Link>
        </div>
      </section>
    </main>
  );
}
