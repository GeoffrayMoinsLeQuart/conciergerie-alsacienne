'use client';

import { useState, useEffect } from 'react';
import { getFAQsByType } from '@/sanity/sanity-utils';
import SectionTitle from '@/components/Common/SectionTitle';
import Script from 'next/script';
import FAQ from '@/components/FAQ';
import { FAQItem } from '@/types/faq';

export default function FAQGestionLocativeClient() {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getFAQsByType('gestion-locative');
        setFaqItems(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des FAQs :', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // ✅ Groupement par thème (nécessaire pour le JSON-LD avancé)
  const groupedByTopic = faqItems.reduce(
    (acc, faq) => {
      const topic = faq.topic || 'autres';
      if (!acc[topic]) acc[topic] = [];
      acc[topic].push(faq);
      return acc;
    },
    {} as Record<string, { question: string; answer: string }[]>,
  );

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: Object.entries(groupedByTopic).map(([topic, questions]) => ({
      '@type': 'WebPageElement',
      '@id': `https://www.conciergerie-alsacienne.fr/gestion-locative#${topic}`,
      name: topic,
      hasPart: questions.map((faq) => ({
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

  const breadcrumb = {
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
    <section id="faq" aria-labelledby="faq-gestion-heading" className="bg-white py-20">
      <div className="container px-4 mx-auto">
        <header className="mb-12 text-center">
          <SectionTitle
            id="faq-gestion-heading"
            mainTitle="FAQ GESTION LOCATIVE"
            title="Vos questions les plus fréquentes"
            paragraph="Toutes les réponses aux interrogations les plus fréquentes sur notre service de gestion locative longue durée."
            center
          />
        </header>

        {isLoading ? (
          <div className="text-center py-10">
            <p>Chargement des questions fréquentes...</p>
          </div>
        ) : (
          <>
            <FAQ
              items={faqItems}
              defaultType="gestion-locative"
              mainTitle=""
              subtitle="Nous avons réuni ici les questions les plus posées par les propriétaires."
              showTopicFilter={true}
              specificPage={true}
            />

            {/* Données structurées SEO */}
            <Script
              id="faq-jsonld-gestion"
              type="application/ld+json"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(faqStructuredData),
              }}
            />
            <Script
              id="breadcrumb-jsonld-gestion"
              type="application/ld+json"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadcrumb),
              }}
            />
          </>
        )}
      </div>
    </section>
  );
}
