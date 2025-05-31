'use client';

import { useMemo, useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import PropertyCard from './PropertyCard';
import CTAButtons from '../Buttons/CTAButtons';
import { Home } from 'lucide-react';
import { t } from '@/app/libs/content';
import { Property } from '@/types/property';
import dynamic from 'next/dynamic';

// Import dynamique (client-only)
const MasonryWrapper = dynamic(() => import('./MasonryWrapper'), { ssr: false });

export default function Properties({
  properties,
  homePage = false,
}: {
  properties: Property[];
  homePage?: boolean;
}) {
  const [activeTag, setActiveTag] = useState('All');
  const pageKey = 'home';

  // Texte externes
  const { mainTitle, title, paragraph } = t(pageKey, 'Properties.SectionTitle') as {
    mainTitle: string;
    title: string;
    paragraph: string;
  };
  const ariaFilter = t(pageKey, 'Properties.aria.filterListLabel') as string;
  const tags = t(pageKey, 'Properties.tags') as Array<{
    label: string;
    value: string;
    icon: string;
  }>;
  const noResultsText = t(pageKey, 'Properties.noResultsText') as string;
  const ctaLabel = t(pageKey, 'Properties.ctaLabel') as string;

  // 1. Filtrage mémoïsé
  const filteredItems = useMemo(() => {
    if (!Array.isArray(properties)) return [];
    return activeTag === 'All' ? properties : properties.filter((p) => p.modeGestion === activeTag);
  }, [properties, activeTag]);

  // 2. Découpage mémoïsé
  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, 3);
  }, [filteredItems]);

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
            mainTitle={mainTitle}
            title={title}
            paragraph={paragraph}
            center
          />
        </header>

        {/* Filtres */}
        <div
          className="mb-10 flex flex-wrap items-center justify-center gap-4"
          role="group"
          aria-label={ariaFilter}
        >
          {tags.map((tag) => (
            <button
              key={tag.value}
              onClick={() => setActiveTag(tag.value)}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeTag === tag.value
                  ? 'bg-primary text-white shadow-md'
                  : 'border border-gray-300 bg-white text-gray-700 hover:text-primary'
              }`}
              aria-pressed={activeTag === tag.value}
            >
              <span>{tag.icon}</span>
              {tag.label}
            </button>
          ))}
        </div>

        {/* Grille de biens */}
        <div className="flex justify-center">
          <div className="w-full xl:w-10/12 min-h-[420px]" style={{ contain: 'layout' }}>
            {/* Ajout de min-height et contain */}
            {displayedItems.length > 0 ? (
              <MasonryWrapper columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }} gutter="30px">
                {displayedItems.map((property) => (
                  <div
                    key={property._id}
                    className="rounded-xl bg-white p-1 shadow-xl transition hover:shadow-2xl min-h-[550px] max-w-[350px] m-auto" // Ajout de min-height
                    style={{ aspectRatio: '3/4' }} // Ajout d'un ratio d'aspect fixe
                  >
                    <PropertyCard property={property} />
                  </div>
                ))}
              </MasonryWrapper>
            ) : (
              <p className="text-center text-gray-500" role="status" aria-live="polite">
                {noResultsText}
              </p>
            )}
            {/* CTA uniquement si homePage */}
            {homePage && (
              <div className="mt-10 text-center">
                <CTAButtons
                  primary={{
                    label: ctaLabel,
                    href: '/nos-biens',
                    icon: <Home className="h-5 w-5" />,
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
