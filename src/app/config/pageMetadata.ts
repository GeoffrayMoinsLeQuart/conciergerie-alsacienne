// src/config/pageMetadata.ts
import { Metadata } from 'next';

const siteURL = 'https://www.conciergerie-alsacienne.fr';
const siteName = 'Conciergerie Alsacienne';

export const defaultMetadata: Metadata = {
  title: siteName,
  description:
    'Conciergerie Alsacienne – Location courte et moyenne durée à Mulhouse, Colmar et alentours. Une conciergerie discrète, rentable, pensée pour les investisseurs exigeants.',
  openGraph: {
    title: siteName,
    description: 'Accompagnement sur mesure, logements optimisés, sérénité assurée.',
    url: siteURL,
    siteName,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: 'Des logements bien gérés, des revenus bien pensés.',
  },
  robots: { index: true, follow: true },
};

export const pageMetadata: Record<string, Metadata> = {
  // Home page "/"
  home: defaultMetadata,

  // Error page "/error"
  error: {
    title: `Error | ${siteName}`,
    description: 'This is Error page description',
  },

  // About page "/about"
  about: {
    title: 'Conciergerie Alsacienne – Notre histoire, notre mission',
    description:
      'Une conciergerie 100% alsacienne, fondée par des professionnels passionnés. Découvrez notre mission, nos valeurs, notre exigence.',
    openGraph: {
      title: 'Conciergerie Alsacienne – Notre histoire, notre mission',
      description:
        'Depuis 10 ans, nous accompagnons les propriétaires avec rigueur, transparence et ancrage local. Faites connaissance avec notre équipe.',
      url: `${siteURL}/about`,
      siteName,
      images: [
        {
          url: `${siteURL}/images/about-hero.jpg`,
          width: 1200,
          height: 630,
          alt: 'Maison traditionnelle alsacienne – Conciergerie Alsacienne',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'À propos de Conciergerie Alsacienne',
      description:
        'Gestion haut de gamme, approche humaine, ancrage local. Notre équipe se présente.',
      images: [`${siteURL}/images/about-hero.jpg`],
    },
    robots: { index: true, follow: true },
  },

  // Auth pages
  'forgot-password': {
    title: `Forgot Password Page | ${siteName}`,
    description: 'This is Forgot Password page description',
  },
  'reset-password': {
    title: `Reset Password Page | ${siteName}`,
    description: 'This is Reset Password page description',
  },
  signin: {
    title: `Signin Page | ${siteName}`,
    description: 'This is Signin page description',
  },
  signup: {
    title: `Signup Page | ${siteName}`,
    description: 'This is Signup page description',
  },

  // Blog listing "/blog"
  blog: {
    title: 'Conseils pour investisseurs immobiliers | Le blog de Conciergerie Alsacienne',
    description:
      'Fiscalité, optimisation locative, rentabilité, réglementation : suivez nos analyses pour mieux piloter vos biens.',
    openGraph: {
      title: 'Blog – Investissement locatif & gestion de biens',
      description: 'Des contenus clairs, utiles, orientés action pour propriétaires exigeants.',
      url: `${siteURL}/blog`,
      siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Blog Conciergerie Alsacienne',
      description: 'Notre expertise au service de votre projet locatif.',
    },
  },

  // Conciergerie page "/conciergerie"
  conciergerie: {
    title: 'Conciergerie Airbnb à Mulhouse & Colmar | Conciergerie Alsacienne',
    description:
      'Un service de conciergerie haut de gamme pour la location courte durée. Pensé pour vous, géré comme pour nous, en Alsace.',
    openGraph: {
      title: 'Conciergerie haut de gamme en courte durée',
      description:
        "Location courte durée, optimisation des revenus, tranquillité d'esprit. Service de conciergerie clé en main à Mulhouse, Colmar et alentours.",
      url: `${siteURL}/conciergerie`,
      siteName,
      images: [
        {
          url: `${siteURL}/opengraph/conciergerie.jpg`,
          width: 1200,
          height: 630,
          alt: 'Conciergerie Airbnb Alsace',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Conciergerie haut de gamme en courte durée',
      description: 'Des logements parfaitement tenus, des propriétaires sereins.',
      images: [`${siteURL}/opengraph/conciergerie.jpg`],
    },
    robots: { index: true, follow: true },
  },

  // Contact page "/contact"
  contact: {
    title: 'Nous contacter | Conciergerie Alsacienne',
    description:
      "Besoin d'un conseil ou d'une estimation ? Échangeons sans engagement. Notre équipe vous répond rapidement.",
    openGraph: {
      title: 'Contactez notre équipe',
      description: 'Une prise de contact simple, directe, sans pression.',
      url: `${siteURL}/contact`,
      siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact | Conciergerie Alsacienne',
      description: 'On vous écoute, on vous accompagne.',
    },
  },

  // Docs page "/docs"
  docs: {
    title: `Docs Page | ${siteName}`,
    description: 'This is Docs page',
  },

  // Docs page "/success"
  success: {
    title: `Docs Page | ${siteName}`,
    description: 'This is Docs page',
  },

  // FAQ page "/faq"
  faq: {
    title: 'Réponses à vos questions fréquentes | Conciergerie Alsacienne',
    description:
      'Transparence totale sur nos prestations, tarifs, garanties. Tout ce que vous devez savoir, sans jargon.',
    openGraph: {
      title: 'Foire aux questions',
      description: "Une conciergerie sérieuse, c'est aussi une réponse claire à chaque question.",
      url: `${siteURL}/faq`,
      siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'FAQ | Conciergerie Alsacienne',
      description: 'Réponses simples et concrètes sur nos services.',
    },
  },

  // Gestion locative page "/gestion-locative"
  'gestion-locative': {
    title: 'Gestion locative à Mulhouse & Colmar | Conciergerie Alsacienne',
    description:
      'Déléguez la gestion de votre bien immobilier à une équipe locale fiable. Loyers garantis, fiscalité optimisée, zéro stress. Location nue ou meublée.',
    alternates: { canonical: `${siteURL}/gestion-locative` },
    openGraph: {
      title: 'Service de gestion locative à Mulhouse & Colmar',
      description:
        'Gestion complète et transparente de votre bien : recherche de locataires, loyers garantis, suivi technique et fiscal.',
      url: `${siteURL}/gestion-locative`,
      siteName,
      type: 'website',
      images: [
        {
          url: `${siteURL}/opengraph/gestion-locative.jpg`,
          width: 1200,
          height: 630,
          alt: 'Gestion locative Mulhouse et Colmar',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Gestion locative clé en main à Mulhouse et Colmar',
      description: 'Un bien loué, suivi et sécurisé — sans y penser.',
      images: [`${siteURL}/opengraph/gestion-locative.jpg`],
    },
    robots: { index: true, follow: true },
  },

  // Nos biens page "/nos-biens"
  'nos-biens': {
    title: 'Biens en gestion courte et longue durée | Conciergerie Alsacienne',
    description:
      'Découvrez des logements soignés, rentables, gérés avec attention. Une vitrine de notre méthode et de notre engagement.',
    openGraph: {
      title: 'Nos biens en location à Mulhouse, Colmar et alentours',
      description: 'Du studio rénové à la maison familiale, chaque bien reflète notre exigence.',
      url: `${siteURL}/nos-biens`,
      siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Des logements performants sous notre gestion',
      description: 'Optimisation, sérénité, résultats. En images.',
    },
  },

  // Simulateur page "/simulateur"
  simulateur: {
    title: 'Simulateur de rentabilité locative | Conciergerie Alsacienne',
    description:
      'Estimez gratuitement le potentiel de votre logement en courte durée. Projection fiable, conseils personnalisés, sans engagement.',
    openGraph: {
      title: 'Estimez vos revenus Airbnb à Mulhouse et Colmar',
      description: 'Testez notre outil simple pour savoir combien pourrait rapporter votre bien.',
      url: `${siteURL}/simulateur`,
      siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Votre bien peut-il devenir rentable ?',
      description: 'Répondez en quelques clics, nous faisons le calcul pour vous.',
    },
  },
};

/**
 * Renvoie la metadata pour une clé de page donnée
 * (ex : 'about', 'blog', 'nos-biens', etc.),
 * ou le defaultMetadata si la clé n'existe pas.
 */
export function getMetadata(pageKey: string): Metadata {
  return pageMetadata[pageKey] ?? defaultMetadata;
}
