"use client";

import React, { useState, useMemo, useEffect } from "react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  type: string[] | string; // 'conciergerie' ou 'gestion-locative', peut être un tableau ou une chaîne
  topic?: string; // thématique (ex: 'travaux')
  icon?: string; // ✅ icône personnalisée éventuelle
  order?: number; // optionnel, pour le tri
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  mainTitle?: string;
  center?: boolean;
  // Nouvelles propriétés pour le filtrage
  showTypeFilter?: boolean; // Afficher le filtre conciergerie/gestion-locative
  defaultType?: string; // Type par défaut (conciergerie, gestion-locative, ou all)
  showTopicFilter?: boolean; // Afficher le filtre par thématique
}

// Icônes plus cohérentes pour les catégories et thématiques
const categoryLabels: Record<string, string> = {
  conciergerie: "Conciergerie",
  "gestion-locative": "Gestion locative",
  fiscalite: "Fiscalité",
  technique: "Technique",
  client: "Relations clients",
  travaux: "Travaux",
  baux: "Baux & Contrats",
  loyers: "Loyers & Paiements",
  rentabilite: "Rentabilité",
  "relations-locataires": "Relations locataires",
  obligations: "Obligations légales",
  autres: "Autres questions",
};

const categoryIcons: Record<string, string> = {
  // Catégories principales
  conciergerie: "🏠", // Maison avec service
  "gestion-locative": "🔑", // Clé (symbolise l'accès, la gestion)
  
  // Thématiques
  fiscalite: "📊", // Graphique (pour les finances)
  technique: "🔧", // Clé à molette (pour aspects techniques)
  client: "👥", // Personnes (pour relations clients)
  travaux: "🛠️", // Outils (pour travaux)
  baux: "📝", // Document (pour contrats)
  loyers: "💶", // Euro (pour paiements)
  rentabilite: "📈", // Graphique montant (pour rentabilité)
  "relations-locataires": "🤝", // Poignée de main (pour relations)
  obligations: "⚖️", // Balance (pour aspects légaux)
  autres: "❓", // Point d'interrogation (pour questions diverses)
};

// Fonction utilitaire pour vérifier si un type correspond
const typeMatches = (itemType: string[] | string, filterType: string): boolean => {
  if (filterType === "all") return true;
  
  if (Array.isArray(itemType)) {
    return itemType.includes(filterType);
  } else {
    return itemType === filterType;
  }
};

