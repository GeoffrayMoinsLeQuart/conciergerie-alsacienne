import { Blog } from '@/types/blog';
import { imageBuilder } from '../../../lib/sanity/sanity-utils';
import type { FAQItem } from '@/types/faq';
import type { Property } from '@/types/property';
import { generateBreadcrumbList } from '@/utils/BreadcrumbGenerator';
import { testimonialData } from '@/static-data/testimonial';

const siteURL = 'https://www.clefsdalsace.fr';
const siteName = 'Les Clés d’Alsace';
const homeURL = siteURL + '/';

/**
 * Node “WebSite” (votre homeWebsiteSchema existant)
 */
export const homeWebsiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
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
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: `Accueil | ${siteName}`,
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
    name: `Blog des Clés d’Alsace`,
    url: `${siteURL}/blog`,
    blogPost: posts.slice(0, 6).map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metadata || '',
      url: `${siteURL}/blog/${post.slug.current}`,
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
  name: `404 Page Not Found – ${siteName}`,
  url: `${siteURL}/404`,
  description:
    "La page que vous recherchez n'existe pas ou plus. Utilisez le lien ci-dessous pour revenir à l'accueil.",
  isPartOf: {
    '@type': 'WebSite',
    name: siteName,
    url: siteURL,
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: siteURL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '404 Page Not Found',
        item: `${siteURL}/404`,
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
          item: siteURL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'À propos',
          item: `${siteURL}/about`,
        },
      ],
    },
    {
      '@type': 'AboutPage',
      name: `À propos | ${siteName}`,
      url: `${siteURL}/about`,
      description:
        'Une conciergerie 100% alsacienne, fondée par des professionnels passionnés. Découvrez notre mission, nos valeurs, notre exigence.',
      publisher: {
        '@type': 'Organization',
        name: siteName,
        url: siteURL,
        logo: {
          '@type': 'ImageObject',
          url: `${siteURL}/logo.svg`,
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
          item: siteURL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: `${siteURL}/blog`,
        },
      ],
    },
    // Déclaration de la page de blog
    {
      '@type': 'Blog',
      name: `Blog des Clés d’Alsace`,
      url: `${siteURL}/blog`,
      description:
        'Découvrez nos articles sur les services de conciergerie en Alsace et les meilleures adresses de la région.',
      publisher: {
        '@type': 'Organization',
        name: siteName,
        url: siteURL,
        logo: {
          '@type': 'ImageObject',
          url: `${siteURL}/logo.svg`,
        },
      },
    },
  ],
};

/**
 * Génère le schéma JSON-LD pour un article de blog
 */
