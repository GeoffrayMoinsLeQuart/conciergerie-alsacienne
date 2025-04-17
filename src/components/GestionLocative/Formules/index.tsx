"use client";

import SectionTitle from "../../Common/SectionTitle";
import { FC } from "react";
import TarificationGestionLocative from "../TarificationGestion";

const FormulesSection: FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle
          mainTitle="NOS FORMULES"
          title="Des solutions adaptées à vos besoins"
          paragraph="Choisissez la formule qui correspond le mieux à vos attentes et à votre patrimoine."
          center
        />

        {/* Frais initiaux */}
        <div className="mx-auto mb-12 mt-8 max-w-4xl rounded-lg border-l-4 border-primary bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-gray-800">
            Frais initiaux de mise en location
          </h3>
          <p className="mb-4 text-gray-600">
            Conformément aux pratiques du marché, des frais équivalents à un
            mois de loyer hors charges sont appliqués lors de la mise en
            location initiale. Ces frais couvrent :
          </p>
          <ul className="grid grid-cols-1 gap-3 text-gray-600 md:grid-cols-2">
            {[
              "Établissement du bail conforme à la législation",
              "État des lieux d'entrée détaillé avec photos",
              "Vérification complète des dossiers locataires",
              "Constitution des dossiers d'assurance",
            ].map((item) => (
              <li key={item} className="flex items-start">
                <svg
                  className="mr-2 mt-0.5 h-5 w-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <TarificationGestionLocative />
      </div>
    </section>
  );
};

export default FormulesSection;
