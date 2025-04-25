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
import Script from 'next/script';
import StickyAnchorMenu from '@/components/Common/StickyAnchorMenu';

const siteName = process.env.SITE_NAME || 'Conciergerie Alsacienne';

export const metadata: Metadata = {
  title: 'Gestion locative à Mulhouse & Colmar | Conciergerie Alsacienne',
  description:
    'Déléguez la gestion de votre bien immobilier à une équipe locale fiable. Loyers garantis, fiscalité optimisée, zéro stress. Location nue ou meublée.',
  openGraph: {
    title: 'Service de gestion locative à Mulhouse & Colmar',
    description:
      'Gestion complète et transparente de votre bien : recherche de locataires, loyers garantis, suivi technique et fiscal.',
    url: 'https://www.conciergerie-alsacienne.fr/gestion-locative',
    siteName,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gestion locative clé en main à Mulhouse et Colmar',
    description: 'Un bien loué, suivi et sécurisé — sans y penser.',
  },
};

export default function GestionLocativePage() {
  return (
    <>
      <main id="main" aria-label="Page gestion locative haut de gamme">
        {/* Section principale */}
        <StickyAnchorMenu />
        <Intro variant="gestion" />
        <BlocProcessusEtPrestations />
        <TabsProfilProprietaire />
        <GarantiesLoyers />
        <TemoinagesSection />
        <FraisInitiauxCard />
        <TarificationGestionLocative />
        <FAQGestionLocativeClient />
        <CTAGestionLocative />
      </main>

      {/* ✅ Données structurées Schema.org */}
      <Script
        id="schema-service"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Gestion locative longue durée',
            provider: {
              '@type': 'LocalBusiness',
              name: siteName,
              url: 'https://www.conciergerie-alsacienne.fr',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Mulhouse',
                addressRegion: 'Grand Est',
                addressCountry: 'FR',
              },
            },
            areaServed: {
              '@type': 'Place',
              name: 'Mulhouse, Colmar, Alsace',
            },
            url: 'https://www.conciergerie-alsacienne.fr/gestion-locative',
            description:
              'Service de gestion locative haut de gamme à Mulhouse et Colmar. Loyers garantis, fiscalité optimisée, suivi complet du bien.',
          }),
        }}
      />

      {/* ✅ Fil d’Ariane SEO */}
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Accueil',
                item: 'https://www.conciergerie-alsacienne.fr',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Gestion locative',
                item: 'https://www.conciergerie-alsacienne.fr/gestion-locative',
              },
            ],
          }),
        }}
      />
    </>
  );
}
