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

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.conciergerie-alsacienne.fr" />
      </head>
      <body className={inter.className}>
        <GTMNoScript />

        {/* Barre de chargement */}
        <NextTopLoader
          color="#006BFF"
          crawlSpeed={300}
          showSpinner={false}
          shadow="none"
          zIndex={9999999}
        />

        <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
          <AuthProvider>
            <GTMScript />
            <SeoSchemaInjector />
            <ToasterContext />

            {/* Navigation principale */}
            <Navbar />

            {/* Contenu principal */}
            <main id="main-content" role="main">
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
