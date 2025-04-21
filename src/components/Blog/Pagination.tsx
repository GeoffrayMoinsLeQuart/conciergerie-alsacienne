'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Fonction pour générer l'URL avec la nouvelle page
  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', pageNumber.toString());
    return `/blog?${params.toString()}`;
  };
  
  // Générer les numéros de page à afficher
  const getPageNumbers = () => {
    const pageNumbers = [];
    
    // Toujours afficher la première page
    pageNumbers.push(1);
    
    // Calculer la plage de pages à afficher
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);
    
    // Ajouter des points de suspension avant si nécessaire
    if (startPage > 2) {
      pageNumbers.push('...');
    }
    
    // Ajouter les pages intermédiaires
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    // Ajouter des points de suspension après si nécessaire
    if (endPage < totalPages - 1) {
      pageNumbers.push('...');
    }
    
    // Toujours afficher la dernière page si elle existe
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };
  
  // Ne pas afficher la pagination s'il n'y a qu'une seule page
  if (totalPages <= 1) {
    return null;
  }
  
  return (
    <div className="w-full px-4">
      <ul className="flex items-center justify-center pt-8">
        {/* Bouton Précédent */}
        <li className="mx-1">
          <button
            onClick={() => router.push(createPageURL(currentPage - 1))}
            disabled={currentPage <= 1}
            className={`flex h-9 min-w-[36px] items-center justify-center rounded-sm px-4 text-sm transition ${
              currentPage <= 1
                ? 'cursor-not-allowed bg-body-color bg-opacity-[15%] text-body-color'
                : 'bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:bg-opacity-100 hover:text-white'
            }`}
          >
            <ChevronLeftIcon className="h-4 w-4" />
            <span className="ml-1">Prev</span>
          </button>
        </li>
        
        {/* Numéros de page */}
        {getPageNumbers().map((pageNumber, index) => (
          <li key={index} className="mx-1">
            {pageNumber === '...' ? (
              <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-sm bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                ...
              </span>
            ) : (
              <button
                onClick={() => router.push(createPageURL(Number(pageNumber)))}
                className={`flex h-9 min-w-[36px] items-center justify-center rounded-sm px-4 text-sm transition ${
                  currentPage === pageNumber
                    ? 'bg-primary text-white'
                    : 'bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:bg-opacity-100 hover:text-white'
                }`}
              >
                {pageNumber}
              </button>
            )}
          </li>
        ))}
        
        {/* Bouton Suivant */}
        <li className="mx-1">
          <button
            onClick={() => router.push(createPageURL(currentPage + 1))}
            disabled={currentPage >= totalPages}
            className={`flex h-9 min-w-[36px] items-center justify-center rounded-sm px-4 text-sm transition ${
              currentPage >= totalPages
                ? 'cursor-not-allowed bg-body-color bg-opacity-[15%] text-body-color'
                : 'bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:bg-opacity-100 hover:text-white'
            }`}
          >
            <span className="mr-1">Next</span>
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </li>
      </ul>
    </div>
  );
}
