import { organization } from '@/lib/site-content';
import Link from '@/components/site-link';

const exploreLinks = [
  ['/productions', 'Productions'],
  ['/productions/little-shop-of-horrors', 'Little Shop of Horrors'],
  ['/plan-your-visit', 'Plan your visit'],
  ['/people', 'People'],
  ['/get-involved', 'Get involved'],
];

const organizationLinks = [
  ['/about', 'About'],
  ['/news-press', 'News & press'],
  ['/partners', 'Partners'],
  ['/contact', 'Contact'],
  ['/privacy', 'Privacy'],
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div className="footer-lead">
          <Link
            className="wordmark wordmark--footer"
            href="/"
            aria-label="Cecil Theatre Project home"
          >
            <span className="wordmark__monogram" aria-hidden="true">
              CTP
            </span>
            <span className="wordmark__name">Cecil Theatre Project</span>
          </Link>
          <p>{organization.description}</p>
        </div>
        <nav aria-label="Explore">
          <p className="footer-heading">Explore</p>
          {exploreLinks.map(([href, label]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <nav aria-label="Organization">
          <p className="footer-heading">Organization</p>
          {organizationLinks.map(([href, label]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div>
          <p className="footer-heading">Connect</p>
          <a href={`mailto:${organization.email}`}>{organization.email}</a>
          <a href={organization.facebookUrl} rel="noreferrer" target="_blank">
            Facebook <span className="external-cue">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
      <div className="site-shell footer-meta">
        <p>© {new Date().getFullYear()} Cecil Theatre Project</p>
        <p>Building theatre in Cecil County, Maryland.</p>
      </div>
    </footer>
  );
}
