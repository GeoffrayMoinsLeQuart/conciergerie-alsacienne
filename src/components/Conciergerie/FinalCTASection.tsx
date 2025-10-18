'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Calculator, Calendar } from 'lucide-react';
import QuickEstimatorModal from '@/components/QuickEstimatorModal';

export default function FinalCTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative py-24 sm:py-28 md:py-32 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white overflow-hidden"
    >
      {/* ✅ Motif subtil en fond */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80')] bg-cover bg-center" />

      {/* ✅ Contenu centré */}
      <div className="relative container mx-auto px-6 sm:px-8 lg:px-10 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* --- Titre principal --- */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.4)]">
            Transformez votre bien en&nbsp;
            <span className="underline decoration-primary/40 underline-offset-4">
              revenu passif
            </span>
            &nbsp;sans effort.
          </h2>

          {/* --- Sous-titre --- */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-12">
            Estimez vos revenus potentiels en location courte durée, gratuitement et sans
            engagement.
          </p>

          {/* --- CTA principal --- */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-10">
            {/* Téléphone */}
            <a href="tel:+33621471922" className="w-full sm:w-auto">
              <button className="inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-semibold text-[#E63946] bg-white rounded-xl shadow-lg hover:bg-white/90 hover:shadow-xl transition-all duration-300 w-full">
                <Phone className="w-6 h-6" />
                06&nbsp;21&nbsp;47&nbsp;19&nbsp;22
              </button>
            </a>

            {/* Contact */}
            <button
              onClick={() => (window.location.href = '/contact')}
              className="inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-semibold text-white border-2 border-white/40 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
            >
              <Mail className="w-6 h-6" />
              Nous contacter
            </button>

            {/* Estimation rapide */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-semibold text-white bg-[#C21E2B] hover:bg-[#A01823] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              <Calculator className="w-6 h-6" />
              Estimer mon bien
            </button>
          </div>

          {/* --- Disponibilité --- */}
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm sm:text-base">
            <Calendar className="w-5 h-5" />
            <span>Disponible du lundi au samedi, 9h à 19h</span>
          </div>
        </div>
      </div>

      {/* --- Modale intégrée --- */}
      <QuickEstimatorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialStep={1}
      />
    </motion.section>
  );
}
