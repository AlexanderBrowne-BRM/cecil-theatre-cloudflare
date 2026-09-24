import type { Metadata } from 'next';
import { AnalyticsConsent } from '@/components/analytics-consent';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { WebMcpTools } from '@/components/webmcp-tools';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://cecil-theatre-cloudflare.pages.dev',
  ),
  title: {
    default: 'Cecil Theatre Project | Theatre in Cecil County',
    template: '%s | Cecil Theatre Project',
  },
  description:
    'Cecil Theatre Project is a new, locally rooted theatre organization creating opportunities to see, make, and participate in theatre in Cecil County.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Cecil Theatre Project',
    title: 'Cecil Theatre Project | Theatre in Cecil County',
    description:
      'A new, locally rooted theatre organization creating opportunities to see, make, and participate in theatre in Cecil County.',
    url: '/',
    images: [
      {
        url: '/og-1200.png',
        width: 1200,
        height: 630,
        alt: 'Little Shop of Horrors — December 4–5, 2026 at Elkton Music Hall — Cecil Theatre Project',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cecil Theatre Project | Theatre in Cecil County',
    description:
      'A new, locally rooted theatre organization creating opportunities to see, make, and participate in theatre in Cecil County.',
    images: ['/og-1200.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Cecil Theatre Project',
    url: 'https://cecil-theatre-cloudflare.pages.dev',
    email: 'info@ceciltheatreproject.org',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Cecil County, Maryland',
    },
    sameAs: [
      'https://www.facebook.com/p/Cecil-Theatre-Project-61592213177020/',
    ],
  };

  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <AnalyticsConsent />
        <WebMcpTools />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
