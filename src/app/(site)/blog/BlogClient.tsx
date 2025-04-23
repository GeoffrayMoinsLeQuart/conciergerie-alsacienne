"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import BlogFilters from "@/components/Blog/BlogFilters";
import { getCategories, getPosts } from "@/sanity/sanity-utils";
import { Category, Blog } from "@/types/blog";
import SingleBlog from "@/components/Blog/SingleBlog";
import Masonry from "react-masonry-css";
import SkeletonMasonryBlog from "@/components/Blog/SkeletonMasonryBlog";

export default function BlogClient() {
  const searchParams = useSearchParams();
  const [posts, setPosts] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const selectedCategories = searchParams.get("categories")?.split(",") || [];
  const search = searchParams.get("search") || "";

  useEffect(() => {
    async function fetchInitialData() {
      setIsLoading(true);
      const cats = await getCategories();
      setCategories(cats);
      const { posts: initialPosts, pagination } = await getPosts({
        page: 1,
        limit: 9,
        categories: selectedCategories,
        search,
      });
      setPosts(initialPosts);
      setPage(1);
      setHasMore(pagination.pages > 1);
      setIsLoading(false);
    }

    fetchInitialData();
  }, [searchParams.toString()]);

  async function loadMorePosts() {
    const nextPage = page + 1;
    const { posts: newPosts, pagination } = await getPosts({
      page: nextPage,
      limit: 9,
      categories: selectedCategories,
      search,
    });

    setPosts((prev) => [...prev, ...newPosts]);
    setPage(nextPage);
    setHasMore(pagination.page < pagination.pages);
  }

  return (
    <section className="bg-white pb-20 pt-[90px]">
      <div className="container">
        <BlogFilters categories={categories} />

        {isLoading ? (
          <SkeletonMasonryBlog />
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-black mb-2">Aucun article trouvé</h3>
            <p className="text-body-color">
              Essayez de modifier vos filtres ou votre recherche.
            </p>
          </div>
        ) : (
          <>
            <Masonry
              breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
              className="flex w-auto -mx-4"
              columnClassName="px-4 space-y-10"
            >
              {posts.map((post, index) => (
                <div
                  key={post._id}
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <SingleBlog blog={post} />
                </div>
              ))}
            </Masonry>

            {hasMore && (
              <div className="mt-10 text-center">
                <button
                  onClick={loadMorePosts}
                  className="inline-block rounded bg-primary px-6 py-3 text-white transition hover:bg-primary/90"
                >
                  Charger plus d’articles
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
