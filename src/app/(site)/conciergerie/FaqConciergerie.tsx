'use client';

import FAQ from '@/components/FAQ';
import SectionTitle from '@/components/Common/SectionTitle';
import { t } from '@/app/libs/content';
import type { FAQItem } from '@/types/faq';

interface Props {
  items: FAQItem[];
}

export default function FaqConciergerie({ items }: Props) {
  const pageKey = 'conciergerie';
  const baseKey = 'Conciergerie.FaqConciergerie';

  const mainTitle = t(pageKey, `${baseKey}.mainTitle`) as string;
  const title = t(pageKey, `${baseKey}.title`) as string;
  const paragraph = t(pageKey, `${baseKey}.paragraph`) as string;
  const subtitle = t(pageKey, `${baseKey}.subtitle`) as string;

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
            mainTitle={mainTitle}
            title={title}
            paragraph={paragraph}
            center
          />
        </header>

        <FAQ
          items={items}
          defaultType="conciergerie"
          showTopicFilter
          specificPage
          subtitle={subtitle}
        />
      </div>
    </section>
  );
}
