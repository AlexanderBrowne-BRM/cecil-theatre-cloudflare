'use client';

function track(name: string, metadata: Record<string, string>) {
  window.dispatchEvent(
    new CustomEvent('ctp:track', { detail: { name, metadata } }),
  );
}

export function TicketLink({
  href,
  performance,
  className = 'button',
  onClick,
  children,
}: {
  href: string;
  performance: 'friday' | 'saturday';
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <a
      className={className}
      href={href}
      onClick={() => {
        track('ticket_link_click', { performance });
        track(`${performance}_ticket_click`, { performance });
        onClick?.();
      }}
      rel="noreferrer"
      target="_blank"
    >
      {children}{' '}
      <span className="external-cue" aria-hidden="true">
        ↗
      </span>
      <span className="sr-only"> on Eventeny (opens in a new tab)</span>
    </a>
  );
}

export function TrackedEmailLink({
  href,
  eventName,
  className,
  children,
}: {
  href: string;
  eventName: 'accessibility_contact_click';
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a className={className} href={href} onClick={() => track(eventName, {})}>
      {children}
    </a>
  );
}
