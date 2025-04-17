import SectionTitle from "@/components/Common/SectionTitle";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteName = process.env.SITE_NAME || "Conciergerie Alsacienne";

export const metadata: Metadata = {
  title: `Services de Gestion Locative en Alsace | ${siteName}`,
  description:
    "Découvrez nos services de gestion locative en Alsace. Maximisez vos revenus locatifs et libérez-vous des contraintes de gestion grâce à notre expertise.",
};

export default function GestionLocativePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white pb-20 pt-[120px] lg:pb-[90px] lg:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-6/12">
              <div className="mb-8 lg:mb-0">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Gestion Locative Professionnelle en Alsace
                </h1>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg md:text-xl">
                  Maximisez vos revenus locatifs et libérez-vous des contraintes
                  de gestion. Notre service de gestion locative prend en charge
                  tous les aspects de la location de votre bien immobilier.
                </p>
                <div className="flex flex-wrap">
                  <Link
                    href="/simulateur"
                    className="mb-5 mr-5 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-opacity-90 lg:px-7"
                  >
                    Estimer mes revenus
                  </Link>
                  <Link
                    href="/contact"
                    className="mb-5 inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-center text-base font-medium text-white hover:bg-opacity-90 lg:px-7"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="relative z-10 text-center lg:mr-0 lg:text-right">
                <Image
                  src="/images/services/gestion-locative-hero.jpg"
                  alt="Image de gestion locative"
                  width={600}
                  height={400}
                  className="mx-auto rounded-lg lg:ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#f8f9ff] py-20 lg:py-[120px]">
        <div className="container">
          <SectionTitle
            mainTitle="NOS SERVICES"
            title="Une gestion locative complète"
            paragraph="Nous proposons une gamme complète de services pour assurer une gestion optimale de votre bien et maximiser vos revenus locatifs."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            <div
              className="wow fadeInUp group relative overflow-hidden rounded-lg bg-white shadow-service"
              data-wow-delay="0.1s"
            >
              <div className="relative z-10 p-9">
                <h3 className="mb-4 text-xl font-bold text-black">
                  Gestion des annonces
                </h3>
                <p className="mb-7 text-base font-medium leading-relaxed text-body-color">
                  Création et optimisation d&apos;annonces attractives avec
                  photos professionnelles pour maximiser votre visibilité.
                </p>
              </div>
            </div>
            <div
              className="wow fadeInUp group relative overflow-hidden rounded-lg bg-white shadow-service"
              data-wow-delay="0.2s"
            >
              <div className="relative z-10 p-9">
                <h3 className="mb-4 text-xl font-bold text-black">
                  Gestion des réservations
                </h3>
                <p className="mb-7 text-base font-medium leading-relaxed text-body-color">
                  Traitement des demandes, vérification des voyageurs et
                  optimisation des tarifs pour maximiser vos revenus.
                </p>
              </div>
            </div>
            <div
              className="wow fadeInUp group relative overflow-hidden rounded-lg bg-white shadow-service"
              data-wow-delay="0.3s"
            >
              <div className="relative z-10 p-9">
                <h3 className="mb-4 text-xl font-bold text-black">
                  Accueil des voyageurs
                </h3>
                <p className="mb-7 text-base font-medium leading-relaxed text-body-color">
                  Accueil personnalisé, remise des clés et assistance pendant le
                  séjour pour une expérience client exceptionnelle.
                </p>
              </div>
            </div>
            <div
              className="wow fadeInUp group relative overflow-hidden rounded-lg bg-white shadow-service"
              data-wow-delay="0.4s"
            >
              <div className="relative z-10 p-9">
                <h3 className="mb-4 text-xl font-bold text-black">
                  Entretien du bien
                </h3>
                <p className="mb-7 text-base font-medium leading-relaxed text-body-color">
                  Ménage professionnel entre chaque séjour, linge de qualité et
                  maintenance régulière pour préserver la valeur de votre bien.
                </p>
              </div>
            </div>
            <div
              className="wow fadeInUp group relative overflow-hidden rounded-lg bg-white shadow-service"
              data-wow-delay="0.5s"
            >
              <div className="relative z-10 p-9">
                <h3 className="mb-4 text-xl font-bold text-black">
                  Gestion administrative
                </h3>
                <p className="mb-7 text-base font-medium leading-relaxed text-body-color">
                  Gestion des contrats, déclarations fiscales et respect des
                  réglementations locales pour une conformité totale.
                </p>
              </div>
            </div>
            <div
              className="wow fadeInUp group relative overflow-hidden rounded-lg bg-white shadow-service"
              data-wow-delay="0.6s"
            >
              <div className="relative z-10 p-9">
                <h3 className="mb-4 text-xl font-bold text-black">
                  Reporting détaillé
                </h3>
                <p className="mb-7 text-base font-medium leading-relaxed text-body-color">
                  Rapports mensuels sur l&apos;occupation, les revenus et les
                  dépenses pour une transparence totale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-white py-20 lg:py-[120px]">
        <div className="container">
          <SectionTitle
            mainTitle="AVANTAGES"
            title="Pourquoi choisir notre gestion locative ?"
            paragraph="Notre service de gestion locative vous offre de nombreux avantages pour une rentabilité maximale et une tranquillité d'esprit totale."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="wow fadeInUp group relative" data-wow-delay="0.1s">
              <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 7.875C8.76562 7.875 1.09375 12.4688 1.09375 18.375C1.09375 21.5625 3.50781 24.5 7.43945 26.6875C6.99023 28.4766 6.37891 31.0156 5.11523 32.9688C4.92383 33.25 5.11523 33.6406 5.46289 33.6406C5.46289 33.6406 5.46289 33.6406 5.53711 33.6406C7.36328 33.3203 11.5234 31.9609 14.0625 29.9375C15.1641 30.0859 16.3398 30.1602 17.5 30.1602C26.2344 30.1602 33.9062 25.5664 33.9062 19.6602C33.9062 13.7539 26.2344 7.875 17.5 7.875Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black">
                Expertise locale
              </h3>
              <p className="mb-7 text-base font-medium leading-relaxed text-body-color">
                Notre connaissance approfondie du marché alsacien nous permet
                d&apos;optimiser votre stratégie de location et vos tarifs.
              </p>
            </div>
            <div className="wow fadeInUp group relative" data-wow-delay="0.2s">
              <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.531 21.875C29.531 22.9688 28.6562 23.8438 27.5625 23.8438H7.4375C6.34375 23.8438 5.46875 22.9688 5.46875 21.875V7.65625C5.46875 6.5625 6.34375 5.6875 7.4375 5.6875H27.5625C28.6562 5.6875 29.531 6.5625 29.531 7.65625V21.875Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.531 9.625H5.46875"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.625 29.531V23.8438"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.375 29.531V23.8438"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5625 29.5312H21.4375"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black">
                Revenus optimisés
              </h3>
              <p className="mb-7 text-base font-medium leading-relaxed text-body-color">
                Notre tarification dynamique et notre stratégie de référencement
                permettent d&apos;augmenter significativement vos revenus
                locatifs.
              </p>
            </div>
            <div className="wow fadeInUp group relative" data-wow-delay="0.3s">
              <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8594 29.3594C13.9219 29.3594 16.4062 26.875 16.4062 23.8125C16.4062 20.75 13.9219 18.2656 10.8594 18.2656C7.79688 18.2656 5.3125 20.75 5.3125 23.8125C5.3125 26.875 7.79688 29.3594 10.8594 29.3594Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.3125 23.8125H1.09375"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.6562 23.8125H16.4375"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.8594 18.2656V14.0469"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.8594 33.9062V29.6875"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.1406 16.7344C27.2031 16.7344 29.6875 14.25 29.6875 11.1875C29.6875 8.125 27.2031 5.64062 24.1406 5.64062C21.0781 5.64062 18.5938 8.125 18.5938 11.1875C18.5938 14.25 21.0781 16.7344 24.1406 16.7344Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.5938 11.1875H14.375"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M33.9062 11.1875H29.6875"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.1406 5.64062V1.42188"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.1406 21.2812V16.7344"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black">
                Gestion sans souci
              </h3>
              <p className="mb-7 text-base font-medium leading-relaxed text-body-color">
                Nous prenons en charge tous les aspects de la gestion pour vous
                libérer totalement des contraintes liées à la location.
              </p>
            </div>
            <div className="wow fadeInUp group relative" data-wow-delay="0.4s">
              <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 33.9062C26.2695 33.9062 33.3594 26.8164 33.3594 18.0469C33.3594 9.27734 26.2695 2.1875 17.5 2.1875C8.73047 2.1875 1.64062 9.27734 1.64062 18.0469C1.64062 26.8164 8.73047 33.9062 17.5 33.9062Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M17.5 8.53125V18.0469H25.4844"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black">
                Disponibilité 24/7
              </h3>
              <p className="mb-7 text-base font-medium leading-relaxed text-body-color">
                Notre équipe est disponible à tout moment pour répondre aux
                besoins de vos locataires et gérer les situations
                d&apos;urgence.
              </p>
            </div>
            <div className="wow fadeInUp group relative" data-wow-delay="0.5s">
              <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0625 1.09375H7.65625C4.04688 1.09375 1.09375 4.04688 1.09375 7.65625V14.0625C1.09375 17.6719 4.04688 20.625 7.65625 20.625H14.0625C17.6719 20.625 20.625 17.6719 20.625 14.0625V7.65625C20.625 4.04688 17.6719 1.09375 14.0625 1.09375Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M27.3438 14.375H20.9375C17.3281 14.375 14.375 17.3281 14.375 20.9375V27.3438C14.375 30.9531 17.3281 33.9062 20.9375 33.9062H27.3438C30.9531 33.9062 33.9062 30.9531 33.9062 27.3438V20.9375C33.9062 17.3281 30.9531 14.375 27.3438 14.375Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black">
                Qualité premium
              </h3>
              <p className="mb-7 text-base font-medium leading-relaxed text-body-color">
                Nous maintenons des standards élevés pour assurer une expérience
                exceptionnelle à vos locataires et des avis positifs.
              </p>
            </div>
            <div className="wow fadeInUp group relative" data-wow-delay="0.6s">
              <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.09375 12.0312H33.9062"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.6875 5.46875H5.3125C3.125 5.46875 1.09375 7.5 1.09375 9.6875V27.5C1.09375 29.6875 3.125 31.7188 5.3125 31.7188H29.6875C31.875 31.7188 33.9062 29.6875 33.9062 27.5V9.6875C33.9062 7.5 31.875 5.46875 29.6875 5.46875Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.8594 25.375C12.4805 25.375 13.7969 24.0586 13.7969 22.4375C13.7969 20.8164 12.4805 19.5 10.8594 19.5C9.23828 19.5 7.92188 20.8164 7.92188 22.4375C7.92188 24.0586 9.23828 25.375 10.8594 25.375Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black">
                Transparence financière
              </h3>
              <p className="mb-7 text-base font-medium leading-relaxed text-body-color">
                Nos rapports détaillés vous permettent de suivre précisément
                l&apos;évolution de vos revenus et dépenses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#f8f9ff] py-20 lg:py-[120px]">
        <div className="container">
          <SectionTitle
            mainTitle="NOTRE PROCESSUS"
            title="Comment fonctionne notre gestion locative"
            paragraph="Nous avons développé un processus simple et efficace pour vous offrir un service de gestion locative sans faille."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="wow fadeInUp group relative" data-wow-delay="0.1s">
              <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black">
                Évaluation initiale
              </h3>
              <p className="mb-7 text-base font-medium leading-relaxed text-body-color">
                Nous évaluons votre bien et définissons ensemble une stratégie
                personnalisée pour maximiser vos revenus.
              </p>
            </div>
            <div className="wow fadeInUp group relative" data-wow-delay="0.2s">
              <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black">
                Mise en place
              </h3>
              <p className="mb-7 text-base font-medium leading-relaxed text-body-color">
                Nous préparons votre bien, créons des annonces attractives et
                mettons en place tous les éléments nécessaires.
              </p>
            </div>
            <div className="wow fadeInUp group relative" data-wow-delay="0.3s">
              <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black">
                Gestion quotidienne
              </h3>
              <p className="mb-7 text-base font-medium leading-relaxed text-body-color">
                Nous gérons les réservations, l&apos;accueil des locataires, le
                ménage et toutes les interventions nécessaires.
              </p>
            </div>
            <div className="wow fadeInUp group relative" data-wow-delay="0.4s">
              <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black">
                Suivi et optimisation
              </h3>
              <p className="mb-7 text-base font-medium leading-relaxed text-body-color">
                Nous vous fournissons des rapports détaillés et optimisons
                continuellement la stratégie pour améliorer vos revenus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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

      {/* CTA Section */}
      <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="text-center lg:text-left">
                <div className="mb-10 lg:mb-0">
                  <h2 className="mb-3 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight">
                    Prêt à maximiser vos revenus locatifs ?
                  </h2>
                  <p className="text-base font-medium leading-relaxed text-white">
                    Contactez-nous dès aujourd&apos;hui pour discuter de votre
                    projet et découvrir comment notre service de gestion
                    locative peut vous aider.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="flex flex-wrap justify-center lg:justify-end">
                <Link
                  href="/simulateur"
                  className="mb-5 mr-5 inline-flex items-center justify-center rounded-md bg-white px-7 py-3 text-center text-base font-medium text-primary hover:bg-opacity-90"
                >
                  Estimer mes revenus
                </Link>
                <Link
                  href="/contact"
                  className="mb-5 inline-flex items-center justify-center rounded-md bg-[#13C296] px-7 py-3 text-center text-base font-medium text-white hover:bg-opacity-90"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