export function makeBlogPostSchema(post: Blog, siteUrl: string = siteURL) {
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
          name: siteName,
        },
        publisher: {
          '@type': 'Organization',
          name: siteName,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.svg`,
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

// Partie statique du schéma pour /conciergerie (page service)
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

// Fil d'Ariane statique
export const breadcrumbConciergerie = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteURL },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Conciergerie',
      item: `${siteURL}/conciergerie`,
    },
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
      name: 'Estimation de rentabilité locative | Les Clés d’Alsace',
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
      name: `Mentions légales | ${siteName}`,
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
      name: `Merci pour votre demande ! | ${siteName}`,
      url: `${siteURL}/merci`,
      description:
        'Merci pour votre demande ! Nous avons bien reçu vos informations et reviendrons vers vous dans les 24 heures.',
    },
  ],
};

export const propertiesPageBase = {
  '@type': 'WebPage',
  name: `Nos biens en gestion | ${siteName}`,
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
      name: prop.slug?.current || prop._id,
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

  const pageUrl = `${siteURL}/nos-biens/${slug?.current}`;
  const mainImage = imagePrincipale
    ? imageBuilder(imagePrincipale).url()
    : `${siteURL}/default-property.jpg`;

  const productSchema = {
    '@context': 'https://schema.org',
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

export const privacyPolicySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'DataPolicy',
      name: `Politique de confidentialité | ${siteName}`,
      description: 'Gestion de vos données personnelles pour Les Clés d’Alsace',
      url: `${siteURL}/politique-de-confidentialite`,
      publisher: {
        '@type': 'Organization',
        name: siteName,
        url: siteURL,
      },
      policyContact: {
        '@type': 'ContactPoint',
        contactType: 'DPO',
        email: 'dpo@clefsdalsace.fr',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteURL },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Politique de confidentialité',
          item: `${siteURL}/politique-de-confidentialite`,
        },
      ],
    },
  ],
};

// app/config/pageSchema.ts
export const termsAndConditionsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: `Conditions Générales de Vente | ${siteName}`,
      description: 'Conditions générales de vente des prestations de Les Clés d’Alsace',
      url: `${siteURL}/terms`,
      publisher: {
        '@type': 'Organization',
        name: siteName,
        url: siteURL,
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteURL },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Conditions Générales de Vente',
          item: `${siteURL}/terms`,
        },
      ],
    },
  ],
};

// app/config/pageSchema.ts
export const cookiePolicySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: `Politique de cookies | ${siteName}`,
      description: 'Explication de l’utilisation des cookies sur Les Clés d’Alsace',
      url: `${siteURL}/cookies`,
      publisher: { '@type': 'Organization', name: siteName, url: siteURL },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteURL },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Politique de cookies',
          item: `${siteURL}/cookies`,
        },
      ],
    },
  ],
};

// --- Nouveau schéma JSON-LD pour la section “Nos Résultats” --- //

export function makeResultsSchema() {
  const siteURL = 'https://www.clefsdalsace.fr';
  const siteName = 'Les Clés d’Alsace';

  const caseStudies = [
    {
      location: 'Strasbourg – Hypercentre',
      propertyType: 'T2 – 45m²',
      before: '850 €/mois',
      after: '1 420 €/mois',
      increase: '+67%',
      duration: '2 mois',
    },
    {
      location: 'Colmar – Petite Venise',
      propertyType: 'Studio – 28m²',
      before: '520 €/mois',
      after: '890 €/mois',
      increase: '+71%',
      duration: '1 mois',
    },
    {
      location: 'Mulhouse – Centre',
      propertyType: 'T3 – 65m²',
      before: '780 €/mois',
      after: '1 180 €/mois',
      increase: '+51%',
      duration: '3 mois',
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: `Nos résultats concrets | ${siteName}`,
        description:
          'Des propriétaires alsaciens qui ont vu leurs revenus locatifs augmenter de 40 à 70 % grâce à la gestion haut de gamme des Clés d’Alsace.',
        url: `${siteURL}/#results`,
        isPartOf: {
          '@type': 'WebSite',
          name: siteName,
          url: siteURL,
        },
      },
      {
        '@type': 'AggregateOffer',
        name: 'Résultats Clés d’Alsace',
        description:
          'Études de cas réelles de propriétaires ayant multiplié leurs revenus locatifs grâce à la Conciergerie Alsacienne.',
        url: `${siteURL}/#results`,
        seller: {
          '@type': 'Organization',
          name: siteName,
          url: siteURL,
          logo: `${siteURL}/logo.svg`,
        },
        offers: caseStudies.map((c) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: `${c.propertyType} – ${c.location}`,
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'EUR',
            price: parseInt(c.after.replace(/[^0-9]/g, '')),
          },
          description: `Avant ${c.before}, après ${c.after}, soit ${c.increase} en ${c.duration}.`,
        })),
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '127',
        },
      },
    ],
  };
}

export function makeProcessSchema() {
  const siteURL = 'https://www.clefsdalsace.fr';
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Comment fonctionne la Conciergerie Alsacienne',
    description:
      'Trois étapes simples pour estimer, déléguer et rentabiliser votre bien immobilier en Alsace.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Vous nous contactez',
        text: 'Un expert vous répond sous 2 h pour évaluer gratuitement votre bien.',
      },
      {
        '@type': 'HowToStep',
        name: 'Nous estimons votre bien',
        text: 'Nous analysons le marché local et simulons vos revenus potentiels.',
      },
      {
        '@type': 'HowToStep',
        name: 'Nous gérons tout, vous encaissez',
        text: 'De la création d’annonce à la fiscalité, nous gérons tout ; vous percevez les revenus.',
      },
    ],
    publisher: {
      '@type': 'Organization',
      name: 'Les Clés d’Alsace',
      url: siteURL,
      logo: `${siteURL}/logo.svg`,
    },
  };
}

