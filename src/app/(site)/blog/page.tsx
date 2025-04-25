import PageTitle from '@/components/Common/PageTitle';
import BlogClient from './BlogClient'; // ✅ PAS DE dynamic ici
import { Suspense } from 'react';
import { Metadata } from 'next';

// Définition des metadata pour la page Blog
export const metadata: Metadata = {
  title: 'Conseils pour investisseurs immobiliers | Le blog de Conciergerie Alsacienne',
  description:
    'Fiscalité, optimisation locative, rentabilité, réglementation : suivez nos analyses pour mieux piloter vos biens.',
  openGraph: {
    title: 'Blog – Investissement locatif & gestion de biens',
    description: 'Des contenus clairs, utiles, orientés action pour propriétaires exigeants.',
    url: 'https://www.conciergerie-alsacienne.fr/blog',
    siteName: 'Conciergerie Alsacienne',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Conciergerie Alsacienne',
    description: 'Notre expertise au service de votre projet locatif.',
  },
};

export default function BlogPage() {
  return (
    <>
      <PageTitle
        pageTitle="Notre Blog"
        pageDescription="Découvrez nos articles sur les services de conciergerie en Alsace et les meilleures adresses de la région."
        showMenu={true}
      />
      <Suspense fallback={<div className="py-12 text-center">Chargement du blog...</div>}>
        <BlogClient />
      </Suspense>
    </>
  );
}
