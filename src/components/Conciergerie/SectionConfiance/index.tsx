"use client";

import { FC } from "react";
import SectionTitle from "@/components/Common/SectionTitle";

const SectionConfiance: FC = () => {
  const stats = [
    ["+20%", "de revenus en moyenne"],
    ["100%", "automatisé & délégué"],
    ["0€", "de frais fixes en formule %"],
    ["5⭐", "moyenne des avis voyageurs"],
  ];

  const points = [
    ["Expertise locale", "Notre équipe connaît parfaitement le marché alsacien et les attentes des voyageurs dans notre région."],
    ["Service personnalisé", "Nous adaptons nos services à vos besoins spécifiques et à ceux de votre bien pour une gestion optimale."],
    ["Tranquillité d'esprit", "Vous n'avez plus à vous soucier de la gestion quotidienne de votre bien, nous nous occupons de tout."],
    ["Sélection exclusive", "Notre politique de sélection rigoureuse garantit que votre bien sera associé à d'autres propriétés de standing."],
    ["Expertise en décoration", "Notre service d'accompagnement vous permet de sublimer votre bien et d'en maximiser le potentiel locatif."],
    ["Optimisation continue", "Nous ajustons constamment les tarifs et la stratégie pour maximiser vos revenus tout au long de l'année."],
  ];

  return (
    <section className="bg-[#f8f9ff] py-20" aria-label="Pourquoi nous faire confiance ?">
      <div className="container">
        <SectionTitle
          mainTitle="POURQUOI NOUS FAIRE CONFIANCE ?"
          title="Des résultats concrets"
          paragraph="Notre exigence, notre approche design et notre pilotage dynamique ont un impact direct sur vos revenus."
          center
        />

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label], i) => (
            <div key={i} className="text-center">
              <h4 className="text-4xl font-bold text-primary">{value}</h4>
              <p className="mt-2 text-base font-medium text-body-color">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {points.map(([title, desc], i) => (
            <div key={i} className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-xl font-bold text-black">{title}</h3>
              <p className="text-body-color">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionConfiance;
