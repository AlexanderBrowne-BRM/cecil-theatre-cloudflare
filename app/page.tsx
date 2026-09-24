import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Hammer,
  HeartHandshake,
  MapPin,
  Ticket,
} from 'lucide-react';
import Link from '@/components/site-link';
import { NewsletterForm } from '@/components/forms/newsletter-form';
import { board, currentProduction, organization } from '@/lib/site-content';

const entrances = [
  {
    number: '01',
    title: 'See theatre',
    copy: 'Find the next production, choose a performance, and arrive knowing what to expect.',
    href: '/productions',
    link: 'Explore productions',
    icon: Ticket,
  },
  {
    number: '02',
    title: 'Make theatre',
    copy: 'Connect as a performer, director, designer, technician, educator, or builder.',
    href: '/get-involved',
    link: 'Share your interests',
    icon: Hammer,
  },
  {
    number: '03',
    title: 'Build community',
    copy: 'Volunteer, welcome audiences, and help a new local theatre organization take root.',
    href: '/about',
    link: 'Meet the organization',
    icon: HeartHandshake,
  },
] as const;

export default function Home() {
  return (
    <main id="main-content">
      <section className="organization-hero" aria-labelledby="home-title">
        <div className="organization-hero__glow" aria-hidden="true" />
        <div className="site-shell organization-hero__grid">
          <div className="organization-hero__copy motion-rise">
            <p className="eyebrow">Community theatre · Cecil County</p>
            <h1 id="home-title">
              A new theatre <em>community.</em>
            </h1>
            <p className="organization-hero__lede">
              See the work. Make the work. Help shape what comes next. Cecil
              Theatre Project is building a home for live performance in Cecil
              County.
            </p>
            <div className="organization-hero__actions">
              <Link className="button button--gold" href="/productions">
                Explore productions <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link className="button button--ghost" href="/get-involved">
                Find your place
              </Link>
            </div>
          </div>

          <div className="organization-hero__portrait motion-scale">
            <div className="organization-hero__portrait-ring" aria-hidden="true" />
            <figure className="organization-hero__portrait-frame">
              <img
                src="/team/zachery-lockwood.jpg"
                alt="Zachery Tyler Lockwood, founder and board president of Cecil Theatre Project"
              />
              <figcaption>
                <span>Founder / Board President</span>
                <strong>Zachery Tyler Lockwood</strong>
              </figcaption>
            </figure>
            <Link
              className="organization-hero__show-card"
              href="/productions/little-shop-of-horrors"
              aria-label="Little Shop of Horrors, December 4 through 5, 2026"
            >
              <span>December 4–5, 2026</span>
              <strong>Little Shop of Horrors</strong>
              <ArrowRight aria-hidden="true" size={19} />
            </Link>
          </div>
        </div>
        <a className="organization-hero__scroll" href="#welcome">
          Discover CTP <ArrowDown aria-hidden="true" size={16} />
        </a>
      </section>

      <section
        className="trust-strip"
        id="welcome"
        aria-label="About Cecil Theatre Project"
      >
        <div className="site-shell trust-strip__inner">
          <p className="trust-strip__label">Our opening act</p>
          <p className="trust-strip__copy">{organization.description}</p>
        </div>
      </section>

      <section
        className="section home-entrances"
        aria-labelledby="ways-in-title"
      >
        <div className="site-shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="kicker">One company. Many ways in.</p>
              <h2 id="ways-in-title">Choose your entrance.</h2>
            </div>
            <p>
              CTP is for the people in the seats and the people making the
              moment happen. Start where you are.
            </p>
          </div>
          <div className="entrance-grid">
            {entrances.map(
              ({ number, title, copy, href, link, icon: Icon }) => (
                <article className="entrance-card" key={title}>
                  <div className="entrance-card__top">
                    <span>{number}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <Link className="text-link" href={href}>
                    {link} <ArrowRight aria-hidden="true" size={17} />
                  </Link>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        className="home-production"
        aria-labelledby="featured-show-title"
      >
        <div className="home-production__image" aria-hidden="true" />
        <div className="site-shell home-production__grid">
          <div className="home-production__panel">
            <p className="eyebrow">Now taking the stage</p>
            <p className="home-production__edition">Production 01</p>
            <h2
              id="featured-show-title"
              className="home-production__title"
              aria-label={currentProduction.title}
            >
              <span aria-hidden="true">Little Shop</span>
              <span aria-hidden="true">of Horrors</span>
            </h2>
            <p>
              A darkly comic musical and the first public production from Cecil
              Theatre Project.
            </p>
            <div className="home-production__facts">
              <span>
                <CalendarDays aria-hidden="true" /> December 4–5, 2026
              </span>
              <span>
                <MapPin aria-hidden="true" /> {currentProduction.venue.name}
              </span>
              <span>21+ venue · Valid ID required</span>
            </div>
            <div className="home-production__actions">
              <Link
                className="button button--gold"
                href="/productions/little-shop-of-horrors"
              >
                Explore the show <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link
                className="button button--ghost"
                href="/productions/little-shop-of-horrors#ticket-alert"
              >
                Get ticket updates
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-story" aria-labelledby="local-title">
        <div className="site-shell home-story__grid">
          <div className="home-story__statement">
            <span aria-hidden="true">CTP</span>
            <p className="kicker">Rooted in Cecil County</p>
            <h2 id="local-title">A local stage starts with local people.</h2>
          </div>
          <div className="editorial-copy">
            <p className="lead-copy">
              Cecil Theatre Project is new, and that beginning is an invitation.
            </p>
            <p>
              The organization is creating practical ways to watch, perform,
              design, build, teach, volunteer, and help define what sustainable
              local theatre can become.
            </p>
            <Link className="text-link" href="/about">
              Read about CTP <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-participate" aria-labelledby="participate-title">
        <div className="site-shell home-participate__grid">
          <div className="home-participate__visual motion-rise">
            <img
              src="/empty-stage-circle.jpg"
              alt="An empty, low-lit stage framed by burgundy curtains"
            />
          </div>
          <div>
            <p className="kicker kicker--acid">
              Onstage. Backstage. Front of house.
            </p>
            <h2 id="participate-title">
              There is more than one way to make theatre.
            </h2>
            <p>
              Tell CTP what you do, what you want to learn, or where you would
              like to help. Experience is welcome, not required for every role.
            </p>
            <Link className="button button--gold" href="/get-involved">
              Get involved <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="section home-people"
        aria-labelledby="home-people-title"
      >
        <div className="site-shell home-people__grid">
          <div>
            <p className="kicker">The people building CTP</p>
            <h2 id="home-people-title">
              A working board at the beginning of the story.
            </h2>
            <Link className="text-link" href="/people">
              Meet the board <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
          <div className="home-people__list" aria-label="Board members">
            {board.slice(0, 3).map((person, index) => (
              <div key={person.name}>
                <span>0{index + 1}</span>
                <strong>{person.name}</strong>
                <small>{person.role}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section signup-section"
        id="updates"
        aria-labelledby="home-updates-title"
      >
        <div className="site-shell signup-layout">
          <div>
            <p className="kicker kicker--acid">Stay connected</p>
            <h2 id="home-updates-title">Know what is taking shape.</h2>
            <p>
              Choose the production, audition, artist-call, or volunteer updates
              you want to receive.
            </p>
          </div>
          <NewsletterForm buttonLabel="Join the CTP list" />
        </div>
      </section>
    </main>
  );
}
