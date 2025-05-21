// src/components/SEO/StructuredData.tsx

'use client';

import Script from 'next/script';
import { FC, useMemo } from 'react';

interface StructuredDataProps {
  /**
   * Either a single schema type, or omit to use a full @graph payload in `data`.
   */
  type?: 'WebSite' | 'Organization' | 'Service' | 'BlogPosting' | 'FAQPage' | 'BreadcrumbList';
  /**
   * If you pass `{ "@graph": [...] }`, the component will render that full graph.
   * Otherwise, it will wrap your `data` in a single `@type` entry.
   */
  data: Record<string, any>;
}

const StructuredData: FC<StructuredDataProps> = ({ type, data }) => {
  // Build the JSON-LD object, supporting full @graph if provided
  const jsonLdObject = useMemo(() => {
    if ('@graph' in data) {
      return { '@context': 'https://schema.org', ...data };
    }
    if (!type) {
      throw new Error('When `data` has no `@graph`, `type` prop is required for StructuredData');
    }
    return { '@context': 'https://schema.org', '@type': type, ...data };
  }, [data, type]);

  // Stringify without formatting for minimal payload
  const jsonLdString = useMemo(() => JSON.stringify(jsonLdObject), [jsonLdObject]);

  // Unique ID to prevent Next.js dedupe collisions
  const scriptId = useMemo(() => {
    if (data['@graph']) return `ld+json-graph`;
    return `ld+json-${type}`;
  }, [data, type]);

  return (
    <Script
      id={scriptId}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: jsonLdString }}
    />
  );
};

export default StructuredData;
