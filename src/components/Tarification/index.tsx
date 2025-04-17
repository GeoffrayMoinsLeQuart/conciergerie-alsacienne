"use client";

import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
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

const Tarification: FC = () => {
  const plans: Plan[] = [
    {
      name: "Formule Standard",
      price: "À partir de 17%",
      priceLabel: "des revenus (selon taille du bien)",
      features: [
        "Création et optimisation des annonces",
        "Gestion des réservations",
        "Accueil des voyageurs",
        "Optimisation continue des tarifs",
        "Reporting mensuel",
      ],
      bgClass: "bg-white",
      textClass: "text-body-color",
      button: {
        text: "Demander un devis",
        href: "/contact",
        style: "bg-primary text-white hover:bg-opacity-80",
      },
    },
    {
      name: "Formule Premium",
      price: "À partir de 22%",
      priceLabel: "des revenus (selon taille du bien)",
      features: [
        "Tous les services de la formule Premium",
        "Ménage inclus",
        "Gestion des urgences 24/7",
      ],
      bgClass: "bg-primary",
      textClass: "text-white",
      button: {
        text: "Demander un devis",
        href: "/contact",
        style: "bg-white text-primary hover:bg-opacity-80",
      },
    },
    {
      name: "Formule Exclusive",
      price: "À partir de 25%",
      priceLabel: "des revenus (selon taille du bien)",
      features: [
        "Tous les services de la formule Premium",
        "Linge de qualité hôtelière",
      ],
      bgClass: "bg-white",
      textClass: "text-body-color",
      button: {
        text: "Demander un devis",
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
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

export default Tarification;
