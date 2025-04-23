"use client";

import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SectionTitle from "../Common/SectionTitle";
import { Property } from "@/types/property";
import Link from "next/link";
import PropertyCard from "./PropertyCard";

const propertyTags = [
  { label: "Tous", value: "All", icon: "✨" },
  { label: "Conciergerie", value: "Conciergerie", icon: "🛏" },
  { label: "Gestion Locative", value: "Gestion Locative", icon: "🏠" },
];

export default function Properties({
  properties,
  homePage = false,
}: {
  properties: Property[];
  homePage?: boolean;
}) {
  const [activeTag, setActiveTag] = useState("All");

  // Filtrer d'abord selon la tag active
  const filteredItems = (() => {
    if (!Array.isArray(properties)) return [];
    if (activeTag === "All") return properties;
    return properties.filter((p) => p.modeGestion === activeTag);
  })();
  
  const displayedItems = homePage ? filteredItems.slice(0, 3) : filteredItems;

  return (
    <section id="portfolio" className="bg-[#f8f9ff] pb-[70px] pt-[120px]">
      <div className="container">
        <div className="mx-[-16px] flex flex-wrap">
          <div className="w-full px-4 text-center">
            <SectionTitle
              mainTitle="NOS BIENS EN GESTION"
              title="Des logements soigneusement sélectionnés"
              paragraph="Appartements, studios ou maisons — chaque bien que nous gérons est optimisé pour la rentabilité et pensé pour offrir une expérience exceptionnelle."
              center
            />
          </div>

          <div className="w-full px-4">
            <div className="portfolio-buttons mb-12 flex flex-wrap items-center justify-center">
              {propertyTags.map((tag) => (
                <button
                  key={tag.value}
                  onClick={() => setActiveTag(tag.value)}
                  className={`${
                    activeTag === tag.value
                      ? "bg-primary text-white"
                      : "text-body-color hover:bg-primary/10 hover:text-primary"
                  } mx-2 mb-2 flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold capitalize transition`}
                >
                  <span>{tag.icon}</span>
                  {tag.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="portfolio-container -mx-4 flex justify-center">
          <div className="w-full px-4 xl:w-10/12">
            {displayedItems && displayedItems.length > 0 ? (
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              >
                <Masonry gutter="30px">
                  {displayedItems.map((property) => (
                    <PropertyCard key={property._id} property={property} />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            ) : (
              <p className="text-center text-gray-500">Aucun bien trouvé.</p>
            )}

            {homePage && (
              <div className="mt-10 text-center">
                <Link
                  href="/nos-biens"
                  className="inline-block rounded bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary/90"
                >
                  Voir tous nos biens
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
