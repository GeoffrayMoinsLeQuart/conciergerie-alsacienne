// src/app/faq/page.tsx
import { getFAQs } from '@/sanity/sanity-utils';
import FAQPageClient from './FAQPageClient';
import { getMetadata } from '@/app/config/pageMetadata';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import { makeFAQPageSchema } from '@/app/config/pageSchema';
import type { FAQItem } from '@/types/faq';

export const metadata = getMetadata('faq');

export default async function FAQPage() {
  const faqs: FAQItem[] = await getFAQs();
  const schema = makeFAQPageSchema(faqs);

  return (
    <>
      {/* Injection unique du JSON-LD pour la FAQ */}
      <SeoSchemaInjector schema={schema} />

      <section className="bg-white py-16">
        {/* UI FAQ côté client */}
        <FAQPageClient faqs={faqs} />
      </section>
    </>
  );
}
