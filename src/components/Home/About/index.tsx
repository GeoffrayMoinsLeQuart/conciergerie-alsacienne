"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Graphic from "./Graphic";
import SocialLinks from "./SocialLinks";

const stats = [
  { label: "Biens gérés", value: 120 },
  { label: "Voyageurs accueillis", value: 3500 },
  { label: "Années d’expérience", value: 8 },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 bg-white pb-[120px] pt-20 lg:pt-[145px]"
    >
      <div className="container">
        <div className="mx-[-16px] flex flex-wrap">
          {/* Colonne gauche */}
          <div className="mb-10 w-full px-4 lg:mb-0 lg:w-1/2 xl:w-7/12">
            <span className="mb-4 block text-lg font-bold text-primary md:text-xl">
              NOTRE PROMESSE
            </span>
            <h2 className="mb-6 max-w-[570px] text-3xl font-semibold text-black sm:text-4xl">
              Une gestion sans souci pour des revenus maximisés
            </h2>
            <ul className="space-y-2">
              <li className="text-base font-medium text-gray-700">
                • Connaissance approfondie du marché local
              </li>
              <li className="text-base font-medium text-gray-700">
                • Service personnalisé avec interlocuteur unique
              </li>
              <li className="text-base font-medium text-gray-700">
                • Transparence totale et reporting détaillé
              </li>
              <li className="text-base font-medium text-gray-700">
                • Optimisation continue de vos revenus
              </li>
            </ul>
          </div>

          {/* Colonne droite */}
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <h3 className="mb-4 text-2xl font-semibold text-black md:text-3xl">
              Une équipe alsacienne engagée à vos côtés
            </h3>
            <p className="mb-6 text-base font-medium text-body-color">
              Notre équipe locale connaît parfaitement les spécificités du
              marché alsacien et vous accompagne avec proximité, rigueur et bienveillance.
              Que vous soyez propriétaire expérimenté ou débutant, nous sommes là pour
              faire de votre bien une réussite.
            </p>

            {/* Statistiques animées */}
            <motion.ul
              className="mb-10 flex flex-wrap gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {stats.map((stat) => (
                <motion.li
                  key={stat.label}
                  className="w-1/3 text-center"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <p className="text-3xl font-bold text-primary">
                    {stat.value.toLocaleString()}
                  </p>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA & Réseaux sociaux */}
            <Link
              href="#contact"
              className="inline-block rounded-md bg-primary px-6 py-3 text-white font-medium transition hover:bg-primary/90"
            >
              Discutons de votre projet
            </Link>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Illustration SVG décorative */}
      <Graphic />
    </section>
  );
}
