'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../Buttons/button';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSimpleProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
}

function FAQSimple({
  faqs,
  title = 'Questions fréquentes',
  subtitle = 'Vous avez des questions ? Nous avons les réponses.',
  ctaLabel = 'Parler à un conseiller',
}: FAQSimpleProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);

  // ✅ JSON-LD Schema.org SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      void document.head.removeChild(script); // ✅ Pas de valeur retournée
    };
  }, [faqs]);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-20 md:py-28 bg-gradient-to-b from-white via-[#F9FAFB] to-[#EEF2F6]"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* ✅ Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A8A] mb-6">{title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* ✅ FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <h3 className="text-base md:text-lg font-medium text-[#1E3A8A] pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-[#E63946]' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key={`answer-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-gray-600 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* ✅ CTA Final */}
        <div className="text-center mt-16 p-8 bg-gradient-to-br from-[#3B82F6]/10 to-[#E63946]/10 rounded-2xl border border-gray-200">
          <p className="text-[#1E3A8A] font-semibold mb-4">Vous avez d'autres questions ?</p>
          <p className="text-sm text-gray-500 mb-6">
            Contactez-nous pour un échange personnalisé avec un conseiller local.
          </p>
          <Button
            size="lg"
            className="bg-[#E63946] text-white hover:bg-[#E63946]/90 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-[1.03]"
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FAQSimple;
