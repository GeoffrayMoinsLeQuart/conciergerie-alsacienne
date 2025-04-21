"use client";

import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SectionTitle from "../Common/SectionTitle";
import { fetchProperties } from "@/sanity/sanity-utils";
import { Property } from "@/types/property";
import SingleProperty from "./property";

// Liste des tags (types de bien)
const propertyTags = ["All", "appartement", "maison", "studio"];

export default function Properties() {
  const [activeTag, setActiveTag] = useState("All");
  const [properties, setProperties] = useState<Property[]>([]);
  const [items, setItems] = useState<Property[]>([]);

  useEffect(() => {
    async function loadProperties() {
      const properties = await fetchProperties();
      if (Array.isArray(properties)) {
        setProperties(properties);
        setItems(properties); // Initialiser les items affichés
      } else {
        console.error("Unexpected data format:", properties);
      }
    }
    loadProperties();
  }, []);

  const filterItems = (itemTag: any) => {
    setActiveTag(itemTag);
    if (itemTag === "All") {
      return setItems(properties);
    } else {
      const findItems = properties.filter((findItem) => {
        return findItem.categories?.includes(itemTag);
      });
      setItems(findItems);
    }
  };

  return (
    <section id="portfolio" className="bg-[#f8f9ff] pb-[70px] pt-[120px]">
      <div className="container">
        <div className="mx-[-16px] flex flex-wrap">
          <div className="w-full px-4">
            <SectionTitle
              mainTitle="Nos biens disponibles"
              title="Découvrez nos logements"
              paragraph="Parcourez notre sélection de logements en location courte ou moyenne durée : appartements, studios et maisons disponibles en Alsace."
              center
            />
          </div>

          <div className="w-full px-4">
            <div className="portfolio-buttons mb-12 flex flex-wrap items-center justify-center">
              {propertyTags.map((tag, i) => (
                <button
                  key={i}
                  className={`${
                    activeTag === tag
                      ? "active"
                      : "hover:bg-primary/5 hover:text-primary"
                  } mb-2 block rounded-full px-5 py-2 text-sm capitalize text-body-color sm:text-base sm:font-semibold md:mx-2`}
                  onClick={() => filterItems(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="portfolio-container -mx-4 flex justify-center">
          <div className="w-full px-4 xl:w-10/12">
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
              <Masonry gutter="30px">
                {items.length > 0 ? (
                  items.map((property) => (
                    <SingleProperty key={property._id} property={property} />
                  ))
                ) : (
                  <p className="w-full text-center text-gray-500">
                    Aucun bien correspondant à ce type.
                  </p>
                )}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
    </section>
  );
}
