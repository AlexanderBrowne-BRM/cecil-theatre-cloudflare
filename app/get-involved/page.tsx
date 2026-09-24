import type { Metadata } from 'next';
import {
  Blocks,
  Hammer,
  Lightbulb,
  Megaphone,
  Music,
  Users,
} from 'lucide-react';
import { InvolvementForm } from '@/components/forms/involvement-form';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Get Involved',
  description:
    'Express interest in performing, directing, designing, building, teaching, or volunteering with Cecil Theatre Project.',
  alternates: { canonical: '/get-involved' },
};

const ways = [
  {
    title: 'Perform',
    icon: Music,
    copy: 'Actors, singers, movers, and storytellers interested in future calls.',
  },
  {
    title: 'Direct',
    icon: Megaphone,
    copy: 'Directors and music leaders with a point of view and collaborative process.',
  },
  {
    title: 'Design',
    icon: Lightbulb,
    copy: 'Scenic, costume, lighting, sound, props, and visual storytellers.',
  },
  {
    title: 'Build / Tech',
    icon: Hammer,
    copy: 'Builders, operators, stage crew, production staff, and practical problem-solvers.',
  },
  {
    title: 'Teach',
    icon: Blocks,
    copy: 'Educators and teaching artists interested in future, verified opportunities.',
  },
  {
    title: 'Volunteer',
    icon: Users,
    copy: 'People ready to help patrons, production teams, and local outreach.',
  },
];

export default function GetInvolvedPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Get involved"
        title="Find your place in the production."
        intro="Whether you work under a spotlight, behind a console, with a paintbrush, or at the front door, CTP wants to understand the theatre-makers and helpers in this region."
      />

      <section
        className="section section--ivory"
        aria-labelledby="ways-heading"
      >
        <div className="site-shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="kicker">Ways to take part</p>
              <h2 id="ways-heading">What do you want to make?</h2>
            </div>
            <p>
              This is an interest form, not an audition notice, job offer, or
              guarantee of placement. CTP will contact people when a relevant,
              confirmed opportunity is ready.
            </p>
          </div>
          <div className="ways-grid">
            {ways.map(({ title, icon: Icon, copy }, index) => (
              <article key={title}>
                <div>
                  <Icon aria-hidden="true" />
                  <span>0{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section involvement-section"
        aria-labelledby="interest-form-heading"
      >
        <div className="site-shell involvement-layout">
          <div className="involvement-layout__intro">
            <p className="kicker kicker--acid">Raise your hand</p>
            <h2 id="interest-form-heading">Tell us where you fit.</h2>
            <p>
              Share only what is useful for a first conversation. Experience is
              welcome, but it is not required for every role.
            </p>
            <p className="fine-print fine-print--light">
              [Named internal routing owner pending approval. Submissions are
              stored in the CTP website’s private response database.]
            </p>
          </div>
          <InvolvementForm />
        </div>
      </section>
    </main>
  );
}
