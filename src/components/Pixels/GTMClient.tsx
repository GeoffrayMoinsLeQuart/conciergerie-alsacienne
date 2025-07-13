// src/components/Pixels/GTM.tsx
'use client';
import Script from 'next/script';

export function GTM() {
  const id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  if (!id) return null;

  return (
    <>
      {/* 1. Init Data Layer */}
      <Script id="gtm-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
          });
        `}
      </Script>

      {/* 2. Script principal */}
      <Script
        id="gtm-script"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtm.js?id=${id}`}
      />

      {/* 3. Fallback <noscript> : à rendre dans le DOM visible */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=${id}"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe>
          </noscript>
        `,
        }}
      />
    </>
  );
}
