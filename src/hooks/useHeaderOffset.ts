'use client';

import { useEffect, useState } from 'react';

/**
 * Hook permettant d'obtenir la hauteur dynamique du header
 * et de s'adapter automatiquement lors du resize ou de tout changement de taille.
 *
 * @param extraOffset valeur supplémentaire optionnelle (en pixels ou rem)
 * @returns paddingTop prêt à appliquer dans le style inline
 */
export function useHeaderOffset(extraOffset: string = '2rem') {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const updateNavHeight = () => {
      const header = document.querySelector('header');
      if (header) {
        const height = header.getBoundingClientRect().height;
        setNavHeight(height);
      }
    };

    // Petit délai initial pour laisser le layout se stabiliser
    const timeout = setTimeout(updateNavHeight, 50);

    // Observer pour suivre la taille du header
    const header = document.querySelector('header');
    let observer: ResizeObserver | null = null;
    if (header) {
      observer = new ResizeObserver(updateNavHeight);
      observer.observe(header);
    }

    window.addEventListener('resize', updateNavHeight);

    return () => {
      clearTimeout(timeout);
      if (observer) observer.disconnect();
      window.removeEventListener('resize', updateNavHeight);
    };
  }, []);

  return {
    paddingTop: `calc(${navHeight}px + ${extraOffset})`,
    navHeight,
  };
}