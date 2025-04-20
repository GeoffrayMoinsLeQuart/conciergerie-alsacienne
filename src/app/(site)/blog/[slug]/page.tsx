// ./src/app/(site)/blog/[slug]/page.tsx

import { structuredAlgoliaHtmlData } from "@/app/libs/crawlIndex";
import RenderBodyContent from "@/components/Blog/BlogDetails/RenderBodyContent";
import { getPostBySlug, imageBuilder } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Définition des paramètres de page
type PageParams = {
  slug: string;
};

// Fonction pour générer les métadonnées
export async function generateMetadata({ 
  params 
}: { 
  params: PageParams;
}): Promise<Metadata> {
  const { slug } = params;
  const post: Blog = await getPostBySlug(slug);

  const siteURL = process.env.SITE_URL || "https://conciergerie-alsacienne.fr";
  const siteName = process.env.SITE_NAME || "Conciergerie Alsacienne";
  const authorName = process.env.AUTHOR_NAME || "Conciergerie Alsacienne";

  // Si l'article n'existe pas, retourner des métadonnées par défaut
  if (!post) {
    return {
      title: "Article non trouvé | " + siteName,
      description: "L'article que vous recherchez n'existe pas ou a été déplacé.",
    };
  }

  // Fallback pour l'image
  const defaultOg = `${siteURL}/default-og.jpg`;
  const imageUrl = post?.mainImage
    ? imageBuilder(post.mainImage).url()
    : defaultOg;

  return {
    title: `${post.title} | ${siteName}`,
    description: post.metadata ? `${post.metadata.slice(0, 155)}...` : `Article sur ${post.title}`,
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
      description: post.metadata ? `${post.metadata.slice(0, 155)}...` : `Article sur ${post.title}`,
      creator: `@${authorName}`,
      site: `@${siteName}`,
      images: [imageUrl],
    },
  };
}

// Composant de page principal
export default function BlogSlugPage({ 
  params 
}: { 
  params: PageParams;
}) {
  // Utilisation de async/await dans une fonction séparée pour éviter les erreurs de type
  async function getPostData() {
    const { slug } = params;
    const post: Blog = await getPostBySlug(slug);
    
    if (!post) {
      notFound();
    }
    
    return post;
  }
  
  // Utilisation de React Server Components pour gérer les données asynchrones
  const PostContent = async () => {
    const post = await getPostData();
    const defaultImage = "/default-blog.jpg";
    const defaultAvatar = "/avatar-placeholder.png";

    const mainImageUrl = post.mainImage
      ? imageBuilder(post.mainImage).url()
      : defaultImage;
    const authorImageUrl = post.author?.image
      ? imageBuilder(post.author.image).url()
      : defaultAvatar;

    // Indexation Algolia (avec gestion d'erreur)
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
      // Continuer l'exécution même en cas d'erreur d'indexation
    }

    return (
      <>
        <div>
          <div className="relative mb-10 aspect-[848/384] w-full overflow-hidden rounded">
            <Image
              src={mainImageUrl}
              alt={post.title || "Image de l'article"}
              fill
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h1 className="mb-8 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight">
            {post.title || "Sans titre"}
          </h1>
          <div className="mb-10 flex flex-wrap items-center justify-between border-b border-[#E9ECF8] pb-4">
            <div className="flex items-center">
              <div className="mr-4 h-[40px] w-[40px] overflow-hidden rounded-full">
                <Image
                  src={authorImageUrl}
                  alt={post.author?.name || "Auteur"}
                  width={40}
                  height={40}
                />
              </div>
              <h4 className="text-base font-medium text-body-color">
                Par {post.author?.name || "l'équipe"}
              </h4>
            </div>
            {post.publishedAt && (
              <div className="mb-2 flex items-center md:mb-0">
                <span className="text-sm text-body-color">
                  {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            )}
          </div>
          <div className="prose prose-zinc mb-8 max-w-none">
            <RenderBodyContent post={post} />
          </div>
          
          {/* Catégories */}
          {post.categories && post.categories.length > 0 && (
            <div className="mt-8">
              <h5 className="mb-3 text-sm font-medium text-body-color">Catégories:</h5>
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category, index) => (
                  <Link 
                    key={index}
                    href={`/blog?categories=${category.slug}`}
                    className="inline-block rounded-md bg-primary/10 px-4 py-2 text-xs font-medium text-primary hover:bg-primary hover:text-white"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <section className="bg-white pt-[150px]">
      <div className="container">
        <div className="border-b border-[#E9ECF8] pb-[120px]">
          <div className="mx-[-16px] flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <PostContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
