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
    name: 'Les Clés d’Alsace',
    url: 'https://www.clefsdalsace.fr',
    logo: 'https://www.clefsdalsace.fr/logo.svg',
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
      'https://www.facebook.com/clefsdalsace',
      'https://www.instagram.com/clefsdalsace/',
      // Ajoutez ici d'autres profils sociaux si nécessaire
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Les Clés d’Alsace',
    url: 'https://www.clefsdalsace.fr',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.clefsdalsace.fr/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const pathname = usePathname();
  const canonical = `https://www.clefsdalsace.fr${pathname}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Organisation schema */}
      <Script
        id="schema-org-organization"
        type="application/ld+json"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* Website schema */}
      <Script
        id="schema-org-website"
        type="application/ld+json"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      {/* Schéma supplémentaire (optionnel) */}
      {schema && (
        <Script
          id="schema-org-custom"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      )}
    </>
  );
};

export default SeoSchemaInjector;
