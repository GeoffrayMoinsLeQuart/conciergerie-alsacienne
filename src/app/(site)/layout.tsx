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
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';
import { FormStateProvider } from '../context/FormStateContext';
import FloatingEstimator from '@/components/FloatingEstimator';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Les Clés d’Alsace - Conciergerie Airbnb & Gestion Locative',
  description:
    'Conciergerie premium à Mulhouse, Colmar et Saint-Louis. +40% de revenus dès le 1er mois.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  themeColor: '#006BFF',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="light" style={{ colorScheme: 'light' }}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WJHTFKNJ');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HRJTLCWFYG"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HRJTLCWFYG');
          `}
        </Script>
      </head>

      <body className={inter.className}>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WJHTFKNJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <NextTopLoader color="#006BFF" crawlSpeed={300} showSpinner={false} shadow="none" />

        <ThemeProviderClient>
          <AuthProvider>
            <ToasterContext />

            <Navbar />
            <SeoSchemaInjector />
            <FormStateProvider>
              <main id="main-content" role="main" aria-label="Contenu principal">
                {children}
                <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
                <FloatingCallButton />
                <FloatingEstimator />
              </main>
            </FormStateProvider>

            <Footer />
          </AuthProvider>
        </ThemeProviderClient>

        {/* Préloader (optionnel mais sûr) */}
        <Script id="preloader-hide" strategy="afterInteractive">
          {`
            window.addEventListener('load', function() {
              const preloader = document.getElementById('preloader');
              if (preloader) preloader.style.display = 'none';
            });
          `}
        </Script>
      </body>
    </html>
  );
}
