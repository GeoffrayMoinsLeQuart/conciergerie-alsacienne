"use client";

import { FC } from "react";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";

interface ExpertiseLevel {
  name: string;
  bgClass: string;
  textClass: string;
  items: string[];
  delay: string;
}

const niveaux: ExpertiseLevel[] = [
  {
    name: "Niveau Standard",
    bgClass: "bg-white",
    textClass: "text-body-color",
    delay: "0.1s",
    items: [
      "Interventions ciblées pour atteindre nos critères de qualité",
      "Optimisation des espaces existants",
      "Sélection d'éléments décoratifs essentiels",
      "Conseils pour l'aménagement et la disposition",
      "Idéal pour les biens nécessitant des améliorations ponctuelles",
    ],
  },
  {
    name: "Niveau Luxe",
    bgClass: "bg-primary",
    textClass: "text-white text-opacity-90",
    delay: "0.2s",
    items: [
      "Transformation complète pour un positionnement ultra-premium",
      "Conception d'ambiance sur mesure",
      "Mobilier et équipements haut de gamme",
      "Éléments décoratifs exclusifs",
      "Parfait pour les biens de caractère visant l'excellence",
    ],
  },
];

const NotreExpertise: FC = () => {
  return (
    <section className="bg-[#f8f9ff] py-20">
      <div className="container">
        <SectionTitle
          mainTitle="NOTRE EXPERTISE"
          title="Sublimez Votre Bien Immobilier"
          paragraph="Notre expertise ne se limite pas à la gestion locative. Nous proposons également un service d'accompagnement pour la décoration et l'aménagement de votre bien, vous permettant ainsi de maximiser son potentiel et son attractivité."
          center
        />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
          {niveaux.map((niveau, index) => (
            <div
              key={niveau.name}
              className={`wow fadeInUp rounded-lg p-8 shadow-md ${niveau.bgClass}`}
              data-wow-delay={niveau.delay}
            >
              <h3 className={`mb-4 text-2xl font-bold ${index === 0 ? "text-black" : "text-white"}`}>
                {niveau.name}
              </h3>
              <ul className="mb-6 space-y-4">
                {niveau.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className={`mr-2 ${niveau.textClass}`}>✓</span>
                    <span className={`text-base font-medium ${niveau.textClass}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="mb-6 text-base font-medium leading-relaxed text-body-color">
            Les tarifs de ces services sont déterminés sur devis après
            évaluation complète de votre bien et de vos objectifs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-opacity-90 lg:px-7"
          >
            Demander un devis personnalisé
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotreExpertise;
