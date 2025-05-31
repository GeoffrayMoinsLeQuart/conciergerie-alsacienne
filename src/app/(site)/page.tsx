// src/app/(site)/page.tsx

import dynamic from 'next/dynamic';
import HomeBlogSection from '@/components/Blog/HomeBlogSection';
import Hero from '@/components/Home/Hero';
import Prestation from '@/components/Home/Prestation';
import Testimonial from '@/components/Home/Testimonial';
import Properties from '@/components/Property';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';

import { integrations } from '../../../integrations.config';
import { fetchProperties, getPosts } from '../../../lib/sanity/sanity-utils';
import { makeHomePageSchema } from '../config/pageSchema';
import { getMetadata } from '../config/pageMetadata';
import { t } from '@/app/libs/content';

const About = dynamic(() => import('@/components/Home/About'), {
  ssr: true,
  loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-lg" />,
});

const ContactForm = dynamic(() => import('./contact/page'), {
  ssr: true,
  loading: () => (
    <div
      className="animate-pulse h-96 bg-gray-100 rounded-lg"
      style={{ minHeight: '600px', contain: 'layout' }}
    />
  ),
});

// --------------------------------------------------------------------------------
// NOTE IMPORTANTE :
// Plus d’`export const getStaticProps` dans l’App Router.
// On transforme le composant en Server Component asynchrone.
// --------------------------------------------------------------------------------
export const metadata = getMetadata('home');

export default async function HomePage() {
  // ➜ Ce code s’exécute côté serveur, à la build (et en ISR si vous utilisez revalidate)
  const properties = await fetchProperties();
  const { posts } = await getPosts({ limit: 6 });

  // Construction des métadonnées et du JSON-LD SEO
  const schema = makeHomePageSchema(posts, properties);

  return (
    <main id="home" aria-label={t('home', 'AriaLabelHome')}>
      <SeoSchemaInjector schema={schema} />

      <Hero />

      <About />

      <Prestation />

      {properties.length > 0 && <Properties properties={properties} homePage />}

      <Testimonial />

      {integrations?.isSanityEnabled && <HomeBlogSection />}

      <ContactForm />
    </main>
  );
}
