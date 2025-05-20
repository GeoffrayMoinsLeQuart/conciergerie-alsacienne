// src/app/blog/page.tsx

import PageTitle from '@/components/Common/PageTitle';
import BlogClient from './BlogClient';
import { Suspense } from 'react';
import { getMetadata } from '@/app/config/pageMetadata';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import { blogSchema } from '@/app/config/pageSchema';
import { t } from '@/app/libs/content';

export const metadata = getMetadata('blog');

const pageKey = 'blog';

export default function BlogPage() {
  // Externalized texts
  const pageTitle = t(pageKey, 'Blog.pageTitle') as string;
  const pageDescription = t(pageKey, 'Blog.pageDescription') as string;
  const mainAria = t(pageKey, 'Blog.aria.mainLabel') as string;
  const sectionAria = t(pageKey, 'Blog.Section.ariaLabel') as string;
  const loadingText = t(pageKey, 'Blog.Section.loading') as string;

  return (
    <main id="main-content" aria-label={mainAria}>
      {/* JSON-LD for blog */}
      <SeoSchemaInjector schema={blogSchema} />

      {/* Title and description */}
      <PageTitle pageTitle={pageTitle} pageDescription={pageDescription} showMenu={true} />

      {/* Article list */}
      <section aria-labelledby="blog-heading" className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 id="blog-heading" className="sr-only">
            {sectionAria}
          </h2>

          <Suspense fallback={<div className="py-12 text-center">{loadingText}</div>}>
            <BlogClient />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
