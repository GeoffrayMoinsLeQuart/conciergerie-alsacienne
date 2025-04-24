// Nouveau composant CTA Gestion Locative avec amélioration UX et design

"use client";

import { FC } from "react";
import CTAButtons from "@/components/Buttons/CTAButtons";
import { Calculator, Mail } from "lucide-react";
import { motion } from "framer-motion";

const CTAGestionLocative: FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-primary/10 py-20"
    >
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
          Prêt à déléguer la gestion de votre bien ?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
          Estimez votre rentabilité en quelques clics ou échangez directement
          avec un conseiller de confiance.
        </p>
        <CTAButtons
          primary={{
            label: "Estimer mes revenus",
            href: "/simulateur",
            icon: <Calculator className="h-5 w-5" />,
          }}
          secondary={{
            label: "Nous contacter",
            href: "/contact",
            icon: <Mail className="h-5 w-5" />,
          }}
        />
        <p className="mt-8 text-sm text-gray-600">
          Ou appelez-nous directement au
          <a
            href="tel:0033621471922"
            className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80"
          >
            06 21 47 19 22
          </a>
          pour discuter de votre projet.
        </p>
      </div>
    </motion.section>
  );
};

export default CTAGestionLocative;
