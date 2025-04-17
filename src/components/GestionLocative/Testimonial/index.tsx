"use client";

import { FC } from "react";
import SectionTitle from "@/components/Common/SectionTitle";

interface Testimonial {
  name: string;
  subtitle: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Marie L.",
    subtitle: "Propriétaire d'un T3 à Mulhouse",
    text: `Depuis que j'ai confié mon appartement à la Conciergerie Alsacienne, je n'ai plus à me soucier des appels de locataires ou des problèmes de plomberie. Mes loyers sont versés à date fixe et leur garantie loyers impayés m'assure une tranquillité totale.`,
  },
  {
    name: "Pierre et Sophie D.",
    subtitle: "Propriétaires de deux studios à Strasbourg",
    text: `En tant qu'expatriés, nous avions besoin d'une gestion à distance fiable. L'équipe de la Conciergerie Alsacienne gère nos biens comme si c'étaient les leurs. Leur réactivité et leur professionnalisme sont remarquables.`,
  },
  {
    name: "Jean-Marc B.",
    subtitle: "Investisseur immobilier",
    text: `Après avoir testé plusieurs agences, j'ai enfin trouvé un gestionnaire qui comprend mes objectifs de rentabilité. Leur formule Premium me permet de développer mon patrimoine sereinement, avec un ROI optimisé.`,
  },
];

const TemoinagesSection: FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <SectionTitle
          mainTitle="TÉMOIGNAGES"
          title="Ils nous font confiance"
          paragraph="Découvrez ce que nos clients disent de notre service de gestion locative."
          center
        />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map(({ name, subtitle, text }) => (
            <article key={name} className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-4 h-12 w-12 rounded-full bg-gray-300" />
                <div>
                  <h4 className="font-semibold text-gray-800">{name}</h4>
                  <p className="text-sm text-gray-600">{subtitle}</p>
                </div>
              </div>
              <p className="italic text-gray-600">"{text}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemoinagesSection;
