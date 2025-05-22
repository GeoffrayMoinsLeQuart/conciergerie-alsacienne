// src/components/Pixels/GAScript.tsx
'use client';

import Script from 'next/script';

const measurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || 'G-HRJTLCWFYG';

export function GAScript() {
  return (
    <>
      {/* 1. Charger gtag.js */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      {/* 2. Initialiser window.dataLayer et configurer gtag */}
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
