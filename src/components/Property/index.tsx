// src/components/Properties.tsx
'use client';

import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import SectionTitle from '../Common/SectionTitle';
import { Property } from '@/types/property';
import PropertyCard from './PropertyCard';
import CTAButtons from '../Buttons/CTAButtons';
import { Home } from 'lucide-react';

const propertyTags = [
  { label: 'Tous', value: 'All', icon: '✨' },
  { label: 'Conciergerie', value: 'Conciergerie', icon: '🛏' },
  { label: 'Gestion Locative', value: 'Gestion Locative', icon: '🏠' },
];

export default function Properties({
  properties,
  homePage = false,
}: {
  properties: Property[];
  homePage?: boolean;
}) {
  const [activeTag, setActiveTag] = useState('All');

  const filteredItems = (() => {
    if (!Array.isArray(properties)) return [];
    if (activeTag === 'All') return properties;
    return properties.filter((p) => p.modeGestion === activeTag);
  })();

  const displayedItems = homePage ? filteredItems.slice(0, 3) : filteredItems.slice(0, 3);

  return (
    <section
      id="portfolio"
      aria-labelledby="section-properties-title"
      className="bg-[#f8f9ff] pb-20 pt-[120px]"
    >
      <div className="container">
        <header className="mb-12 text-center">
          <SectionTitle
            id="section-properties-title"
            mainTitle="NOS BIENS EN GESTION"
            title="Des logements soigneusement sélectionnés"
            paragraph="Appartements, studios ou maisons — chaque bien que nous gérons est optimisé pour la rentabilité et pensé pour offrir une expérience exceptionnelle."
            center
          />
        </header>

        {/* Filtres */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
          {propertyTags.map((tag) => (
            <button
              key={tag.value}
              onClick={() => setActiveTag(tag.value)}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeTag === tag.value
                  ? 'bg-primary text-white shadow-md'
                  : 'border border-gray-300 bg-white text-gray-700 hover:text-primary'
              }`}
              aria-pressed={activeTag === tag.value}
              aria-label={`Filtrer les biens par ${tag.label}`}
            >
              <span>{tag.icon}</span>
              {tag.label}
            </button>
          ))}
        </div>

        {/* Grille de biens */}
        <div className="flex justify-center">
          <div className="w-full xl:w-10/12">
            {displayedItems.length > 0 ? (
              <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry gutter="30px">
                  {displayedItems.map((property) => (
                    <div
                      key={property._id}
                      className="rounded-xl bg-white p-1 shadow-xl transition hover:shadow-2xl"
                    >
                      <PropertyCard property={property} />
                    </div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            ) : (
              <p className="text-center text-gray-500" role="status" aria-live="polite">
                Aucun bien trouvé pour ce filtre.
              </p>
            )}

            {/* CTA uniquement si homePage */}
            {homePage && (
              <div className="mt-10 text-center">
                <CTAButtons
                  primary={{
                    label: 'Voir tous nos biens',
                    href: '/nos-biens',
                    icon: <Home className="h-5 w-5" />,
                    colorClass: 'bg-primary text-white hover:bg-primary/90',
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
