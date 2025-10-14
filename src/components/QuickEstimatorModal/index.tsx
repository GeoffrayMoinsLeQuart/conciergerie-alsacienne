'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import MultiStepQuestionnaire from '@/components/MultiStepQuestionnaire';

interface QuickEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialStep?: number;
}

export default function QuickEstimatorModal({
  isOpen,
  onClose,
  initialStep = 1,
}: QuickEstimatorModalProps) {
  // ✅ Bloque le scroll quand la modale est ouverte
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // ✅ Fermer automatiquement à la fin du questionnaire
  useEffect(() => {
    const handleClose = () => onClose();
    window.addEventListener('estimation:complete', handleClose);
    return () => window.removeEventListener('estimation:complete', handleClose);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/10 backdrop-blur-[4px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* ─────────────── Motion container (animation entrée/sortie) ─────────────── */}
          <motion.div
            key="modal"
            initial={{ scale: 0.97, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.97, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 22, stiffness: 250 }}
            className="relative w-full max-w-3xl mx-4 rounded-2xl shadow-xl overflow-hidden bg-white dark:bg-neutral-900 border border-gray-200"
          >
            {/* ✅ Wrapper sans transform pour corriger l’autocomplétion mobile */}
            <div style={{ transform: 'none' }}>
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-200 bg-white">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  Estimation personnalisée
                </h2>
                <button
                  onClick={onClose}
                  aria-label="Fermer la fenêtre"
                  className="text-gray-500 hover:text-gray-800 dark:hover:text-white transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Contenu */}
              <div className="p-6 max-h-[80vh] overflow-y-auto bg-white">
                <p className="text-sm text-muted-foreground mb-6">
                  Répondez à quelques questions et recevez votre estimation personnalisée sous 24h.
                </p>

                <MultiStepQuestionnaire variant="light" initialStep={initialStep} />
              </div>
            </div>
          </motion.div>

          {/* ✅ Clic fond pour fermer */}
          <div
            className="fixed inset-0 z-[-1]"
            onClick={onClose}
            aria-hidden="true"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}