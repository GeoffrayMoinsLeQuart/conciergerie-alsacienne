'use client';

import { FC } from 'react';
import SectionTitle from '@/components/Common/SectionTitle';
import { FileText, Camera, BadgeCheck, Shield, CheckCircle } from 'lucide-react';
import { t } from '@/app/libs/content';

interface Item {
  icon: 'FileText' | 'Camera' | 'BadgeCheck' | 'Shield';
  text: string;
}

const iconMap = {
  FileText,
  Camera,
  BadgeCheck,
  Shield,
};

const FraisInitiauxCard: FC = () => {
  const pageKey = 'gestionLocative';
  const baseKey = 'GestionLocative.FraisInitiaux';

  const mainTitle        = t(pageKey, `${baseKey}.mainTitle`)        as string;
  const title            = t(pageKey, `${baseKey}.title`)            as string;
  const paragraph        = t(pageKey, `${baseKey}.paragraph`)        as string;
  const introTitle       = t(pageKey, `${baseKey}.introTitle`)       as string;
  const introDescription = t(pageKey, `${baseKey}.introDescription`) as string;
  const items            = t(pageKey, `${baseKey}.items`)            as Item[];

  return (
    <section className="bg-gray-50 py-16" aria-labelledby="frais-initiaux-title">
      <div className="container mx-auto px-4">
        <SectionTitle
          mainTitle={mainTitle}
          title={title}
          paragraph={paragraph}
          center
        />

        <div
          className="mx-auto mt-10 max-w-5xl rounded-2xl border-l-4 border-primary bg-white p-8 shadow-md"
          role="region"
          aria-labelledby="frais-initiaux-title"
        >
          <div className="mb-6 flex items-center gap-3 text-gray-800">
            <CheckCircle className="h-6 w-6 text-primary" aria-hidden="true" />
            <h3 id="frais-initiaux-title" className="text-xl font-semibold">
              {introTitle}
            </h3>
          </div>

          <p className="mb-6 text-gray-600">{introDescription}</p>

          <ul
            className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2"
            aria-label="Éléments inclus dans les frais initiaux"
          >
            {items.map(({ icon, text }, i) => {
              const Icon = iconMap[icon];
              return (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  </span>
                  <span className="leading-snug">{text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FraisInitiauxCard;
