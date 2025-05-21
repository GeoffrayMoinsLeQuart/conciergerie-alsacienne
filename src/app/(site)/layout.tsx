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
import { GTMScript } from '@/components/Pixels/GTM';
import { GTMNoScript } from '@/components/Pixels/GTMNoScript';
import FloatingCallButton from '@/components/FloatingCallButton';

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

        {/* Thème (client only) */}
        <ThemeProviderClient>
          {/* Contexte & UI */}
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
