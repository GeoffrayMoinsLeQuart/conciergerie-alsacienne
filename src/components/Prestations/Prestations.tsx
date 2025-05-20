'use client';

import { FC } from 'react';
import Image from 'next/image';
import { Prestation } from '@/types/prestation';

interface PrestationsProps {
  prestations: Prestation[];
}

const Prestations: FC<PrestationsProps> = ({ prestations }) => (
  <ul
    className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3 items-stretch"
    aria-label="Liste des prestations proposées"
  >
    {prestations.map((prestation, index) => (
      <li key={prestation.id} className="h-full">
        <article
          className="group relative overflow-hidden rounded-lg bg-white p-8 text-center shadow-service transition duration-300 hover:shadow-xl flex flex-col h-full"
          aria-labelledby={`prestation-title-${index}`}
        >
          <div className="relative mx-auto mb-6 h-28 w-28 flex-shrink-0">
            <Image
              src={prestation.icon}
              alt={`Icône représentant ${prestation.title}`}
              className="mx-auto object-contain"
              sizes="120px"
              fill
            />
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 id={`prestation-title-${index}`} className="mb-3 text-xl font-bold text-black">
                {prestation.title}
              </h3>
              <p className="mb-4 text-lg font-medium text-gray-700">{prestation.description}</p>
            </div>

            <p className="text-base leading-relaxed text-body-color">{prestation.details}</p>
          </div>
        </article>
      </li>
    ))}
  </ul>
);

export default Prestations;
