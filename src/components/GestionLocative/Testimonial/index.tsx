'use client';

import { FC } from 'react';
import SectionTitle from '@/components/Common/SectionTitle';
import dynamic from 'next/dynamic';
import { t } from '@/app/libs/content';

const MotionArticle = dynamic(() => import('framer-motion').then((mod) => mod.motion.article), {
  ssr: false,
});

interface Testimonial {
  name: string;
  subtitle: string;
  text: string;
}

const TemoignagesSection: FC = () => {
  const pageKey = 'gestionLocative';
  const baseKey = 'GestionLocative.Temoignages';

  // On récupère tout depuis le JSON
  const mainTitle = t(pageKey, `${baseKey}.mainTitle`) as string;
  const title = t(pageKey, `${baseKey}.title`) as string;
  const paragraph = t(pageKey, `${baseKey}.paragraph`) as string;
  const items = t(pageKey, `${baseKey}.items`) as Testimonial[];

  return (
    <section
      className="bg-white py-10 md:py-16"
      aria-labelledby="temoignages-title"
      id="temoignages"
    >
      <div className="container mx-auto px-4">
        <SectionTitle mainTitle={mainTitle} title={title} paragraph={paragraph} center />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map(({ name, subtitle, text }, idx) => (
            <MotionArticle
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-lg bg-gray-50 p-6 shadow-sm transition duration-300 hover:shadow-md"
              aria-label={`Témoignage client de ${name}`}
            >
              <div className="mb-4 flex items-center">
                <div
                  className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold"
                  aria-hidden="true"
                >
                  {name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{name}</h3>
                  <p className="text-sm text-gray-600">{subtitle}</p>
                </div>
              </div>
              <blockquote className="italic text-gray-600">
                <span className="sr-only">Témoignage : </span>“
                <span className="font-medium text-gray-700">{text}</span>”
              </blockquote>
            </MotionArticle>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemoignagesSection;
