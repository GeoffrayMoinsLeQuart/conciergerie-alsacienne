// src/app/gestion-locative/page.tsx
import StickyAnchorMenu from '@/components/Common/StickyAnchorMenu';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import { getMetadata } from '@/app/config/pageMetadata';
import { getFAQsByType } from '../../../../lib/sanity/sanity-utils';
import { makeGestionLocativeSchema } from '@/app/config/pageSchema';
import type { FAQItem } from '@/types/faq';
import HowItWorksSection from '@/components/GestionLocative/HowItWorksSection';
import ResultsBannerSection from '@/components/GestionLocative/ResultsBannerSection';
import HeroSection from '@/components/GestionLocative/HeroSection';
import WhySection from '@/components/GestionLocative/WhySection';
import GuaranteeSection from '@/components/GestionLocative/GuaranteeSection';
import { TestimonialsSection } from '@/components/GestionLocative/TestimonialsSection';
import PricingSection from '@/components/GestionLocative/PricingSection';
import FAQSection from '@/components/GestionLocative/FAQSection';
import FinalCTASection from '@/components/GestionLocative/FinalCTASection';

export const metadata = getMetadata('gestion-locative');

export default async function GestionLocativePage() {
  // Récupération SSR des FAQs pour le schéma
  const faqs: FAQItem[] = await getFAQsByType('gestion-locative');
  const schema = makeGestionLocativeSchema(faqs);

  return (
    <>
      {/* Injection unique du schéma JSON-LD */}
      <SeoSchemaInjector schema={schema} />

      <div id="main" aria-label="Page gestion locative haut de gamme">
        <StickyAnchorMenu />
        <HeroSection />
        <HowItWorksSection />
        <ResultsBannerSection />
        <WhySection />
        <GuaranteeSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </div>
    </>
  );
}