const FAQ: React.FC<FAQProps> = (props) => {
  const {
    items = [],
    title = "Questions fréquentes",
    subtitle = "Retrouvez les réponses aux questions les plus courantes.",
    mainTitle = "FAQ",
    center = true,
    showTypeFilter = true,
    defaultType = "all",
    showTopicFilter = true,
  } = props;

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string>(defaultType);
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Mettre à jour selectedType si defaultType change
  useEffect(() => {
    setSelectedType(defaultType);
  }, [defaultType]);

  // Extraire toutes les thématiques uniques des items
  const uniqueTopics = useMemo(() => {
    if (!items || items.length === 0) return [];
    
    const topics = items
      .map((item) => item.topic || "autres")
      .filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
    return topics;
  }, [items]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Fonction pour gérer le clic sur un bouton de catégorie
  const handleTypeClick = (type: string) => {
    setSelectedType(type);
  };

  // Fonction pour gérer le clic sur un bouton de thématique
  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
  };

  // Fonction pour réinitialiser tous les filtres
  const resetFilters = () => {
    setSelectedType("all");
    setSelectedTopic("all");
    setSearchTerm("");
  };

  // Filtrer les FAQs en fonction des filtres sélectionnés
  const filteredFaqs = useMemo(() => {
    if (!items || items.length === 0) return [];
    
    return items.filter((item) => {
      // Filtre par type (conciergerie/gestion-locative)
      const matchesType = typeMatches(item.type, selectedType);
      
      // Filtre par thématique
      const matchesTopic =
        selectedTopic === "all" || (item.topic || "autres") === selectedTopic;

      // Filtre par recherche
      const matchesSearch =
        searchTerm === "" ||
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesType && matchesTopic && matchesSearch;
    });
  }, [items, selectedType, selectedTopic, searchTerm]);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Title Section */}
        <div className={`${center ? "text-center" : "text-left"} mb-10`}>
          {mainTitle && (
            <h1
              className={`text-4xl font-bold ${center ? "text-center" : ""} mb-4`}
            >
              {mainTitle}
            </h1>
          )}
          {title && (
            <h2 className={`mb-4 text-3xl font-bold text-dark`}>{title}</h2>
          )}
          {subtitle && (
            <p className="mb-10 text-base text-gray-600">{subtitle}</p>
          )}
        </div>

        {/* Search Input */}
        <div className="mb-10">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher une question..."
              className="w-full rounded-md border border-gray-300 p-3 pl-10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Type Filter Buttons (First Row) */}
        {showTypeFilter && (
          <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-3">
            <button
              onClick={() => handleTypeClick("all")}
              className={`flex items-center justify-center rounded-lg border p-4 transition hover:shadow-md ${
                selectedType === "all" 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <span className="mr-2 text-xl">⭐</span>
              <span className="font-medium">
                Toutes les catégories
              </span>
            </button>
            <button
              onClick={() => handleTypeClick("conciergerie")}
              className={`flex items-center justify-center rounded-lg border p-4 transition hover:shadow-md ${
                selectedType === "conciergerie"
                  ? "bg-primary text-white shadow-md"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <span className="mr-2 text-xl">
                {categoryIcons["conciergerie"]}
              </span>
              <span className="font-medium">
                {categoryLabels["conciergerie"]}
              </span>
            </button>
            <button
              onClick={() => handleTypeClick("gestion-locative")}
              className={`flex items-center justify-center rounded-lg border p-4 transition hover:shadow-md ${
                selectedType === "gestion-locative"
                  ? "bg-primary text-white shadow-md"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <span className="mr-2 text-xl">
                {categoryIcons["gestion-locative"]}
              </span>
              <span className="font-medium">
                {categoryLabels["gestion-locative"]}
              </span>
            </button>
          </div>
        )}

        {/* Reset Filters Button */}
        <div className="mb-6 flex justify-end">
          <button
            onClick={resetFilters}
            className="flex items-center rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
          >
            <span className="mr-1">↻</span>
            Réinitialiser les filtres
          </button>
        </div>

        {/* Topic Filter Buttons (Second Row) */}
        {showTopicFilter && uniqueTopics.length > 0 && (
          <div className="mb-8">
            <h3 className="mb-3 text-sm font-medium text-gray-500">Filtrer par thématique :</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleTopicClick("all")}
                className={`flex items-center rounded-md px-3 py-2 text-sm transition ${
                  selectedTopic === "all" 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="font-medium">Toutes les thématiques</span>
              </button>
              {uniqueTopics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => handleTopicClick(topic)}
                  className={`flex items-center rounded-md px-3 py-2 text-sm transition ${
                    selectedTopic === topic
                      ? "bg-primary/10 text-primary font-medium"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span className="mr-1">{categoryIcons[topic] || "📌"}</span>
                  <span className="font-medium">
                    {categoryLabels[topic] || topic}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results count */}
        <div className="mb-4 text-sm text-gray-500">
          {filteredFaqs.length}{" "}
          {filteredFaqs.length === 1 ? "résultat" : "résultats"} trouvé
          {filteredFaqs.length === 1 ? "" : "s"}
        </div>

        {/* FAQ Items */}
        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {filteredFaqs.map((item, index) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <h3 className="text-lg font-medium text-gray-800">
                    {item.question}
                  </h3>
                  <span className="ml-6 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                    {openIndex === index ? (
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="border-t border-gray-100 bg-white px-5 py-4">
                    <p className="text-gray-600">{item.answer}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.type && (
                        <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                          {categoryIcons[Array.isArray(item.type) ? item.type[0] : item.type] || "🏷️"}{" "}
                          {categoryLabels[Array.isArray(item.type) ? item.type[0] : item.type] || (Array.isArray(item.type) ? item.type[0] : item.type)}
                        </span>
                      )}
                      {item.topic && (
                        <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                          {categoryIcons[item.topic] || "📌"}{" "}
                          {categoryLabels[item.topic] || item.topic}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {filteredFaqs.length === 0 && (
              <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-500">
                  Aucune question ne correspond à vos critères de recherche.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-4 rounded-md bg-primary px-4 py-2 text-white transition hover:bg-opacity-90"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
