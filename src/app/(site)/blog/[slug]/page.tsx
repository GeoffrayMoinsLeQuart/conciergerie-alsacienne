// ./src/app/(site)/blog/[slug]/page.tsx

import { structuredAlgoliaHtmlData } from "@/app/libs/crawlIndex";
import RenderBodyContent from "@/components/Blog/BlogDetails/RenderBodyContent";
import { getPostBySlug, imageBuilder } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const post: Blog = await getPostBySlug(slug);

  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  // Fallback pour l'image
  const defaultOg = `${siteURL}/default-og.jpg`;
  const imageUrl = post?.mainImage
    ? imageBuilder(post.mainImage).url()
    : defaultOg;

  if (!post) {
    return {
      title: "Not Found",
      description: "No blog article has been found",
    };
  }

  return {
    title: `${post.title} | ${siteName}`,
    description: `${post.metadata?.slice(0, 136)}...`,
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
      description: post.metadata,
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
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${siteName}`,
      description: `${post.metadata?.slice(0, 136)}...`,
      creator: `@${authorName}`,
      site: `@${siteName}`,
      images: [imageUrl],
    },
  };
}

export default async function BlogSlugPage({ params }: Props) {
  const { slug } = params;
  const post: Blog = await getPostBySlug(slug);
  const defaultImage = "/default-blog.jpg";
  const defaultAvatar = "/avatar-placeholder.png";

  if (!post) {
    return <p>Article non trouvé</p>;
  }

  const mainImageUrl = post.mainImage
    ? imageBuilder(post.mainImage).url()
    : defaultImage;
  const authorImageUrl = post.author?.image
    ? imageBuilder(post.author.image).url()
    : defaultAvatar;

  // Indexation Algolia
  await structuredAlgoliaHtmlData({
    type: "blog",
    title: post.title || "",
    htmlString: post.metadata || "",
    pageUrl: `${process.env.SITE_URL}/blog/${post.slug?.current}`,
    imageURL: mainImageUrl,
  });

  return (
    <>
      <section className="bg-white pt-[150px]">
        <div className="container">
          <div className="border-b border-[#E9ECF8] pb-[120px]">
            <div className="mx-[-16px] flex flex-wrap justify-center">
              <div className="w-full px-4 lg:w-8/12">
                <div>
                  <div className="relative mb-10 aspect-[848/384] w-full overflow-hidden rounded">
                    <Image
                      src={mainImageUrl}
                      alt={post.title}
                      fill
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h1 className="mb-8 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight">
                    {post.title}
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
                        By {post.author?.name}
                      </h4>
                    </div>
                    {/* ... autres métadonnées ... */}
                  </div>
                  <div className="prose prose-zinc mb-8 max-w-none">
                    <RenderBodyContent post={post} />
                  </div>
                  {/* Tags & partage */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
