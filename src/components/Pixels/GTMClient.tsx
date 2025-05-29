// src/components/Pixels/GTM.tsx
'use client';
import Script from 'next/script';

export function GTM() {
  const id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  if (!id) return null;

  return (
    <>
      {/* 1. Data Layer init */}
      <Script id="gtm-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
          });
        `}
      </Script>

      {/* 2. Chargement du gtm.js */}
      <Script
        id="gtm-script"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtm.js?id=${id}`}
      />
    </>
  );
}
