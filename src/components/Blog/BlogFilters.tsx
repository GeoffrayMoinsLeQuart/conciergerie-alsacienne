"use client";

import { ChangeEvent } from "react";

interface CategoryCount {
  title: string;
  count: number;
}

interface BlogFiltersProps {
  categoriesWithCount: CategoryCount[];
  selectedCats: string[];
  onToggleCat: (cat: string) => void;
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
  onReset: () => void;
}

export default function BlogFilters({
  categoriesWithCount,
  selectedCats,
  onToggleCat,
  searchTerm,
  onSearchTermChange,
  onReset,
}: BlogFiltersProps) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-3">
      {/* 🏷️ Chips de catégories */}
      {categoriesWithCount.map(({ title, count }) => (
        <button
          key={title}
          onClick={() => onToggleCat(title)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            selectedCats.includes(title)
              ? "bg-primary text-white"
              : "bg-gray-100 text-body-color hover:bg-primary/10 hover:text-primary"
          }`}
        >
          {title} ({count})
        </button>
      ))}

      {/* 🔎 Champ de recherche */}
      <input
        type="text"
        placeholder="Rechercher un article…"
        value={searchTerm}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onSearchTermChange(e.target.value)
        }
        className="ml-auto rounded border px-3 py-2 text-sm placeholder-gray-400 focus:border-primary focus:ring-primary"
      />

      {/* ↻ Bouton Réinitialiser */}
      <button
        onClick={onReset}
        className="ml-4 text-sm font-medium text-primary underline hover:text-primary/80"
      >
        Réinitialiser
      </button>
    </div>
  );
}
