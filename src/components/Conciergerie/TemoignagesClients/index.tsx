'use client';

import SectionTitle from '@/components/Common/SectionTitle';
import Image from 'next/image';
import { t } from '@/app/libs/content';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export default function TémoignagesClients() {
  const pageKey = 'conciergerie';
  const baseKey = 'Conciergerie.TemoignagesClients';

  const mainTitle = t(pageKey, `${baseKey}.mainTitle`) as string;
  const title = t(pageKey, `${baseKey}.title`) as string;
  const paragraph = t(pageKey, `${baseKey}.paragraph`) as string;
  // ici on récupère bien un tableau
  const items = t(pageKey, `${baseKey}.items`) as Testimonial[];

  return (
    <section id="temoignages" aria-labelledby="temoignages-heading" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <SectionTitle
            id="temoignages-heading"
            mainTitle={mainTitle}
            title={title}
            paragraph={paragraph}
            center
          />
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={index}
              className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg"
              aria-label={`Témoignage de ${item.name}`}
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    alt={`Photo de ${item.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
              <blockquote className="italic text-body-color">“{item.quote}”</blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
