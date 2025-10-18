'use client';

import { motion } from 'framer-motion';
import { Button } from '../Buttons/button';
import { ClipboardCheck, Camera, FileCheck, Wrench, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Évaluation initiale',
    description: 'Estimation du loyer, conseils et signature du mandat',
  },
  {
    icon: Camera,
    title: 'Mise en location',
    description: 'Photos, annonces, visites et sélection des locataires',
  },
  {
    icon: FileCheck,
    title: 'Installation du locataire',
    description: 'Bail, état des lieux, assurances et remise des clés',
  },
  {
    icon: Wrench,
    title: 'Gestion quotidienne',
    description: 'Loyers, demandes, maintenance et suivi régulier',
  },
  {
    icon: RefreshCw,
    title: 'Relocation ou renouvellement',
    description: 'Sortie, remise en location ou prolongation du bail',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F9FAFB] relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-[#3B82F6] font-semibold mb-4">
            Accompagnement & Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A8A] mb-6">
            Notre méthode en 5 étapes claires et efficaces
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            De la première estimation à la gestion quotidienne, nous orchestrons chaque étape avec
            précision pour vous garantir tranquillité et rentabilité.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative space-y-12 max-w-5xl mx-auto">
          {/* Ligne verticale subtile */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#3B82F6]/30" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 rounded-full bg-[#3B82F6]/10 flex items-center justify-center text-[#1E3A8A] shadow-sm border border-[#3B82F6]/20">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <span className="absolute -bottom-3 -right-3 text-white bg-[#3B82F6] w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold shadow-md">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-16">
          <Button
            size="lg"
            className="bg-[#1E3A8A] border-2 border-[#1E3A8A] text-white font-semibold px-10 py-5 hover:bg-[#E63946] hover:border-[#E63946] transition-all duration-300 shadow-lg"
          >
            Estimer mes revenus locatifs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;