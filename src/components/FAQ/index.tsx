"use client";

import React, { useState, useMemo } from "react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  type: string; // 'conciergerie' ou 'gestion-locative'
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

const categoryLabels: Record<string, string> = {
  "conciergerie": "Conciergerie",
  "gestion-locative": "Gestion locative",
  "fiscalite": "Fiscalité",
  "technique": "Technique",
  "client": "Client",
  "autres": "Autres",
};

const categoryIcons: Record<string, string> = {
  "conciergerie": "\uD83D\uDEBA", // 🪺
  "gestion-locative": "\uD83D\uDCE1", // 📡
  "fiscalite": "\uD83D\uDCB0", // 💰
  "technique": "\uD83D\uDD27", // 🔧
  "client": "\uD83D\uDC65", // 👥
  "autres": "\u2753", // ❓
};

const FAQ: React.FC<FAQProps> = (props) => {
  const { 
    items, 
    title = "Questions fréquentes", 
    subtitle = "Retrouvez les réponses aux questions les plus courantes.",
    mainTitle = "FAQ", 
    center = true,
    showTypeFilter = true,
    defaultType = "all",
    showTopicFilter = true
  } = props;

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string>(defaultType);
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Extraire toutes les thématiques uniques des items
  const uniqueTopics = useMemo(() => {
    const topics = items.map(item => item.topic || "autres").filter((value, index, self) => {
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
    return items.filter((item) => {
      // Filtre par type (conciergerie/gestion-locative)
      const matchesType = selectedType === "all" || item.type === selectedType;
      
      // Filtre par thématique
      const matchesTopic = selectedTopic === "all" || (item.topic || "autres") === selectedTopic;
      
      // Filtre par recherche
      const matchesSearch = searchTerm === "" || 
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesType && matchesTopic && matchesSearch;
    });
  }, [items, selectedType, selectedTopic, searchTerm]);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl ">
        {/* Title Section */}
        <div className={`${center ? "text-center" : "text-left"} mb-10`}>
          {mainTitle && (
            <h1 className={`text-4xl font-bold ${center ? "text-center" : ""} mb-4`}>{mainTitle}</h1>
          )}
          {title && (
            <h2 className={`mb-4 text-3xl font-bold text-dark`}>{title}</h2>
          )}
          {subtitle && <p className="text-base text-gray-600 mb-10">{subtitle}</p>}
        </div>

        {/* Search Input */}
        <div className="mb-10">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher une question..."
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Type Filter Buttons (First Row) */}
        {showTypeFilter && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <button
              onClick={() => handleTypeClick("all")}
              className={`p-4 rounded-lg border transition flex flex-col items-center hover:shadow-md ${
                selectedType === "all" ? "bg-primary text-white" : "bg-gray-50"
              }`}
            >
              <span className="text-3xl mb-2">⭐</span>
              <span className="font-medium text-center">Toutes les catégories</span>
            </button>
            <button
              onClick={() => handleTypeClick("conciergerie")}
              className={`p-4 rounded-lg border transition flex flex-col items-center hover:shadow-md ${
                selectedType === "conciergerie" ? "bg-primary text-white" : "bg-gray-50"
              }`}
            >
              <span className="text-3xl mb-2">{categoryIcons["conciergerie"]}</span>
              <span className="font-medium text-center">{categoryLabels["conciergerie"]}</span>
            </button>
            <button
              onClick={() => handleTypeClick("gestion-locative")}
              className={`p-4 rounded-lg border transition flex flex-col items-center hover:shadow-md ${
                selectedType === "gestion-locative" ? "bg-primary text-white" : "bg-gray-50"
              }`}
            >
              <span className="text-3xl mb-2">{categoryIcons["gestion-locative"]}</span>
              <span className="font-medium text-center">{categoryLabels["gestion-locative"]}</span>
            </button>
            <button
              onClick={resetFilters}
              className="p-4 rounded-lg border transition flex flex-col items-center hover:shadow-md bg-gray-100"
            >
              <span className="text-3xl mb-2">↻</span>
              <span className="font-medium text-center">Réinitialiser les filtres</span>
            </button>
          </div>
        )}

        {/* Topic Filter Buttons (Second Row) */}
        {showTopicFilter && uniqueTopics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            <button
              onClick={() => handleTopicClick("all")}
              className={`p-2 rounded-lg border transition flex items-center justify-center hover:shadow-md ${
                selectedTopic === "all" ? "bg-primary text-white" : "bg-gray-50"
              }`}
            >
              <span className="font-medium">Toutes les thématiques</span>
            </button>
            {uniqueTopics.map((topic) => (
              <button
                key={topic}
                onClick={() => handleTopicClick(topic)}
                className={`p-2 rounded-lg border transition flex items-center justify-center hover:shadow-md ${
                  selectedTopic === topic ? "bg-primary text-white" : "bg-gray-50"
                }`}
              >
                <span className="mr-2">{categoryIcons[topic] || "📌"}</span>
                <span className="font-medium">{categoryLabels[topic] || topic}</span>
              </button>
            ))}
          </div>
        )}

        {/* Results count */}
        <div className="mb-4 text-sm text-gray-500">
          {filteredFaqs.length} {filteredFaqs.length === 1 ? "résultat" : "résultats"} trouvé{filteredFaqs.length === 1 ? "" : "s"}
        </div>

        {/* FAQ Items */}
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6">
            {filteredFaqs.map((item, index) => (
              <div
                key={item.id}
                className="rounded-lg bg-white p-6 shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.question}
                  </h3>
                  <span className="ml-6 flex-shrink-0">
                    {openIndex === index ? (
                      <svg
                        className="h-6 w-6 text-gray-500"
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
                        className="h-6 w-6 text-gray-500"
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
                  <div className="mt-4 text-gray-600 animate-fadeIn">
                    <p>{item.answer}</p>
                    <div className="mt-2 flex gap-2">
                      {item.type && (
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                          {categoryIcons[item.type] || "🏷️"} {categoryLabels[item.type] || item.type}
                        </span>
                      )}
                      {item.topic && (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          {categoryIcons[item.topic] || "📌"} {categoryLabels[item.topic] || item.topic}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {filteredFaqs.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-500">Aucune question ne correspond à vos critères de recherche.</p>
                <button 
                  onClick={resetFilters}
                  className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition"
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
