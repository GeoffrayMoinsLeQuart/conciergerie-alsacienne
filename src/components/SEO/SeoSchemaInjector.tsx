// src/components/SEO/SeoSchemaInjector.tsx

'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { FC } from 'react';

interface SeoSchemaInjectorProps {
  schema?: Record<string, any>;
}

const SeoSchemaInjector: FC<SeoSchemaInjectorProps> = ({ schema }) => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Conciergerie Alsacienne',
    url: 'https://www.conciergerie-alsacienne.fr',
    logo: 'https://www.conciergerie-alsacienne.fr/logo.svg',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+33-6-21-47-19-22',
        contactType: 'customer service',
        areaServed: 'FR',
        availableLanguage: ['French', 'English'],
      },
    ],
    sameAs: [
      'https://www.facebook.com/conciergerie.alsacienne',
      'https://www.instagram.com/conciergerie.alsacienne/',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Conciergerie Alsacienne',
    url: 'https://www.conciergerie-alsacienne.fr',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.conciergerie-alsacienne.fr/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const pathname = usePathname();
  const canonical = `https://www.conciergerie-alsacienne.fr${pathname}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow" />
      </Head>

      <Script
        id="schema-org-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="schema-org-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      {/* Schéma supplémentaire injecté via prop (optionnel) */}
      {schema && (
        <Script
          id="schema-org-custom"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      )}
    </>
  );
};

export default SeoSchemaInjector;
