// src/components/NosPrestations.tsx
'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import SectionTitle from '@/components/Common/SectionTitle';
import Prestations from '@/components/Prestations/Prestations';
import { prestationConciergerie } from '@/static-data/prestation';
import { t } from '@/app/libs/content';

const NosPrestations: FC = () => {
  const pageKey = 'conciergerie'; // JSON file name
  const baseKey = 'Conciergerie.NosPrestations';

  // Externalized constants
  const mainTitle = t(pageKey, `${baseKey}.mainTitle`) as string;
  const title = t(pageKey, `${baseKey}.titleConciergerie`) as string;
  const paragraph = t(pageKey, `${baseKey}.paragraphConciergerie`) as string;

  // Logic remain unchanged
  const pathname = usePathname() || '';

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
            mainTitle={mainTitle}
            title={title}
            paragraph={paragraph}
            center
          />
        </header>

        {/* Semantic list for accessibility/mobile */}
        <Prestations prestations={prestationConciergerie} />
      </div>
    </section>
  );
};

export default NosPrestations;
