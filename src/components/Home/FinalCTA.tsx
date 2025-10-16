'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Calendar, Calculator } from 'lucide-react';
import QuickEstimatorModal from '@/components/QuickEstimatorModal';

export default function ContactCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative py-24 overflow-hidden bg-gradient-cta sm:py-28 md:py-32"
    >
      {/* Motif décoratif subtil */}
      <div
      // className="absolute inset-0 opacity-10"
      // style={{
      //   backgroundImage:
      //     'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
      // }}
      />

      {/* Contenu */}
      <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Titre principal */}
          <h2
            className="
              text-4xl sm:text-5xl md:text-6xl 
              font-extrabold text-white mb-6 leading-tight
              drop-shadow-[0_3px_10px_rgba(0,0,0,0.3)]
            "
          >
            Prêt à augmenter vos revenus de{' '}
            <span className="underline decoration-white/30 underline-offset-4">+40%</span>
            &nbsp;?
          </h2>

          {/* Sous-titre */}
          <p
            className="
              text-lg sm:text-xl md:text-2xl text-white/90 
              mb-12 max-w-2xl mx-auto leading-relaxed
            "
          >
            Obtenez une estimation personnalisée gratuite et découvrez le vrai potentiel de votre
            bien.
          </p>

          {/* Boutons d’action */}
          <div
            className="
              flex flex-col sm:flex-row justify-center 
              gap-4 sm:gap-5 mb-10
            "
          >
            {/* Téléphone */}
            <a href="tel:+33621471922" className="w-full sm:w-auto">
              <button
                className="
                  inline-flex items-center justify-center gap-3 
                  px-8 py-4 sm:py-5 text-base sm:text-lg font-semibold 
                  text-[#E63946] bg-white rounded-xl 
                  shadow-lg hover:bg-white/90 hover:shadow-xl 
                  transition-all duration-300 w-full
                "
              >
                <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
                06&nbsp;21&nbsp;47&nbsp;19&nbsp;22
              </button>
            </a>

            {/* Contact */}
            <button
              onClick={() => (window.location.href = '/contact')}
              className="
                inline-flex items-center justify-center gap-3 
                px-8 py-4 sm:py-5 text-base sm:text-lg font-semibold 
                text-white border-2 border-white/50 rounded-xl 
                bg-white/10 hover:bg-white/20 backdrop-blur-sm 
                transition-all duration-300 w-full
              "
            >
              <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
              Nous contacter
            </button>

            {/* Estimation rapide */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="
                inline-flex items-center justify-center gap-3 
                px-8 py-4 sm:py-5 text-base sm:text-lg font-semibold 
                text-white bg-[#C21E2B] hover:bg-[#A01823] 
                rounded-xl shadow-lg hover:shadow-xl 
                transition-all duration-300 w-full
              "
            >
              <Calculator className="w-6 h-6 sm:w-7 sm:h-7" />
              Obtenir mon estimation
            </button>
          </div>

          {/* Disponibilité */}
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm sm:text-base">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Disponible du lundi au samedi, 9h à 19h</span>
          </div>
        </div>
      </div>

      {/* Modale intégrée */}
      <QuickEstimatorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialStep={1}
      />
    </motion.section>
  );
}

/* 🔮 Animation du dégradé */
const styles = `
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
`;

if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.textContent = styles;
  document.head.appendChild(styleTag);
}