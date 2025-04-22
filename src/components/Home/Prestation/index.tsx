"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import {
  prestationConciergerie,
  prestationGestionLocative,
} from "@/static-data/prestation";

export default function ServicesGrid() {
  const [activeTab, setActiveTab] = useState<"conciergerie" | "gestion">(
    "conciergerie",
  );
  const servicesToShow =
    activeTab === "conciergerie"
      ? prestationConciergerie
      : prestationGestionLocative;

  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        {/* Onglets */}
        <div className="mb-10 flex justify-center space-x-6">
          <button
            onClick={() => setActiveTab("conciergerie")}
            className={`px-4 py-2 font-semibold transition ${
              activeTab === "conciergerie"
                ? "border-b-2 border-primary text-primary"
                : "text-gray-600 hover:text-primary"
            }`}
          >
            Conciergerie Premium
          </button>
          <button
            onClick={() => setActiveTab("gestion")}
            className={`px-4 py-2 font-semibold transition ${
              activeTab === "gestion"
                ? "border-b-2 border-primary text-primary"
                : "text-gray-600 hover:text-primary"
            }`}
          >
            Gestion Locative
          </button>
        </div>

        {/* Titre & sous‑titre */}
        <div className="-mx-4 mb-10 flex flex-wrap items-end lg:mb-[60px]">
          <div className="w-full px-4 lg:w-8/12">
            <SectionTitle
              mainTitle="NOS PRESTATIONS"
              title="Une solution complète pour votre bien"
              width="625px"
              color="white"
            />
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <div className="mb-[50px] flex lg:justify-end">
              <Link
                href="/prestations"
                className="text-lg font-medium text-white underline hover:text-primary"
              >
                EXPLOREZ NOS PRESTATIONS
              </Link>
            </div>
          </div>
        </div>

        {/* Grille animée, clé = activeTab pour forcer le remount */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {servicesToShow.map((prestation, index) => (
            <motion.div
              key={prestation.id}
              className="
    group
    relative
    flex
    h-full
    flex-col
    overflow-hidden
    rounded-lg
    bg-white
    px-4
    py-8
    text-center
    shadow-service
    transition
    duration-300
    hover:shadow-xl
  "
              data-wow-delay={`0.${index + 1}s`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* Icône agrandie */}
              <div className="relative mx-auto mb-6 h-28 w-28">
                <Image
                  src={prestation.icon}
                  alt={`${prestation.title} icon`}
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>

              {/* Titre */}
              <h3 className="mb-3 text-2xl font-semibold text-black">
                {prestation.title}
              </h3>

              {/* Description courte (2 lignes max) */}
              <p className="mb-6 line-clamp-2 text-gray-700">
                {prestation.description}
              </p>

              {/* Lien « + d’infos » */}
              <Link
                href={
                  activeTab === "conciergerie"
                    ? "/conciergerie#prestations"
                    : "/gestion-locative#prestations"
                }
                className="
      mx-auto
      mt-auto
      inline-flex
      w-auto
      items-center
      justify-center
      rounded-md
      bg-primary
      px-6
      py-2
      font-medium
      text-white
      transition
      hover:bg-primary/90
    "
              >
                Plus d’infos
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
