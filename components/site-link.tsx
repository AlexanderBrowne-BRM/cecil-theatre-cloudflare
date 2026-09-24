import type { AnchorHTMLAttributes } from 'react';

type SiteLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
};

/**
 * Internal navigation uses native document requests so routes remain reliable
 * behind the private Sites sign-in boundary as well as on the public domain.
 */
export default function SiteLink({ children, href, ...props }: SiteLinkProps) {
  return (
    <a {...props} href={href}>
      {children}
    </a>
  );
}
