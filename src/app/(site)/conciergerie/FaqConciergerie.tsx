'use client';

import { getFAQsByType } from '@/sanity/sanity-utils';
import FAQ, { FAQItem } from '@/components/FAQ';
import SectionTitle from '@/components/Common/SectionTitle';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Réponses à vos questions fréquentes | Conciergerie Alsacienne',
  description:
    'Transparence totale sur nos prestations, tarifs, garanties. Tout ce que vous devez savoir, sans jargon.',
  openGraph: {
    title: 'Foire aux questions',
    description: 'Une conciergerie sérieuse, c’est aussi une réponse claire à chaque question.',
    url: 'https://www.conciergerie-alsacienne.fr/faq',
    siteName: 'Conciergerie Alsacienne',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Conciergerie Alsacienne',
    description: 'Réponses simples et concrètes sur nos services.',
  },
};

export default async function FAQPage() {
  const faqs: FAQItem[] = await getFAQsByType('conciergerie');

  // ✅ Groupement par topic
  const groupedByTopic = faqs.reduce(
    (acc, faq) => {
      const topic = faq.topic || 'autres';
      if (!acc[topic]) acc[topic] = [];
      acc[topic].push(faq);
      return acc;
    },
    {} as Record<string, { question: string; answer: string }[]>,
  );

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
        name: 'FAQ',
        item: 'https://www.conciergerie-alsacienne.fr/faq',
      },
    ],
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: Object.entries(groupedByTopic).map(([topic, questions]) => ({
      '@type': 'WebPageElement',
      '@id': `https://www.conciergerie-alsacienne.fr/faq#${topic}`,
      name: topic,
      hasPart: questions.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer.replace(/<[^>]*>/g, '').replaceAll('\n', ' ').trim(),
        },
      })),
    })),
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-white py-20">
      <div className="container px-4 mx-auto">
        <header className="mb-12 text-center">
          <SectionTitle
            id="faq-heading"
            mainTitle="FAQ CONCIERGERIE"
            title="Vos questions les plus fréquentes"
            paragraph="Retrouvez les réponses aux interrogations les plus courantes concernant notre service de conciergerie."
            center
          />
        </header>

        <FAQ
          items={faqs}
          defaultType="conciergerie"
          showTopicFilter={true}
          mainTitle=""
          specificPage={true}
          subtitle="Tout ce que vous devez savoir pour faire le bon choix."
        />
      </div>

      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumb),
        }}
      />
    </section>
  );
}
