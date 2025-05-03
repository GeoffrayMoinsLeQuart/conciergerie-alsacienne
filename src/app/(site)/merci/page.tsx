// src/app/(site)/merci/page.tsx
import Script from 'next/script';
import { Metadata } from 'next';
import { getMetadata } from '@/app/config/pageMetadata';
import MerciClient from './MerciClient';

export const metadata: Metadata = getMetadata('merci');

export default function MerciPage() {
  return (
    <>
      {/* Google Analytics – page_view */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-pageview" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
            page_path: window.location.pathname
          });
        `}
      </Script>

      <MerciClient />
    </>
  );
}
