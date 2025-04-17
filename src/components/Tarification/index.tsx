"use client";

import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

export default function Tarification() {
  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="container">
        <SectionTitle
          mainTitle="TARIFICATION"
          title="Des tarifs transparents et compétitifs"
          paragraph="Nous proposons des formules adaptées à vos besoins avec une tarification claire et sans surprise."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="wow fadeInUp relative z-10 rounded-md bg-white px-8 py-10 shadow-signUp sm:p-12 lg:py-10 xl:p-12"
            data-wow-delay="0.1s"
          >
            <span className="mb-2 block text-lg font-semibold text-primary">
              Formule Essentielle
            </span>
            <h2 className="mb-5 text-3xl font-bold text-black">
              15%{" "}
              <span className="text-base font-medium text-body-color">
                des revenus
              </span>
            </h2>
            <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base font-medium leading-loose text-body-color">
              La solution idéale pour débuter dans la location saisonnière.
            </p>
            <div className="mb-9 flex flex-col gap-[14px]">
              <p className="text-base font-medium text-body-color">
                ✓ Création et gestion des annonces
              </p>
              <p className="text-base font-medium text-body-color">
                ✓ Gestion des réservations
              </p>
              <p className="text-base font-medium text-body-color">
                ✓ Accueil des voyageurs
              </p>
              <p className="text-base font-medium text-body-color">
                ✓ Ménage (facturé en supplément)
              </p>
              <p className="text-base font-medium text-body-color">
                ✓ Reporting mensuel
              </p>
            </div>
            <Link
              href="/contact"
              className="flex w-full items-center justify-center rounded-md bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
            >
              Demander un devis
            </Link>
          </div>
          <div
            className="wow fadeInUp relative z-10 rounded-md bg-primary px-8 py-10 shadow-signUp sm:p-12 lg:py-10 xl:p-12"
            data-wow-delay="0.2s"
          >
            <span className="mb-2 block text-lg font-semibold text-white">
              Formule Premium
            </span>
            <h2 className="mb-5 text-3xl font-bold text-white">
              20%{" "}
              <span className="text-base font-medium text-white text-opacity-70">
                des revenus
              </span>
            </h2>
            <p className="mb-8 border-b border-white border-opacity-10 pb-8 text-base font-medium leading-loose text-white text-opacity-90">
              Notre formule la plus populaire pour une gestion complète.
            </p>
            <div className="mb-9 flex flex-col gap-[14px]">
              <p className="text-base font-medium text-white text-opacity-90">
                ✓ Tous les services Essentiels
              </p>
              <p className="text-base font-medium text-white text-opacity-90">
                ✓ Ménage inclus
              </p>
              <p className="text-base font-medium text-white text-opacity-90">
                ✓ Linge de qualité hôtelière
              </p>
              <p className="text-base font-medium text-white text-opacity-90">
                ✓ Gestion des urgences 24/7
              </p>
              <p className="text-base font-medium text-white text-opacity-90">
                ✓ Optimisation continue des tarifs
              </p>
            </div>
            <Link
              href="/contact"
              className="flex w-full items-center justify-center rounded-md bg-white px-9 py-4 text-base font-medium text-primary transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
            >
              Demander un devis
            </Link>
          </div>
          <div
            className="wow fadeInUp relative z-10 rounded-md bg-white px-8 py-10 shadow-signUp sm:p-12 lg:py-10 xl:p-12"
            data-wow-delay="0.3s"
          >
            <span className="mb-2 block text-lg font-semibold text-primary">
              Formule Exclusive
            </span>
            <h2 className="mb-5 text-3xl font-bold text-black">
              25%{" "}
              <span className="text-base font-medium text-body-color">
                des revenus
              </span>
            </h2>
            <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base font-medium leading-loose text-body-color">
              Le service ultime pour les biens de prestige.
            </p>
            <div className="mb-9 flex flex-col gap-[14px]">
              <p className="text-base font-medium text-body-color">
                ✓ Tous les services Premium
              </p>
              <p className="text-base font-medium text-body-color">
                ✓ Conciergerie personnalisée
              </p>
              <p className="text-base font-medium text-body-color">
                ✓ Services supplémentaires sur demande
              </p>
              <p className="text-base font-medium text-body-color">
                ✓ Reporting détaillé hebdomadaire
              </p>
              <p className="text-base font-medium text-body-color">
                ✓ Conseils d&apos;investissement
              </p>
            </div>
            <Link
              href="/contact"
              className="flex w-full items-center justify-center rounded-md bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
