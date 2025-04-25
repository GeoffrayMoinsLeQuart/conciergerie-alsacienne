'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/Common/SectionTitle';

const processSteps = [
  {
    title: 'Évaluation préliminaire',
    description:
      'Visite de votre bien, diagnostic selon nos critères de qualité, et recommandations personnalisées.',
  },
  {
    title: 'Préparation du bien',
    description:
      "Création d'annonces, photos pros, décoration si nécessaire, mise en service du logement.",
  },
  {
    title: 'Gestion quotidienne',
    description: 'Réservations, accueil, ménage, maintenance – nous gérons tout pour vous.',
  },
  {
    title: 'Suivi & Optimisation',
    description:
      'Rapports réguliers, ajustement des prix, conseil stratégique pour booster vos revenus.',
  },
];

const TimelineProcessEnhanced: FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <SectionTitle
          mainTitle="PROCESSUS"
          title="Un parcours clair, maîtrisé, et évolutif"
          paragraph="Notre approche étape par étape vous garantit sérénité et performance, dès la mise en service."
          center
        />

        <div className="relative mt-16 flex flex-col gap-10 lg:flex-row lg:justify-between">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              viewport={{ once: true }}
              className="relative flex-1 text-center"
            >
              <div className="mb-6 flex justify-center">
                <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary text-xl font-bold text-white shadow-lg">
                  {i + 1}
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black">{step.title}</h3>
              <p className="mx-auto max-w-xs text-base text-body-color">{step.description}</p>

              {/* Ligne de connexion (desktop only) */}
              {i < processSteps.length - 1 && (
                <>
                  <div className="absolute right-[-50%] top-[35px] z-[-1] hidden h-1 w-full bg-primary lg:block"></div>
                  <div className="absolute right-[-7px] top-[29px] hidden h-0 w-0 border-b-[6px] border-l-[10px] border-t-[6px] border-b-transparent border-l-primary border-t-transparent lg:block" />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineProcessEnhanced;
