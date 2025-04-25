import Tarification from '@/components/Conciergerie/TarificationConciergerie';
import { Metadata } from 'next';
import Intro from '@/components/Intro';
import SelectionEtAccompagnement from '@/components/Conciergerie/SelectionEtAccompagnement';
import NotreExpertise from '@/components/Conciergerie/NotreExpertise';
import NosPrestations from '@/components/Prestations';
import TimelineProcess from '@/components/Conciergerie/ProcessusConciergerie';
import SectionTransparence from '@/components/Conciergerie/SectionTransparence';
import FaqConciergerie from './FaqConciergerie';
import NosTransformations from '@/components/Conciergerie/NosTransformations';
import CTAConciergerie from '@/components/Conciergerie/CTAConciergerie';
import TemoignagesClients from '@/components/Conciergerie/TemoignagesClients';
import SectionResultatsConciergerie from '@/components/Conciergerie/SectionResultatsConciergerie';

const siteName: string = process.env.SITE_NAME || 'Conciergerie Alsacienne';

export const metadata: Metadata = {
  title: "Conciergerie Airbnb à Mulhouse & Colmar | Conciergerie Alsacienne",
  description: "Un service de conciergerie discret, réactif et rentable pour la location courte durée. Pensé pour vous, géré comme pour nous.",
  openGraph: {
    title: "Service de conciergerie en Alsace",
    description: "Nettoyage, accueil, gestion des voyageurs : vous déléguez, on s'occupe de tout.",
    url: "https://www.conciergerie-alsacienne.fr/conciergerie",
    siteName: "Conciergerie Alsacienne",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conciergerie haut de gamme en courte durée",
    description: "Des logements parfaitement tenus, des propriétaires sereins.",
  },
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
