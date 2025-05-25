// src/app/blog/BlogClient.tsx
'use client';

import { useEffect, useState, useMemo } from 'react';
import { getAllPosts } from '@/sanity/sanity-utils';
import { Blog } from '@/types/blog';
import SingleBlog from '@/components/Blog/SingleBlog';
import Masonry from 'react-masonry-css';
import SkeletonMasonryBlog from '@/components/Blog/SkeletonMasonryBlog';
import BlogFilters from '@/components/Blog/BlogFilters';
import { t } from '@/app/libs/content';

const pageKey = 'blog';
export const revalidate = 600;

// static breakpoint config, memoized once
const BREAKPOINT_COLS = { default: 3, 1100: 2, 700: 1 };

export default function BlogClient() {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // fetch posts once
  useEffect(() => {
    setIsLoading(true);
    getAllPosts().then((all) => {
      setPosts(all);
      setIsLoading(false);
    });
  }, []);

  // compute counts per category
  const categoriesWithCount = useMemo(() => {
    const counts: Record<string, number> = {};
    posts.forEach((post) => {
      post.categories?.forEach((category) => {
        if (category) counts[category] = (counts[category] || 0) + 1;
      });
    });
    return Object.entries(counts)
      .map(([title, count]) => ({ title, count }))
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [posts]);

  // filter posts by selected categories and search term
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      if (selectedCats.length > 0) {
        if (!post.categories) return false;
        if (!selectedCats.every((cat) => post.categories?.includes(cat))) return false;
      }
      if (searchTerm.trim()) {
        const s = searchTerm.toLowerCase();
        const inTitle = post.title.toLowerCase().includes(s);
        const inMeta = post.metadata?.toLowerCase().includes(s);
        if (!inTitle && !inMeta) return false;
      }
      return true;
    });
  }, [posts, selectedCats, searchTerm]);

  // restrict available categories to those present in filteredPosts
  const availableCategories = useMemo(() => {
    const setCats = new Set<string>();
    filteredPosts.forEach((post) => post.categories?.forEach((cat) => cat && setCats.add(cat)));
    return categoriesWithCount.filter(({ title }) => setCats.has(title));
  }, [filteredPosts, categoriesWithCount]);

  // memoize externalized texts
  const { filtersLabel, noResultsTitle, noResultsText, resultsAriaLabel } = useMemo(
    () => ({
      filtersLabel: t(pageKey, 'Blog.BlogClient.filtersLabel') as string,
      noResultsTitle: t(pageKey, 'Blog.BlogClient.noResultsTitle') as string,
      noResultsText: t(pageKey, 'Blog.BlogClient.noResultsText') as string,
      resultsAriaLabel: t(pageKey, 'Blog.BlogClient.resultsAriaLabel') as string,
    }),
    []
  );

  if (isLoading) return <SkeletonMasonryBlog />;

  return (
    <section aria-labelledby="blog-results-heading" className="bg-white pb-20 pt-[40px]">
      <div className="container">
        {/* Filters */}
        <BlogFilters
          categoriesWithCount={availableCategories}
          selectedCats={selectedCats}
          onToggleCat={(cat) =>
            setSelectedCats((prev) =>
              prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
            )
          }
          searchTerm={searchTerm}
          onSearchTermChange={setSearchTerm}
          onReset={() => {
            setSelectedCats([]);
            setSearchTerm('');
          }}
        />

        <header className="sr-only">
          <h2 id="blog-results-heading">{resultsAriaLabel}</h2>
        </header>

        {filteredPosts.length === 0 ? (
          <div className="py-12 text-center" aria-live="polite" aria-atomic="true" role="status">
            <p className="text-xl font-semibold text-black">{noResultsTitle}</p>
            <p className="text-body-color">{noResultsText}</p>
          </div>
        ) : (
          <Masonry
            breakpointCols={BREAKPOINT_COLS}
            className="-mx-4 flex w-auto"
            columnClassName="px-4 space-y-10"
          >
            {filteredPosts.map((post, i) => (
              <div
                key={post._id}
                className="animate-fadeInUp"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <SingleBlog blog={post} />
              </div>
            ))}
          </Masonry>
        )}
      </div>
    </section>
  );
}
