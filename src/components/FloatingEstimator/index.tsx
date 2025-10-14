'use client';

import { useEffect, useState } from 'react';
import { Calculator, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFormData } from '@/hooks/useFormData';
import { usePathname } from 'next/navigation';
import { Button } from '../Buttons/button';
import QuickEstimatorModal from '@/components/QuickEstimatorModal';

export default function FloatingEstimator() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const { updateField, formData } = useFormData();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ✅ Fermer modale quand estimation complète
  useEffect(() => {
    const handleClose = () => setIsModalOpen(false);
    window.addEventListener('estimation:complete', handleClose);
    return () => window.removeEventListener('estimation:complete', handleClose);
  }, []);

  const excluded = [
    '/contact',
    '/mentions-legales',
    '/politique-confidentialite',
    '/cgv',
    '/cookies',
    '/merci',
  ];
  if (excluded.includes(pathname)) return null;

  const handleClick = () => {
    if (isMobile) setIsModalOpen(true);
    else setIsOpen((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    setIsOpen(false);
  };

  return (
    <>
      {/* Bouton flottant */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        aria-label="Ouvrir l’estimateur"
        className="fixed bottom-6 right-6 bg-[#E63946] hover:bg-[#C21E2B] text-white rounded-full p-4 shadow-lg transition-all duration-300 z-50 focus:outline-none"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Calculator className="w-6 h-6" />}
      </motion.button>

      {/* Mini-formulaire desktop */}
      <AnimatePresence>
        {isOpen && !isMobile && (
          <motion.div
            key="mini-form"
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white border border-gray-200 rounded-2xl shadow-xl p-6 z-50"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900">
              <Calculator className="w-5 h-5 text-[#E63946]" />
              Estimation rapide
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-900">Type de bien</label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => updateField('propertyType', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/20 outline-none"
                >
                  <option value="">Sélectionnez</option>
                  <option value="studio">Studio</option>
                  <option value="t2">T2</option>
                  <option value="t3">T3 / T4</option>
                  <option value="maison">Maison</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-900">Surface (m²)</label>
                <input
                  type="number"
                  placeholder="Ex: 65"
                  value={formData.surface || ''}
                  onChange={(e) => updateField('surface', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/20 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-900">Ville</label>
                <input
                  type="text"
                  placeholder="Ex: Mulhouse"
                  value={formData.location || ''}
                  onChange={(e) => updateField('location', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/20 outline-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#E63946] hover:bg-[#C21E2B] text-white rounded-lg py-3 font-semibold transition-all shadow-md hover:shadow-lg"
              >
                Continuer
              </Button>

              <p className="text-xs text-gray-500 text-center mt-2">
                Réponse sous 24h • Estimation gratuite et sans engagement
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modale complète */}
      <QuickEstimatorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialStep={isMobile ? 1 : 2}
      />
    </>
  );
}
