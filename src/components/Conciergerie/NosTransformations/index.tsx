// src/components/Conciergerie/NosTransformations.tsx
'use client';

import { FC } from 'react';
import SectionTitle from '@/components/Common/SectionTitle';
import { t } from '@/app/libs/content';

const NosTransformations: FC = () => {
  const pageKey = 'conciergerie';
  const baseKey = 'Conciergerie.NosTransformations';

  const mainTitle = t(pageKey, `${baseKey}.mainTitle`) as string;
  const title = t(pageKey, `${baseKey}.title`) as string;
  const paragraph = t(pageKey, `${baseKey}.paragraph`) as string;
  const comingSoonText = t(pageKey, `${baseKey}.comingSoonText`) as string;

  return (
    <section
      id="transformations"
      aria-labelledby="transformations-heading"
      className="bg-white py-20"
    >
      <div className="container mx-auto px-4">
        <header className="text-center">
          <SectionTitle
            id="transformations-heading"
            mainTitle={mainTitle}
            title={title}
            paragraph={paragraph}
            center
          />
        </header>

        <div
          className="mt-10"
          role="region"
          aria-label={title}
        >
          {/* Galerie à venir */}
          <div className="rounded-lg border border-dashed border-gray-300 p-10 text-center text-sm italic text-body-color">
            {comingSoonText}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosTransformations;
