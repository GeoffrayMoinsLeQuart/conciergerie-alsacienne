import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { getMetadata } from '@/app/config/pageMetadata';

const ContactForm = dynamic(() => import('../../../components/Contact'), {
  loading: () => <div className="animate-pulse h-96 bg-gray-100 rounded-lg"></div>,
});

export const metadata = getMetadata('contact');

export default function ContactPage() {
  return (
    <Suspense fallback={<p>Chargement du formulaire…</p>}>
      <ContactForm />
    </Suspense>
  );
}
