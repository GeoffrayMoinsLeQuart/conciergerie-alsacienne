"use client";

import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SectionTitle from "../Common/SectionTitle";
import { fetchProperties } from "@/sanity/sanity-utils";
import { Property } from "@/types/property";
import Link from "next/link";
import PropertyCard from "./PropertyCard";

const propertyTags = [
  { label: "Tous", value: "All", icon: "✨" },
  { label: "Conciergerie", value: "Conciergerie", icon: "🛏" },
  { label: "Gestion Locative", value: "Gestion Locative", icon: "🏠" },
];

export default function Properties() {
  const [activeTag, setActiveTag] = useState("All");
  const [properties, setProperties] = useState<Property[]>([]);
  const [items, setItems] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProperties() {
      setIsLoading(true);
      const props = await fetchProperties();
      setProperties(props);
      setItems(props);
      setIsLoading(false);
    }
    loadProperties();
  }, []);

  const filterItems = (tag: string) => {
    setActiveTag(tag);
    if (tag === "All") {
      return setItems(properties);
    }
    const filtered = properties.filter((p) => p.modeGestion === tag);
    setItems(filtered);
  };

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

          {/* Filtres par mode de gestion */}
          <div className="w-full px-4">
            <div className="portfolio-buttons mb-12 flex flex-wrap items-center justify-center">
              {propertyTags.map((tag) => (
                <button
                  key={tag.value}
                  onClick={() => filterItems(tag.value)}
                  className={`${
                    activeTag === tag.value
                      ? "bg-primary text-white"
                      : "text-body-color hover:bg-primary/10 hover:text-primary"
                  } mb-2 mx-2 flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold capitalize transition`}
                >
                  <span>{tag.icon}</span>
                  {tag.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Loader */}
        {isLoading ? (
          <p className="text-center text-gray-500">Chargement des biens...</p>
        ) : (
          <div className="portfolio-container -mx-4 flex justify-center">
            <div className="w-full px-4 xl:w-10/12">
              <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
                <Masonry gutter="30px">
                  {items.map((property) => (
                    <PropertyCard key={property._id} property={property} />
                  ))}
                </Masonry>
              </ResponsiveMasonry>

              {/* CTA bas */}
              <div className="mt-16 text-center">
                <h4 className="mb-4 text-xl font-semibold text-black">
                  Vous possédez un bien ?
                </h4>
                <Link
                  href="/simulateur"
                  className="inline-block rounded-md bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary/90"
                >
                  Estimez vos revenus locatifs
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
