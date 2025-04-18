"use client";

import { useState, useEffect } from "react";
import { getFAQs } from "@/sanity/sanity-utils";
import FAQ, { FAQItem } from "@/components/FAQ";

export default function FAQPageClient() {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Récupération asynchrone une seule fois au montage
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getFAQs();
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
    <div className="container mx-auto mt-20 max-w-4xl px-4">
      {isLoading ? (
        <div className="py-10 text-center">
          <p>Chargement des questions fréquentes...</p>
        </div>
      ) : (
        <FAQ
          items={faqItems}
          showTypeFilter={true}
          showTopicFilter={true}
          mainTitle=""
        />
      )}
    </div>
  );
}
