'use client';

import { FC } from 'react';
import SectionTitle from '@/components/Common/SectionTitle';
import { t } from '@/app/libs/content';

const pageKey = 'conciergerie';
const baseKey = 'Conciergerie.SectionTransparence';

export default function SectionTransparence() {
  const mainTitle = t(pageKey, `${baseKey}.mainTitle`) as string;
  const title = t(pageKey, `${baseKey}.title`) as string;
  const paragraph = t(pageKey, `${baseKey}.paragraph`) as string;
  const blocks = t(pageKey, `${baseKey}.blocks`) as Array<{
    heading: string;
    items: string[];
  }>;
  const footer = t(pageKey, `${baseKey}.footer`) as string;

  return (
    <section id="transparence" aria-labelledby="transparence-heading" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <SectionTitle
            id="transparence-heading"
            mainTitle={mainTitle}
            title={title}
            paragraph={paragraph}
            center
          />
        </header>

        <div className="mx-auto max-w-3xl rounded-lg bg-[#f8f9ff] p-8 shadow-md">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {blocks.map((block, idx) => (
              <article
                key={idx}
                aria-labelledby={`transparence-block-heading-${idx}`}
                className="text-body-color"
              >
                <h3
                  id={`transparence-block-heading-${idx}`}
                  className="mb-4 text-xl font-bold text-black"
                >
                  {block.heading}
                </h3>
                <ul className="space-y-4 list-disc list-inside text-base font-medium">
                  {block.items.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-sm italic text-body-color">{footer}</p>
        </div>
      </div>
    </section>
  );
}
