'use client';

import { FC } from 'react';
import SectionTitle from '@/components/Common/SectionTitle';
import dynamic from 'next/dynamic';

const MotionLi = dynamic(() => import('framer-motion').then((mod) => mod.motion.li), {
  ssr: false,
});

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

const TimelineProcess: FC = () => {
  return (
    <section id="processus" aria-labelledby="processus-heading" className="bg-white py-24">
      <div className="container">
        <header className="mb-10 text-center">
          <SectionTitle
            id="processus-heading"
            mainTitle="PROCESSUS"
            title="Un parcours clair, maîtrisé, et évolutif"
            paragraph="Notre approche étape par étape vous garantit sérénité et performance, dès la mise en service."
            center
          />
        </header>

        <ol
          className="relative flex flex-col gap-10 lg:flex-row lg:justify-between"
          role="list"
          aria-label="Étapes du processus de gestion locative"
        >
          {processSteps.map((step, i) => (
            <MotionLi
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.25 }}
              viewport={{ once: true }}
              className="relative flex-1 text-center"
              role="listitem"
              aria-labelledby={`step-title-${i}`}
            >
              {/* Numéro dans un cercle */}
              <div className="mb-6 flex justify-center">
                <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary text-xl font-bold text-white shadow-lg">
                  {i + 1}
                </div>
              </div>

              {/* Titre et description */}
              <h3 id={`step-title-${i}`} className="mb-2 text-xl font-semibold text-black">
                {step.title}
              </h3>
              <p className="mx-auto max-w-xs text-base text-body-color">{step.description}</p>

              {/* Ligne de liaison (desktop uniquement) */}
              {i < processSteps.length - 1 && (
                <>
                  <div className="absolute right-[-50%] top-[35px] z-[-1] hidden h-1 w-full bg-primary lg:block" />
                  <div className="absolute right-[-7px] top-[29px] hidden h-0 w-0 border-b-[6px] border-l-[10px] border-t-[6px] border-b-transparent border-l-primary border-t-transparent lg:block" />
                </>
              )}
            </MotionLi>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default TimelineProcess;
