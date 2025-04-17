"use client";

import React from "react";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import FAQ from "@/components/FAQ";
import { getFAQs } from "@/sanity/sanity-utils";

export default async function GestionLocativePage() {
  // Récupérer les FAQ de la catégorie "gestion-locative" depuis Sanity
  const faqItems = await getFAQs("gestion-locative");
  return (
    <>
      {/* Section Introduction */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-800">
              Gestion locative longue durée en Alsace : sérénité et rentabilité
              garanties
            </h1>
            <p className="mb-8 text-xl text-gray-600">
              Confiez-nous la gestion complète de vos biens immobiliers, qu'ils
              soient meublés ou non
            </p>
            <p className="mb-8 text-gray-600">
              Chez Conciergerie Alsacienne, nous comprenons que votre bien
              immobilier représente un investissement précieux. Notre service de
              gestion locative longue durée vous libère de toutes les
              contraintes administratives, techniques et relationnelles liées à
              la location de votre bien, tout en maximisant votre rentabilité.
            </p>
            <p className="text-gray-600">
              Que vous possédiez un studio, un appartement ou une maison, meublé
              ou non, notre équipe d'experts prend en charge l'intégralité de la
              gestion pour vous offrir une expérience sans stress et des revenus
              réguliers.
            </p>
          </div>
        </div>
      </section>

      {/* Section Nos Services */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            mainTitle="NOS SERVICES"
            title="Une gestion complète et transparente"
            paragraph="Nous prenons en charge tous les aspects de la gestion locative pour vous offrir une tranquillité d'esprit totale."
            center
          />

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Recherche et sélection rigoureuse des locataires
              </h3>
              <p className="text-gray-600">
                Notre processus de sélection approfondi comprend la vérification
                des dossiers, l'analyse de solvabilité, la validation des
                garants et des entretiens personnalisés pour vous garantir des
                locataires fiables et respectueux.
              </p>
            </div>

            {/* Service 2 */}
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Rédaction et gestion des documents juridiques
              </h3>
              <p className="text-gray-600">
                Nous nous chargeons de la rédaction de baux conformes à la
                législation en vigueur, des annexes obligatoires, et réalisons
                des états des lieux d'entrée et de sortie détaillés avec
                reportage photographique pour protéger votre bien.
              </p>
            </div>

            {/* Service 3 */}
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Gestion financière optimisée
              </h3>
              <p className="text-gray-600">
                Encaissement des loyers, révisions annuelles selon l'IRL,
                édition des quittances, régularisation des charges, et
                versements mensuels sur votre compte avec un reporting détaillé
                accessible 24h/24.
              </p>
            </div>

            {/* Service 4 */}
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Suivi technique proactif
              </h3>
              <p className="text-gray-600">
                Maintenance préventive, organisation et suivi des interventions,
                gestion des travaux nécessaires, et visites techniques
                régulières pour préserver la valeur de votre patrimoine.
              </p>
            </div>

            {/* Service 5 */}
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Gestion administrative complète
              </h3>
              <p className="text-gray-600">
                Relations avec le locataire, traitement des réclamations,
                gestion des sinistres, déclarations fiscales, et veille
                juridique pour vous tenir informé des évolutions réglementaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Garantie Loyers Impayés */}
      <section className="bg-primary bg-opacity-5 py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            mainTitle="GARANTIE LOYERS IMPAYÉS"
            title="Une protection financière à toute épreuve"
            paragraph="Notre garantie vous assure des revenus locatifs stables, quoi qu'il arrive."
            center
          />

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="rounded-lg border-t-4 border-primary bg-white p-8 shadow-md">
              <div className="mb-8 flex flex-col items-center md:flex-row">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary bg-opacity-10 md:mb-0 md:mr-8">
                  <svg
                    className="h-12 w-12 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-800">
                    Garantie à 100% de vos loyers
                  </h3>
                  <p className="text-gray-600">
                    Même en cas d'impayés, vous recevez l'intégralité de vos
                    loyers et charges à date fixe chaque mois, vous assurant des
                    revenus stables et prévisibles.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-gray-50 p-6">
                  <h4 className="mb-3 text-lg font-semibold text-gray-800">
                    Sans franchise ni délai de carence
                  </h4>
                  <p className="text-gray-600">
                    Notre garantie s'applique dès le premier jour d'impayé, sans
                    période d'attente ni franchise, pour une protection
                    immédiate et complète.
                  </p>
                </div>

                <div className="rounded-lg bg-gray-50 p-6">
                  <h4 className="mb-3 text-lg font-semibold text-gray-800">
                    Protection juridique incluse
                  </h4>
                  <p className="text-gray-600">
                    Tous les frais de contentieux, de procédure et d'expulsion
                    sont pris en charge, vous évitant des démarches coûteuses et
                    chronophages.
                  </p>
                </div>

                <div className="rounded-lg bg-gray-50 p-6">
                  <h4 className="mb-3 text-lg font-semibold text-gray-800">
                    Couverture des détériorations
                  </h4>
                  <p className="text-gray-600">
                    Les dégradations causées par le locataire au-delà du dépôt
                    de garantie sont couvertes, préservant ainsi la valeur de
                    votre investissement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Processus */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            mainTitle="NOTRE PROCESSUS"
            title="Un accompagnement étape par étape"
            paragraph="Nous vous guidons tout au long du processus de gestion locative pour une expérience sans stress."
            center
          />

          <div className="mx-auto mt-12 max-w-5xl">
            <div className="relative">
              {/* Ligne de progression */}
              <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-primary bg-opacity-20 md:block"></div>

              {/* Étape 1 */}
              <div className="relative mb-12">
                <div className="flex flex-col items-center md:flex-row">
                  <div className="z-10 mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary md:mb-0">
                    <span className="font-bold text-white">1</span>
                  </div>
                  <div className="rounded-lg bg-white p-6 shadow-md md:ml-8 md:w-5/6">
                    <h3 className="mb-3 text-xl font-semibold text-gray-800">
                      Évaluation initiale
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Estimation précise du loyer de marché
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Visite détaillée de votre bien
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Conseils personnalisés pour optimiser votre rentabilité
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Signature du mandat de gestion
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Étape 2 */}
              <div className="relative mb-12">
                <div className="flex flex-col items-center md:flex-row md:flex-row-reverse">
                  <div className="z-10 mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary md:mb-0">
                    <span className="font-bold text-white">2</span>
                  </div>
                  <div className="rounded-lg bg-white p-6 shadow-md md:mr-8 md:w-5/6">
                    <h3 className="mb-3 text-xl font-semibold text-gray-800">
                      Mise en location
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Reportage photos professionnel
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Diffusion d'annonces sur les plateformes immobilières
                        majeures
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Organisation et conduite des visites
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Sélection rigoureuse des candidats locataires
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Étape 3 */}
              <div className="relative mb-12">
                <div className="flex flex-col items-center md:flex-row">
                  <div className="z-10 mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary md:mb-0">
                    <span className="font-bold text-white">3</span>
                  </div>
                  <div className="rounded-lg bg-white p-6 shadow-md md:ml-8 md:w-5/6">
                    <h3 className="mb-3 text-xl font-semibold text-gray-800">
                      Installation du locataire
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Rédaction du bail et des annexes obligatoires
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        État des lieux d'entrée détaillé avec photos
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Souscription des contrats d'assurance
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Remise des clés et accompagnement du locataire
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Étape 4 */}
              <div className="relative mb-12">
                <div className="flex flex-col items-center md:flex-row md:flex-row-reverse">
                  <div className="z-10 mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary md:mb-0">
                    <span className="font-bold text-white">4</span>
                  </div>
                  <div className="rounded-lg bg-white p-6 shadow-md md:mr-8 md:w-5/6">
                    <h3 className="mb-3 text-xl font-semibold text-gray-800">
                      Gestion quotidienne
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Encaissement mensuel des loyers
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Suivi administratif, technique et financier
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Gestion des demandes d'intervention
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Visites techniques annuelles
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Étape 5 */}
              <div className="relative">
                <div className="flex flex-col items-center md:flex-row">
                  <div className="z-10 mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary md:mb-0">
                    <span className="font-bold text-white">5</span>
                  </div>
                  <div className="rounded-lg bg-white p-6 shadow-md md:ml-8 md:w-5/6">
                    <h3 className="mb-3 text-xl font-semibold text-gray-800">
                      Renouvellement ou relocation
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Gestion des fins de bail (congés, renouvellements)
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        État des lieux de sortie
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Restitution du dépôt de garantie
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Remise en location rapide en cas de départ
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Formules */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            mainTitle="NOS FORMULES"
            title="Des solutions adaptées à vos besoins"
            paragraph="Choisissez la formule qui correspond le mieux à vos attentes et à votre patrimoine."
            center
          />

          {/* Frais initiaux */}
          <div className="mx-auto mb-12 mt-8 max-w-4xl rounded-lg border-l-4 border-primary bg-white p-6 shadow-md">
            <h3 className="mb-3 text-xl font-semibold text-gray-800">
              Frais initiaux de mise en location
            </h3>
            <p className="mb-4 text-gray-600">
              Conformément aux pratiques du marché, des frais équivalents à un
              mois de loyer hors charges sont appliqués lors de la mise en
              location initiale. Ces frais couvrent :
            </p>
            <ul className="grid grid-cols-1 gap-3 text-gray-600 md:grid-cols-2">
              <li className="flex items-start">
                <svg
                  className="mr-2 mt-0.5 h-5 w-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Établissement du bail conforme à la législation
              </li>
              <li className="flex items-start">
                <svg
                  className="mr-2 mt-0.5 h-5 w-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                État des lieux d'entrée détaillé avec photos
              </li>
              <li className="flex items-start">
                <svg
                  className="mr-2 mt-0.5 h-5 w-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Vérification complète des dossiers locataires
              </li>
              <li className="flex items-start">
                <svg
                  className="mr-2 mt-0.5 h-5 w-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Constitution des dossiers d'assurance
              </li>
            </ul>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Formule Essentielle */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-gray-100 p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800">
                  Formule Essentielle
                </h3>
                <p className="mt-2 text-gray-600">
                  La gestion de base pour les propriétaires autonomes
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">6%</span>
                  <span className="text-gray-600">
                    {" "}
                    HT des loyers encaissés
                  </span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="mr-2 mt-0.5 h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Recherche et sélection des locataires
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-2 mt-0.5 h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Rédaction du bail et état des lieux
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-2 mt-0.5 h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Encaissement des loyers et quittances
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-2 mt-0.5 h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Révision annuelle du loyer
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-2 mt-0.5 h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Régularisation des charges
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-2 mt-0.5 h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Assistance téléphonique dédiée
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-2 mt-0.5 h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Espace propriétaire en ligne
                  </li>
                </ul>
                <div className="mt-6 text-sm text-gray-600">
                  <p>
                    <strong>Idéal pour :</strong> Les propriétaires qui
                    souhaitent déléguer les tâches administratives tout en
                    conservant un rôle actif dans la gestion de leur bien.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-100 p-6">
                <Link
                  href="/contact"
                  className="block w-full rounded-lg bg-primary px-4 py-3 text-center font-medium text-white transition duration-300 hover:bg-opacity-90"
                >
                  Choisir cette formule
                </Link>
              </div>
            </div>

            {/* Formule Sérénité */}
            <div className="relative z-10 scale-105 transform overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute right-0 top-0 bg-primary px-4 py-1 text-sm font-semibold text-white">
                Recommandé
              </div>
              <div className="bg-primary bg-opacity-10 p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800">
                  Formule Sérénité
                </h3>
                <p className="mt-2 text-gray-600">
                  La tranquillité d'esprit avec garantie loyers impayés
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">7%</span>
                  <span className="text-gray-600">
                    {" "}
                    HT des loyers encaissés
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4 text-gray-600">
                  Tous les services de la formule Essentielle, plus :
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="mr-2 mt-0.5 h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="font-semibold">
                      Garantie loyers impayés à 100%
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-2 mt-0.5 h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Protection juridique complète
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-2 mt-0.5 h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Couverture des détériorations immobilières
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-2 mt-0.5 h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Gestion des sinistres et des contentieux
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-2 mt-0.5 h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Visites techniques annuelles
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-2 mt-0.5 h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Gestion des interventions d'urgence 24h/24
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-2 mt-0.5 h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Bilan de gestion annuel personnalisé
                  </li>
                </ul>
                <div className="mt-6 text-sm text-gray-600">
                  <p>
                    <strong>Idéal pour :</strong> Les propriétaires qui
                    recherchent une sécurité financière maximale et une gestion
                    sans souci.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-100 p-6">
                <Link
                  href="/contact"
                  className="block w-full rounded-lg bg-primary px-4 py-3 text-center font-medium text-white transition duration-300 hover:bg-opacity-90"
                >
                  Choisir cette formule
                </Link>
              </div>
            </div>

            {/* Formule Premium */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-gray-100 p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800">
                  Formule Premium
                </h3>
                <p className="mt-2 text-gray-600">
                  L'excellence en gestion locative
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">8%</span>
                  <span className="text-gray-600">
                    {" "}
                    HT des loyers encaissés
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4 text-gray-600">
                  Tous les services de la formule Sérénité, plus :
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="mr-2 mt-0.5 h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Conciergerie pour les locataires
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-2 mt-0.5 h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Gestion complète des travaux de rénovation
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-2 mt-0.5 h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Optimisation fiscale personnalisée
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-2 mt-0.5 h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Reportage photo professionnel renouvelé chaque année
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-2 mt-0.5 h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Visite technique semestrielle
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-2 mt-0.5 h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Garantie vacance locative (1 mois offert)
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mr-2 mt-0.5 h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Conseiller dédié joignable 7j/7
                  </li>
                </ul>
                <div className="mt-6 text-sm text-gray-600">
                  <p>
                    <strong>Idéal pour :</strong> Les investisseurs exigeants
                    possédant plusieurs biens et souhaitant maximiser leur
                    rentabilité tout en bénéficiant d'un service haut de gamme.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-100 p-6">
                <Link
                  href="/contact"
                  className="block w-full rounded-lg bg-primary px-4 py-3 text-center font-medium text-white transition duration-300 hover:bg-opacity-90"
                >
                  Choisir cette formule
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            mainTitle="TÉMOIGNAGES"
            title="Ils nous font confiance"
            paragraph="Découvrez ce que nos clients disent de notre service de gestion locative."
            center
          />

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Témoignage 1 */}
            <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-4 h-12 w-12 rounded-full bg-gray-300"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Marie L.</h4>
                  <p className="text-sm text-gray-600">
                    Propriétaire d'un T3 à Mulhouse
                  </p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "Depuis que j'ai confié mon appartement à la Conciergerie
                Alsacienne, je n'ai plus à me soucier des appels de locataires
                ou des problèmes de plomberie. Mes loyers sont versés à date
                fixe et leur garantie loyers impayés m'assure une tranquillité
                totale."
              </p>
            </div>

            {/* Témoignage 2 */}
            <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-4 h-12 w-12 rounded-full bg-gray-300"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Pierre et Sophie D.
                  </h4>
                  <p className="text-sm text-gray-600">
                    Propriétaires de deux studios à Strasbourg
                  </p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "En tant qu'expatriés, nous avions besoin d'une gestion à
                distance fiable. L'équipe de la Conciergerie Alsacienne gère nos
                biens comme si c'étaient les leurs. Leur réactivité et leur
                professionnalisme sont remarquables."
              </p>
            </div>

            {/* Témoignage 3 */}
            <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-4 h-12 w-12 rounded-full bg-gray-300"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Jean-Marc B.</h4>
                  <p className="text-sm text-gray-600">
                    Investisseur immobilier
                  </p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "Après avoir testé plusieurs agences, j'ai enfin trouvé un
                gestionnaire qui comprend mes objectifs de rentabilité. Leur
                formule Premium me permet de développer mon patrimoine
                sereinement, avec un ROI optimisé."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <FAQ
        items={faqItems}
        title="Vos questions fréquentes"
        subtitle="Retrouvez les réponses aux questions les plus courantes sur notre service de gestion locative."
        mainTitle="FAQ"
        center={true}
      />

      {/* Section Call-to-Action */}
      <section className="bg-primary bg-opacity-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            Prêt à déléguer la gestion de votre bien ?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
            Contactez-nous dès aujourd'hui pour une estimation personnalisée et
            découvrez comment nous pouvons maximiser la rentabilité de votre
            investissement.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/simulateur"
              className="rounded-lg bg-primary px-8 py-4 font-medium text-white transition duration-300 hover:bg-opacity-90"
            >
              Estimer mes revenus
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-primary bg-white px-8 py-4 font-medium text-primary transition duration-300 hover:bg-gray-50"
            >
              Nous contacter
            </Link>
          </div>
          <p className="mt-8 text-gray-600">
            Ou appelez-nous directement au{" "}
            <span className="font-semibold">03 XX XX XX XX</span> pour discuter
            de votre projet avec un conseiller.
          </p>
        </div>
      </section>
    </>
  );
}
