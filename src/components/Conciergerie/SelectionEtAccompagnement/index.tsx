// src/components/Conciergerie/SelectionEtAccompagnement.tsx
'use client';

import { FC } from 'react';
import SectionTitle from '@/components/Common/SectionTitle';
import { t } from '@/app/libs/content';

interface Criterion {
  title: string;
  description: string;
}

const SelectionEtAccompagnement: FC = () => {
  const pageKey = 'conciergerie';
  const baseKey = 'Conciergerie.SelectionEtAccompagnement';

  // Chargement des textes
  const mainTitle = t(pageKey, `${baseKey}.mainTitle`) as string;
  const title = t(pageKey, `${baseKey}.title`) as string;
  const paragraph = t(pageKey, `${baseKey}.paragraph`) as string;
  const criteriaRaw = t(pageKey, `${baseKey}.criteria`);
  const criteria: Criterion[] = Array.isArray(criteriaRaw)
    ? (criteriaRaw as Criterion[])
    : [];
  const approachTitle = t(pageKey, `${baseKey}.approachTitle`) as string;
  const approachParagraphsRaw = t(pageKey, `${baseKey}.approachParagraphs`);
  const approachParagraphs: string[] = Array.isArray(approachParagraphsRaw)
    ? (approachParagraphsRaw as string[])
    : [];

  return (
    <section
      id="selection"
      aria-labelledby="selection-heading"
      className="bg-[#f8f9ff] py-20"
    >
      <div className="container mx-auto px-4">
        <header>
          <SectionTitle
            id="selection-heading"
            mainTitle={mainTitle}
            title={title}
            paragraph={paragraph}
            center
          />
        </header>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {criteria.map((item, i) => (
            <article
              key={i}
              className="text-center"
              aria-labelledby={`criterion-${i}`}
            >
              <div className="mx-auto mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-primary font-bold text-white">
                {i + 1}
              </div>
              <h3
                id={`criterion-${i}`}
                className="mb-3 text-xl font-bold text-black"
              >
                {item.title}
              </h3>
              <p className="font-medium text-body-color">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div
          className="mt-14 rounded-lg bg-white p-8 shadow-md"
          aria-label={approachTitle}
        >
          <h3 className="mb-4 text-center text-2xl font-bold text-black">
            {approachTitle}
          </h3>
          {approachParagraphs.map((p, idx) => (
            <p
              key={idx}
              className="mb-5 text-center text-base font-medium leading-relaxed text-body-color"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectionEtAccompagnement;
