import Tarification from "@/components/Conciergerie/TarificationConciergerie";
import { Metadata } from "next";
import Intro from "@/components/Intro";
import SelectionEtAccompagnement from "@/components/Conciergerie/SelectionEtAccompagnement";
import NotreExpertise from "@/components/Conciergerie/NotreExpertise";
import NosPrestations from "@/components/Prestations";
import ProcessusConciergerie from "@/components/Conciergerie/ProcessusConciergerie";
import SectionTransparence from "@/components/Conciergerie/SectionTransparence";
import SectionConfiance from "@/components/Conciergerie/SectionConfiance";
import ConciergerieClient from "./ConciergerieClient";
import NosTransformations from "@/components/Conciergerie/NosTransformations";
import CTAConciergerie from "@/components/Conciergerie/CTAConciergerie";

const siteName: string = process.env.SITE_NAME || "Conciergerie Alsacienne";

export const metadata: Metadata = {
  title: `Services de Conciergerie en Alsace | ${siteName}`,
  description:
    "Conciergerie haut de gamme avec sélection rigoureuse des biens et accompagnement personnalisé en décoration. Boostez votre rentabilité locative avec La Conciergerie Alsacienne.",
};

export default function ConciergeriePage() {
  return (
    <>
      <Intro
        title="Conciergerie Premium & Valorisation Immobilière"
        content="Une gestion des locations courtes durées sereine et de qualité, avec un
        accompagnement personnalisé pour valoriser votre bien, offrir
        une belle expérience aux voyageurs et optimiser vos revenus."
      />

      {/* Critères de Sélection Section */}
      <SelectionEtAccompagnement />
      <NosPrestations />
      {/* Transformations Section */}
      <NosTransformations />
      {/* Service de Décoration Section */}
      <NotreExpertise />
      {/* Nos Services Section */}
      <NosPrestations />
      {/* Processus Section */}
      <ProcessusConciergerie />
      {/* Coûts Initiaux Section */}
      <SectionTransparence />
      {/* Chiffres Clés & Avantages Section */}
      <SectionConfiance />
      {/* Tarification */}
      <Tarification />
      {/* Section FAQ */}
      <ConciergerieClient />
      {/* CTA Section */}
      <CTAConciergerie />
    </>
  );
}
