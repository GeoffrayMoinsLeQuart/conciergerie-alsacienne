import { Metadata } from "next";
import { getFAQs } from "@/sanity/sanity-utils";
import FAQPageClient from "./FAQPageClient";

export const metadata: Metadata = {
  title: "FAQ - Toutes vos questions | Conciergerie Alsacienne",
  description: "Retrouvez les réponses aux questions les plus courantes sur la conciergerie, la gestion locative et nos autres services.",
};

export default async function FAQPage() {
  const faqs = await getFAQs();
  
  // Extraire toutes les catégories uniques
  const categories = Array.from(new Set(faqs.map(faq => faq.type)));
  
  return (
    <section className="bg-white py-16">
      <FAQPageClient faqs={faqs} categories={categories} />
      
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          })
        }}
      />
    </section>
  );
}
