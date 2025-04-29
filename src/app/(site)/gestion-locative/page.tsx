import React from 'react';
import Intro from '@/components/Intro';
import GarantiesLoyers from '@/components/GestionLocative/GarantieLoyerImpaye';
import TemoinagesSection from '@/components/GestionLocative/Testimonial';
import FAQGestionLocative from './FAQGestionLocative';
import CTAGestionLocative from '@/components/GestionLocative/CTAGestionLocative';
import BlocProcessusEtPrestations from '@/components/GestionLocative/BlocProcessusEtPrestations';
import TabsProfilProprietaire from '@/components/GestionLocative/TabsProfilProprietaire';
import FraisInitiauxCard from '@/components/GestionLocative/FraisInitiauxCard';
import TarificationGestionLocative from '@/components/GestionLocative/TarificationGestion';
import StickyAnchorMenu from '@/components/Common/StickyAnchorMenu';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import { getMetadata } from '@/app/config/pageMetadata';

const siteURL = 'https://www.conciergerie-alsacienne.fr';
const siteName = 'Conciergerie Alsacienne';

export const metadata = getMetadata('gestion-locative');

export default function GestionLocativePage() {
  return (
    <>
      <main id="main" aria-label="Page gestion locative haut de gamme">
        <StickyAnchorMenu />
        <Intro variant="gestion" />
        <BlocProcessusEtPrestations />
        <TabsProfilProprietaire />
        <GarantiesLoyers />
        <TemoinagesSection />
        <FraisInitiauxCard />
        <TarificationGestionLocative />
        <FAQGestionLocative />
        <CTAGestionLocative />
      </main>

      <SeoSchemaInjector
        schema={{
          '@graph': [
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Gestion locative longue durée',
              provider: {
                '@type': 'LocalBusiness',
                name: siteName,
                url: siteURL,
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
              url: `${siteURL}/gestion-locative`,
              description:
                'Service de gestion locative haut de gamme à Mulhouse et Colmar. Loyers garantis, fiscalité optimisée, suivi complet du bien.',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Accueil',
                  item: siteURL,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Gestion locative',
                  item: `${siteURL}/gestion-locative`,
                },
              ],
            },
          ],
        }}
      />
    </>
  );
}
