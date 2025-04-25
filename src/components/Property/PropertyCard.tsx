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

  const imageSrc = imagePrincipale
    ? imageBuilder(imagePrincipale).url()
    : '/default-property.jpg';

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
            <p className="mb-4 text-sm text-gray-600 line-clamp-2">
              {shortDescription}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-2 text-sm text-gray-700 mt-auto">
            {surface && (
              <div>
                <dt className="sr-only">Surface</dt>
                <dd>📐 {surface} m²</dd>
              </div>
            )}
            {nbChambres && (
              <div>
                <dt className="sr-only">Chambres</dt>
                <dd>🛏 {nbChambres} ch.</dd>
              </div>
            )}
            {modeGestion && (
              <div>
                <dt className="sr-only">Mode de gestion</dt>
                <dd>🔧 {modeGestion}</dd>
              </div>
            )}
            {modeGestion === 'Conciergerie' && revenuMensuel && (
              <div>
                <dt className="sr-only">Revenu mensuel</dt>
                <dd>💰 {revenuMensuel} €</dd>
              </div>
            )}
            {modeGestion === 'Gestion Locative' && loyer && (
              <div>
                <dt className="sr-only">Loyer</dt>
                <dd>💶 {loyer} €</dd>
              </div>
            )}
            {modeGestion === 'Conciergerie' && occupation && (
              <div>
                <dt className="sr-only">Taux d’occupation</dt>
                <dd>📊 {occupation}%</dd>
              </div>
            )}
          </dl>
        </div>
      </Link>
    </article>
  );
}
