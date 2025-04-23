"use client";

import Link from "next/link";
import React, { useState, useMemo, useEffect } from "react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  type: string[] | string;
  topic?: string;
  icon?: string;
  order?: number;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  mainTitle?: string;
  center?: boolean;
  showTypeFilter?: boolean;
  defaultType?: string;
  showTopicFilter?: boolean;
  specificPage?: boolean;
}

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
  conciergerie: "🏠",
  "gestion-locative": "🔑",
  fiscalite: "📊",
  technique: "🔧",
  client: "👥",
  travaux: "🛠️",
  baux: "📝",
  loyers: "💶",
  rentabilite: "📈",
  "relations-locataires": "🤝",
  obligations: "⚖️",
  autres: "❓",
};

const typeMatches = (
  itemType: string[] | string,
  filterType: string,
): boolean => {
  if (filterType === "all") return true;
  if (Array.isArray(itemType)) return itemType.includes(filterType);
  return itemType === filterType;
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
    specificPage = false,
  } = props;

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string>(defaultType);
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleTypeClick = (type: string) => {
    if (selectedType === type) {
      // Si on clique à nouveau sur le même, on le désactive
      setSelectedType("all");
    } else {
      setSelectedType(type);
    }
  };

  const handleTopicClick = (topic: string) => {
    if (selectedTopic === topic) {
      // Si on clique à nouveau, on désactive le filtre
      setSelectedTopic("all");
    } else {
      setSelectedTopic(topic);
    }
  };

  useEffect(() => {
    setSelectedType(defaultType);
  }, [defaultType]);

  const uniqueTopics = useMemo(() => {
    return [...new Set(items.map((item) => item.topic || "autres"))];
  }, [items]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const resetFilters = () => {
    setSelectedType("all");
    setSelectedTopic("all");
    setSearchTerm("");
  };

  const filteredFaqs = useMemo(() => {
    return items.filter((item) => {
      const matchesType = typeMatches(item.type, selectedType);
      const matchesTopic =
        selectedTopic === "all" || (item.topic || "autres") === selectedTopic;
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
        <div className={`${center ? "text-center" : "text-left"} mb-10`}>
          {mainTitle && (
            <h1 className="mb-4 text-4xl font-bold">{mainTitle}</h1>
          )}
          {title && (
            <h2 className="mb-4 text-3xl font-bold text-dark">{title}</h2>
          )}
          {subtitle && (
            <p className="mb-10 text-base text-gray-600">{subtitle}</p>
          )}
        </div>

        <div className="relative mb-10">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher une question..."
            className="w-full rounded-md border border-gray-300 p-3 pl-10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

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
              <span className="font-medium">Toutes les catégories</span>
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

        {showTopicFilter && uniqueTopics.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleTopicClick("all")}
                className={`flex items-center rounded-md px-3 py-2 text-sm transition ${
                  selectedTopic === "all"
                    ? "bg-primary/10 font-medium text-primary"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="font-medium">Toutes les thématiques</span>
              </button>
              {uniqueTopics.map((topic, index) => (
                <button
                  key={topic || `topic-${index}`}
                  onClick={() => handleTopicClick(topic)}
                  className={`flex items-center rounded-md px-3 py-2 text-sm transition ${
                    selectedTopic === topic
                      ? "bg-primary/10 font-medium text-primary"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span className="mr-1">{categoryIcons[topic] || "📌"}</span>
                  <span className="font-medium">
                    {categoryLabels[topic] || topic}
                  </span>
                </button>
              ))}
              {(selectedType !== "all" || selectedTopic !== "all") && (
                <button
                  onClick={resetFilters}
                  className="ml-auto rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-700 hover:bg-gray-200"
                >
                  ✖ Réinitialiser
                </button>
              )}
            </div>
          </div>
        )}

        <div className="mb-4 text-sm text-gray-500">
          {filteredFaqs.length}{" "}
          {filteredFaqs.length === 1 ? "résultat" : "résultats"} trouvé
          {filteredFaqs.length === 1 ? "" : "s"}
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {filteredFaqs.map((item, index) => (
            <div
              key={item.id || `faq-${index}`}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <h3 className="text-lg font-medium text-gray-800">
                  {item.question}
                </h3>
                <span className="ml-6 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-500">
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
                        {categoryIcons[
                          Array.isArray(item.type) ? item.type[0] : item.type
                        ] || "🏷️"}{" "}
                        {categoryLabels[
                          Array.isArray(item.type) ? item.type[0] : item.type
                        ] ||
                          (Array.isArray(item.type) ? item.type[0] : item.type)}
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
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-gray-500">
                Aucune question ne correspond à vos critères de recherche.
              </p>

              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center justify-center rounded-lg border border-primary bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-primary/90"
                >
                  Réinitialiser les filtres
                </button>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
                >
                  Ou contactez-nous 🙂
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
