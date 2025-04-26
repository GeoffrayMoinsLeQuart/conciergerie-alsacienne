// aucun 'use client' : c'est un Server Component
import { getFAQsByType } from '@/sanity/sanity-utils';
import SectionTitle from '@/components/Common/SectionTitle';
import FAQ from '@/components/FAQ';
import Script from 'next/script';
import { FAQItem } from '@/types/faq';

export default async function FAQGestionLocative() {
  const faqs: FAQItem[] = await getFAQsByType('gestion-locative');

  // groupement par thème pour le JSON-LD
  const grouped = faqs.reduce(
    (acc, faq) => {
      const topic = faq.topic || 'autres';
      (acc[topic] ??= []).push(faq);
      return acc;
    },
    {} as Record<string, FAQItem[]>,
  );

  // données structurées
  const jsonLdFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: Object.entries(grouped).map(([topic, items]) => ({
      '@type': 'WebPageElement',
      '@id': `https://www.conciergerie-alsacienne.fr/gestion-locative#${topic}`,
      name: topic,
      hasPart: items.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
            .replace(/<[^>]*>/g, '')
            .replaceAll('\n', ' ')
            .trim(),
        },
      })),
    })),
  };

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://www.conciergerie-alsacienne.fr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Gestion locative',
        item: 'https://www.conciergerie-alsacienne.fr/gestion-locative',
      },
    ],
  };

  return (
    <section id="faq-gestion" aria-labelledby="faq-gestion-heading" className="bg-white py-20">
      <div className="container px-4 mx-auto">
        <header className="mb-12 text-center">
          <SectionTitle
            id="faq-gestion-heading"
            mainTitle="FAQ GESTION LOCATIVE"
            title="Vos questions les plus fréquentes"
            paragraph="Toutes les réponses aux interrogations courantes sur notre service de gestion locative."
            center
          />
        </header>

        <FAQ
          items={faqs}
          defaultType="gestion-locative"
          showTopicFilter
          specificPage
          subtitle="Nous avons réuni ici les questions les plus posées par les propriétaires."
        />
      </div>

      {/* JSON-LD injected afterInteractive pour ne pas bloquer */}
      <Script
        id="faq-jsonld-gestion"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <Script
        id="breadcrumb-jsonld-gestion"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
    </section>
  );
}
