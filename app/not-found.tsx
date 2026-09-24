import Link from '@/components/site-link';

export default function NotFound() {
  return (
    <main className="not-found" id="main-content">
      <div className="site-shell not-found__inner">
        <p className="eyebrow">404 / Page not found</p>
        <h1>This page missed its entrance.</h1>
        <p>
          The address may have changed, or the page may not be part of the
          current CTP website.
        </p>
        <div>
          <Link className="button button--acid" href="/">
            Return home
          </Link>
          <Link className="button button--outline" href="/productions">
            See the current production
          </Link>
        </div>
      </div>
    </main>
  );
}
