import { structuredAlgoliaHtmlData } from "@/app/libs/crawlIndex";
import RenderBodyContent from "@/components/Blog/BlogDetails/RenderBodyContent";
import { getPostBySlug, getPosts, imageBuilder } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

type Params = {
  slug: string;
};

// Revalidation ISR
export const revalidate = 600;

export async function generateStaticParams() {
  // Récupère toutes les slugs pour la pré-génération ISR des pages de blog
  const { posts } = await getPosts({ limit: 100 }); // Limite le nombre d'articles à pré-générer
  return posts.map((post) => ({
    slug: post.slug?.current,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post: Blog = await getPostBySlug(slug);

  const siteURL = process.env.SITE_URL || "https://conciergerie-alsacienne.fr";
  const siteName = process.env.SITE_NAME || "Conciergerie Alsacienne";
  const authorName = process.env.AUTHOR_NAME || "Conciergerie Alsacienne";

  if (!post) {
    return {
      title: "Article non trouvé | " + siteName,
      description:
        "L'article que vous recherchez n'existe pas ou a été déplacé.",
    };
  }

  const defaultOg = `${siteURL}/default-og.jpg`;
  const imageUrl = post?.mainImage
    ? imageBuilder(post.mainImage).url()
    : defaultOg;

  return {
    title: `${post.title} | ${siteName}`,
    description: post.metadata
      ? `${post.metadata.slice(0, 155)}...`
      : `Article sur ${post.title}`,
    authors: [{ name: authorName }],
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: `${post.title} | ${siteName}`,
      description: post.metadata || `Article sur ${post.title}`,
      url: `${siteURL}/blog/${post.slug?.current}`,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1800,
          height: 1600,
          alt: post.title,
        },
      ],
      locale: "fr_FR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${siteName}`,
      description: post.metadata
        ? `${post.metadata.slice(0, 155)}...`
        : `Article sur ${post.title}`,
      creator: `@${authorName}`,
      site: `@${siteName}`,
      images: [imageUrl],
    },
  };
}

const BlogSlugPage = async (props: { params: Promise<Params> }) => {
  const resolvedParams = await props.params;
  const { slug } = resolvedParams;
  const post: Blog = await getPostBySlug(slug);

  if (!post) {
    notFound(); // Affiche 404 si l'article n'est pas trouvé
  }

  const defaultImage = "/default-blog.jpg";
  const defaultAvatar = "/avatar-placeholder.png";

  const mainImageUrl = post.mainImage
    ? imageBuilder(post.mainImage).url()
    : defaultImage;
  const authorImageUrl = post.author?.image
    ? imageBuilder(post.author.image).url()
    : defaultAvatar;

  try {
    await structuredAlgoliaHtmlData({
      type: "blog",
      title: post.title || "",
      htmlString: post.metadata || "",
      pageUrl: `${process.env.SITE_URL}/blog/${post.slug?.current}`,
      imageURL: mainImageUrl,
    });
  } catch (error) {
    console.error("Erreur lors de l'indexation Algolia:", error);
  }

  return (
<section className="bg-white pt-[150px]">
  <div className="container">
    <div className="border-b border-[#E9ECF8] pb-[120px]">
      <div className="mx-[-16px] flex flex-wrap justify-center">
        <div className="w-full px-4 lg:w-8/12">
          <div>
            {mainImageUrl ? (
              <div className="mb-10 w-full overflow-hidden">
                <Image
                  src={mainImageUrl}
                  alt={post.title || "Image de l'article"}
                  width={1200} // Ajuste la largeur de l'image
                  height={600} // Ajuste la hauteur de l'image
                  className="w-full h-auto object-cover" // L'image occupe toute la largeur, avec hauteur automatique
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
                ← Retour aux articles
              </Link>
            </div>

            <h1 className="mb-8 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight">
              {post.title || "Sans titre"}
            </h1>

            <div className="mb-10 flex flex-wrap items-center justify-between border-b border-[#E9ECF8] pb-4">
              <div className="flex items-center">
                {authorImageUrl ? (
                  <div className="mr-4 overflow-hidden rounded-full">
                    <Image
                      src={authorImageUrl}
                      alt={post.author?.name || "Auteur"}
                      width={40}
                      height={40}
                    />
                  </div>
                ) : (
                  <div className="mr-4 h-[40px] w-[40px] overflow-hidden rounded-full bg-gray-300" />
                )}
                <h4 className="text-base font-medium text-body-color">
                  Par {post.author?.name || "l'équipe"}
                </h4>
              </div>
              {post.publishedAt && (
                <div className="mb-2 flex items-center md:mb-0">
                  <span className="text-sm text-body-color">
                    {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              )}
            </div>

            <div className="prose prose-zinc mb-8 max-w-none">
              <RenderBodyContent post={post} />
            </div>

            {post.categories && post.categories.length > 0 && (
              <div className="mt-8">
                <h5 className="mb-3 text-sm font-medium text-body-color">
                  Catégories:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category, index) => (
                    <button
                      key={index}
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
  </div>
  <Script id="json-ld-blog" type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      image: mainImageUrl,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      author: {
        "@type": "Organization",
        name: "Conciergerie Alsacienne",
      },
      publisher: {
        "@type": "Organization",
        name: "Conciergerie Alsacienne",
        logo: {
          "@type": "ImageObject",
          url: `${process.env.SITE_URL}/logo.png`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${process.env.SITE_URL}/blog/${post.slug?.current}`,
      },
      description: post.metadata || post.title,
    })}
  </Script>
</section>

  );
};

export default BlogSlugPage;
