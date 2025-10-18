'use client';

import { FC } from 'react';
import SectionTitle from '@/components/Common/SectionTitle';
import Image from 'next/image';
import { Calculator } from 'lucide-react';
import CTAButtons from '@/components/Buttons/CTAButtons';
import { t } from '@/app/libs/content';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

const BlocProcessusEtPrestations: FC = () => {
  const pageKey = 'gestionLocative';
  const baseKey = 'GestionLocative.ProcessusPrestations';

  const mainTitle = t(pageKey, `${baseKey}.mainTitle`) as string;
  const title = t(pageKey, `${baseKey}.title`) as string;
  const paragraph = t(pageKey, `${baseKey}.paragraph`) as string;
  const steps = t(pageKey, `${baseKey}.steps`) as Step[];
  const ctaLabel = t(pageKey, `${baseKey}.ctaLabel`) as string;

  return (
    <section id="processs" aria-labelledby="processus-title" className="bg-[#f8f9ff] py-20">
      <div className="container">
        <SectionTitle
          id="proces-title"
          mainTitle={mainTitle}
          title={title}
          paragraph={paragraph}
          center
        />

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="animate-fade-in-up group relative rounded-xl bg-white p-6 shadow-service transition hover:shadow-lg"
              aria-labelledby={`step-${step.number}`}
            >
              <div className="mb-4 flex items-center justify-center">
                <Image
                  src={step.icon}
                  alt={`Illustration étape ${step.number}: ${step.title}`}
                  width={120}
                  height={120}
                  className="object-contain !max-w-none !h-auto !w-auto"
                />
              </div>
              <h3 id={`step-${step.number}`} className="mb-2 text-xl font-bold text-dark">
                {step.number}. {step.title}
              </h3>
              <p className="mb-4 text-sm font-medium text-body-color">{step.description}</p>
              <ul className="list-disc space-y-1 pl-4 text-sm text-gray-700">
                {step.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButtons
            primary={{
              label: ctaLabel,
              href: '/estimation',
              icon: <Calculator className="h-5 w-5" />,
              colorClass:
                'inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 font-medium text-white transition hover:bg-opacity-90',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BlocProcessusEtPrestations;
