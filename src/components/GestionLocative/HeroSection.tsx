'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../Buttons/button';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  return (
    <section
      ref={ref}
      id="hero-gestion"
      className="relative flex items-center justify-center min-h-screen 
      bg-gradient-to-b from-white via-[#F8FAFC] to-[#EEF2F6] overflow-hidden"
    >
      {/* ✅ Image de fond subtile */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80')] bg-cover bg-center" />
      </motion.div>

      {/* ✅ Overlay douce */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />

      {/* ✅ Contenu */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <header className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1E3A8A] leading-tight">
              Votre bien loué et géré <span className="text-[#3B82F6]">en toute sérénité</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Gestion locative complète en Alsace — Mulhouse, Colmar et Strasbourg.
              <br />
              Loyers versés à date fixe, garantie impayés, taux d’occupation de 98 %.
            </p>
          </header>

          <div className="pt-4 space-y-4">
            <Button
              size="lg"
              className="bg-[#1E3A8A] text-white text-lg px-8 py-6 shadow-xl hover:bg-[#E63946] hover:scale-105 transition-all duration-300"
            >
              Estimer mes revenus locatifs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-gray-500">
              Réponse sous 24h • Conseiller dédié à Mulhouse
            </p>
          </div>

          {/* ✅ Statistiques clés */}
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: '100 %', label: 'Garantie loyers impayés' },
              { value: '24 h/24', label: 'Gestion des urgences' },
              { value: '98 %', label: 'Taux d’occupation moyen' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2 bg-white/70 rounded-xl shadow-sm py-6 backdrop-blur-md border border-gray-200"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#1E3A8A]">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 border-l-2 border-[#E63946]/50 pl-2">
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