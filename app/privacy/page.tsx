import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { organization } from '@/lib/site-content';

export const metadata: Metadata = {
  title: 'Privacy',
  description:
    'How the Cecil Theatre Project website handles email signups, participation forms, optional analytics, and external ticket links.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Privacy"
        title="A plain-language website privacy notice."
        intro="This notice describes the data flows built into this version of the Cecil Theatre Project website. It does not describe Eventeny or other external services."
      />

      <article className="legal-page site-shell">
        <p className="legal-page__updated">Last updated: September 9, 2026</p>

        <section aria-labelledby="collect-heading">
          <h2 id="collect-heading">Information you choose to provide</h2>
          <p>
            The ticket-alert and email form collects your first name, email
            address, selected interests, consent, and a basic source label when
            the URL includes a campaign source.
          </p>
          <p>
            The Get Involved form collects your name, email, optional location,
            selected participation interests, and any optional experience,
            availability, or accommodation information you enter.
          </p>
        </section>

        <section aria-labelledby="use-heading">
          <h2 id="use-heading">How that information is used</h2>
          <p>
            Form responses are stored in the website’s private database so CTP
            can send the updates you requested or follow up about relevant
            participation opportunities.
          </p>
          <p>
            Do not include sensitive medical, financial, identity, or
            background-check information in these forms.
          </p>
          <p>
            [The named internal response owner and final retention schedule are
            pending organizational approval.]
          </p>
        </section>

        <section aria-labelledby="analytics-heading">
          <h2 id="analytics-heading">Optional first-party analytics</h2>
          <p>
            The site asks before recording optional analytics. If you allow
            them, it records limited events such as a production-page view,
            ticket-link click, form completion, accessibility-contact click, and
            campaign source. The event records include the page path and limited
            action metadata; the analytics endpoint is not designed to collect
            form-field content.
          </p>
          <p>
            Your choice is stored in your browser under{' '}
            <code>ctp_analytics_preference</code>. Choosing “Essential only”
            keeps optional analytics off. Clearing site data resets that choice.
          </p>
        </section>

        <section aria-labelledby="external-heading">
          <h2 id="external-heading">External services</h2>
          <p>
            Ticket checkout takes place on Eventeny. Venue, map, licensing, and
            Facebook links also lead to third-party sites. Their privacy
            practices and terms apply once you leave this website.
          </p>
        </section>

        <section aria-labelledby="security-heading">
          <h2 id="security-heading">Security and spam protection</h2>
          <p>
            Forms use server-side validation, length limits, and a hidden spam
            trap. The site does not expose private form credentials in browser
            code.
          </p>
          <p>
            No internet service can guarantee absolute security. CTP should
            grant database access only to approved administrators and review
            access regularly.
          </p>
        </section>

        <section aria-labelledby="choices-heading">
          <h2 id="choices-heading">Your choices and questions</h2>
          <p>
            You can unsubscribe from marketing email using the method provided
            in a message. To ask about access, correction, or deletion of
            information submitted through this website, email{' '}
            <a href={`mailto:${organization.email}?subject=Privacy request`}>
              {organization.email}
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
