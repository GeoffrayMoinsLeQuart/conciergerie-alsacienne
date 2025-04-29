// 🔁 Fichier mis à jour : /conciergerie/page.tsx

import Tarification from '@/components/Conciergerie/TarificationConciergerie';
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
import { getMetadata } from '@/app/config/pageMetadata';

const siteURL = 'https://www.conciergerie-alsacienne.fr';
const siteName = 'Conciergerie Alsacienne';

export const metadata = getMetadata('conciergerie');

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
