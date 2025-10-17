'use client';

import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../Buttons/button';

export const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Mouvement vertical fluide du fond
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <section
      id="hero-conciergerie"
      aria-labelledby="hero-heading"
      ref={ref}
      className="relative flex items-center justify-center min-h-screen 
      bg-gradient-to-br from-primary/10 via-background to-secondary/20 overflow-hidden"
    >
      {/* ✅ Image de fond avec parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-[0.08]"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80')] bg-cover bg-center"
          role="presentation"
        />
      </motion.div>

      {/* ✅ Overlay lisibilité */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"
        aria-hidden="true"
      />

      {/* ✅ Contenu centré verticalement */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* ✅ Titre principal */}
          <header className="space-y-4">
            <h1
              id="hero-heading"
              className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
            >
              Votre bien, géré comme un{' '}
              <span className="text-primary">hôtel 5 étoiles</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Conciergerie haut de gamme en Alsace — Mulhouse, Colmar et Strasbourg.
              <br />
              On s’occupe de tout, vous respirez.
            </p>
          </header>

          {/* ✅ Bouton CTA principal */}
          <div className="pt-4 space-y-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="/contact" aria-label="Obtenir mon estimation gratuite">
                Obtenir mon estimation gratuite
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </Button>

            <p className="text-sm text-muted-foreground">
              +50 propriétaires nous font déjà confiance
            </p>
          </div>

          {/* ✅ Statistiques clés */}
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: '+30 %', label: 'de revenus vs location longue durée' },
              { value: '98 %', label: 'de taux d’occupation moyen' },
              { value: '4.9 / 5', label: 'satisfaction propriétaires' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;