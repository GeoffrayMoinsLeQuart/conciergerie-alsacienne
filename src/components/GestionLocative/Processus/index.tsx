"use client";

import SectionTitle from "../../Common/SectionTitle";
import { FC } from "react";

const steps = [
  {
    number: 1,
    title: "Évaluation initiale",
    items: [
      "Estimation précise du loyer de marché",
      "Visite détaillée de votre bien",
      "Conseils personnalisés pour optimiser votre rentabilité",
      "Signature du mandat de gestion",
    ],
  },
  {
    number: 2,
    title: "Mise en location",
    items: [
      "Reportage photos professionnel",
      "Diffusion d'annonces sur les plateformes immobilières majeures",
      "Organisation et conduite des visites",
      "Sélection rigoureuse des candidats locataires",
    ],
  },
  {
    number: 3,
    title: "Installation du locataire",
    items: [
      "Rédaction du bail et des annexes obligatoires",
      "État des lieux d'entrée détaillé avec photos",
      "Souscription des contrats d'assurance",
      "Remise des clés et accompagnement du locataire",
    ],
  },
  {
    number: 4,
    title: "Gestion quotidienne",
    items: [
      "Encaissement mensuel des loyers",
      "Suivi administratif, technique et financier",
      "Gestion des demandes d'intervention",
      "Visites techniques annuelles",
    ],
  },
  {
    number: 5,
    title: "Renouvellement ou relocation",
    items: [
      "Gestion des fins de bail (congés, renouvellements)",
      "État des lieux de sortie",
      "Restitution du dépôt de garantie",
      "Remise en location rapide en cas de départ",
    ],
  },
];

const NotreProcessus: FC = () => {
  return (
    <section className="bg-white py-20 lg:py-[120px]" aria-label="Notre Processus">
      <div className="container mx-auto px-4">
        <SectionTitle
          mainTitle="NOTRE PROCESSUS"
          title="Un accompagnement étape par étape"
          paragraph="Nous vous guidons tout au long du processus de gestion locative pour une expérience sans stress."
          center
        />

        <div className="mx-auto mt-12 max-w-5xl relative">
          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-primary bg-opacity-20 md:block"></div>

          {steps.map((step, index) => (
            <div key={step.number} className="relative mb-12">
              <div
                className={`flex flex-col items-center md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="z-10 mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary md:mb-0">
                  <span className="font-bold text-white">{step.number}</span>
                </div>
                <div
                  className={`rounded-lg bg-white p-6 shadow-md ${
                    index % 2 === 1 ? "md:mr-8" : "md:ml-8"
                  } md:w-5/6`}
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-800">
                    {step.title}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {step.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotreProcessus;