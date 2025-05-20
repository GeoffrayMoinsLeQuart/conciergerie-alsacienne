// static-data/text-content/pages/index.ts
import home from './home.json';
import contact from './contact.json';
import about from './about.json';
import blog from './blog.json';
import conciergerie from './conciergerie.json';
import gestionLocative from './gestion-locative.json';
import mentionsLegales from './mentions-legales.json';
import nosBiens from './nos-biens.json';

// ↑ ajoutez ici manuellement tous vos JSON

export const pages: Record<string, Record<string, any>> = {
  home,
  contact,
  about,
  blog,
  conciergerie,
  gestionLocative,
  mentionsLegales,
  nosBiens,
  // …
};
