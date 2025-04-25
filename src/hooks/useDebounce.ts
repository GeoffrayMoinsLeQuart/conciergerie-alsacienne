// src/hooks/useDebounce.ts
import { useState, useEffect } from 'react';

/**
 * Renvoie la valeur débouncée après `delay` ms
 */
export function useDebounce<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}
