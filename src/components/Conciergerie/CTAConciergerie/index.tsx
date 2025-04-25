'use client';

import { FC } from 'react';
import CTAButtons from '@/components/Buttons/CTAButtons';
import { Sparkles } from 'lucide-react';
import dynamic from 'next/dynamic';

const DynamicMotionSection = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.section),
  { ssr: false },
);

const CTAConciergerie: FC = () => {
  return (
    <DynamicMotionSection
      id="cta"
      role="contentinfo"
      aria-labelledby="cta-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-primary py-20 text-center"
    >
      <div className="container mx-auto max-w-3xl px-4">
        <header>
          <h2 id="cta-heading" className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Votre bien mérite le meilleur.
          </h2>
          <p className="mb-6 text-white text-opacity-90">
            Offrez à votre location courte durée un accompagnement premium. Nous transformons chaque
            bien en une expérience remarquable — pour vos voyageurs, et pour votre rentabilité.
          </p>
        </header>

        <CTAButtons
          secondary={{
            label: 'Parler de mon projet',
            href: '/contact',
            icon: <Sparkles className="h-5 w-5" />,
            colorClass: 'bg-white text-primary border-white hover:bg-primary hover:text-white',
          }}
        />
      </div>
    </DynamicMotionSection>
  );
};

export default CTAConciergerie;
