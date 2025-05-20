// src/app/blog/[slug]/page.tsx
import { structuredAlgoliaHtmlData } from '@/app/libs/crawlIndex';
import RenderBodyContent from '@/components/Blog/BlogDetails/RenderBodyContent';
import { getPostBySlug, getPosts, imageBuilder } from '@/sanity/sanity-utils';
import { Blog } from '@/types/blog';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import { makeBlogPostSchema } from '@/app/config/pageSchema';
import { makeBlogMetadata } from '@/app/config/pageMetadata';
import { t } from '@/app/libs/content';

type Params = { slug: string };
export const revalidate = 600;
export async function generateStaticParams() {
  const { posts } = await getPosts({ limit: 100 });
  return posts.map((post) => ({ slug: post.slug.current }));
}
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post: Blog = await getPostBySlug(slug);
  if (!post) return makeBlogMetadata(null as any);
  return makeBlogMetadata(post);
}

const pageKey = 'blog';

const BlogSlugPage = async (props: { params: Promise<Params> }) => {
  const { slug } = await props.params;
  const post: Blog = await getPostBySlug(slug);
  if (!post) notFound();

  const defaultImage = '/default-blog.jpg';
  const defaultAvatar = '/avatar-placeholder.png';
  const mainImageUrl = post.mainImage ? imageBuilder(post.mainImage).url() : defaultImage;
  const authorImageUrl = post.author?.image ? imageBuilder(post.author.image).url() : defaultAvatar;

  // Externalized texts
  const backLinkLabel = t(pageKey, 'BlogSlug.backLinkLabel') as string;
  const mainImageAlt = post.title || (t(pageKey, 'BlogSlug.mainImageAltFallback') as string);
  const authorAlt = post.author?.name
    ? post.author.name
    : (t(pageKey, 'BlogSlug.authorAltFallback') as string);
  const byPrefix = t(pageKey, 'BlogSlug.byAuthorPrefix') as string;
  const categoriesHeading = t(pageKey, 'BlogSlug.categoriesHeading') as string;

  const siteUrl = process.env.SITE_URL!;
  const schema = makeBlogPostSchema(post, siteUrl);
  try {
    await structuredAlgoliaHtmlData({
      type: 'blog',
      title: post.title || '',
      htmlString: post.metadata || '',
      pageUrl: `${siteUrl}/blog/${post.slug.current}`,
      imageURL: mainImageUrl,
    });
  } catch (error) {
    console.error("Erreur lors de l'indexation Algolia:", error);
  }

  return (
    <section className="bg-white pt-[150px]">
      <SeoSchemaInjector schema={schema} />
      <div className="container">
        <div className="border-b border-[#E9ECF8] pb-[120px]">
          <div className="mx-[-16px] flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              {mainImageUrl ? (
                <div className="mb-10 w-full overflow-hidden">
                  <Image
                    src={mainImageUrl}
                    alt={mainImageAlt}
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                    fetchPriority="high"
                  />
                </div>
              ) : (
                <div className="mb-10 w-full overflow-hidden bg-gray-200" />
              )}

              <div className="mb-6 flex justify-start">
                <Link
                  href="/blog"
                  className="text-sm font-medium text-primary transition-all duration-300 hover:text-primary/80 sm:text-base"
                >
                  {backLinkLabel}
                </Link>
              </div>

              <h1 className="mb-8 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight">
                {post.title || 'Sans titre'}
              </h1>

              <div className="mb-10 flex flex-wrap items-center justify-between border-b border-[#E9ECF8] pb-4">
                <div className="flex items-center">
                  {authorImageUrl ? (
                    <Image
                      src={authorImageUrl}
                      alt={authorAlt}
                      width={40}
                      height={40}
                      className="mr-4 overflow-hidden rounded-full"
                    />
                  ) : (
                    <div
                      className="mr-4 h-[40px] w-[40px] overflow-hidden rounded-full bg-gray-300"
                      aria-label={authorAlt}
                    />
                  )}
                  <p className="text-base font-medium text-body-color">
                    {byPrefix}
                    {post.author?.name || ''}
                  </p>
                </div>
                {post.publishedAt && (
                  <span className="text-sm text-body-color">
                    {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                )}
              </div>

              <div className="prose prose-zinc mb-8 max-w-none">
                <RenderBodyContent post={post} />
              </div>

              {post.categories?.length > 0 && (
                <div className="mt-8">
                  <h5 className="mb-3 text-sm font-medium text-body-color">{categoriesHeading}</h5>
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((category, idx) => (
                      <button
                        key={idx}
                        className="inline-block rounded-md bg-primary/10 px-4 py-2 text-xs font-medium text-primary hover:bg-primary hover:text-white"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* JSON-LD scripts follow unchanged */}
    </section>
  );
};

export default BlogSlugPage;
