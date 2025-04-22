// src/components/Blog/HomeBlogSection.tsx

"use client";

import { useEffect, useState } from "react";
import { getPosts } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";
import SingleBlog from "./SingleBlog";
import Link from "next/link";
import Masonry from "react-masonry-css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  return (
    <section
      id="news"
      className="flex flex-wrap justify-center bg-[#f8f9ff] py-20 lg:pt-[120px]"
    >
      <div className="container">
        <div className="mx-[-16px] flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[50px] max-w-[600px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Blog de la Conciergerie
              </span>
              <h2 className="mb-5 text-3xl font-bold text-black sm:text-4xl md:text-[45px]">
                Nos derniers conseils et actualités
              </h2>
              <p className="text-lg font-medium text-body-color">
                Optimisation, réglementation, bonnes pratiques : tout pour
                booster vos revenus locatifs.
              </p>
            </div>
          </div>
        </div>

        {/* --- Carrousel mobile --- */}
        <div className="relative block lg:hidden">
          {/* Flèches customisées */}
          <div
            className="swiper-button-prev-custom absolute -left-5 top-[50%] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow transition hover:bg-primary hover:text-white"
            style={{ transform: "translateY(-50%)", cursor: "pointer" }}
          >
            ←
          </div>
          <div
            className="swiper-button-next-custom absolute -right-5 top-[50%] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow transition hover:bg-primary hover:text-white"
            style={{ transform: "translateY(-50%)", cursor: "pointer" }}
          >
            →
          </div>

          <Swiper
            spaceBetween={20}
            slidesPerView={1.1}
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
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

        {/* --- Masonry desktop --- */}
        <div className="hidden lg:block">
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
      </div>
      <Link
        href="/blog"
        className="mt-10 rounded bg-primary px-6 py-3 text-white hover:bg-primary/90"
      >
        Voir tous les articles
      </Link>
    </section>
  );
}
