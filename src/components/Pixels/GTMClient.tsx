// src/components/Pixels/GTMClient.tsx
'use client';
import { GoogleTagManager } from '@next/third-parties/google';

export function GTMClient() {
  const gtmId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  if (!gtmId) {
    console.warn('[GTM] NEXT_PUBLIC_GTM_ID is not defined');
    return null;
  }

  return <GoogleTagManager gtmId={gtmId} />;
}
