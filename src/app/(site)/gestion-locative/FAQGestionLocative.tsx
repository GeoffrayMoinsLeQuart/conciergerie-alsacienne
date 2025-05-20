// src/app/gestion-locative/FAQGestionLocative.tsx
'use client';

import SectionTitle from '@/components/Common/SectionTitle';
import FAQ from '@/components/FAQ';
import { t } from '@/app/libs/content';
import type { FAQItem } from '@/types/faq';

export default function FAQGestionLocative({ items }: { items: FAQItem[] }) {
  const pageKey = 'gestionLocative';
  const baseKey = 'GestionLocative.FAQGestionLocative';

  const mainTitle = t(pageKey, `${baseKey}.mainTitle`) as string;
  const title     = t(pageKey, `${baseKey}.title`)     as string;
  const paragraph = t(pageKey, `${baseKey}.paragraph`) as string;
  const subtitle  = t(pageKey, `${baseKey}.subtitle`)  as string;

  return (
    <section
      id="faq-gestion"
      aria-labelledby="faq-gestion-heading"
      className="bg-white py-20"
    >
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <SectionTitle
            id="faq-gestion-heading"
            mainTitle={mainTitle}
            title={title}
            paragraph={paragraph}
            center
          />
        </header>

        <FAQ
          items={items}
          defaultType="gestion-locative"
          showTopicFilter
          specificPage
          subtitle={subtitle}
        />
      </div>
    </section>
  );
}
