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
import StickyAnchorMenu from '@/components/Common/StickyAnchorMenu';
import { getMetadata } from '@/app/config/pageMetadata';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import { makeConciergerieSchema } from '@/app/config/pageSchema';
import { getFAQsByType } from '../../../../lib/sanity/sanity-utils';
import { FAQItem } from '@/types/faq';

export const metadata = getMetadata('conciergerie');

export default async function ConciergeriePage() {
  const faqs: FAQItem[] = await getFAQsByType('conciergerie');

  const schema = makeConciergerieSchema(faqs);

  return (
    <>
      {/* Injection unique du JSON-LD */}
      <SeoSchemaInjector schema={schema} />
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

        <FaqConciergerie items={faqs} />

        <CTAConciergerie />
      </main>
    </>
  );
}
