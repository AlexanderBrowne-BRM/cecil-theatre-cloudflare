'use client';

import { Menu } from 'lucide-react';
import './site-header.css';
import Link from '@/components/site-link';
import { TicketLink } from '@/components/ticket-link';
import { useState } from 'react';
import { currentProduction } from '@/lib/site-content';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const primaryLinks = [
  { href: '/productions', label: 'Productions' },
  { href: '/about', label: 'About' },
  { href: '/people', label: 'People' },
  { href: '/get-involved', label: 'Get involved' },
  { href: '/plan-your-visit', label: 'Visit' },
];

const mobileLinks = [
  ...primaryLinks,
  { href: '/news-press', label: 'News & press' },
  { href: '/partners', label: 'Partners' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="announcement">
        <span>Tickets open September 21.</span>
        <Link href="/productions/little-shop-of-horrors#ticket-alert">
          Get the alert
        </Link>
        <span aria-hidden="true">·</span>
        <span>December 4–5, 2026</span>
        <span aria-hidden="true">·</span>
        <span>21+ venue</span>
      </div>
      <header className="site-header">
        <div className="site-shell site-header__inner">
          <Link
            className="wordmark wordmark--header"
            href="/"
            aria-label="Cecil Theatre Project home"
          >
            <span className="wordmark__monogram" aria-hidden="true">
              Cecil Theatre Project
            </span>
          </Link>
          <nav
            className="primary-nav primary-nav--desktop"
            aria-label="Primary navigation"
          >
            {primaryLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              Contact
            </Link>
            <TicketLink
              className="button"
              href={currentProduction.performances[0].ticketUrl}
              performance="friday"
            >
              Buy tickets
            </TicketLink>
          </nav>
          <div className="mobile-nav">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                render={
                  <button
                    className="menu-button"
                    type="button"
                    aria-label="Open navigation"
                  />
                }
              >
                <Menu aria-hidden="true" />
              </SheetTrigger>
              <SheetContent className="mobile-sheet" side="right">
                <SheetHeader className="mobile-sheet__header">
                  <SheetTitle className="mobile-sheet__title">
                    Cecil Theatre Project
                  </SheetTitle>
                  <SheetDescription className="mobile-sheet__description">
                    See the show, plan your visit, or find your place in the
                    work.
                  </SheetDescription>
                </SheetHeader>
                <nav
                  className="mobile-sheet__nav"
                  aria-label="Mobile navigation"
                >
                  {mobileLinks.map((link, index) => (
                    <Link
                      href={link.href}
                      aria-label={link.label}
                      key={link.href}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span aria-hidden="true">0{index + 1}</span>
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mobile-sheet__footer">
                  <TicketLink
                    className="button button--acid"
                    href={currentProduction.performances[0].ticketUrl}
                    performance="friday"
                    onClick={() => setMobileOpen(false)}
                  >
                    Buy tickets
                  </TicketLink>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
