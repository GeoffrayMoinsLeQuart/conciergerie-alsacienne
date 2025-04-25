import { Suspense } from 'react';
import HomeBlogSection from '@/components/Blog/HomeBlogSection';
import About from '@/components/Home/About';
import Hero from '@/components/Home/Hero';
import Prestation from '@/components/Home/Prestation';
import Testimonial from '@/components/Home/Testimonial';
import Properties from '@/components/Property';
import { Metadata } from 'next';
import { integrations } from '../../../integrations.config';
import { fetchProperties } from '@/sanity/sanity-utils';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('./contact/page'), {
  loading: () => <div className="animate-pulse h-96 bg-gray-100 rounded-lg"></div>
});

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Conciergerie Alsacienne',
  url: 'https://www.conciergerie-alsacienne.fr',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.conciergerie-alsacienne.fr/faq?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export const metadata: Metadata = {
  title: 'Conciergerie haut de gamme en Alsace | Conciergerie Alsacienne',
  description:
    'Location courte et moyenne durée à Mulhouse, Colmar et alentours. Une conciergerie discrète, rentable, pensée pour les investisseurs exigeants.',
  openGraph: {
    title: 'Conciergerie haut de gamme en Alsace | Conciergerie Alsacienne',
    description: 'Accompagnement sur mesure, logements optimisés, sérénité assurée.',
    url: 'https://www.conciergerie-alsacienne.fr',
    siteName: 'Conciergerie Alsacienne',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conciergerie premium pour investisseurs en Alsace',
    description: 'Des logements bien gérés, des revenus bien pensés.',
  },
};

export default async function HomePage() {
  const properties = await fetchProperties();

  return (
    <main id="home" aria-label="Page d'accueil de la Conciergerie Alsacienne">
      <SeoSchemaInjector schema={homeSchema} />
      <Hero />
      <About />
      <Prestation />
      {properties && <Properties properties={properties} homePage />}
      <Testimonial />
      {integrations?.isSanityEnabled && <HomeBlogSection />}

      <Suspense fallback={<p className="text-center py-10">Chargement du formulaire…</p>}>
        <ContactForm />
      </Suspense>
    </main>
  );
}
