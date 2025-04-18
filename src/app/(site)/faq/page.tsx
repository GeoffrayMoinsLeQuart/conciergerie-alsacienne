import { Metadata } from "next";
import { getFAQs } from "@/sanity/sanity-utils";
import FAQPageClient from "./FAQPageClient";

export const metadata: Metadata = {
  title: "FAQ - Toutes vos questions | Conciergerie Alsacienne",
  description:
    "Retrouvez les réponses aux questions les plus courantes sur la conciergerie, la gestion locative et nos autres services.",
};

export default async function FAQPage() {
  const faqs = await getFAQs();

  return (
    <section className="bg-white py-16">
      <FAQPageClient />

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
