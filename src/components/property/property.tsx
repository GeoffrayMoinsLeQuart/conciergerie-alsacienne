"use client";

import { Property } from "@/types/property";
import Image from "next/image";
import Link from "next/link";

export default function SingleProperty({ property }: { property: Property }) {
  const title = property?.title ?? "Titre non renseigné";
  const description = property?.description ?? "Description non disponible.";
  const imageSrc =
    property?.mainImage || property?.image || "/default-property.jpg";
  const slug = property?.slug?.current || "#";

  return (
    <Link
      href={`/property/${slug}`}
      className="mb-3 inline-block text-xl font-semibold text-black hover:text-primary"
    >
      <div className="mb-4">
        <div className="group relative mb-8 aspect-[518/291] overflow-hidden rounded-md shadow-service">
          <Image
            src={imageSrc}
            alt={`Image de ${title}`}
            fill
            className="w-full object-cover"
            priority
          />
        </div>
        <h3 className="mt-6">{title}</h3>
        <p className="text-base font-medium text-body-color">{description}</p>
      </div>
    </Link>
  );
}
