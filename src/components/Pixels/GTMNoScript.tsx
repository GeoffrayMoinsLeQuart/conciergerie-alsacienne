'use client';

// Récupérer l'ID GTM depuis les variables d'environnement
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

// Balise <noscript> pour GTM en mode sans JavaScript
export const GTMNoScript = () => (
  <noscript>
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    />
  </noscript>
);
