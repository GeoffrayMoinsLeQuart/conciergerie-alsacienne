// Nouveau composant CTA Conciergerie avec ajustements stylistiques et UX

"use client";

import { FC } from "react";
import CTAButtons from "@/components/Buttons/CTAButtons";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const CTAConciergerie: FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-primary py-20 text-center"
    >
      <div className="container mx-auto max-w-3xl">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Votre bien mérite le meilleur.
        </h2>
        <p className="mb-6 text-white text-opacity-90">
          Offrez à votre location courte durée un accompagnement premium.
          Nous transformons chaque bien en une expérience remarquable — pour vos voyageurs et pour votre rentabilité.
        </p>
        <CTAButtons
          secondary={{
            label: "Parler de mon projet",
            href: "/contact",
            icon: <Sparkles className="h-5 w-5" />,
            colorClass:
              "bg-white text-primary border-white hover:bg-primary hover:text-white",
          }}
        />
      </div>
    </motion.section>
  );
};

export default CTAConciergerie;