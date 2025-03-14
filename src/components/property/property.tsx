"use client";
import { Property } from "@/types/property";
import Image from "next/image";
import Link from "next/link";

export default function SingleProperty({ property }: { property: Property }) {
  return (
    <Link
      href={`/property/${property?.slug}`}
      className="mb-3 inline-block text-xl font-semibold text-black hover:text-primary"
    >
      <div className="mb-4">
        <div className="group relative mb-8 aspect-[518/291] overflow-hidden rounded-md shadow-service">
          <Image src={property?.image} alt="image" fill className="w-full" />
        </div>
        <h3 className="mt-6">{property?.name}</h3>
        <p className="text-base font-medium text-body-color">
          {property?.shortDescription}
        </p>
      </div>
    </Link>
  );
}
