"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Category } from "@/types/blog";

interface BlogFiltersProps {
  categories: Category[];
}

export default function BlogFilters({ categories }: BlogFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // État local pour la recherche
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || "",
  );

  // État local pour les catégories sélectionnées
  const [selectedCategories, setSelectedCategories] = useState<string[]>(() => {
    const params = searchParams.get("categories");
    return params ? params.split(",") : [];
  });

  // Mettre à jour l'URL lorsque les filtres changent
  useEffect(() => {
    const params = new URLSearchParams();

    // Ajouter la page courante
    const currentPage = searchParams.get("page");
    if (currentPage) {
      params.set("page", currentPage);
    }

    // Ajouter les catégories sélectionnées
    if (selectedCategories.length > 0) {
      params.set("categories", selectedCategories.join(","));
    }

    // Ajouter le terme de recherche
    if (searchTerm) {
      params.set("search", searchTerm);
    }

    // Mettre à jour l'URL
    const newUrl = `/blog${params.toString() ? `?${params.toString()}` : ""}`;
    router.push(newUrl);
  }, [selectedCategories, searchTerm, router, searchParams]);

  // Gérer le changement de catégorie
  const handleCategoryChange = (slug: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(slug)) {
        return prev.filter((cat) => cat !== slug);
      } else {
        return [...prev, slug];
      }
    });
  };

  // Gérer le changement de recherche
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Réinitialiser tous les filtres
  const resetFilters = () => {
    setSelectedCategories([]);
    setSearchTerm("");
  };

  return (
    <div className="mb-10">
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher un article..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full rounded-lg border border-[#E9ECF8] bg-white py-3 pl-4 pr-10 text-base text-body-color outline-none focus:border-primary"
          />
          <span className="absolute right-4 top-3.5 text-body-color">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </span>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap items-center justify-between">
        <h3 className="text-lg font-semibold text-black">
          Filtrer par catégorie
        </h3>
        {selectedCategories.length > 0 && (
          <button
            onClick={resetFilters}
            className="text-sm font-medium text-primary hover:underline"
          >
            Réinitialiser les filtres
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() => handleCategoryChange(category.slug)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              selectedCategories.includes(category.slug)
                ? "bg-primary text-white"
                : "bg-[#F3F4F6] text-body-color hover:bg-[#E5E7EB]"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>
    </div>
  );
}
