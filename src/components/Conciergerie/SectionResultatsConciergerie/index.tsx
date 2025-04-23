"use client";

import { FC } from "react";
import SectionTitle from "@/components/Common/SectionTitle";
import { motion } from "framer-motion";

const ResultatsConciergerie: FC = () => {
  const stats = [
    ["+35%", "de revenus en moyenne"],
    ["100%", "automatisé & délégué"],
    ["0€", "de frais fixes (formule au % seulement)"],
    ["4.6⭐", "moyenne des avis voyageurs"],
  ];

  return (
    <section
      className="bg-[#f8f9ff] py-20"
      aria-label="Résultats concrets conciergerie"
    >
      <div className="container">
        <SectionTitle
          mainTitle="RÉSULTATS CONCRETS"
          title="Ce que nos clients obtiennent réellement"
          paragraph="Notre modèle repose sur une stratégie de valorisation et une optimisation constante de vos performances locatives."
          center
        />

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(([value, label], index) => (
            <motion.div
              key={index}
              className="rounded-lg bg-white p-6 text-center shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-primary">{value}</h3>
              <p className="mt-2 text-base font-medium text-body-color">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultatsConciergerie;
