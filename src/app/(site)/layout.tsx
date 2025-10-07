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
import { Toaster } from 'react-hot-toast';

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

        <link rel="preconnect" href="https://www.googletagmanager.com" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WJHTFKNJ');
          `,
          }}
        ></script>
      </Head>

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-HRJTLCWFYG"></script>

      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-HRJTLCWFYG');
          `,
        }}
      ></script>

      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WJHTFKNJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
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
              <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
              <FloatingCallButton />
            </main>

            <Footer />
          </AuthProvider>
        </ThemeProviderClient>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            if(typeof window !== 'undefined') {
              window.addEventListener('load', function() {
                const preloader = document.getElementById('preloader');
                preloader.style.display = 'none';
              });
            }
          `,
          }}
        ></script>
      </body>
    </html>
  );
}
