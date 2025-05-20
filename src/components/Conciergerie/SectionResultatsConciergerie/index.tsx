'use client';

import { FC } from 'react';
import SectionTitle from '@/components/Common/SectionTitle';
import { t } from '@/app/libs/content';

const pageKey = 'conciergerie';
const baseKey = 'Conciergerie.SectionResultatsConciergerie';

interface Stat {
  value: string;
  label: string;
}

export default function SectionResultatsConciergerie() {
  const mainTitle = t(pageKey, `${baseKey}.mainTitle`) as string;
  const title = t(pageKey, `${baseKey}.title`) as string;
  const paragraph = t(pageKey, `${baseKey}.paragraph`) as string;
  const stats = t(pageKey, `${baseKey}.stats`) as Stat[];

  return (
    <section id="resultats" aria-labelledby="resultats-heading" className="bg-[#f8f9ff] py-20">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <SectionTitle
            id="resultats-heading"
            mainTitle={mainTitle}
            title={title}
            paragraph={paragraph}
            center
          />
        </header>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <article
              key={index}
              className="rounded-lg bg-white p-6 text-center shadow-md"
              aria-label={`${stat.value} ${stat.label}`}
            >
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-base font-medium text-body-color">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
