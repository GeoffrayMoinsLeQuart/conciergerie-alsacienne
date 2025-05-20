import FAQ from '@/components/FAQ';
import SectionTitle from '@/components/Common/SectionTitle';
import type { FAQItem } from '@/types/faq';

export default function FaqConciergerie({ items }: { items: FAQItem[] }) {
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
          items={items}
          defaultType="conciergerie"
          showTopicFilter
          specificPage
          subtitle="Tout ce que vous devez savoir pour faire le bon choix."
        />
      </div>
    </section>
  );
}
