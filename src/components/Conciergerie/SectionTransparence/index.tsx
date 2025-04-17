"use client";

import { FC } from "react";
import SectionTitle from "@/components/Common/SectionTitle";

const SectionTransparence: FC = () => {
  return (
    <section className="bg-white py-20" aria-label="Transparence">
      <div className="container">
        <SectionTitle
          mainTitle="TRANSPARENCE"
          title="Des coûts clairs et prévisibles"
          paragraph="La mise en place de votre bien dans notre portefeuille implique certains frais de démarrage évalués au cas par cas."
          center
        />

        <div className="mx-auto max-w-3xl rounded-lg bg-[#f8f9ff] p-8 shadow-md">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Colonne 1 : Frais de démarrage */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-black">
                Frais de démarrage
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span className="text-base font-medium text-body-color">
                    <strong>État des lieux</strong> détaillé de votre bien
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span className="text-base font-medium text-body-color">
                    <strong>Création d'annonces</strong> et{" "}
                    <strong>photos professionnelles</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span className="text-base font-medium text-body-color">
                    350€ - 500€ selon la taille
                  </span>
                </li>
              </ul>
            </div>

            {/* Colonne 2 : Services optionnels */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-black">
                Services optionnels
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span className="text-base font-medium text-body-color">
                    <strong>Décoration niveau Standard</strong> (sur devis personnalisé)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span className="text-base font-medium text-body-color">
                    <strong>Décoration niveau Luxe</strong> (sur devis personnalisé)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-center text-sm italic text-body-color">
            Ces montants sont indicatifs et peuvent varier selon les spécificités de votre bien.
            Une évaluation personnalisée vous sera proposée lors de notre première rencontre.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionTransparence;
