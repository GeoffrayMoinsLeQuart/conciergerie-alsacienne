import dynamic from 'next/dynamic';
import type { LightBoxProps } from './types';

// Réexport des types et interfaces externes
export * from './types';
export * from 'yet-another-react-lightbox';

// Composant principal Lightbox chargé dynamiquement côté client uniquement
const Lightbox = dynamic<LightBoxProps>(
  () => import('./lightbox').then((mod) => mod.default),
  { ssr: false }
);

export default Lightbox;

// Hook pour contrôler l'ouverture de la lightbox (import statique)
export { default as useLightbox } from './use-light-box';