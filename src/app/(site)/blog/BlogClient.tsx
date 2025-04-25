'use client';

import { useEffect, useState, useMemo } from 'react';
import { getAllPosts } from '@/sanity/sanity-utils';
import { Blog } from '@/types/blog';
import SingleBlog from '@/components/Blog/SingleBlog';
import Masonry from 'react-masonry-css';
import SkeletonMasonryBlog from '@/components/Blog/SkeletonMasonryBlog';
import BlogFilters from '@/components/Blog/BlogFilters';

export default function BlogClient() {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getAllPosts().then((all) => {
      setPosts(all);
      setIsLoading(false);
    });
  }, []);

  const categoriesWithCount = useMemo(() => {
    const counts: Record<string, number> = {};
    posts.forEach((post) => {
      post.categories?.forEach((category) => {
        const key = category;
        if (key) {
          counts[key] = (counts[key] || 0) + 1;
        }
      });
    });

    return Object.entries(counts)
      .map(([title, count]) => ({ title, count }))
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      if (selectedCats.length > 0) {
        if (!post.categories) return false;
        const postCategories = post.categories.map((category) => category);
        if (!selectedCats.every((selectedCategory) => postCategories.includes(selectedCategory))) {
          return false;
        }
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

  const availableCategories = useMemo(() => {
    const filteredCategories = new Set<string>();
    filteredPosts.forEach((post) => {
      post.categories?.forEach((cat) => {
        const categoryTitle = cat;
        if (categoryTitle) {
          filteredCategories.add(categoryTitle);
        }
      });
    });

    return categoriesWithCount.filter(({ title }) => filteredCategories.has(title));
  }, [filteredPosts, categoriesWithCount]);

  if (isLoading) return <SkeletonMasonryBlog />;

  return (
    <section aria-labelledby="blog-results-heading" className="bg-white pb-20 pt-[40px]">
      <div className="container">
        {/* 🔍 Filtres du blog */}
        <BlogFilters
          categoriesWithCount={availableCategories}
          selectedCats={selectedCats}
          onToggleCat={(cat) =>
            setSelectedCats((prev) =>
              prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
            )
          }
          searchTerm={searchTerm}
          onSearchTermChange={setSearchTerm}
          onReset={() => {
            setSelectedCats([]);
            setSearchTerm('');
          }}
        />

        {/* ✅ Résultats de recherche accessibles */}
        <header className="sr-only">
          <h2 id="blog-results-heading">Résultats des articles filtrés</h2>
        </header>

        {filteredPosts.length === 0 ? (
          <div className="py-12 text-center" aria-live="polite" aria-atomic="true" role="status">
            <p className="text-xl font-semibold text-black">Aucun article trouvé</p>
            <p className="text-body-color">Essayez d'ajuster vos filtres ou votre recherche.</p>
          </div>
        ) : (
          <Masonry
            breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
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
