// src/components/HomeBlogSection.tsx
'use client';

import { useEffect, useState } from 'react';
import { getPosts } from '@/sanity/sanity-utils';
import { Blog } from '@/types/blog';
import SingleBlog from './SingleBlog';
import Link from 'next/link';
import Masonry from 'react-masonry-css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CTAButtons from '../Buttons/CTAButtons';
import { BookOpen } from 'lucide-react';
import Script from 'next/script';

export default function HomeBlogSection() {
  const [posts, setPosts] = useState<Blog[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getPosts();
      const data = Array.isArray(result) ? result : result.posts || [];
      setPosts(data);
    }
    fetchData();
  }, []);

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog de la Conciergerie Alsacienne',
    url: 'https://www.conciergerie-alsacienne.fr/blog',
    blogPost: posts.slice(0, 6).map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metadata || '',
      url: `https://www.conciergerie-alsacienne.fr/blog/${post.slug}`,
      datePublished: post.publishedAt,
    })),
  };

  return (
    <section
      id="news"
      className="bg-[#f8f9ff] py-20 lg:pt-[120px]"
      aria-labelledby="blog-section-title"
    >
      <div className="container flex flex-col">
        {/* En-tête */}
        <header className="mx-[-16px] flex flex-wrap text-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-[50px] max-w-[600px]">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Blog de la Conciergerie
              </span>
              <h2
                id="blog-section-title"
                className="mb-5 text-3xl font-bold text-black sm:text-4xl md:text-[45px]"
              >
                Nos derniers conseils et actualités
              </h2>
              <p className="text-lg font-medium text-body-color">
                Optimisation, réglementation, bonnes pratiques : tout pour booster vos revenus locatifs.
              </p>
            </div>
          </div>
        </header>

        {/* Carousel mobile */}
        <div className="relative mb-10 block lg:hidden"
             aria-roledescription="carousel"
             aria-label="Articles récents du blog"
        >
          {/* Flèches customisées */}
          <div className="swiper-button-prev-custom absolute -left-5 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow hover:bg-primary/90">
            ←
          </div>
          <div className="swiper-button-next-custom absolute -right-5 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow hover:bg-primary/90">
            →
          </div>

          <Swiper
            spaceBetween={20}
            slidesPerView={1.1}
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            className="pb-12"
          >
            {posts.slice(0, 6).map((blog) => (
              <SwiperSlide key={blog._id}>
                <SingleBlog blog={blog} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Masonry desktop (sans role ARIA) */}
        <div className="hidden flex-1 lg:block">
          <Masonry
            breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
            className="-mx-4 flex w-auto"
            columnClassName="px-4"
          >
            {posts.slice(0, 6).map((blog) => (
              <SingleBlog blog={blog} key={blog._id} />
            ))}
          </Masonry>
        </div>

        {/* CTA toujours centré en bas */}
        <div className="mt-12 text-center">
          <CTAButtons
            primary={{
              label: 'Voir tous les articles',
              href: '/blog',
              icon: <BookOpen className="h-5 w-5" />, 
              colorClass: 'bg-primary text-white hover:bg-primary/90',
            }}
          />
        </div>
      </div>

      {/* Schema.org injecté dynamiquement */}
      {posts.length > 0 && (
        <Script
          id="blog-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
      )}
    </section>
  );
}