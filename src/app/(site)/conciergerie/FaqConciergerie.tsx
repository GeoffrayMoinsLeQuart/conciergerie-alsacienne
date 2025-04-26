import { getFAQsByType } from '@/sanity/sanity-utils';
import FAQ from '@/components/FAQ';
import SectionTitle from '@/components/Common/SectionTitle';
import Script from 'next/script';
import { FAQItem } from '@/types/faq';

const siteURL = 'https://www.conciergerie-alsacienne.fr';

export default async function FaqConciergerieClient() {
  // Récupération des FAQs côté serveur
  const faqs: FAQItem[] = await getFAQsByType('conciergerie');

  // Groupement par topic pour JSON-LD
  const groupedByTopic = faqs.reduce((acc, faq) => {
    const topic = faq.topic?.trim() || 'autres';
    if (!acc[topic]) acc[topic] = [];
    acc[topic].push(faq);
    return acc;
  }, {} as Record<string, FAQItem[]>);

  // Données structurées FAQ
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: Object.entries(groupedByTopic).map(([topic, items]) => ({
      '@type': 'WebPageElement',
      '@id': `${siteURL}/conciergerie#${encodeURIComponent(topic)}`,
      name: topic,
      hasPart: items.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answer.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim(),
        },
      })),
    })),
  };

  // Données structurées Breadcrumb
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteURL },
      { '@type': 'ListItem', position: 2, name: 'Conciergerie', item: `${siteURL}/conciergerie` },
      { '@type': 'ListItem', position: 3, name: 'FAQ', item: `${siteURL}/conciergerie#faq` },
    ],
  };

  return (
    <section
      id="faq-conciergerie"
      aria-labelledby="faq-conciergerie-heading"
      className="bg-white py-20"
    >
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <SectionTitle
            id="faq-conciergerie-heading"
            mainTitle="FAQ CONCIERGERIE"
            title="Vos questions les plus fréquentes"
            paragraph="Retrouvez toutes les réponses concernant nos services de conciergerie haut de gamme."
            center
          />
        </header>

        <FAQ
          items={faqs}
          defaultType="conciergerie"
          showTopicFilter
          specificPage
          subtitle="Tout ce que vous devez savoir pour faire le bon choix."
        />
      </div>

      {/* JSON-LD pour SEO, injecté après l'interactivité */}
      <Script
        id="faq-jsonld-conciergerie"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="breadcrumb-jsonld-conciergerie"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </section>
  );
}
