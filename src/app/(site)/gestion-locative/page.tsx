// ./src/app/(site)/gestion-locative/page.tsx
import React from 'react';
import Intro from '@/components/Intro';
import GarantiesLoyers from '@/components/GestionLocative/GarantieLoyerImpaye';
import TemoinagesSection from '@/components/GestionLocative/Testimonial';
import FAQGestionLocativeClient from './FAQGestionLocativeClient';
import { Metadata } from 'next';
import CTAGestionLocative from '@/components/GestionLocative/CTAGestionLocative';
import BlocProcessusEtPrestations from '@/components/GestionLocative/BlocProcessusEtPrestations';
import TabsProfilProprietaire from '@/components/GestionLocative/TabsProfilProprietaire';
import FraisInitiauxCard from '@/components/GestionLocative/FraisInitiauxCard';
import TarificationGestionLocative from '@/components/GestionLocative/TarificationGestion';

const siteName = process.env.SITE_NAME || 'Conciergerie Alsacienne';

export const metadata: Metadata = {
  title: "Gestion locative longue durée en Alsace | Conciergerie Alsacienne",
  description: "Simplifiez la gestion de votre bien en location nue ou meublée. Loyer sécurisé, accompagnement fiscal, tranquillité durable.",
  openGraph: {
    title: "Service de gestion locative à Mulhouse & Colmar",
    description: "Une prise en charge complète, de la mise en location à la déclaration fiscale.",
    url: "https://www.conciergerie-alsacienne.fr/gestion-locative",
    siteName: "Conciergerie Alsacienne",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestion locative clé en main",
    description: "Un bien loué, suivi et sécurisé — sans y penser.",
  },
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
