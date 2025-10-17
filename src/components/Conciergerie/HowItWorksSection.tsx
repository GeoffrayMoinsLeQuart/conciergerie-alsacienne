'use client';

import { useRef } from 'react';
import { Phone, Home, Sparkles, TrendingUp } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../Buttons/button';

const steps = [
  {
    icon: Phone,
    title: 'Évaluation gratuite',
    description:
      'Nous analysons votre bien et estimons son potentiel de revenus en location courte durée.',
  },
  {
    icon: Home,
    title: 'Préparation du bien',
    description:
      'Nous optimisons votre logement : photos professionnelles, équipements, décoration et mise en conformité.',
  },
  {
    icon: Sparkles,
    title: 'Gestion quotidienne',
    description:
      'Annonces, réservations, accueil, ménage, maintenance : nous gérons tout pour vous, 7j/7.',
  },
  {
    icon: TrendingUp,
    title: 'Revenus optimisés',
    description:
      'Vous recevez vos revenus mensuellement. Nous suivons les performances et ajustons la stratégie pour maximiser vos gains.',
  },
];

export default function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Effet parallax subtil
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '4%']);

  return (
    <section
      id="processus"
      aria-labelledby="how-heading"
      ref={ref}
      className="relative py-20 md:py-28 bg-gradient-to-b 
      from-secondary/20 via-background to-background overflow-hidden"
    >
      {/* ✅ Fond parallax */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595526114035-0c1b1c4e544d?auto=format&fit=crop&q=80')] bg-cover bg-center"
          role="presentation"
        />
      </motion.div>

      {/* ✅ Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"
        aria-hidden="true"
      />

      {/* ✅ Contenu */}
      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2
            id="how-heading"
            className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
          >
            Comment ça marche&nbsp;?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Un processus simple et transparent, du premier contact jusqu’aux premiers revenus.
          </p>
        </motion.div>

        {/* Étapes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              {/* Ligne de connexion (desktop) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-1/2 w-full h-[2px] bg-gradient-to-r from-primary/40 to-primary/10"
                  aria-hidden="true"
                />
              )}

              {/* Étape */}
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-4 border-background shadow-lg mb-2 hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-9 h-9 text-primary" aria-hidden="true" />
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-semibold text-primary uppercase tracking-wide">
                    Étape {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center pt-6"
        >
          <Button
            size="lg"
            className="text-lg px-8 py-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="/contact" aria-label="Obtenir mon estimation gratuite">
              Obtenir mon estimation gratuite
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
