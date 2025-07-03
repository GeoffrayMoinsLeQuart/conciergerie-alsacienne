// app/layout.tsx
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#006BFF" />

        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4A6CF7" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />

        {/* Préchargement optimisé LCP */}
        {/* <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dx96rdxwk/image/upload/v1748531998/Mon%20projet%20locatif/Header-mobil_tbfewv.webp?w=400"
          imageSrcSet="
            https://res.cloudinary.com/dx96rdxwk/image/upload/v1748531998/Mon%20projet%20locatif/Header-mobil_tbfewv.webp?w=400 1x,
            https://res.cloudinary.com/dx96rdxwk/image/upload/v1748531998/Mon%20projet%20locatif/Header-mobil_tbfewv.webp?w=800 2x
          "
          imageSizes="(max-width: 639px) 100vw"
          fetchPriority="high"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dx96rdxwk/image/upload/v1748531997/Mon%20projet%20locatif/Header-tablet_edp2mu.webp?w=768"
          imageSrcSet="
            https://res.cloudinary.com/dx96rdxwk/image/upload/v1748531997/Mon%20projet%20locatif/Header-tablet_edp2mu.webp?w=768 1x,
            https://res.cloudinary.com/dx96rdxwk/image/upload/v1748531997/Mon%20projet%20locatif/Header-tablet_edp2mu.webp?w=1536 2x
          "
          imageSizes="(min-width: 640px) and (max-width: 767px) 100vw"
          fetchPriority="high"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dx96rdxwk/image/upload/v1748531765/Mon%20projet%20locatif/Header-desktop_rtmbza.webp?w=1200"
          imageSrcSet="
            https://res.cloudinary.com/dx96rdxwk/image/upload/v1748531765/Mon%20projet%20locatif/Header-desktop_rtmbza.webp?w=1200 1x,
            https://res.cloudinary.com/dx96rdxwk/image/upload/v1748531765/Mon%20projet%20locatif/Header-desktop_rtmbza.webp?w=2400 2x
          "
          imageSizes="(min-width: 768px) 1280px"
          fetchPriority="high"
          crossOrigin="anonymous"
        /> */}

        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <GTM />
      </Head>
      <body className={inter.className}>
        <NextTopLoader
          color="#006BFF"
          crawlSpeed={300}
          showSpinner={false}
          shadow="none"
          zIndex={9999999}
        />

        <ThemeProviderClient>
          <AuthProvider>
            <ToasterContext />

            <Navbar />
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
