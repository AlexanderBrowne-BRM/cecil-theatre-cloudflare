import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap:
      'https://cecil-theatre-cloudflare.pages.dev/sitemap.xml',
  };
}
