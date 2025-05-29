// src/components/Home/About/index.tsx
'use client';

import { FC } from 'react';
import { Phone } from 'lucide-react';
import CTAButtons from '@/components/Buttons/CTAButtons';
import { motion, useReducedMotion } from 'framer-motion';
import { t } from '@/app/libs/content';
import { formatNumber, formatPercentage } from '@/utils/formatting';
import SocialLinks from './SocialLinks';
import Graphic from './Graphic';

interface Stat {
  label: string;
  value: string;
}

const About: FC = () => {
  const reduce = useReducedMotion();
  const pageKey = 'home';

  // Récupération des données
  const title = t(pageKey, 'About.title');
  const description = t(pageKey, 'About.description');
  const promiseHeading = t(pageKey, 'About.promiseHeading');
  const rawPromises = t(pageKey, 'About.promises');
  const promises: string[] = Array.isArray(rawPromises) ? rawPromises : [];
  const ctaLabel = t(pageKey, 'About.ctaLabel');
  const rawStats = t(pageKey, 'About.stats');
  const stats: Stat[] = Array.isArray(rawStats) ? rawStats : [];

  // Accessibilité
  const sectionId = 'about';
  const titleId = t(pageKey, 'About.aria.titleId');
  const promisesLabel = t(pageKey, 'About.aria.promiseListLabel');
  const statsLabel = t(pageKey, 'About.aria.statsListLabel');

  // Animations
  const listVariants = reduce
    ? undefined
    : { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
  const itemVariants = reduce
    ? undefined
    : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <section
      id={sectionId}
      aria-labelledby={titleId}
      className="relative z-10 bg-[#f8f9ff] py-16 sm:py-24"
    >
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h2 id={titleId} className="text-3xl font-bold text-gray-800 md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">{description}</p>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Promesses + CTA */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-primary">{promiseHeading}</h3>
            <ul className="mb-8 space-y-3 text-base text-gray-700" aria-label={promisesLabel}>
              {promises.map((p, i) => (
                <li key={i}>✅ {p}</li>
              ))}
            </ul>
            <CTAButtons
              primary={{
                label: ctaLabel,
                href: 'tel:+333621471922',
                icon: <Phone className="h-5 w-5" aria-hidden="true" />,
                colorClass:
                  'bg-primary text-white hover:bg-primary/90 focus:ring-2 focus:ring-primary',
              }}
            />
          </div>

          {/* Statistiques + SocialLinks */}
          <div>
            <motion.ul
              className="grid grid-cols-2 gap-6 text-center min-h-[120px]" // Ajout de min-height
              style={{ contain: 'layout' }} // Ajout de contain: layout
              initial={reduce ? undefined : 'hidden'}
              whileInView={reduce ? undefined : 'visible'}
              viewport={{ once: true }}
              variants={listVariants}
              aria-label={statsLabel}
            >
              {stats.map((stat) => {
                const isPercent = stat.value.includes('%');
                const formattedValue = isPercent
                  ? formatPercentage(stat.value)
                  : formatNumber(Number(stat.value));

                return (
                  <motion.li
                    key={stat.label}
                    className="flex flex-col items-center min-h-[80px]" // Ajout de min-height
                    variants={itemVariants}
                  >
                    <span className="mb-1 text-3xl font-bold text-primary">{formattedValue}</span>
                    <span className="text-sm text-gray-600">{stat.label}</span>
                  </motion.li>
                );
              })}
            </motion.ul>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Élément décoratif non-animé pour éviter le CLS */}
      <Graphic aria-hidden="true" />
    </section>
  );
};

export default About;
