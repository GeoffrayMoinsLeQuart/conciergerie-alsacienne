// src/components/PropertyCard.tsx
'use client';

import { imageBuilder } from '@/sanity/sanity-utils';
import { Property } from '@/types/property';
import Image from 'next/image';
import Link from 'next/link';

export default function PropertyCard({ property }: { property: Property }) {
  const {
    _id,
    slug,
    name,
    shortDescription,
    imagePrincipale,
    modeGestion,
    surface,
    revenuMensuel,
    loyer,
    occupation,
    nbChambres,
  } = property;

  const imageSrc = imagePrincipale ? imageBuilder(imagePrincipale).url() : '/default-property.jpg';

  const url = slug?.current ? `/property/${slug.current}` : '#';

  return (
    <article className="h-full rounded-md shadow-service transition hover:shadow-xl">
      <Link
        href={url}
        aria-label={`Voir la fiche du bien : ${name}`}
        className="group block h-full overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {/* Image principale */}
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={imageSrc}
            alt={name ? `Photo du bien ${name}` : 'Image du bien'}
            fill
            sizes="(max-width: 768px) 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>

        {/* Contenu texte */}
        <div className="flex h-[260px] flex-col justify-between p-4">
          <div>
            <h3 id={`property-${_id}`} className="mb-2 text-lg font-semibold text-black">
              {name}
            </h3>
            <p className="mb-4 text-sm text-gray-600 line-clamp-2">{shortDescription}</p>
          </div>

          <dl className="grid grid-cols-2 gap-2 text-sm text-gray-700 mt-auto">
            {surface && (
              <>
                <dt className="sr-only" key={`${_id}-surface-dt`}>
                  Surface
                </dt>
                <dd key={`${_id}-surface-dd`}>📐 {surface} m²</dd>
              </>
            )}
            {nbChambres && (
              <>
                <dt className="sr-only" key={`${_id}-rooms-dt`}>
                  Chambres
                </dt>
                <dd key={`${_id}-rooms-dd`}>🛏 {nbChambres} ch.</dd>
              </>
            )}
            {modeGestion && (
              <>
                <dt className="sr-only" key={`${_id}-mode-dt`}>
                  Mode de gestion
                </dt>
                <dd key={`${_id}-mode-dd`}>🔧 {modeGestion}</dd>
              </>
            )}
            {modeGestion === 'Conciergerie' && revenuMensuel && (
              <>
                <dt className="sr-only" key={`${_id}-rev-dt`}>
                  Revenu mensuel
                </dt>
                <dd key={`${_id}-rev-dd`}>💰 {revenuMensuel} €</dd>
              </>
            )}
            {modeGestion === 'Gestion Locative' && loyer && (
              <>
                <dt className="sr-only" key={`${_id}-rent-dt`}>
                  Loyer
                </dt>
                <dd key={`${_id}-rent-dd`}>💶 {loyer} €</dd>
              </>
            )}
            {modeGestion === 'Conciergerie' && occupation && (
              <>
                <dt className="sr-only" key={`${_id}-occ-dt`}>
                  Taux d’occupation
                </dt>
                <dd key={`${_id}-occ-dd`}>📊 {occupation}%</dd>
              </>
            )}
          </dl>
        </div>
      </Link>
    </article>
  );
}
