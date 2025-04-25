import { Metadata } from 'next';
import { getFAQs } from '@/sanity/sanity-utils';
import FAQPageClient from './FAQPageClient';

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
