// ✅ PAGE CONCIERGERIE – Version V4 consolidée
// Architecture Lovable + SEO enrichi + JSON-LD + accessibilité

import { Metadata } from 'next';

import type { FAQItem } from '@/types/faq';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import { makeConciergerieSchemaV4 } from '@/app/config/pageSchema';
import { getMetadata } from '@/app/config/pageMetadata';
import { getFAQsByType } from '../../../../lib/sanity/sanity-utils';
import WhySection from '@/components/Conciergerie/WhySection';
import ResultsBannerSection from '@/components/Conciergerie/ResultsBannerSection';
import HowItWorksSection from '@/components/Conciergerie/HowItWorksSection';
import ServicesSection from '@/components/Conciergerie/ServicesSection';
import PricingSection from '@/components/Conciergerie/PrincingSection';
import EligibilitySection from '@/components/Conciergerie/EligibilitySection';
import TestimonialsSection from '@/components/Conciergerie/TestimonialsSection';
import FAQSection from '@/components/Conciergerie/FAQSection';
import FinalCTASection from '@/components/Conciergerie/FinalCTASection';
import HeroSection from '@/components/Conciergerie/IntroConciergerie';

export const metadata: Metadata = getMetadata('conciergerie');
export const revalidate = 3600;

export default async function ConciergeriePage() {
  const faqs: FAQItem[] = await getFAQsByType('conciergerie');
  const schema = makeConciergerieSchemaV4(faqs);

  return (
    <>
      <SeoSchemaInjector schema={schema} />

      <main
        id="main"
        role="main"
        aria-label="Page de conciergerie haut de gamme en Alsace – gestion location courte durée"
        className="min-h-screen bg-background text-foreground"
      >
        {/* --- Hero / Why / Results --- */}
        <HeroSection />
        <div className="h-12 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <WhySection />
        <ResultsBannerSection />

        {/* --- Processus & Services --- */}
        <div className="h-12 bg-gradient-to-b from-primary/5 via-background to-secondary/20" />
        <HowItWorksSection />
        <ServicesSection />

        {/* --- Tarification & Éligibilité --- */}
        <div className="h-12 bg-gradient-to-b from-secondary/10 via-background to-primary/5" />
        <PricingSection />
        <div className="h-12 bg-gradient-to-b from-primary/5 via-secondary/10 to-background" />
        <EligibilitySection />
        <div className="h-12 bg-gradient-to-b from-background via-primary/5 to-background" />

        {/* --- Témoignages & FAQ --- */}
        <TestimonialsSection />
        <div className="h-12 bg-gradient-to-b from-secondary/20 via-background to-primary/5" />
        <FAQSection />
        <div className="h-12 bg-gradient-to-b from-primary/5 via-background to-secondary/20" />
        <FinalCTASection />
      </main>
    </>
  );
}
