import type { Metadata } from 'next';
import Link from '@/components/site-link';
import { ArrowRight, Eye, Hammer, HeartHandshake } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { organization } from '@/lib/site-content';


export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn what Cecil Theatre Project is building: locally rooted opportunities to see, make, and participate in theatre in Cecil County, Maryland.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="About Cecil Theatre Project"
        title="A theatre company at the beginning: on purpose."
        intro="CTP is building opportunities for people to see and make theatre in Cecil County, starting with one production and a clear invitation to take part."
      />

      <section
        className="section section--ivory"
        aria-labelledby="position-heading"
      >
        <div className="site-shell editorial-grid editorial-grid--wide">
          <div>
            <p className="kicker">What we are</p>
            <h2 id="position-heading">
              Rooted here. Open to what theatre can become.
            </h2>
          </div>
          <div className="editorial-copy">
            <p className="lead-copy">{organization.description}</p>
            <p>
              That means making room for audiences and theatre-makers at the
              same time: a clear night out for patrons, a serious creative
              process for artists, and practical ways for new collaborators to
              raise their hands.
            </p>
            <p>
              CTP is new. It has not built a long production history yet, and
              this website does not pretend otherwise. The inaugural production
              is the first public step in learning what the community wants,
              what the organization can sustain, and what deserves to come next.
            </p>
          </div>
        </div>
      </section>

      <section
        className="section section--paper"
        aria-labelledby="principles-heading"
      >
        <div className="site-shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="kicker">How CTP is approaching the work</p>
              <h2 id="principles-heading">Ambition with the doors open.</h2>
            </div>
            <p>
              Three working principles shape the public experience now. Future
              claims will be earned through delivered work.
            </p>
          </div>
          <div className="principle-grid">
            <article>
              <Eye aria-hidden="true" />
              <p className="principle-grid__number">01</p>
              <h3>Clear for audiences</h3>
              <p>
                Dates, prices, venue rules, access information, and the next
                step should be easy to find.
              </p>
            </article>
            <article>
              <Hammer aria-hidden="true" />
              <p className="principle-grid__number">02</p>
              <h3>Respect for the craft</h3>
              <p>
                Performance and backstage work both deserve care, preparation,
                and visible credit.
              </p>
            </article>
            <article>
              <HeartHandshake aria-hidden="true" />
              <p className="principle-grid__number">03</p>
              <h3>Built with people</h3>
              <p>
                CTP is inviting performers, makers, educators, technicians, and
                volunteers into the conversation.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="section section--navy"
        aria-labelledby="first-step-heading"
      >
        <div className="site-shell take-part-grid take-part-grid--light">
          <div
            className="take-part-mark take-part-mark--acid"
            aria-hidden="true"
          >
            <span>01</span>
          </div>
          <div>
            <p className="kicker kicker--acid">The first public step</p>
            <h2 id="first-step-heading">Little Shop of Horrors</h2>
            <p>
              December 4–5, 2026 at Elkton Music Hall. This production is 21+
              because of the venue; that restriction does not define future CTP
              programming.
            </p>
            <Link
              className="button button--acid"
              href="/productions/little-shop-of-horrors"
            >
              See the production <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
