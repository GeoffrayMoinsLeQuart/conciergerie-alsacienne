// ./src/app/(site)/gestion-locative/page.tsx
import React from "react";
import Intro from "@/components/Intro";
import ServicesGestionLocative from "@/components/GestionLocative/Services";
import GarantiesLoyers from "@/components/GestionLocative/GarantieLoyerImpaye";
import NotreProcessus from "@/components/GestionLocative/Processus";
import FormulesSection from "@/components/GestionLocative/Formules";
import TemoinagesSection from "@/components/GestionLocative/Testimonial";
import GestionLocativeClient from "./GestionLocativeClient";
import { Metadata } from "next";
import CTAGestionLocative from "@/components/GestionLocative/CTAGestionLocative";

const siteName = process.env.SITE_NAME || "Conciergerie Alsacienne";

export const metadata: Metadata = {
  title: `Gestion Locative Complète en Alsace | ${siteName}`,
  description:
    "Offrez-vous une gestion locative sereine, rentable et professionnelle. De la sélection des locataires à la gestion quotidienne, La Conciergerie Alsacienne s'occupe de tout.",
};

export default function GestionLocativePage() {
  return (
    <>
      <Intro
        title="Gestion locative longue durée en Alsace : sérénité et rentabilité garanties"
        content="Confiez-nous la gestion de votre bien, meublé ou non. Chez Conciergerie Alsacienne, nous gérons votre location longue durée de A à Z : démarches administratives, suivi technique, relation avec les locataires. Studio, appartement ou maison, notre équipe s'occupe de tout pour vous garantir sérénité et rentabilité."
      />

      <ServicesGestionLocative />
      <GarantiesLoyers />
      <NotreProcessus />
      <FormulesSection />
      <TemoinagesSection />

      {/* Section FAQ */}
      <GestionLocativeClient />

      {/* Call-to-Action */}
      <CTAGestionLocative />
    </>
  );
}
