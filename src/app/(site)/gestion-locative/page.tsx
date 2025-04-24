// ./src/app/(site)/gestion-locative/page.tsx
import React from "react";
import Intro from "@/components/Intro";
import GarantiesLoyers from "@/components/GestionLocative/GarantieLoyerImpaye";
import TemoinagesSection from "@/components/GestionLocative/Testimonial";
import FAQGestionLocativeClient from "./FAQGestionLocativeClient";
import { Metadata } from "next";
import CTAGestionLocative from "@/components/GestionLocative/CTAGestionLocative";
import BlocProcessusEtPrestations from "@/components/GestionLocative/BlocProcessusEtPrestations";
import TabsProfilProprietaire from "@/components/GestionLocative/TabsProfilProprietaire";
import FraisInitiauxCard from "@/components/GestionLocative/FraisInitiauxCard";
import TarificationGestionLocative from "@/components/GestionLocative/TarificationGestion";

const siteName = process.env.SITE_NAME || "Conciergerie Alsacienne";

export const metadata: Metadata = {
  title: `Gestion Locative Complète en Alsace | ${siteName}`,
  description:
    "Offrez-vous une gestion locative sereine, rentable et professionnelle. De la sélection des locataires à la gestion quotidienne, La Conciergerie Alsacienne s'occupe de tout.",
};

export default function GestionLocativePage() {
  return (
    <>
      <Intro variant="gestion" />

      <BlocProcessusEtPrestations />

      <TabsProfilProprietaire />

      <GarantiesLoyers />

      <TemoinagesSection />

      <FraisInitiauxCard />

      <TarificationGestionLocative />

      <FAQGestionLocativeClient />

      <CTAGestionLocative />
    </>
  );
}
