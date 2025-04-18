"use client";

import { useState, useEffect } from "react";
import { getFAQsByType } from "@/sanity/sanity-utils";
import FAQ, { FAQItem } from "@/components/FAQ";

export default function ConciergerieClient() {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Récupération asynchrone une seule fois au montage
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getFAQsByType("conciergerie");
        setFaqItems(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des FAQs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="max-w-8xl container mx-auto px-4">
        {isLoading ? (
          <div className="py-10 text-center">
            <p>Chargement des questions fréquentes...</p>
          </div>
        ) : (
          <FAQ
            items={faqItems}
            defaultType="conciergerie"
            showTypeFilter={false}
            showTopicFilter={true}
            mainTitle=""
            specificPage={true}
            subtitle="Retrouvez les réponses aux questions les plus courantes sur notre service de conciergerie."
          />
        )}
      </div>
    </section>
  );
}
