// src/app/page.tsx
import HomeBlogSection from '@/components/Blog/HomeBlogSection';
import About from '@/components/Home/About';
import Hero from '@/components/Home/Hero';
import Prestation from '@/components/Home/Prestation';
import Testimonial from '@/components/Home/Testimonial';
import Properties from '@/components/Property';
import { integrations } from '../../../integrations.config';
import { fetchProperties, getPosts } from '@/sanity/sanity-utils';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import dynamic from 'next/dynamic';
import { getMetadata } from '../config/pageMetadata';
import { makeHomePageSchema } from '../config/pageSchema';
import { t } from '@/app/libs/content';

const ContactForm = dynamic(() => import('./contact/page'), {
  loading: () => <div className="animate-pulse h-96 bg-gray-100 rounded-lg"></div>,
});

export const metadata = getMetadata('home');

export default async function HomePage() {
  // Récupération SSR des propriétés
  const properties = await fetchProperties();

  // getPosts renvoie { posts, pagination }
  const { posts } = await getPosts({ limit: 6 });

  // Génération de tout le schéma JSON-LD
  const schema = makeHomePageSchema(posts, properties);

  return (
    <main id="home" aria-label={t('home', 'AriaLabelHome')}>
      {/* Injection unique du schéma WebSite + Blog + Properties */}
      <SeoSchemaInjector schema={schema} />

      <Hero />

      <About />

      <Prestation />

      {properties && <Properties properties={properties} homePage />}

      <Testimonial />

      {integrations?.isSanityEnabled && <HomeBlogSection />}

      <ContactForm />
    </main>
  );
}
