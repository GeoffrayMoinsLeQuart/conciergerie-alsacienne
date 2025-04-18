"use client";

import React from "react";
import FAQ, { FAQItem } from "@/components/FAQ";

interface ConciergerieClientProps {
  faqItems: FAQItem[];
}

export default function ConciergerieClient({ faqItems }: ConciergerieClientProps) {
  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl font-bold text-center mb-4">Questions fréquentes</h2>
      <p className="text-center text-gray-600 mb-10">
        Retrouvez les réponses aux questions les plus courantes sur notre service de conciergerie.
      </p>
      
      {/* Composant FAQ avec filtrage par défaut sur conciergerie et filtre de type désactivé */}
      <FAQ 
        items={faqItems} 
        defaultType="conciergerie"
        showTypeFilter={false}
        showTopicFilter={true}
        mainTitle=""
      />
    </div>
  );
}
