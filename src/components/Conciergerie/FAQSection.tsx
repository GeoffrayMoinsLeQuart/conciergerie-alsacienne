'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../Buttons/button';

const faqs = [
  {
    question: 'Comment sont calculés vos honoraires ?',
    answer:
      'Nous travaillons uniquement au pourcentage sur les revenus générés par votre bien. Pas de frais fixes : nous ne gagnons que si votre bien performe. Notre commission varie selon la formule choisie et le niveau de service. Contactez-nous pour un devis personnalisé et transparent.',
  },
  {
    question: "Qui s'occupe de l'entretien et du ménage ?",
    answer:
      "Notre équipe de professionnels qualifiés gère l'entretien complet de votre bien. Un ménage approfondi est effectué après chaque départ de voyageur. Nous effectuons également une maintenance préventive régulière et intervenons rapidement en cas de problème.",
  },
  {
    question: 'Puis-je utiliser mon bien personnellement ?',
    answer:
      'Absolument. Vous restez prioritaire sur votre bien. Il vous suffit de bloquer les dates souhaitées sur notre calendrier partagé, et nous ne prendrons aucune réservation durant cette période. Votre flexibilité est préservée.',
  },
  {
    question: 'Quelles sont mes obligations légales ?',
    answer:
      "Nous vous accompagnons dans toutes les démarches : déclaration en mairie, obtention des autorisations, respect des réglementations locales et souscription d'assurances adaptées. Nous nous assurons que votre bien est parfaitement en conformité.",
  },
  {
    question: 'Comment puis-je suivre les performances de mon bien ?',
    answer:
      "Vous recevez un rapport mensuel détaillé incluant le taux d'occupation, les revenus générés, les avis clients et les actions menées. Vous avez également accès à un espace en ligne pour suivre l'activité en temps réel.",
  },
  {
    question: "Quel est le taux d'occupation moyen ?",
    answer:
      "Nos biens affichent un taux d'occupation moyen de 98% grâce à notre présence sur toutes les grandes plateformes, notre tarification dynamique et notre service de conciergerie réactif. Les performances varient selon la localisation et la saison.",
  },
  {
    question: 'Puis-je arrêter le service quand je veux ?',
    answer:
      'Notre contrat est flexible. Vous pouvez interrompre le service avec un préavis de 3 mois. Nous croyons en une relation de confiance basée sur la performance et la satisfaction mutuelle, pas sur un engagement contraint.',
  },
  {
    question: 'Mon bien nécessite-t-il un aménagement spécifique ?',
    answer:
      "Nous évaluons votre bien lors de la première visite. Si des améliorations sont recommandées pour optimiser l'expérience client et les revenus (décoration, équipements), nous vous conseillons sans obligation. Nous pouvons aussi gérer ces aménagements pour vous.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);

  // ✅ Génération du JSON-LD FAQPage pour le SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-20 md:py-28 bg-background"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="faq-heading" className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Questions fréquentes
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Vous avez des questions&nbsp;? Nous avons les réponses.
          </p>
        </div>

        {/* FAQ list */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <h3 className="text-base md:text-lg font-medium text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-primary' : ''
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
                    className="px-6 pb-5 text-muted-foreground leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center mt-12 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
          <p className="text-foreground font-semibold mb-4">Vous avez d'autres questions ?</p>
          <p className="text-sm text-muted-foreground mb-6">
            Contactez-nous directement pour un échange personnalisé sur votre projet.
          </p>
          <Button size="lg" variant="outline" className="shadow-md hover:shadow-lg">
            Parler à un conseiller
          </Button>
        </div>
      </div>
    </section>
  );
}
