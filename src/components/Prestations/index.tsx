// src/components/NosPrestations.tsx
'use client';

import { FC } from 'react';
import SectionTitle from '@/components/Common/SectionTitle';
import { prestationConciergerie, prestationGestionLocative } from '@/static-data/prestation';
import { usePathname } from 'next/navigation';
import Prestations from '@/components/Prestations/Prestations';

const NosPrestations: FC = () => {
  const pathname = usePathname() || '';
  const isGestion = pathname.includes('gestion-locative');
  const prestations = isGestion ? prestationGestionLocative : prestationConciergerie;

  const title = isGestion
    ? 'Une gestion complète et transparente'
    : 'Une conciergerie complète pour votre bien';

  const paragraph = isGestion
    ? "Nous prenons en charge tous les aspects de la gestion locative pour vous offrir une tranquillité d'esprit totale."
    : 'Nous proposons une gamme complète de services pour assurer une gestion optimale de votre bien et une expérience exceptionnelle pour vos voyageurs.';

  return (
    <section
      id="prestations"
      className="bg-[#f8f9ff] py-20"
      aria-labelledby="nos-prestations-title"
    >
      <div className="container mx-auto">
        <header className="mb-12 text-center">
          <SectionTitle
            id="nos-prestations-title"
            mainTitle="NOS PRESTATIONS"
            title={title}
            paragraph={paragraph}
            center
          />
        </header>

        {/* Semantic list for accessibility/mobile */}
        <Prestations prestations={prestations} />
      </div>
    </section>
  );
};

export default NosPrestations;
