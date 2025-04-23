"use client";

import { useEffect, useState, useMemo } from "react";
import { getAllPosts } from "@/sanity/sanity-utils"; // renvoie tous les posts
import { Blog } from "@/types/blog";
import SingleBlog from "@/components/Blog/SingleBlog";
import Masonry from "react-masonry-css";
import SkeletonMasonryBlog from "@/components/Blog/SkeletonMasonryBlog";
import BlogFilters from "@/components/Blog/BlogFilters";

export default function BlogClient() {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // L’état de tes filtres
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // 1️⃣ Charger tous les posts au montage
  useEffect(() => {
    setIsLoading(true);
    getAllPosts().then((all) => {
      setPosts(all);
      setIsLoading(false);
    });
  }, []);

  // 2️⃣ Calculer le comptage de chaque catégorie sur l’ensemble des posts
  const categoriesWithCount = useMemo(() => {
    const counts: Record<string, number> = {};

    posts.forEach((post) => {
      post.categories?.forEach((category) => {
        // déterminer la clé : si c'est un string on l'utilise, sinon on prend category.title
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

  // 3️⃣ Filtrer les posts en mémoire selon selectedCats et searchTerm
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Filtre catégories
      if (selectedCats.length > 0) {
        if (!post.categories) return false;
        // Vérifier si la catégorie est un string ou un objet avec un titre
        const postCategories = post.categories.map((category) => category);

        // Exige que *toutes* les catégories sélectionnées soient présentes dans post.categories
        if (
          !selectedCats.every((selectedCategory) =>
            postCategories.includes(selectedCategory),
          )
        ) {
          return false;
        }
      }

      // Filtre recherche full-text dans title ou metadata
      if (searchTerm.trim()) {
        const s = searchTerm.toLowerCase();
        const inTitle = post.title.toLowerCase().includes(s);
        const inMeta = post.metadata?.toLowerCase().includes(s);
        if (!inTitle && !inMeta) return false;
      }

      return true;
    });
  }, [posts, selectedCats, searchTerm]);

  // 4️⃣ Calculer les catégories disponibles après application des filtres
  const availableCategories = useMemo(() => {
    const filteredCategories = new Set<string>();
    filteredPosts.forEach((post) => {
      post.categories?.forEach((cat) => {
        // Vérifier si la catégorie est un string ou un objet avec un titre
        const categoryTitle = cat;
        if (categoryTitle) {
          filteredCategories.add(categoryTitle);
        }
      });
    });

    return categoriesWithCount.filter(({ title }) =>
      filteredCategories.has(title),
    );
  }, [filteredPosts, categoriesWithCount]);

  if (isLoading) {
    return <SkeletonMasonryBlog />;
  }

  return (
    <section className="bg-white pb-20 pt-[40px]">
      <div className="container">
        {/* 🛠️ On passe tout l’état + setters à BlogFilters */}
        <BlogFilters
          categoriesWithCount={availableCategories} // Categories mises à jour dynamiquement
          selectedCats={selectedCats}
          onToggleCat={(cat) =>
            setSelectedCats((prev) =>
              prev.includes(cat)
                ? prev.filter((c) => c !== cat)
                : [...prev, cat],
            )
          }
          searchTerm={searchTerm}
          onSearchTermChange={setSearchTerm}
          onReset={() => {
            setSelectedCats([]);
            setSearchTerm("");
          }}
        />

        {filteredPosts.length === 0 ? (
          <div className="py-12 text-center">
            <h3 className="mb-2 text-xl font-semibold text-black">
              Aucun article trouvé
            </h3>
            <p className="text-body-color">
              Essayez d’ajuster vos filtres ou votre recherche.
            </p>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </section>
  );
}
