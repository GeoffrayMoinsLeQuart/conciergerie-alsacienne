import { Suspense } from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('../../../components/Contact'), {
  loading: () => <div className="animate-pulse h-96 bg-gray-100 rounded-lg"></div>
});

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: 'Nous contacter | Conciergerie Alsacienne',
  description:
    'Besoin d’un conseil ou d’une estimation ? Échangeons sans engagement. Notre équipe vous répond rapidement.',
  openGraph: {
    title: 'Contactez notre équipe',
    description: 'Une prise de contact simple, directe, sans pression.',
    url: 'https://www.conciergerie-alsacienne.fr/contact',
    siteName: 'Conciergerie Alsacienne',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Conciergerie Alsacienne',
    description: 'On vous écoute, on vous accompagne.',
  },
};

export default function ContactPage() {
  return (
    <Suspense fallback={<p>Chargement du formulaire…</p>}>
      <ContactForm />
    </Suspense>
  );
}
