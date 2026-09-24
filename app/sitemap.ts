import type { MetadataRoute } from 'next';

const baseUrl = 'https://cecil-theatre-cloudflare.pages.dev';
const routes = [
  '',
  '/productions',
  '/productions/little-shop-of-horrors',
  '/about',
  '/people',
  '/get-involved',
  '/plan-your-visit',
  '/news-press',
  '/partners',
  '/contact',
  '/privacy',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-09-09T00:00:00-04:00'),
    changeFrequency:
      route === '' || route.startsWith('/productions') ? 'weekly' : 'monthly',
    priority:
      route === ''
        ? 1
        : route === '/productions/little-shop-of-horrors'
          ? 0.9
          : 0.7,
  }));
}
