import { Suspense } from 'react';
import HomeBlogSection from '@/components/Blog/HomeBlogSection';
import About from '@/components/Home/About';
import Hero from '@/components/Home/Hero';
import Prestation from '@/components/Home/Prestation';
import Testimonial from '@/components/Home/Testimonial';
import Properties from '@/components/Property';
import { integrations } from '../../../integrations.config';
import { fetchProperties } from '@/sanity/sanity-utils';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import dynamic from 'next/dynamic';
import { getMetadata } from '../config/pageMetadata';
import { homeSchema } from '../config/pageSchema';

const ContactForm = dynamic(() => import('./contact/page'), {
  loading: () => <div className="animate-pulse h-96 bg-gray-100 rounded-lg"></div>,
});


export const metadata = getMetadata('home');

export default async function HomePage() {
  const properties = await fetchProperties();

  return (
    <main id="home" aria-label="Page d'accueil des Clés d'Alsace">
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
