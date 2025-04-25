/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const cdnPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';

const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'placehold.co' },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 jours
  },

  // En dev : undefined (pas de préfixe)
  // En prod : URL de ton CDN (doit commencer par 'https://')
  assetPrefix: isProd ? cdnPrefix : undefined,

  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
