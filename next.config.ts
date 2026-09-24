import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  async redirects() {
    return [
      {
        source: '/season',
        destination: '/productions',
        permanent: true,
      },
      {
        source: '/current-production',
        destination: '/productions/little-shop-of-horrors',
        permanent: true,
      },
      { source: '/team', destination: '/people', permanent: true },
      { source: '/volunteer', destination: '/get-involved', permanent: true },
      { source: '/donate', destination: '/about', permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
