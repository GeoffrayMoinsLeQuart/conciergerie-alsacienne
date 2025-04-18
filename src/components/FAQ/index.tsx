"use client";

import React, { useState } from "react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  type: string[]; // ✅ type contextuel (ex: ['conciergerie'])
  topic?: string; // ✅ thématique (ex: 'travaux')
  icon?: string; // ✅ icône personnalisée éventuelle
  order?: number; // optionnel, pour le tri
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  mainTitle?: string;
  center?: boolean;
}

const FAQ: React.FC<FAQProps> = ({
  items,
  title = "Questions fréquentes",
  subtitle = "Retrouvez les réponses aux questions les plus courantes.",
  mainTitle = "FAQ",
  center = true,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className={`mb-12 ${center ? "text-center" : ""}`}>
          {mainTitle && (
            <span className="mb-4 inline-block rounded bg-primary bg-opacity-10 px-3 py-1 text-xs font-semibold text-primary">
              {mainTitle}
            </span>
          )}
          {title && (
            <h2 className="mb-4 text-3xl font-bold text-dark">{title}</h2>
          )}
          {subtitle && <p className="text-base text-body-color">{subtitle}</p>}
        </div>

        {/* FAQ Items */}
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="rounded-lg bg-white p-6 shadow-sm transition-all duration-300"
              >
                <button
                  className="flex w-full items-center justify-between text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.question}
                  </h3>
                  <span className="ml-6 flex-shrink-0">
                    {openIndex === index ? (
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
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
                        className="h-6 w-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
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
                  <div className="mt-4 text-gray-600 transition-all duration-300">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
