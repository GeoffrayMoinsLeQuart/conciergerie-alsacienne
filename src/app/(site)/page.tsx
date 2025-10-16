import dynamic from 'next/dynamic';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import Properties from '@/components/Property';
import { integrations } from '../../../integrations.config';
import { fetchProperties, getPosts } from '../../../lib/sanity/sanity-utils';
import {
  makeHomePageSchema,
  makeProcessSchema,
  makeResultsSchema,
  makeServicesSchema,
  makeTestimonialsSchema,
} from '../config/pageSchema';
import { getMetadata } from '../config/pageMetadata';
import { t } from '@/app/libs/content';
// import ResultsShowcase from '@/components/Home/ResultsShowcase';
import ResultsSection from '@/components/Home/ResultsSection';
import ProcessSection from '@/components/Home/ProcessSection';
import ServicesSection from '@/components/Home/ServicesSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import FinalCTA from '@/components/Home/FinalCTA';
import RevenueCalculator from '@/components/Home/RevenueCalculator';
import RevenueCalculatorSection from '@/components/Home/RevenueCalculatorSection';

// --- Sections principales (Lovable + Original mix) ---
const Hero = dynamic(() => import('@/components/Home/Hero'), { ssr: true });
const About = dynamic(() => import('@/components/Home/About'), { ssr: true });
const Prestation = dynamic(() => import('@/components/Home/Prestation'), { ssr: true });
const Testimonial = dynamic(() => import('@/components/Home/Testimonial'), { ssr: true });
const HomeBlogSection = dynamic(() => import('@/components/Blog/HomeBlogSection'), { ssr: true });
const ContactForm = dynamic(() => import('./contact/page'), { ssr: true });

// --- Nouvelles sections importées depuis Lovable ---
// const GuaranteesSection = dynamic(() => import("@/components/Lovable/GuaranteesSection"), { ssr: false });
// const RevenueCalculator = dynamic(() => import("@/components/Lovable/RevenueCalculator"), { ssr: false });
// const ContactCTA = dynamic(() => import("@/components/Lovable/ContactCTA"), { ssr: false });
// const EstimationWidget = dynamic(() => import("@/components/Lovable/EstimationWidget"), { ssr: false });

// --- SEO / Metadata ---
export const metadata = getMetadata('home');

// --- PAGE ---
export default async function HomePage() {
  // Récupération Sanity (Server side)
  const properties = await fetchProperties();
  const { posts } = await getPosts({ limit: 6 });

  // Génération du JSON-LD SEO
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      ...makeHomePageSchema(posts, properties)['@graph'],
      ...makeResultsSchema()['@graph'],
      makeProcessSchema(),
      ...makeServicesSchema()['@graph'],
      ...makeTestimonialsSchema()['@graph'],
    ],
  };
  // FAQ locale pour la section FAQ si besoin (optionnel)
  const faqItems = [
    {
      question: 'Comment fonctionne la conciergerie ?',
      answer:
        'Nous gérons tout : annonces, réservations, ménage, accueil et optimisation des revenus.',
    },
    {
      question: 'Puis-je utiliser mon bien quand je veux ?',
      answer:
        'Oui, vous gardez la main sur le calendrier et pouvez bloquer des dates à tout moment.',
    },
    {
      question: 'Quel gain moyen espérer ?',
      answer: 'Entre +30% et +50% vs. location classique selon le bien et la saison.',
    },
  ];

  return (
    <main id="home" aria-label={t('home', 'AriaLabelHome')}>
      <SeoSchemaInjector schema={schema} />
      <Hero />
      <ResultsSection /> 
      <ProcessSection />
     <ServicesSection />
      <RevenueCalculatorSection />
       <TestimonialsSection />
       <FinalCTA />
    </main>
  );
}
