// src/components/Home/Prestation/index.tsx
'use client';

import { useState } from 'react';
import { prestationConciergerie, prestationGestionLocative } from '@/static-data/prestation';
import SectionTitle from '@/components/Common/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { t } from '@/app/libs/content';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false,
});

export default function Prestation() {
  const [activeTab, setActiveTab] = useState<'conciergerie' | 'gestion'>('conciergerie');
  const pageKey = 'home';

  // Texte externalisé
  const sectionId = 'prestations';
  const titleId = t(pageKey, 'Prestation.aria.titleId');
  const mainTitle = t(pageKey, 'Prestation.mainTitle');
  const title = t(pageKey, 'Prestation.title');
  const paragraph = t(pageKey, 'Prestation.paragraph');
  const tabLabels = t(pageKey, 'Prestation.tabs') as Record<string, string>;
  const linkLabel = t(pageKey, 'Prestation.linkLabel');

  const prestations =
    activeTab === 'conciergerie' ? prestationConciergerie : prestationGestionLocative;

  return (
    <section id={sectionId} aria-labelledby={titleId} className="bg-white py-20">
      <div className="container">
        <header className="mb-12 text-center">
          <SectionTitle
            id={titleId}
            mainTitle={mainTitle}
            title={title}
            paragraph={paragraph}
            center
          />
        </header>

        {/* Tabs */}
        <div className="mb-12 flex justify-center gap-4">
          {(['conciergerie', 'gestion'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
                activeTab === tab
                  ? 'bg-primary text-white shadow-md'
                  : 'border border-gray-300 bg-white text-gray-700 hover:text-primary'
              }`}
              aria-pressed={activeTab === tab}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>

        {/* Grille des cartes */}
        <MotionDiv
          key={activeTab}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 min-h-[400px]" // Ajout de min-height
          style={{ contain: 'layout' }} // Ajout de contain: layout
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {prestations.map((prestation) => (
            <MotionDiv
              key={prestation.id}
              className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-xl transition duration-300 hover:shadow-2xl min-h-[250px]" // Ajout de min-height
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* Image */}
              <div className="relative mx-auto mb-6 h-24 w-24">
                <Image
                  src={prestation.icon}
                  alt={`${prestation.title} icon`}
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-gray-800">{prestation.title}</h3>
              <p className="mb-4 text-sm text-gray-600">{prestation.description}</p>

              <Link
                href={
                  activeTab === 'conciergerie'
                    ? '/conciergerie#prestations'
                    : '/gestion-locative#prestations'
                }
                className="mt-auto text-sm font-medium text-primary underline underline-offset-4 transition hover:text-primary/80"
              >
                {linkLabel}
              </Link>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
