"use client";

import SectionTitle from "../../Common/SectionTitle";
import { FC } from "react";

interface ServiceItem {
  title: string;
  description: string;
  icon: JSX.Element;
}

const services: ServiceItem[] = [
  {
    title: "Recherche et sélection rigoureuse des locataires",
    description:
      "Notre processus de sélection comprend la vérification des dossiers, l'analyse de solvabilité, la validation des garants et des entretiens personnalisés.",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    title: "Rédaction et gestion des documents juridiques",
    description:
      "Rédaction de baux conformes, annexes obligatoires, états des lieux détaillés avec reportage photo.",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    title: "Gestion financière optimisée",
    description:
      "Encaissement des loyers, révisions IRL, quittances, régularisations et reporting mensuel détaillé.",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    title: "Suivi technique proactif",
    description:
      "Maintenance préventive, gestion des interventions et visites techniques pour préserver la valeur de votre bien.",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    title: "Gestion administrative complète",
    description:
      "Relations locataires, gestion des sinistres, déclarations fiscales et veille juridique.",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
        <path
          fillRule="evenodd"
          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
];

const ServicesGestionLocative: FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          mainTitle="NOS SERVICES"
          title="Une gestion complète et transparente"
          paragraph="Nous prenons en charge tous les aspects de la gestion locative pour vous offrir une tranquillité d'esprit totale."
          center
        />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-8 shadow-md transition duration-300 hover:shadow-lg"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                {service.icon}
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGestionLocative;
