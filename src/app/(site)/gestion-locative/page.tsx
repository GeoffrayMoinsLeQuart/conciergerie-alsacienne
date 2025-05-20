// src/app/gestion-locative/page.tsx
import StickyAnchorMenu from '@/components/Common/StickyAnchorMenu';
import Intro from '@/components/Intro';
import BlocProcessusEtPrestations from '@/components/GestionLocative/BlocProcessusEtPrestations';
import TabsProfilProprietaire from '@/components/GestionLocative/TabsProfilProprietaire';
import GarantiesLoyers from '@/components/GestionLocative/GarantieLoyerImpaye';
import TemoinagesSection from '@/components/GestionLocative/Testimonial';
import FraisInitiauxCard from '@/components/GestionLocative/FraisInitiauxCard';
import TarificationGestionLocative from '@/components/GestionLocative/TarificationGestion';
import FAQGestionLocative from './FAQGestionLocative';
import CTAGestionLocative from '@/components/GestionLocative/CTAGestionLocative';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import { getMetadata } from '@/app/config/pageMetadata';
import { getFAQsByType } from '@/sanity/sanity-utils';
import { makeGestionLocativeSchema } from '@/app/config/pageSchema';
import type { FAQItem } from '@/types/faq';

export const metadata = getMetadata('gestion-locative');

export default async function GestionLocativePage() {
  // Récupération SSR des FAQs pour le schéma
  const faqs: FAQItem[] = await getFAQsByType('gestion-locative');
  const schema = makeGestionLocativeSchema(faqs);

  return (
    <>
      {/* Injection unique du schéma JSON-LD */}
      <SeoSchemaInjector schema={schema} />

      <main id="main" aria-label="Page gestion locative haut de gamme">
        <StickyAnchorMenu />

        <Intro variant="gestion-locative" />
        
        <BlocProcessusEtPrestations />
        
        <TabsProfilProprietaire />
        
        <GarantiesLoyers />
        
        <TemoinagesSection />
        
        <FraisInitiauxCard />
        
        <TarificationGestionLocative />

        <FAQGestionLocative items={faqs} />

        <CTAGestionLocative />
      </main>
    </>
  );
}
