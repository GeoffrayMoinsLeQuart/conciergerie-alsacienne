'use client';

import { FC } from 'react';
import { Phone } from 'lucide-react';
import CTAButtons from '@/components/Buttons/CTAButtons';
import Graphic from './Graphic';
import SocialLinks from './SocialLinks';
import dynamic from 'next/dynamic';

const MotionLi = dynamic(() => import('framer-motion').then((mod) => mod.motion.li), {
  ssr: false,
});

const MotionUl = dynamic(() => import('framer-motion').then((mod) => mod.motion.ul), {
  ssr: false,
});

const stats = [
  { label: 'Biens gérés', value: 120 },
  { label: 'Voyageurs accueillis', value: 3500 },
  { label: "Années d'expérience", value: 8 },
  { label: "Taux d'occupation moyen", value: '85%' },
];

const About: FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative z-10 bg-[#f8f9ff] py-16 sm:py-24"
    >
      <div className="container">
        <header className="mb-12 text-center">
          <h2 id="about-title" className="text-3xl font-bold text-gray-800 md:text-4xl">
            Une gestion sans souci, pensée pour votre rentabilité
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Une équipe locale, expérimentée et exigeante — pour une gestion réellement optimisée,
            centrée sur vos objectifs.
          </p>
        </header>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* ✅ Colonne de gauche : Promesses + CTA */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-primary">Notre promesse</h3>
            <ul className="mb-8 space-y-3 text-base text-gray-700">
              <li>✅ Connaissance approfondie du marché local</li>
              <li>✅ Service personnalisé avec interlocuteur unique</li>
              <li>✅ Transparence totale et reporting détaillé</li>
              <li>✅ Optimisation continue de vos revenus</li>
            </ul>

            <CTAButtons
              primary={{
                label: 'Discutons de votre projet',
                href: 'tel:0033621471922',
                icon: <Phone className="h-5 w-5" />,
                colorClass: 'bg-primary text-white hover:bg-primary/90',
              }}
            />
          </div>

          {/* ✅ Colonne de droite : Statistiques animées */}
          <div>
            <MotionUl
              className="grid grid-cols-2 gap-6 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {stats.map((stat) => (
                <MotionLi
                  key={stat.label}
                  className="flex flex-col items-center"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <span className="mb-1 text-3xl font-bold text-primary">
                    {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                  </span>
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </MotionLi>
              ))}
            </MotionUl>

            {/* Lien vers réseaux si activés */}
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Élément graphique animé */}
      <Graphic />
    </section>
  );
};

export default About;
