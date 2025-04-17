"use client";

import { FC } from "react";
import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";
import { prestationData } from "@/static-data/prestation";

const NosPrestations: FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <SectionTitle
          mainTitle="NOS SERVICES"
          title="Une conciergerie complète pour votre bien"
          paragraph="Nous proposons une gamme complète de services pour assurer une gestion optimale de votre bien et une expérience exceptionnelle pour vos voyageurs."
          center
        />

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {prestationData.map((prestation, index) => (
            <div
              key={prestation.id}
              className="group relative overflow-hidden rounded-lg bg-white p-8 text-center shadow-service transition duration-300 hover:shadow-xl"
              data-wow-delay={`0.${index + 1}s`}
            >
              {/* Icône */}
              <div className="mx-auto mb-6 h-16 w-16">
                <Image
                  src={prestation.icon}
                  alt={prestation.title}
                  width={64}
                  height={64}
                  className="mx-auto object-contain"
                />
              </div>

              {/* Titre */}
              <h3 className="mb-3 text-xl font-bold text-black">
                {prestation.title}
              </h3>

              {/* Description */}
              <p className="text-base font-medium leading-relaxed text-body-color">
                {prestation.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosPrestations;
