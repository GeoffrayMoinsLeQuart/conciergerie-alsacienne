// next.config.mjs

import withBundleAnalyzer from '@next/bundle-analyzer';

// Active le bundle analyzer quand on définit la variable d’environnement ANALYZE à "true"
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
// En prod, NEXT_PUBLIC_ASSET_PREFIX doit être non vide et commencer par '/' ou 'https://'
const cdnPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';

const nextConfig = {
  reactStrictMode: true,

  // Activation des Server Actions expérimentales (même origine)
  experimental: {
    serverActions: {},
    optimizeCss: true, // Optimisation CSS
    optimizePackageImports: ['framer-motion', 'lucide-react'],
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
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, immutable',
          },
        ],
      },
    ];
  },
};

// On exporte la config enveloppée dans le bundle-analyzer
export default bundleAnalyzer(nextConfig);
