import { imageBuilder } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default function SingleBlog({ blog }: { blog: Blog }) {
  const { title, metadata, slug, mainImage } = blog;

  return (
    <div className="mb-10 w-full px-4 lg:w-1/2 xl:w-1/3">
      <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-blog">
        <Link
          href={`/blog/${slug?.current}`}
          className="relative block aspect-video"
        >
          {mainImage && imageBuilder(mainImage).url() ? (
            <Image
              src={imageBuilder(mainImage).url()}
              alt={title}
              fill
              className="w-full duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-100 text-sm text-gray-500">
              Aucune image
            </div>
          )}
        </Link>
        <div className="flex flex-1 flex-col justify-between px-6 py-8 sm:px-11">
          <div>
            <h3 className="mb-3 line-clamp-2">
              <Link
                href={`/blog/${slug?.current}`}
                className="block text-xl font-semibold text-black duration-200 hover:text-primary"
              >
                {title}
              </Link>
            </h3>
            <p className="mb-4 line-clamp-3 text-base font-medium text-body-color">
              {metadata}
            </p>
          </div>
          <div>
            <Link
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
