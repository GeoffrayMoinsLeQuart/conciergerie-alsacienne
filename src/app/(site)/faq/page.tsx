import { getFAQs } from '@/sanity/sanity-utils';
import FAQPageClient from './FAQPageClient';
import { getMetadata } from '@/app/config/pageMetadata';

export const metadata = getMetadata('faq');

export default async function FAQPage() {
  const faqs = await getFAQs();

  return (
    <section className="bg-white py-16">
      {/* ✅ On passe les FAQs au composant client */}
      <FAQPageClient faqs={faqs} />

      {/* ✅ Données structurées SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
