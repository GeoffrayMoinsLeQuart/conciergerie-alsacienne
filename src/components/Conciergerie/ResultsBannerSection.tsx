'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ResultsBannerSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Parallax subtil sur le fond
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '3%']);

  return (
    <section
      id="results"
      aria-labelledby="results-heading"
      ref={ref}
      className="py-16 md:py-20 bg-gradient-to-r 
      from-primary/10 via-background to-primary/10 border-t border-b border-primary/10 text-center"
    >
      {/* ✅ Fond parallax très doux */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80')] bg-cover bg-center"
          role="presentation"
        />
      </motion.div>

      {/* ✅ Overlay lisibilité */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95"
        aria-hidden="true"
      />

      {/* ✅ Contenu principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 relative z-10"
      >
        <h3
          id="results-heading"
          className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-snug"
        >
          +35&nbsp;% de revenus en moyenne pour nos propriétaires alsaciens
        </h3>

        <p className="text-base md:text-lg text-muted-foreground">
          Mulhouse • Colmar • Strasbourg — +50&nbsp;biens gérés,&nbsp; satisfaction&nbsp;
          <span className="text-primary font-semibold">4.9⭐</span>
        </p>
      </motion.div>
    </section>
  );
}
