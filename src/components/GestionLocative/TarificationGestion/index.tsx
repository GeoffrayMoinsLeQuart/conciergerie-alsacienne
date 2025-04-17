"use client";

import Link from "next/link";
import SectionTitle from "../../Common/SectionTitle";
import { FC } from "react";

interface Plan {
  name: string;
  price: string;
  priceLabel: string;
  features: string[];
  bgClass: string;
  textClass: string;
  button: {
    text: string;
    href: string;
    style: string;
  };
}

const TarificationGestionLocative: FC = () => {
  const plans: Plan[] = [
    {
      name: "Formule Essentielle",
      price: "6%",
      priceLabel: "HT des loyers encaissés",
      features: [
        "Recherche et sélection des locataires",
        "Rédaction du bail et état des lieux",
        "Encaissement des loyers et quittances",
        "Révision annuelle du loyer",
        "Régularisation des charges",
        "Assistance téléphonique dédiée",
        "Espace propriétaire en ligne",
      ],
      bgClass: "bg-white",
      textClass: "text-body-color",
      button: {
        text: "Choisir cette formule",
        href: "/contact",
        style: "bg-primary text-white hover:bg-opacity-80",
      },
    },
    {
      name: "Formule Sérénité",
      price: "7%",
      priceLabel: "HT des loyers encaissés",
      features: [
        "Garantie loyers impayés à 100%",
        "Protection juridique complète",
        "Couverture des détériorations immobilières",
        "Gestion des sinistres et des contentieux",
        "Visites techniques annuelles",
        "Gestion des interventions d'urgence 24h/24",
        "Bilan de gestion annuel personnalisé",
      ],
      bgClass: "bg-primary bg-opacity-10",
      textClass: "text-gray-800",
      button: {
        text: "Choisir cette formule",
        href: "/contact",
        style: "bg-primary text-white hover:bg-opacity-90",
      },
    },
    {
      name: "Formule Premium",
      price: "8%",
      priceLabel: "HT des loyers encaissés",
      features: [
        "Conciergerie pour les locataires",
        "Gestion complète des travaux de rénovation",
        "Optimisation fiscale personnalisée",
        "Reportage photo professionnel annuel",
        "Visite technique semestrielle",
        "Garantie vacance locative (1 mois offert)",
        "Conseiller dédié joignable 7j/7",
      ],
      bgClass: "bg-white",
      textClass: "text-body-color",
      button: {
        text: "Choisir cette formule",
        href: "/contact",
        style: "bg-primary text-white hover:bg-opacity-80",
      },
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-[120px]" aria-label="Tarification">
      <div className="container mx-auto px-4">
        <SectionTitle
          mainTitle="TARIFICATION"
          title="Des tarifs clairs et adaptés à vos besoins"
          paragraph="Choisissez la formule qui vous correspond, avec ou sans ménage, pour maximiser vos revenus."
          center
        />

        <div className="mt-12 mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan, idx) => (
            <article
              key={plan.name}
              className={`wow fadeInUp relative z-10 rounded-md px-8 py-10 shadow-signUp sm:p-12 lg:py-10 xl:p-12 ${plan.bgClass}`}
              data-wow-delay={`0.${idx + 1}s`}
            >
              <h3 className={`mb-5 text-2xl font-bold ${plan.textClass}`}>
                {plan.name}
              </h3>

              <div className="mb-6 flex items-baseline">
                <span className={`text-3xl font-bold ${plan.textClass}`}>
                  {plan.price}
                </span>
                <span
                  className={`ml-2 text-base font-medium ${plan.textClass} opacity-70`}
                >
                  {plan.priceLabel}
                </span>
              </div>

              <ul className="mb-9 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`text-base font-medium ${plan.textClass}`}
                  >
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.button.href}
                className={`flex w-full items-center justify-center rounded-md px-9 py-4 text-base font-medium transition duration-300 ease-in-out ${plan.button.style}`}
                aria-label={plan.button.text}
              >
                {plan.button.text}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TarificationGestionLocative;
