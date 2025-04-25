'use client';

import { FC } from 'react';
import SectionTitle from '@/components/Common/SectionTitle';
import CTAButtons from '@/components/Buttons/CTAButtons';
import { Mail } from 'lucide-react';

const niveaux = [
  {
    name: 'Niveau Standard',
    level: 'standard',
    bgClass: 'bg-white',
    textClass: 'text-body-color',
    items: [
      'Interventions ciblées pour atteindre nos critères de qualité',
      'Optimisation des espaces existants',
      "Sélection d'éléments décoratifs essentiels",
      "Conseils pour l'aménagement et la disposition",
      'Idéal pour les biens nécessitant des améliorations ponctuelles',
    ],
  },
  {
    name: 'Niveau Luxe',
    level: 'luxe',
    bgClass: 'bg-primary',
    textClass: 'text-white text-opacity-90',
    items: [
      'Transformation complète pour un positionnement ultra-premium',
      "Conception d'ambiance sur mesure",
      'Mobilier et équipements haut de gamme',
      'Éléments décoratifs exclusifs',
      "Parfait pour les biens de caractère visant l'excellence",
    ],
  },
];

const NotreExpertise: FC = () => {
  return (
    <section id="expertise" aria-labelledby="expertise-heading" className="bg-[#f8f9ff] py-20">
      <div className="container">
        <header className="mb-10 text-center">
          <SectionTitle
            id="expertise-heading"
            mainTitle="NOTRE EXPERTISE"
            title="Sublimez Votre Bien Immobilier"
            paragraph="Notre expertise ne se limite pas à la gestion locative. Nous proposons également un service d'accompagnement pour la décoration et l'aménagement de votre bien, vous permettant ainsi de maximiser son potentiel et son attractivité."
            center
          />
        </header>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
          {niveaux.map((niveau) => (
            <article
              key={niveau.level}
              aria-labelledby={`expertise-${niveau.level}`}
              className={`rounded-lg p-8 shadow-md ${niveau.bgClass}`}
            >
              <h3
                id={`expertise-${niveau.level}`}
                className={`mb-4 text-2xl font-bold ${
                  niveau.level === 'luxe' ? 'text-white' : 'text-black'
                }`}
              >
                {niveau.name}
              </h3>
              <ul className="mb-6 space-y-4 list-inside list-disc">
                {niveau.items.map((item, i) => (
                  <li key={i} className={`text-base font-medium ${niveau.textClass}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-center">
          <p className="mb-6 text-base font-medium leading-relaxed text-body-color">
            Les tarifs de ces services sont déterminés sur devis après évaluation complète de votre
            bien et de vos objectifs.
          </p>
          <CTAButtons
            primary={{
              label: 'Demander un devis personnalisé',
              href: '/contact',
              icon: <Mail className="h-5 w-5" />,
              colorClass:
                'inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-opacity-90 lg:px-7',
            }}
          />
        </footer>
      </div>
    </section>
  );
};

export default NotreExpertise;
