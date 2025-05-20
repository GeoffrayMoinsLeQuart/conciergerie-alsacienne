// src/app/gestion-locative/FAQGestionLocative.tsx
import SectionTitle from '@/components/Common/SectionTitle';
import FAQ from '@/components/FAQ';
import type { FAQItem } from '@/types/faq';

export default function FAQGestionLocative({ items }: { items: FAQItem[] }) {
  return (
    <section id="faq-gestion" aria-labelledby="faq-gestion-heading" className="bg-white py-20">
      <div className="container mx-auto px-4">
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
          items={items}
          defaultType="gestion-locative"
          showTopicFilter
          specificPage
          subtitle="Nous avons réuni ici les questions les plus posées par les propriétaires."
        />
      </div>
    </section>
  );
}
