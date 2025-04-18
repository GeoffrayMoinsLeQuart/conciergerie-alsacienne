"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useState, useMemo } from "react";
import FAQ, { FAQItem } from "@/components/FAQ";
import { Metadata } from "next";

interface FAQPageClientProps {
  faqs: FAQItem[];
  categories: string[];
}

export default function FAQPageClient({ faqs, categories }: FAQPageClientProps) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || "all";
  
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [search, setSearch] = useState<string>("");
  
  const filteredFaqs = useMemo(() => {
    return faqs.filter((item) => {
      // Filtre par catégorie
      const matchesCategory = selectedCategory === "all" || item.type.includes(selectedCategory);
      
      // Filtre par recherche
      const matchesSearch = search === "" || 
                           item.question.toLowerCase().includes(search.toLowerCase()) || 
                           item.answer.toLowerCase().includes(search.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [faqs, selectedCategory, search]);
  
  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-4">FAQ</h1>
      <p className="text-center text-gray-600 mb-10">
        Retrouvez toutes les réponses aux questions fréquentes sur nos services de conciergerie, gestion locative et plus encore.
      </p>
      
      {/* Composant FAQ avec tous les filtres activés */}
      <FAQ 
        items={faqs} 
        showTypeFilter={true}
        showTopicFilter={true}
        mainTitle=""
      />
    </div>
  );
}
