// app/layout.tsx  (Server Component)
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import ThemeProviderClient from '@/components/ThemeProviderClient';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import AuthProvider from '../context/AuthContext';
import ToasterContext from '../context/ToastContext';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import FloatingCallButton from '@/components/FloatingCallButton';
// import { GAScript } from '@/components/Pixels/GAScript';
import { GTM } from '@/components/Pixels/GTMClient';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="light" style={{ colorScheme: 'light' }}>
      <head>
        {/* Métas globales */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#006BFF" />

        {/* Preconnect tiers */}
        <link rel="preconnect" href="https://cdn-cookieyes.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Preload LCP images */}
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dx96rdxwk/image/upload/v1717939157/Immobilier/website/Header-desktop_nddksd.webp"
        />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dx96rdxwk/image/upload/v1717939157/Immobilier/website/Header-tablet_uczvdn.webp"
        />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dx96rdxwk/image/upload/v1717939157/Immobilier/website/Header-mobil_kvve7t.webp"
        />

        {/* GTM script */}
        <GTM />
      </head>
      {/* <GAScript /> */}
      <body className={inter.className}>
        {/* Fallback noscript déplacé ici */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <NextTopLoader
          color="#006BFF"
          crawlSpeed={300}
          showSpinner={false}
          shadow="none"
          zIndex={9999999}
        />

        {/* Thème (client only) */}
        <ThemeProviderClient>
          {/* Contexte & UI */}
          <AuthProvider>
            <ToasterContext />

            <Navbar />
            {/* Inject basic schemas + canonical */}
            <SeoSchemaInjector />

            <main id="main-content" role="main" aria-label="Contenu principal">
              {children}
              <FloatingCallButton />
            </main>

            <Footer />
          </AuthProvider>
        </ThemeProviderClient>
      </body>
    </html>
  );
}
