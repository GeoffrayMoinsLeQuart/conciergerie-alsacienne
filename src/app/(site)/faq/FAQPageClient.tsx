"use client";

import FAQ, { FAQItem } from "@/components/FAQ";

export default function FAQPageClient({ faqs }: { faqs: FAQItem[] }) {
  return (
    <div className="container mx-auto mt-20 max-w-4xl px-4">
      <FAQ
        items={faqs}
        showTypeFilter={true}
        showTopicFilter={true}
        mainTitle="Foire Aux Questions"
        subtitle="Retrouvez les réponses aux questions les plus courantes sur nos services."
        specificPage={true}
      />
    </div>
  );
}
