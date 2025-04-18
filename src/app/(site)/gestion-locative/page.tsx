import React from "react";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import { getFAQs, getFAQsByType } from "@/sanity/sanity-utils";
import Intro from "@/components/Intro";
import ServicesGestionLocative from "@/components/GestionLocative/Services";
import GarantiesLoyers from "@/components/GestionLocative/GarantieLoyerImpaye";
import NotreProcessus from "@/components/GestionLocative/Processus";
import FormulesSection from "@/components/GestionLocative/Formules";
import TemoinagesSection from "@/components/GestionLocative/Testimonial";
import { Metadata } from "next";

const siteName: string = process.env.SITE_NAME || "Conciergerie Alsacienne";

export const metadata: Metadata = {
  title: `Gestion Locative Complète en Alsace | ${siteName}`,
  description:
    "Offrez-vous une gestion locative sereine, rentable et professionnelle. De la sélection des locataires à la gestion quotidienne, La Conciergerie Alsacienne s'occupe de tout.",
};

export default async function GestionLocativePage() {
  // Récupérer les FAQ de la catégorie "gestion-locative" depuis Sanity
  const faqItems = await getFAQsByType("gestion-locative");

  return (
    <>
      {/* Section Introduction */}

      <Intro
        title="Gestion locative longue durée en Alsace : sérénité et
      rentabilité garanties"
        content="Confiez-nous la gestion de votre bien, meublé ou non. Chez
      Conciergerie Alsacienne, nous gérons votre location longue durée
      de A à Z : démarches administratives, suivi technique, relation
      avec les locataires. Studio, appartement ou maison, notre équipe
      s'occupe de tout pour vous garantir sérénité et rentabilité."
      />

      {/* Section Nos Services */}
      <ServicesGestionLocative />

      {/* Section Garantie Loyers Impayés */}
      <GarantiesLoyers />

      {/* Section Processus */}
      <NotreProcessus />

      {/* Section Formules */}
      <FormulesSection />

      {/* Section Témoignages */}
      <TemoinagesSection />

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
