'use client';

import SectionTitle from '../../Common/SectionTitle';
import { FC } from 'react';
import { ShieldCheck, Gavel, AlertTriangle, Home, Slash, Timer, CheckCircle } from 'lucide-react';
import dynamic from 'next/dynamic';
import { t } from '@/app/libs/content';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false,
});

interface Garantie {
  title: string;
  description: string;
}

interface Highlight {
  title: string;
  description: string;
}

const GarantiesLoyers: FC = () => {
  const pageKey = 'gestionLocative';
  const baseKey = 'GestionLocative.GarantiesLoyers';

  // Récupération du contenu
  const mainTitle = t(pageKey, `${baseKey}.mainTitle`) as string;
  const title = t(pageKey, `${baseKey}.title`) as string;
  const paragraph = t(pageKey, `${baseKey}.paragraph`) as string;
  const highlight = t(pageKey, `${baseKey}.highlight`) as Highlight;
  const features = t(pageKey, `${baseKey}.features`) as Garantie[];
  const footerText = t(pageKey, `${baseKey}.footerText`) as string;

  // Les icônes sont toujours dans cet ordre
  const icons = [ShieldCheck, Timer, Gavel, AlertTriangle, Slash, Home];

  return (
    <section
      id="garanties"
      className="bg-primary bg-opacity-5 py-20"
      aria-labelledby="garanties-title"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          id="garanties-title"
          mainTitle={mainTitle}
          title={title}
          paragraph={paragraph}
          center
        />

        <div className="mx-auto mt-12 max-w-6xl">
          <div className="rounded-lg border-t-4 border-primary bg-white p-8 shadow-md">
            {/* Bloc highlight externalisé */}
            <div className="mb-10 flex flex-col items-center justify-center gap-6 md:flex-row md:items-start">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary bg-opacity-10">
                <CheckCircle className="h-10 w-10 text-primary" aria-hidden="true" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="mb-2 text-2xl font-bold text-gray-800">{highlight.title}</h3>
                <p className="max-w-2xl text-gray-600">{highlight.description}</p>
              </div>
            </div>

            {/* Liste de garanties */}
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feat, idx) => {
                const Icon = icons[idx];
                return (
                  <li key={feat.title}>
                    <MotionDiv
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="flex h-full flex-col rounded-lg bg-gray-50 p-6 shadow-sm transition duration-300 ease-in-out hover:shadow-md"
                    >
                      <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-800">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                          <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                        </span>
                        {feat.title}
                      </h4>
                      <p className="flex-grow text-sm leading-relaxed text-gray-600">
                        {feat.description}
                      </p>
                    </MotionDiv>
                  </li>
                );
              })}
            </ul>

            <p className="mt-10 text-sm text-gray-500">{footerText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GarantiesLoyers;