export function makeServicesSchema() {
  const siteURL = 'https://www.clefsdalsace.fr';
  const siteName = 'Les Clés d’Alsace';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Conciergerie Premium',
        serviceType: 'Gestion complète de location courte durée',
        areaServed: { '@type': 'Place', name: 'Alsace' },
        provider: { '@type': 'Organization', name: siteName, url: siteURL },
        url: `${siteURL}/conciergerie`,
        description:
          'Gestion complète des locations courte et moyenne durée en Alsace, incluant annonces, ménage, linge et optimisation tarifaire.',
      },
      {
        '@type': 'Service',
        name: 'Gestion Locative Longue Durée',
        serviceType: 'Location meublée ou vide longue durée',
        areaServed: { '@type': 'Place', name: 'Mulhouse, Colmar, Saint-Louis' },
        provider: { '@type': 'Organization', name: siteName, url: siteURL },
        url: `${siteURL}/gestion-locative`,
        description:
          'Gestion locative haut de gamme pour propriétaires souhaitant déléguer la mise en location longue durée.',
      },
    ],
  };
}

export function makeTestimonialsSchema() {
  const siteURL = 'https://www.clefsdalsace.fr';
  const siteName = 'Les Clés d’Alsace';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AggregateRating',
        itemReviewed: {
          '@type': 'Organization',
          name: siteName,
          url: siteURL,
        },
        ratingValue: '4.9',
        reviewCount: '127',
        bestRating: '5',
      },
      ...testimonialData.slice(0, 3).map((t) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: t.name },
        reviewBody: t.review,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
      })),
    ],
  };
}

