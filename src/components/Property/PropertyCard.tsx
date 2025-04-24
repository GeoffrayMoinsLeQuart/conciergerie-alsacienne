"use client";

import { imageBuilder } from "@/sanity/sanity-utils";
import { Property } from "@/types/property";
import Image from "next/image";
import Link from "next/link";

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
    categories,
  } = property;

  const imageSrc = imagePrincipale
    ? imageBuilder(imagePrincipale).url()
    : "/default-property.jpg";

  const url = slug?.current ? `/property/${slug.current}` : "#";

  return (
<Link
  href={url}
  className="group block h-full overflow-hidden rounded-md shadow-service transition hover:shadow-xl"
>
  <div className="relative aspect-[4/3] w-full">
    <Image
      src={imageSrc}
      alt={name ?? "Image du bien"}
      fill
      sizes="(max-width: 768px) 100vw"
      className="object-cover transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  <div className="flex h-[260px] flex-col justify-between p-4">
    <div>
      <h3 className="mb-2 text-lg font-semibold text-black">{name}</h3>
      <p className="mb-4 text-sm text-gray-600 line-clamp-2">
        {shortDescription}
      </p>
    </div>

    <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 mt-auto">
      {surface && <div>📐 {surface} m²</div>}
      {nbChambres && <div>🛏 {nbChambres} ch.</div>}
      {modeGestion && <div>🔧 {modeGestion}</div>}
      {modeGestion === "Conciergerie" && revenuMensuel && (
        <div>💰 {revenuMensuel} €</div>
      )}
      {modeGestion === "Gestion Locative" && loyer && (
        <div>💶 {loyer} €</div>
      )}
      {modeGestion === "Conciergerie" && occupation && (
        <div>📊 {occupation}%</div>
      )}
    </div>
  </div>
</Link>

  );
}
