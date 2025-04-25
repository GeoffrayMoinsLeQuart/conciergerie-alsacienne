'use client';

import Link from 'next/link';
import React, { useState, useMemo, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
  showTopicFilter?: boolean;
  defaultType?: string;
  specificPage?: boolean;
}

const categoryLabels: Record<string, string> = {
  fiscalite: 'Fiscalité',
  technique: 'Technique',
  client: 'Relations clients',
  travaux: 'Travaux',
  baux: 'Baux & Contrats',
  loyers: 'Loyers & Paiements',
  rentabilite: 'Rentabilité',
  'relations-locataires': 'Relations locataires',
  obligations: 'Obligations légales',
  autres: 'Autres questions',
};

const categoryIcons: Record<string, string> = {
  fiscalite: '📊',
  technique: '🔧',
  client: '👥',
  travaux: '🛠️',
  baux: '📝',
  loyers: '💶',
  rentabilite: '📈',
  'relations-locataires': '🤝',
  obligations: '⚖️',
  autres: '❓',
};

const FAQ: React.FC<FAQProps> = ({
  items = [],
  title = 'Questions fréquentes',
  subtitle = 'Retrouvez les réponses aux questions les plus courantes.',
  mainTitle = 'FAQ',
  center = true,
  showTopicFilter = true,
  defaultType = 'all',
  specificPage = false,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const resetFilters = () => {
    setSelectedTopic('all');
    setSearchTerm('');
  };

  const uniqueTopics = useMemo(() => {
    return [...new Set(items.map((item) => item.topic || 'autres'))];
  }, [items]);

  const filteredFaqs = useMemo(() => {
    return items.filter((item) => {
      const matchesTopic = selectedTopic === 'all' || (item.topic || 'autres') === selectedTopic;
      const matchesSearch =
        searchTerm === '' ||
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesTopic && matchesSearch;
    });
  }, [items, selectedTopic, searchTerm]);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className={`${center ? 'text-center' : 'text-left'} mb-10`}>
          {mainTitle && <h1 className="mb-4 text-4xl font-bold text-gray-800">{mainTitle}</h1>}
          {title && <h2 className="mb-4 text-3xl font-bold text-primary">{title}</h2>}
          {subtitle && <p className="mb-10 text-base text-gray-700">{subtitle}</p>}
        </div>

        <div className="relative mb-10">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher une question..."
            aria-label="Rechercher une question dans la FAQ"
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

        {showTopicFilter && uniqueTopics.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTopic('all')}
              className={`rounded-md px-3 py-2 text-sm transition ${
                selectedTopic === 'all'
                  ? 'bg-primary/10 font-medium text-primary'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Toutes les thématiques
            </button>
            {uniqueTopics.map((topic, index) => (
              <button
                aria-pressed={selectedTopic === topic}
                key={topic || `topic-${index}`}
                onClick={() => setSelectedTopic(topic)}
                className={`rounded-md px-3 py-2 text-sm transition ${
                  selectedTopic === topic
                    ? 'bg-primary/10 font-medium text-primary'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-1">{categoryIcons[topic] || '📌'}</span>
                {categoryLabels[topic] || topic}
              </button>
            ))}
            {(selectedTopic !== 'all' || searchTerm) && (
              <button
                onClick={resetFilters}
                className="ml-auto rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-700 hover:bg-gray-200"
              >
                ✖ Réinitialiser
              </button>
            )}
          </div>
        )}

        <div className="mb-4 text-sm text-gray-500">
          {filteredFaqs.length} {filteredFaqs.length === 1 ? 'résultat' : 'résultats'} trouvé
          {filteredFaqs.length === 1 ? '' : 's'}
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          <AnimatePresence>
            {filteredFaqs.map((item, index) => (
              <motion.div
                key={item.id || `faq-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <h3 className="text-lg font-medium text-gray-800">{item.question}</h3>
                  <span className="ml-6 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                    {openIndex === index ? '▲' : '▼'}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-gray-100 bg-white px-5 py-4"
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      id={`faq-answer-${index}`}
                    >
                      <p className="text-gray-600">{item.answer}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.topic && (
                          <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                            {categoryIcons[item.topic] || '📌'}{' '}
                            {categoryLabels[item.topic] || item.topic}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/faq"
            className="inline-block rounded-md border border-primary px-5 py-2 text-sm text-primary hover:bg-primary hover:text-white"
          >
            🔍 Voir toutes les questions fréquentes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
