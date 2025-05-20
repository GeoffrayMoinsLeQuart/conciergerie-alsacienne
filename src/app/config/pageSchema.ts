import { Blog } from '@/types/blog';
import { imageBuilder } from '@/sanity/sanity-utils';
import type { FAQItem } from '@/types/faq';
import type { Property } from '@/types/property';
import { generateBreadcrumbList } from '@/utils/BreadcrumbGenerator';

const siteURL = 'https://www.conciergerie-alsacienne.fr';
const siteName = 'Conciergerie Alsacienne';
const homeURL = siteURL + '/';

/**
 * Node “WebSite” (votre homeSchema existant)
 */
export const homeWebsiteSchema = {
  '@type': 'WebSite',
  name: 'Conciergerie Alsacienne',
  url: siteURL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteURL}/faq?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

/**
 * Node “WebPage” pour la page d'accueil
 * avec action de contact intégrée
 */
export const homeWebPageSchema = {
  '@type': 'WebPage',
  name: 'Accueil | Conciergerie Alsacienne',
  url: homeURL,
  potentialAction: [
    {
      '@type': 'ContactAction',
      target: `${siteURL}/contact`,
      name: 'Envoyer une demande de contact',
    },
  ],
};

/**
 * Génère le schema complet @graph pour la homepage
 */
export function makeHomePageSchema(posts: Blog[], properties: Property[]) {
  // Blog + derniers articles
  const blogNode = {
    '@type': 'Blog',
    name: 'Blog de la Conciergerie Alsacienne',
    url: `${siteURL}/blog`,
    blogPost: posts.slice(0, 6).map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metadata || '',
      url: `${siteURL}/blog/${post.slug}`,
      datePublished: post.publishedAt,
    })),
  };

  // Liste des biens (3 premiers)
  const propertiesNode = {
    '@type': 'ItemList',
    itemListElement: properties.slice(0, 3).map((prop, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: prop.slug?.current || prop._id,
      url: `${siteURL}/nos-biens/${prop.slug?.current}`,
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [homeWebsiteSchema, homeWebPageSchema, blogNode, propertiesNode],
  };
}

export const errorSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: '404 Page Not Found – Conciergerie Alsacienne',
  url: 'https://www.conciergerie-alsacienne.fr/404',
  description:
    "La page que vous recherchez n'existe pas ou plus. Utilisez le lien ci-dessous pour revenir à l'accueil.",
  isPartOf: {
    '@type': 'WebSite',
    name: 'Conciergerie Alsacienne',
    url: 'https://www.conciergerie-alsacienne.fr',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://www.conciergerie-alsacienne.fr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '404 Page Not Found',
        item: 'https://www.conciergerie-alsacienne.fr/404',
      },
    ],
  },
};

export const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: 'https://www.conciergerie-alsacienne.fr',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'À propos',
          item: 'https://www.conciergerie-alsacienne.fr/about',
        },
      ],
    },
    {
      '@type': 'AboutPage',
      name: 'À propos | Conciergerie Alsacienne',
      url: 'https://www.conciergerie-alsacienne.fr/about',
      description:
        'Une conciergerie 100% alsacienne, fondée par des professionnels passionnés. Découvrez notre mission, nos valeurs, notre exigence.',
      publisher: {
        '@type': 'Organization',
        name: 'Conciergerie Alsacienne',
        url: 'https://www.conciergerie-alsacienne.fr',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.conciergerie-alsacienne.fr/logo.svg',
        },
      },
    },
  ],
};

export const blogSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    // Breadcrumb pour la navigation
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: 'https://www.conciergerie-alsacienne.fr',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://www.conciergerie-alsacienne.fr/blog',
        },
      ],
    },
    // Déclaration de la page de blog
    {
      '@type': 'Blog',
      name: 'Notre Blog | Conciergerie Alsacienne',
      url: 'https://www.conciergerie-alsacienne.fr/blog',
      description:
        'Découvrez nos articles sur les services de conciergerie en Alsace et les meilleures adresses de la région.',
      publisher: {
        '@type': 'Organization',
        name: 'Conciergerie Alsacienne',
        url: 'https://www.conciergerie-alsacienne.fr',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.conciergerie-alsacienne.fr/logo.svg',
        },
      },
      // Optionnel : mainEntityOfPage pour lister dynamiquement les articles
      // mainEntityOfPage: {
      //   '@type': 'ItemList',
      //   itemListElement: [
      //     { '@type': 'ListItem', 'position': 1, 'url': 'https://…/article-1' },
      //     …
      //   ]
      // }
    },
  ],
};

