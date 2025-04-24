import Tarification from "@/components/Conciergerie/TarificationConciergerie";
import { Metadata } from "next";
import Intro from "@/components/Intro";
import SelectionEtAccompagnement from "@/components/Conciergerie/SelectionEtAccompagnement";
import NotreExpertise from "@/components/Conciergerie/NotreExpertise";
import NosPrestations from "@/components/Prestations";
import TimelineProcess from "@/components/Conciergerie/ProcessusConciergerie";
import SectionTransparence from "@/components/Conciergerie/SectionTransparence";
import FaqConciergerie from "./FaqConciergerie";
import NosTransformations from "@/components/Conciergerie/NosTransformations";
import CTAConciergerie from "@/components/Conciergerie/CTAConciergerie";
import TemoignagesClients from "@/components/Conciergerie/TemoignagesClients";
import SectionResultatsConciergerie from "@/components/Conciergerie/SectionResultatsConciergerie";

const siteName: string = process.env.SITE_NAME || "Conciergerie Alsacienne";

export const metadata: Metadata = {
  title: `Services de Conciergerie en Alsace | ${siteName}`,
  description:
    "Conciergerie haut de gamme avec sélection rigoureuse des biens et accompagnement personnalisé en décoration. Boostez votre rentabilité locative avec La Conciergerie Alsacienne.",
};

export default function ConciergeriePage() {
  return (
    <>
      <Intro variant="conciergerie" />

      <SelectionEtAccompagnement />

      <NosTransformations />

      <NosPrestations />

      <TimelineProcess />

      <NotreExpertise />

      <SectionTransparence />

      <SectionResultatsConciergerie />

      <TemoignagesClients />

      <Tarification />

      <FaqConciergerie />

      <CTAConciergerie />
    </>
  );
}
