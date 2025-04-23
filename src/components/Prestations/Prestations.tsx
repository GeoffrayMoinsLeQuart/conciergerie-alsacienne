"use client";

import { FC } from "react";
import Image from "next/image";
import { Prestation } from "@/types/prestation";

interface PrestationsProps {
  prestations: Prestation[];
}

const Prestations: FC<PrestationsProps> = ({ prestations }) => {
  return (
    <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
      {prestations.map((prestation, index) => (
        <div
          key={prestation.id}
          className="group relative overflow-hidden rounded-lg bg-white p-8 text-center shadow-service transition duration-300 hover:shadow-xl"
          data-wow-delay={`0.${index + 1}s`}
        >
          {/* Icône */}
          <div className="relative mx-auto mb-6 h-28 w-28">
            <Image
              src={prestation.icon}
              alt={prestation.title}
              className="mx-auto object-contain"
              sizes="120px"
              fill
            />
          </div>

          {/* Titre */}
          <h3 className="mb-3 text-xl font-bold text-black">
            {prestation.title}
          </h3>

          {/* Sous‑titre */}
          <p className="mb-4 text-lg font-medium text-gray-700">
            {prestation.description}
          </p>

          {/* Détails */}
          <p className="text-base leading-relaxed text-body-color">
            {prestation.details}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Prestations;
