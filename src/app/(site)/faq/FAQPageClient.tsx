'use client';

import FAQ from '@/components/FAQ';
import { FAQItem } from '@/types/faq';

export default function FAQPageClient({ faqs }: { faqs: FAQItem[] }) {
  return (
    <div className="container mx-auto mt-20 max-w-4xl px-4">
      <FAQ
        items={faqs}
        showTopicFilter={true}
        mainTitle="Foire Aux Questions"
        subtitle="Retrouvez les réponses aux questions les plus courantes sur nos services."
        specificPage={false}
      />
    </div>
  );
}
