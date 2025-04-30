import { imageBuilder } from '@/sanity/sanity-utils';
import { Blog } from '@/types/blog';
import Image from 'next/image';
import Link from 'next/link';

export default function SingleBlog({ blog }: { blog: Blog }) {
  const { title, metadata, slug, mainImage, publishedAt } = blog;

  const formattedDate = new Date(publishedAt).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="mb-10 w-full">
      <div className="group flex h-full flex-col overflow-hidden rounded-xl bg-white pt-6 shadow-blog">
        <Link href={`/blog/${slug?.current}`} className="relative block aspect-video mx-4">
          {mainImage && imageBuilder(mainImage).url() ? (
            <Image
              src={imageBuilder(mainImage).url()}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full rounded-xl object-cover duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-100 text-sm text-gray-500">
              Aucune image
            </div>
          )}
        </Link>
        <div className="flex flex-1 flex-col justify-between px-4 py-6 sm:px-6 sm:py-8">
          {/* Date publication */}
          <div className="mb-2 text-sm text-gray-500">Publié le {formattedDate}</div>

          <div>
            <h3 className="mb-3 line-clamp-2">
              <Link
                href={`/blog/${slug?.current}`}
                title={`Lire l'article : ${title}`}
                className="block text-xl font-semibold text-black duration-200 hover:text-primary"
              >
                {title}
              </Link>
            </h3>
            <p className="mb-4 line-clamp-3 text-base font-medium text-body-color">{metadata}</p>
          </div>

          {/* CTA */}
          <div>
            <Link
              data-analytics-id="homepage_blog_click"
              href={`/blog/${slug?.current}`}
              className="text-sm font-medium text-black underline duration-200 hover:text-primary hover:no-underline"
            >
              Lire l'article
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