/**
 * Génère le schéma JSON-LD pour un article de blog
 * @param post - Données de l'article
 * @param siteUrl - URL du site (ex: https://conciergerie-alsacienne.fr)
 */
export function makeBlogPostSchema(post: Blog, siteUrl: string) {
  const postUrl = `${siteUrl}/blog/${post.slug.current}`;
  const mainImage = post.mainImage
    ? imageBuilder(post.mainImage).url()
    : `${siteUrl}/default-blog.jpg`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        image: [mainImage],
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        author: {
          '@type': 'Organization',
          name: 'Conciergerie Alsacienne',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Conciergerie Alsacienne',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': postUrl,
        },
        description: post.metadata || post.title,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Accueil',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${siteUrl}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: postUrl,
          },
        ],
      },
    ],
  };
}

// Partie statique du schéma pour /conciergerie
export const conciergerieSchemaBase = {
  '@type': 'Service',
  serviceType: 'Conciergerie haut de gamme en location courte durée',
  provider: {
    '@type': 'Organization',
    name: siteName,
    url: siteURL,
    logo: { '@type': 'ImageObject', url: `${siteURL}/logo.svg` },
  },
  areaServed: { '@type': 'Place', name: 'Alsace' },
  description:
    'Conciergerie spécialisée en location courte et moyenne durée à Mulhouse, Colmar et environs. Optimisation des revenus, gestion complète, accompagnement premium.',
};

// Breadcrumb statique
export const breadcrumbConciergerie = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteURL },
    { '@type': 'ListItem', position: 2, name: 'Conciergerie', item: `${siteURL}/conciergerie` },
  ],
};

/**
 * Génère le JSON-LD complet (@graph) pour la page Conciergerie,
 * incluant Service, BreadcrumbList et FAQPage.
 */
export function makeConciergerieSchema(faqs: FAQItem[]) {
  const faqPage = {
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer.replace(/<[^>]*>/g, '').trim(),
      },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [conciergerieSchemaBase, breadcrumbConciergerie, faqPage],
  };
}

export const gestionLocativeSchemaBase = {
  '@type': 'Service',
  serviceType: 'Gestion locative longue durée',
  provider: {
    '@type': 'LocalBusiness',
    name: siteName,
    url: siteURL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mulhouse',
      addressRegion: 'Grand Est',
      addressCountry: 'FR',
    },
  },
  areaServed: {
    '@type': 'Place',
    name: 'Mulhouse, Colmar, Alsace',
  },
  url: `${siteURL}/gestion-locative`,
  description:
    'Service de gestion locative haut de gamme à Mulhouse et Colmar. Loyers garantis, fiscalité optimisée, suivi complet du bien.',
};

// BreadcrumbList statique pour Gestion Locative
export const breadcrumbGestionLocative = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteURL },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Gestion locative',
      item: `${siteURL}/gestion-locative`,
    },
  ],
};

/**
 * Génère le schéma complet (@graph) pour la page Gestion Locative,
 * incluant Service, BreadcrumbList et FAQPage.
 */
export function makeGestionLocativeSchema(faqs: FAQItem[]) {
  const faqPage = {
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer.replace(/<[^>]*>/g, '').trim(),
      },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [gestionLocativeSchemaBase, breadcrumbGestionLocative, faqPage],
  };
}

export const contactPageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      url: `${siteURL}/contact`,
      description:
        "Besoin d'un conseil ou d'une estimation ? Contactez notre équipe via le formulaire ci-dessous pour un accompagnement rapide et personnalisé.",
      // On peut ajouter une action potentielle si besoin
      potentialAction: {
        '@type': 'ContactAction',
        target: `${siteURL}/contact`,
        name: 'Envoyer une demande de contact',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteURL },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteURL}/contact` },
      ],
    },
  ],
};

export const estimationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'Estimation de rentabilité locative | Conciergerie Alsacienne',
      url: `${siteURL}/estimation`,
      description:
        'Testez gratuitement le potentiel de revenus locatifs de votre bien en Alsace grâce à notre simulateur en ligne.',
      potentialAction: {
        '@type': 'EstimateAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteURL}/estimation`,
        },
        name: 'Simuler la rentabilité locative',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteURL },
        { '@type': 'ListItem', position: 2, name: 'Estimation', item: `${siteURL}/estimation` },
      ],
    },
  ],
};

