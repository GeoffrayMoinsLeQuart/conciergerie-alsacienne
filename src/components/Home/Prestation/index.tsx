// Composant ajusté avec image + grande et ombre plus marquée

'use client';

import { useState } from 'react';
import { prestationConciergerie, prestationGestionLocative } from '@/static-data/prestation';
import SectionTitle from '@/components/Common/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);


export default function Prestation() {
  const [activeTab, setActiveTab] = useState<'conciergerie' | 'gestion'>('conciergerie');

  const prestations =
    activeTab === 'conciergerie' ? prestationConciergerie : prestationGestionLocative;

  return (
    <section
      id="prestations"
      aria-labelledby="prestation-heading"
      className="bg-white py-20"
    >
      <div className="container">
        <header className="mb-12 text-center">
          <SectionTitle
            id="prestation-heading"
            mainTitle="🏆 NOS PRESTATIONS"
            title="Un service complet, taillé pour vos besoins"
            paragraph="Que vous soyez en location courte durée ou en gestion locative classique, nos prestations sont pensées pour maximiser votre rentabilité."
            center
          />
        </header>

        {/* Tabs */}
        <div className="mb-12 flex justify-center gap-4">
          <button
            onClick={() => setActiveTab('conciergerie')}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
              activeTab === 'conciergerie'
                ? 'bg-primary text-white shadow-md'
                : 'border border-gray-300 bg-white text-gray-700 hover:text-primary'
            }`}
            aria-pressed={activeTab === 'conciergerie'}
          >
            🛏 Conciergerie Premium
          </button>
          <button
            onClick={() => setActiveTab('gestion')}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
              activeTab === 'gestion'
                ? 'bg-primary text-white shadow-md'
                : 'border border-gray-300 bg-white text-gray-700 hover:text-primary'
            }`}
            aria-pressed={activeTab === 'gestion'}
          >
            🏠 Gestion Locative
          </button>
        </div>

        {/* Grid cartes */}
        <MotionDiv
          key={activeTab}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {prestations.map((prestation, index) => (
            <MotionDiv
              key={prestation.id}
              className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-xl transition duration-300 hover:shadow-2xl"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* ✅ Image plus grande */}
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
                En savoir plus
              </Link>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
