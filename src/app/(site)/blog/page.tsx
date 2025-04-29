import PageTitle from '@/components/Common/PageTitle';
import BlogClient from './BlogClient';
import { Suspense } from 'react';
import { getMetadata } from '@/app/config/pageMetadata';

// ✅ SEO optimisé
export const metadata = getMetadata('blog');

export default function BlogPage() {
  return (
    <main id="main-content" aria-label="Contenu principal du blog">
      {/* ✅ Titre de page accessible */}
      <PageTitle
        pageTitle="Notre Blog"
        pageDescription="Découvrez nos articles sur les services de conciergerie en Alsace et les meilleures adresses de la région."
        showMenu={true}
      />

      {/* ✅ Section sémantique pour les articles */}
      <section aria-labelledby="blog-heading" className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 id="blog-heading" className="sr-only">
            Articles du blog
          </h2>

          <Suspense fallback={<div className="py-12 text-center">Chargement du blog...</div>}>
            <BlogClient />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
