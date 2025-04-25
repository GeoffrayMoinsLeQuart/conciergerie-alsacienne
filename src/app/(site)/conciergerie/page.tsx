// 🔁 Fichier mis à jour : /conciergerie/page.tsx

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
import Script from 'next/script';
import StickyAnchorMenu from '@/components/Common/StickyAnchorMenu';

const siteURL = 'https://www.conciergerie-alsacienne.fr';
const siteName = 'Conciergerie Alsacienne';

export const metadata: Metadata = {
  title: 'Conciergerie Airbnb à Mulhouse & Colmar | Conciergerie Alsacienne',
  description:
    'Un service de conciergerie haut de gamme pour la location courte durée. Pensé pour vous, géré comme pour nous, en Alsace.',
  openGraph: {
    title: 'Conciergerie haut de gamme en courte durée',
    description:
      "Location courte durée, optimisation des revenus, tranquillité d'esprit. Service de conciergerie clé en main à Mulhouse, Colmar et alentours.",
    url: `${siteURL}/conciergerie`,
    siteName,
    images: [
      {
        url: `${siteURL}/opengraph/conciergerie.jpg`,
        width: 1200,
        height: 630,
        alt: 'Conciergerie Airbnb Alsace',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conciergerie haut de gamme en courte durée',
    description: 'Des logements parfaitement tenus, des propriétaires sereins.',
    images: [`${siteURL}/opengraph/conciergerie.jpg`],
  },
  robots: { index: true, follow: true },
};

export default function ConciergeriePage() {
  return (
    <>
      <main id="main" aria-label="Page conciergerie haut de gamme">
        <StickyAnchorMenu />

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
      </main>

      <Script id="json-ld-conciergerie" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Conciergerie haut de gamme en location courte durée',
          provider: {
            '@type': 'Organization',
            name: siteName,
            url: siteURL,
            logo: {
              '@type': 'ImageObject',
              url: `${siteURL}/logo.svg`,
            },
          },
          areaServed: {
            '@type': 'Place',
            name: 'Alsace',
          },
          description:
            'Conciergerie spécialisée en location courte et moyenne durée à Mulhouse, Colmar et environs. Optimisation des revenus, gestion complète, accompagnement premium.',
        })}
      </Script>

      <Script id="json-ld-breadcrumb-conciergerie" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Accueil',
              item: `${siteURL}`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Conciergerie',
              item: `${siteURL}/conciergerie`,
            },
          ],
        })}
      </Script>
    </>
  );
}
