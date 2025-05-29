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
import { GTM } from '@/components/Pixels/GTMClient';
import Head from 'next/head';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="light" style={{ colorScheme: 'light' }}>
      <Head>
        {/* Métas globales */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#006BFF" />

        {/* Préchargement de l'image LCP desktop */}
        <link
          rel="preload"
          href="https://res.cloudinary.com/dx96rdxwk/image/upload/q_auto,f_auto,w_1200/v1748531765/Mon%20projet%20locatif/Header-desktop_rtmbza.webp"
          as="image"
          fetchPriority="high"
          media="(min-width: 768px )"
        />

        {/* Préchargement de l'image tablette */}
        <link
          rel="preload"
          href="https://res.cloudinary.com/dx96rdxwk/image/upload/q_auto,f_auto,w_768/v1748531997/Mon%20projet%20locatif/Header-tablet_edp2mu.webp"
          as="image"
          fetchPriority="high"
          media="(min-width: 640px ) and (max-width: 767px)"
        />

        {/* Préchargement de l'image mobile */}
        <link
          rel="preload"
          href="https://res.cloudinary.com/dx96rdxwk/image/upload/q_auto,f_auto,w_400/v1748531998/Mon%20projet%20locatif/Header-mobil_tbfewv.webp"
          as="image"
          fetchPriority="high"
          media="(max-width: 639px )"
        />

        {/* Preconnect tiers */}
        {/* <link rel="preconnect" href="https://cdn-cookieyes.com" /> */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* GTM script */}
        <GTM />
      </Head>
      {/* <GAScript /> */}
      <body className={inter.className}>
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
