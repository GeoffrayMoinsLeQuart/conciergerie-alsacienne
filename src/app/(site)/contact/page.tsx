import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { getMetadata } from '@/app/config/pageMetadata';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import { contactPageSchema } from '@/app/config/pageSchema';

const ContactForm = dynamic(() => import('../../../components/Contact'), {
  loading: () => <div className="animate-pulse h-96 bg-gray-100 rounded-lg"></div>,
});

export const metadata = getMetadata('contact');

export default function ContactPage() {
  return (
    <>
      {/* Injection unique du schéma JSON-LD */}
      <SeoSchemaInjector schema={contactPageSchema} />
      <Suspense fallback={<p>Chargement du formulaire…</p>}>
        <ContactForm />
      </Suspense>
    </>
  );
}
