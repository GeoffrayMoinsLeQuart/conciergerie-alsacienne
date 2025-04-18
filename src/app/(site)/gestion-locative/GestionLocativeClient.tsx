"use client";

import React from "react";
import { useState, useMemo } from "react";
import FAQ, { FAQItem } from "@/components/FAQ";

interface GestionLocativeClientProps {
  faqItems: FAQItem[];
}

export default function GestionLocativeClient({
  faqItems,
}: GestionLocativeClientProps) {
  return (
    <div className="container mx-auto max-w-8xl px-4">
      {/* Composant FAQ avec filtrage par défaut sur gestion-locative et filtre de type désactivé */}
      <FAQ
        items={faqItems}
        defaultType="gestion-locative"
        showTypeFilter={false}
        showTopicFilter={true}
        mainTitle=""
        subtitle="Retrouvez les réponses aux questions les plus courantes sur notre service de gestion locative.

        "
      />
    </div>
  );
}
