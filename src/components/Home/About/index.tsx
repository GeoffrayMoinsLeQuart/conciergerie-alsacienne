'use client';

import { FC } from 'react';
import { Phone } from 'lucide-react';
import CTAButtons from '@/components/Buttons/CTAButtons';
import Graphic from './Graphic';
import SocialLinks from './SocialLinks';
import { motion, useReducedMotion } from 'framer-motion';

const stats = [
  { label: 'Biens gérés', value: 120 },
  { label: 'Voyageurs accueillis', value: 3500 },
  { label: "Années d'expérience", value: 8 },
  { label: "Taux d'occupation moyen", value: '85%' },
];

const About: FC = () => {
  const reduce = useReducedMotion();

  // Variantes (uniquement si on n'a pas demandé à réduire)
  const listVariants = reduce
    ? undefined
    : {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      };

  const itemVariants = reduce
    ? undefined
    : {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      };

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative z-10 bg-[#f8f9ff] py-16 sm:py-24"
    >
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h2 id="about-title" className="text-3xl font-bold text-gray-800 md:text-4xl">
            Une gestion sans souci, pensée pour votre rentabilité
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Une équipe locale, expérimentée et exigeante — pour une gestion réellement optimisée,
            centrée sur vos objectifs.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Colonne gauche : Promesses + CTA */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-primary">Notre promesse</h3>
            <ul
              className="mb-8 space-y-3 text-base text-gray-700"
              aria-label="Liste de nos promesses"
            >
              <li>✅ Connaissance approfondie du marché local</li>
              <li>✅ Service personnalisé avec interlocuteur unique</li>
              <li>✅ Transparence totale et reporting détaillé</li>
              <li>✅ Optimisation continue de vos revenus</li>
            </ul>

            <CTAButtons
              primary={{
                label: 'Discutons de votre projet',
                href: 'tel:+333621471922',
                icon: <Phone className="h-5 w-5" aria-hidden="true" />,
                colorClass:
                  'bg-primary text-white hover:bg-primary/90 focus:ring-2 focus:ring-primary',
              }}
            />
          </div>

          {/* Colonne droite : Statistiques animées (ou statiques sur mobile) */}
          <div>
            <motion.ul
              className="grid grid-cols-2 gap-6 text-center"
              initial={reduce ? undefined : 'hidden'}
              whileInView={reduce ? undefined : 'visible'}
              viewport={{ once: true }}
              variants={listVariants}
            >
              {stats.map((stat) => (
                <motion.li
                  key={stat.label}
                  className="flex flex-col items-center"
                  variants={itemVariants}
                >
                  <span className="mb-1 text-3xl font-bold text-primary">
                    {typeof stat.value === 'number'
                      ? stat.value.toLocaleString('fr-FR')
                      : stat.value}
                  </span>
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Graphique décoratif (non-animé pour CLS) */}
      <Graphic aria-hidden="true" />
    </section>
  );
};

export default About;
