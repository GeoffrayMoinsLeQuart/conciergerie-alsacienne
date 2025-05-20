import PageTitle from '@/components/Common/PageTitle';
import BlogClient from './BlogClient';
import { Suspense } from 'react';
import { getMetadata } from '@/app/config/pageMetadata';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import { blogSchema } from '@/app/config/pageSchema'; // ← nouveau

export const metadata = getMetadata('blog');

export default function BlogPage() {
  return (
    <main id="main-content" aria-label="Contenu principal du blog">
      {/* Injection unique du JSON-LD pour le blog */}
      <SeoSchemaInjector schema={blogSchema} />

      {/* Titre et description */}
      <PageTitle
        pageTitle="Notre Blog"
        pageDescription="Découvrez nos articles sur les services de conciergerie en Alsace et les meilleures adresses de la région."
        showMenu={true}
      />

      {/* Liste des articles */}
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
