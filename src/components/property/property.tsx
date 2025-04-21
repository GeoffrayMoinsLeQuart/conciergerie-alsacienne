"use client";

import { imageBuilder } from "@/sanity/sanity-utils";
import { Property } from "@/types/property";
import Image from "next/image";
import Link from "next/link";

export default function SingleProperty({ property }: { property: Property }) {
  const title = property?.name ?? "Titre non renseigné";
  const description =
    property?.shortDescription ?? "Description non disponible.";
  const imageSrc = property?.imagePrincipale
    ? imageBuilder(property.imagePrincipale).url()
    : "/default-property.jpg";
  const slug = property?.slug?.current || "#";

  const isValidImage = typeof imageSrc === "string" && imageSrc.trim() !== "";

  return (
    <Link
      href={`/property/${slug}`}
      className="mb-3 inline-block text-xl font-semibold text-black hover:text-primary"
    >
      <div className="mb-4">
        <div className="group relative mb-8 aspect-[518/291] overflow-hidden rounded-md shadow-service">
          {isValidImage && (
            <Image
              src={imageSrc}
              alt={`Image de ${title}`}
              fill
              sizes="(max-width: 768px) 100vw"
              className="w-full object-cover"
              priority
            />
          )}
        </div>
        <h3 className="mt-6">{title}</h3>
        <p className="text-base font-medium text-body-color">{description}</p>
      </div>
    </Link>
  );
}
