// src/app/(site)/merci/page.tsx
import Script from 'next/script';
import { Metadata } from 'next';
import { getMetadata } from '@/app/config/pageMetadata';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import MerciClient from './MerciClient';
import { merciSchema } from '@/app/config/pageSchema';

export const metadata: Metadata = getMetadata('merci');

export default function MerciPage() {
  return (
    <>
      {/* Injection unique du schéma JSON-LD */}
      <SeoSchemaInjector schema={merciSchema} />

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