// pageSchema.ts
export function makeRevenueCalculatorSchema() {
  const siteURL = 'https://www.clefsdalsace.fr';
  const siteName = 'Les Clés d’Alsace';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      // Fil d'Ariane
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteURL },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Calculateur de revenus',
            item: `${siteURL}/revenus`,
          },
        ],
      },
      // Déclaration de la page
      {
        '@type': 'WebPage',
        name: `Calculateur de rentabilité locative | ${siteName}`,
        url: `${siteURL}/revenus`,
        description:
          'Estimez vos revenus potentiels en location courte ou longue durée grâce à notre simulateur immobilier précis et gratuit.',
        potentialAction: {
          '@type': 'EstimateAction',
          name: 'Simuler mes revenus locatifs',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteURL}/revenus`,
          },
        },
        mainEntity: {
          '@type': 'FinancialProduct',
          name: 'Simulateur de rentabilité locative',
          description:
            'Calculateur en ligne des revenus locatifs potentiels pour propriétaires en Alsace.',
          provider: {
            '@type': 'Organization',
            name: siteName,
            url: siteURL,
            logo: `${siteURL}/logo.svg`,
          },
          areaServed: {
            '@type': 'Place',
            name: 'Alsace',
          },
        },
      },
    ],
  };
}

// --- LocalBusiness Schema pour le footer ---
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Les Clés d’Alsace',
  image: 'https://www.clefsdalsace.fr/logo.svg',
  url: 'https://www.clefsdalsace.fr',
  telephone: '+33621471922',
  email: 'lesclefsdalsace@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5B Rue de Margnolles',
    addressLocality: 'Mulhouse',
    addressRegion: 'Grand Est',
    postalCode: '68100',
    addressCountry: 'FR',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Alsace, Colmar, Mulhouse, Saint-Louis',
  },
  description:
    'Conciergerie et gestion locative haut de gamme en Alsace. Optimisation des revenus Airbnb et gestion complète pour propriétaires.',
  sameAs: [
    'https://facebook.com/clefsdalsace',
    'https://instagram.com/clefsdalsace',
    'https://linkedin.com/company/clefsdalsace',
  ],
  priceRange: '€€',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
};

export function makeConciergerieSchemaV4(faqs: FAQItem[]) {
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

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteURL },
      { '@type': 'ListItem', position: 2, name: 'Conciergerie', item: `${siteURL}/conciergerie` },
    ],
  };

  const service = {
    '@type': 'Service',
    serviceType: 'Conciergerie haut de gamme en location courte durée',
    provider: {
      '@type': 'LocalBusiness',
      name: siteName,
      url: siteURL,
      logo: { '@type': 'ImageObject', url: `${siteURL}/logo.svg` },
      telephone: '+33621471922',
      email: 'lesclefsdalsace@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5B Rue de Margnolles',
        addressLocality: 'Mulhouse',
        postalCode: '68100',
        addressRegion: 'Grand Est',
        addressCountry: 'FR',
      },
      areaServed: {
        '@type': 'Place',
        name: 'Mulhouse, Colmar, Strasbourg, Saint-Louis',
      },
    },
    areaServed: { '@type': 'Place', name: 'Alsace' },
    description:
      'Conciergerie spécialisée en location courte et moyenne durée à Mulhouse, Colmar et Strasbourg. Gestion complète, accompagnement premium, optimisation des revenus et services hôteliers.',
    url: `${siteURL}/conciergerie`,
  };

  const howTo = {
    '@type': 'HowTo',
    name: 'Comment fonctionne notre conciergerie',
    description: 'Étapes simples pour estimer, déléguer et rentabiliser votre bien en Alsace.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Évaluation gratuite',
        text: 'Analyse complète du potentiel de revenus locatifs de votre bien en Alsace.',
      },
      {
        '@type': 'HowToStep',
        name: 'Préparation du bien',
        text: 'Photos professionnelles, équipements et mise en conformité pour maximiser vos revenus.',
      },
      {
        '@type': 'HowToStep',
        name: 'Gestion quotidienne',
        text: 'Accueil, ménage, maintenance et optimisation tarifaire 7j/7.',
      },
      {
        '@type': 'HowToStep',
        name: 'Revenus optimisés',
        text: 'Suivi transparent des performances et versements mensuels garantis.',
      },
    ],
  };

  const results = {
    '@type': 'AggregateOffer',
    name: 'Résultats obtenus en Alsace',
    description:
      'Des propriétaires alsaciens ayant augmenté leurs revenus locatifs de 40 à 70% grâce à la Conciergerie Alsacienne.',
    url: `${siteURL}/conciergerie#results`,
    seller: { '@type': 'Organization', name: siteName, url: siteURL },
    offers: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'T3 – Tour de l’Europe, Mulhouse',
        },
        description: 'Revenus +40% par rapport à l’ancienne conciergerie, taux d’occupation 98%.',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'T2 – Centre historique, Colmar',
        },
        description: 'Revenus +30%, expérience voyageur 4.9/5.',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
    },
  };

  const testimonials = {
    '@type': 'ItemList',
    itemListElement: testimonialData.slice(0, 3).map((t, index) => ({
      '@type': 'Review',
      position: index + 1,
      author: { '@type': 'Person', name: t.name },
      reviewBody: t.review,
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    })),
  };

  const localBusiness = {
    '@type': 'LocalBusiness',
    name: siteName,
    image: `${siteURL}/logo.svg`,
    url: siteURL,
    telephone: '+33621471922',
    email: 'lesclefsdalsace@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5B Rue de Margnolles',
      addressLocality: 'Mulhouse',
      postalCode: '68100',
      addressRegion: 'Grand Est',
      addressCountry: 'FR',
    },
    areaServed: { '@type': 'Place', name: 'Alsace, Colmar, Mulhouse, Saint-Louis' },
    priceRange: '€€',
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [service, breadcrumb, faqPage, howTo, results, testimonials, localBusiness],
  };
}
