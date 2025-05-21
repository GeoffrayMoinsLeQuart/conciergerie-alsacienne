/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
// En prod, NEXT_PUBLIC_ASSET_PREFIX doit être non vide et commencer par '/' ou 'https://'
const cdnPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';

const nextConfig = {
  reactStrictMode: true,

  // Activation des Server Actions expérimentales (même origine)
  experimental: {
    serverActions: {},
  },

  // Génère les source maps en production pour faciliter le debug
  productionBrowserSourceMaps: true,

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'placehold.co' },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 jours
  },

  // Pas de préfixe en dev. En prod, utilise ton CDN ou un chemin absolu.
  assetPrefix: isProd ? cdnPrefix : undefined,

  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
