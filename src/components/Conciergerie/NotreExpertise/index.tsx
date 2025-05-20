'use client';

import { FC } from 'react';
import SectionTitle from '@/components/Common/SectionTitle';
import { Mail } from 'lucide-react';
import { t } from '@/app/libs/content';

const pageKey = 'conciergerie';
const baseKey = 'Conciergerie.NotreExpertise';

const NotreExpertise: FC = () => {
  const mainTitle   = t(pageKey, `${baseKey}.mainTitle`)   as string;
  const title       = t(pageKey, `${baseKey}.title`)       as string;
  const paragraph   = t(pageKey, `${baseKey}.paragraph`)   as string;
  const niveaux     = t(pageKey, `${baseKey}.niveaux`)     as Array<{ name: string; level: string; items: string[] }>;
  const footerText  = t(pageKey, `${baseKey}.footerText`)  as string;
  const ctaLabel    = t(pageKey, `${baseKey}.cta.label`)   as string;
  const ctaHref     = t(pageKey, `${baseKey}.cta.href`)    as string;

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="bg-[#f8f9ff] py-20"
    >
      <div className="container mx-auto px-4">
        <header className="mb-10 text-center">
          <SectionTitle
            id="expertise-heading"
            mainTitle={mainTitle}
            title={title}
            paragraph={paragraph}
            center
          />
        </header>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {niveaux.map((niveau) => (
            <article
              key={niveau.level}
              aria-labelledby={`expertise-${niveau.level}`}
              className={`rounded-lg p-8 shadow-md ${
                niveau.level === 'luxe' ? 'bg-primary text-white' : 'bg-white text-black'
              }`}
            >
              <h3
                id={`expertise-${niveau.level}`}
                className="mb-4 text-2xl font-bold"
              >
                {niveau.name}
              </h3>
              <ul className="mb-6 space-y-4 list-disc list-inside">
                {niveau.items.map((item, i) => (
                  <li key={i} className="text-base font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <footer className="mt-10 text-center">
          <p className="mb-6 text-base font-medium text-body-color">
            {footerText}
          </p>
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white hover:bg-opacity-90"
            aria-label={ctaLabel}
          >
            <Mail className="h-5 w-5 mr-2" />
            {ctaLabel}
          </a>
        </footer>
      </div>
    </section>
  );
};

export default NotreExpertise;
