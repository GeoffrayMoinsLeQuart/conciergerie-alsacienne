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
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl font-bold text-center mb-4">Questions fréquentes</h2>
      <p className="text-center text-gray-600 mb-10">
        Retrouvez les réponses aux questions les plus courantes sur notre service de conciergerie.
      </p>
      
      {isLoading ? (
        <div className="text-center py-10">
          <p>Chargement des questions fréquentes...</p>
        </div>
      ) : (
        <FAQ 
          items={faqItems} 
          defaultType="conciergerie"
          showTypeFilter={false}
          showTopicFilter={true}
          mainTitle=""
        />
      )}
    </div>
  );
}
