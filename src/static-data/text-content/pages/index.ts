// static-data/text-content/pages/index.ts
import home from './home.json';
import contact from './contact.json';
import about from './about.json';
import blog from './blog.json';
import cookies from './cookies.json';
import conciergerie from './conciergerie.json';
import gestionLocative from './gestion-locative.json';
import mentionsLegales from './mentions-legales.json';
import nosBiens from './nos-biens.json';
import politiqueConfidentialite from './politique-de-confidentialite.json';
import termsAndConditions from './condition-generale-vente.json';

// ↑ ajoutez ici manuellement tous vos JSON

export const pages: Record<string, Record<string, any>> = {
  home,
  contact,
  about,
  blog,
  cookies,
  conciergerie,
  gestionLocative,
  mentionsLegales,
  nosBiens,
  politiqueConfidentialite,
  termsAndConditions,
  // …
};
