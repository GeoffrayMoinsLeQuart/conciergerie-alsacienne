'use client';

import { FC } from 'react';
import SectionTitle from '@/components/Common/SectionTitle';
import { motion } from 'framer-motion';

const stats = [
  { value: '+35%', label: 'de revenus en moyenne' },
  { value: '100%', label: 'automatisé & délégué' },
  { value: '0€', label: 'de frais fixes (formule au % seulement)' },
  { value: '4.6⭐', label: 'moyenne des avis voyageurs' },
];

const SectionResultatsConciergerie: FC = () => {
  return (
    <section
      id="resultats"
      aria-labelledby="resultats-heading"
      className="bg-[#f8f9ff] py-20"
    >
      <div className="container">
        <header className="mb-12 text-center">
          <SectionTitle
            id="resultats-heading"
            mainTitle="RÉSULTATS CONCRETS"
            title="Ce que nos clients obtiennent réellement"
            paragraph="Notre modèle repose sur une stratégie de valorisation et une optimisation constante de vos performances locatives."
            center
          />
        </header>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.article
              key={index}
              className="rounded-lg bg-white p-6 text-center shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              aria-label={`${stat.value} ${stat.label}`}
            >
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-base font-medium text-body-color">{stat.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionResultatsConciergerie;
