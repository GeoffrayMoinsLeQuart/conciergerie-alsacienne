'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import AuthProvider from '../context/AuthContext';
import ToasterContext from '../context/ToastContext';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import { GTMScript } from '@/components/Pixels/GTM';
import { GTMNoScript } from '@/components/Pixels/GTMNoScript';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#006BFF" />
        <GTMScript />
      </head>
      <body className={inter.className}>
        <GTMNoScript />

        <NextTopLoader
          color="#006BFF"
          crawlSpeed={300}
          showSpinner={false}
          shadow="none"
          zIndex={9999999}
        />

        <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
          <AuthProvider>
            <ToasterContext />

            {/* Barre de navigation */}
            <Navbar />

            {/* SEO global */}
            <SeoSchemaInjector />

            {/* Contenu principal */}
            <main id="main-content" role="main" aria-label="Contenu principal">
              {children}
            </main>

            {/* Pied de page */}
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