/** Schéma JSON-LD pour la page FAQ */
export function makeFAQPageSchema(faqs: FAQItem[]) {
  const faqPage = {
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteURL },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${siteURL}/faq` },
    ],
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [faqPage, breadcrumb],
  };
}

export const mentionsLegalesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteURL },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Mentions légales',
          item: `${siteURL}/mentions-legales`,
        },
      ],
    },
    {
      '@type': 'WebPage',
      name: 'Mentions légales | Conciergerie Alsacienne',
      url: `${siteURL}/mentions-legales`,
    },
  ],
};

export const merciSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteURL },
        { '@type': 'ListItem', position: 2, name: 'Merci', item: `${siteURL}/merci` },
      ],
    },
    {
      '@type': 'WebPage',
      name: 'Merci pour votre demande ! | Conciergerie Alsacienne',
      url: `${siteURL}/merci`,
      description:
        'Merci pour votre demande ! Nous avons bien reçu vos informations et reviendrons vers vous dans les 24 heures.',
    },
  ],
};

export const propertiesPageBase = {
  '@type': 'WebPage',
  name: 'Nos biens en gestion | Conciergerie Alsacienne',
  url: `${siteURL}/nos-biens`,
  description:
    'Studios, T2 ou maisons, en courte ou longue durée : découvrez les logements que nous gérons, optimisés pour la rentabilité et la satisfaction voyageurs.',
};
export const breadcrumbProperties = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteURL },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Nos biens en gestion',
      item: `${siteURL}/nos-biens`,
    },
  ],
};

export function makePropertiesSchema(properties: Property[]) {
  const itemList = {
    '@type': 'ItemList',
    itemListElement: properties.map((prop, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      // On utilise le slug (ou l'ID si absent) pour le name
      name: prop.slug?.current || prop._id,
      // Lien vers la page détail (ajustez si votre route diffère)
      url: `${siteURL}/nos-biens/${prop.slug?.current}`,
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [propertiesPageBase, breadcrumbProperties, itemList],
  };
}

// src/app/config/pageSchema.ts

/**
 * Génère le JSON-LD complet (@graph) pour une page détail de propriété
 */
export function makePropertyPageSchema(property: Property) {
  const {
    slug,
    name,
    shortDescription,
    longDescription,
    imagePrincipale,
    revenuMensuel,
    loyer,
    modeGestion,
    surface,
    nbChambres,
    categories,
  } = property;

  // URL de la page
  const pageUrl = `${siteURL}/nos-biens/${slug?.current}`;
  // Image principale
  const mainImage = imagePrincipale
    ? imageBuilder(imagePrincipale).url()
    : `${siteURL}/default-property.jpg`;

  // Produit (property) schema
  const productSchema = {
    '@type': 'Product',
    name,
    description: shortDescription || longDescription?.slice(0, 150) || '',
    image: mainImage,
    sku: slug?.current,
    brand: { '@type': 'Organization', name: siteName },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: modeGestion === 'Conciergerie' ? revenuMensuel || 0 : loyer || 0,
      availability: 'https://schema.org/InStock',
      url: pageUrl,
    },
    additionalProperty: [
      ...(surface ? [{ '@type': 'PropertyValue', name: 'Surface', value: `${surface} m²` }] : []),
      ...(nbChambres !== undefined
        ? [{ '@type': 'PropertyValue', name: 'Chambres', value: nbChambres }]
        : []),
      ...(categories?.length
        ? [
            {
              '@type': 'PropertyValue',
              name: 'Type',
              value: categories.map((c) => c.value).join(', '),
            },
          ]
        : []),
    ],
  };

  // Fil d'Ariane
  const breadcrumb = generateBreadcrumbList([
    { name: 'Accueil', url: siteURL },
    { name: 'Nos biens en gestion', url: `${siteURL}/nos-biens` },
    { name, url: pageUrl },
  ]);

  return {
    '@context': 'https://schema.org',
    '@graph': [productSchema, breadcrumb],
  };
}
