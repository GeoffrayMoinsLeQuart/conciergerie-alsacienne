'use client';

import { FC } from 'react';
import CTAButtons from '@/components/Buttons/CTAButtons';
import { Calculator, Mail } from 'lucide-react';
import dynamic from 'next/dynamic';
import { t } from '@/app/libs/content';

const MotionSection = dynamic(() => import('framer-motion').then(mod => mod.motion.section), {
  ssr: false,
});

const CTAGestionLocative: FC = () => {
  const pageKey = 'gestionLocative';
  const baseKey = 'GestionLocative.CTAGestionLocative';

  const heading       = t(pageKey, `${baseKey}.heading`)       as string;
  const paragraph     = t(pageKey, `${baseKey}.paragraph`)     as string;
  const primaryLabel  = t(pageKey, `${baseKey}.primary.label`) as string;
  const primaryHref   = t(pageKey, `${baseKey}.primary.href`)  as string;
  const secondaryLabel= t(pageKey, `${baseKey}.secondary.label`) as string;
  const secondaryHref = t(pageKey, `${baseKey}.secondary.href`) as string;
  const contactPrompt = t(pageKey, `${baseKey}.contactPrompt`) as string;
  const phoneNumber   = t(pageKey, `${baseKey}.phoneNumber`)   as string;
  const phoneHref     = t(pageKey, `${baseKey}.phoneHref`)     as string;

  return (
    <MotionSection
      id="cta-gestion"
      role="contentinfo"
      aria-labelledby="cta-gestion-title"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-primary/10 py-20"
    >
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2
          id="cta-gestion-title"
          className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl"
        >
          {heading}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
          {paragraph}
        </p>
        <CTAButtons
          primary={{
            label: primaryLabel,
            href: primaryHref,
            icon: <Calculator className="h-5 w-5" />
          }}
          secondary={{
            label: secondaryLabel,
            href: secondaryHref,
            icon: <Mail className="h-5 w-5" />
          }}
        />
        <p className="mt-8 text-sm text-gray-600">
          {contactPrompt}
          <a
            href={phoneHref}
            aria-label={`Appelez-nous au ${phoneNumber}`}
            className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80"
          >
            {phoneNumber}
          </a>
        </p>
      </div>
    </MotionSection>
  );
};

export default CTAGestionLocative;
