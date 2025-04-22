"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Graphic from "./Graphic";
import SocialLinks from "./SocialLinks";
import Link from "next/link";
// import SocialLinks from "./SocialLinks"; // Tu pourras le réactiver une fois prêt

// Sécurise motion (évite un crash si undefined)

const stats = [
  { label: "Biens gérés", value: 120 },
  { label: "Voyageurs accueillis", value: 3500 },
  { label: "Années d’expérience", value: 8 },
  { label: "Taux d’occupation moyen", value: "85%" },
];

const About: FC = () => {
  return (
    <section
      id="about"
      className="relative z-10 bg-[#f8f9ff] sm:p-[80px] p-[40px]"
    >
      <div className="container">
        <div className="mx-[-16px] max-sm:grid max-sm:grid-cols-1 sm:flex sm:flex-wrap sm:justify-between ">
          {/* Col gauche : texte */}
          <div className="flex max-lg:w-full flex-col justify-between text-center lg:text-left max-xl:mb-16 ">
            <div>
              <span className="mb-3 inline-block text-lg font-bold text-primary md:text-xl">
                NOTRE PROMESSE
              </span>
              <ul className="mb-8 space-y-2">
                <li className="text-base font-medium text-body-color">
                  ✅ Connaissance approfondie du marché local
                </li>
                <li className="text-base font-medium text-body-color">
                  ✅ Service personnalisé avec interlocuteur unique
                </li>
                <li className="text-base font-medium text-body-color">
                  ✅ Transparence totale et reporting détaillé
                </li>
                <li className="text-base font-medium text-body-color">
                  ✅ Optimisation continue de vos revenus
                </li>
              </ul>
            </div>

            <Link
              href="tel:0033621471922"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                aria-label="contact-us-whatsapp"
                className="text-md inline-block rounded-md bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary/90"
              >
                📞 Discutons de votre projet
              </button>
            </Link>
          </div>

          {/* Col droite : chiffres & identité */}
          <div className="w-full lg:w-1/2 xl:w-5/12">
            <h3 className="mb-4 text-xl font-semibold text-black md:text-2xl ">
              Une gestion sans souci pour des revenus maximisés
            </h3>

            <p
              className="mb-8 text-justify text-base text-body-color
"
            >
              Une équipe locale engagée pour valoriser votre bien et assurer une
              expérience 5 étoiles à vos voyageurs. L'expertise alsacienne au
              service de votre rentabilité.
            </p>

            {/* Statistiques animées */}
            <motion.div
              className="grid grid-cols-2 gap-6 text-center md:grid-cols-2"
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
                  className="flex flex-col items-center"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <span className="mb-1 text-3xl font-bold text-primary">
                    {typeof stat.value === "number"
                      ? stat.value.toLocaleString()
                      : stat.value}
                  </span>
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </motion.li>
              ))}
            </motion.div>

            {/* Social links si réactivé */}
          </div>
          <SocialLinks />
        </div>
      </div>

      <Graphic />
    </section>
  );
};

export default About;
