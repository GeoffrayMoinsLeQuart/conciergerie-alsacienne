// src/config/pageMetadata.ts
import { Metadata } from 'next';
import { getPropertyBySlug, imageBuilder } from '../../../lib/sanity/sanity-utils';
import type { Blog } from '@/types/blog';
import { Property } from '@/types/property';

const siteURL = process.env.SITE_URL || 'https://www.clefsdalsace.fr';
const siteName = process.env.SITE_NAME || 'Les Clés d’Alsace';
const authorName = process.env.AUTHOR_NAME || 'Les Clés d’Alsace';

export const defaultMetadata: Metadata = {
  title: 'Les Clés d’Alsace | Location courte & moyenne durée',
  description:
    'Location courte & moyenne durée à Mulhouse, Colmar et alentours. Louez sereinement avec Les Clés d’Alsace, service discret et rentable pour investisseurs.',
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
    title: 'Erreur 404 | Les Clés d’Alsace – Page non trouvée – Désolé',
    description:
      "La page que vous recherchez est introuvable. Retournez à l'accueil et explorez nos services de conciergerie courte et moyenne durée avec Les Clés d’Alsace.",
  },

  // About page "/about"
  about: {
    title: 'Les Clés d’Alsace – Notre histoire et mission locale',
    description:
      'Une conciergerie 100% alsacienne, fondée par des professionnels passionnés. Découvrez notre mission, nos valeurs, notre exigence.',
    openGraph: {
      title: 'Les Clés d’Alsace – Notre histoire et notre mission',
      description:
        'Depuis 10 ans, nous accompagnons les propriétaires avec rigueur, transparence et ancrage local. Faites connaissance avec notre équipe.',
      url: `${siteURL}/about`,
      siteName,
      images: [
        {
          url: `${siteURL}/images/about-hero.jpg`,
          width: 1200,
          height: 630,
          alt: 'Maison traditionnelle alsacienne – Les Clés d’Alsace',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'À propos des Clés d’Alsace',
      description:
        'Gestion haut de gamme, approche humaine, ancrage local. Notre équipe se présente.',
      images: [`${siteURL}/images/about-hero.jpg`],
    },
    robots: { index: true, follow: true },
  },

  // Auth pages
  'forgot-password': {
    title: 'Mot de passe oublié | Les Clés d’Alsace – Réinitialisation',
    description:
      'Saisissez votre adresse e-mail pour recevoir un lien de réinitialisation de votre mot de passe. Sécurisé et rapide avec Les Clés d’Alsace.',
  },
  'reset-password': {
    title: 'Réinitialiser le mot de passe | Les Clés d’Alsace – Sécurité',
    description:
      "Entrez votre nouveau mot de passe pour sécuriser votre compte Les Clés d’Alsace. Assurez-vous d'utiliser un mot de passe fort.",
  },
  signin: {
    title: 'Connexion sécurisée | Les Clés d’Alsace – Espace client',
    description:
      'Connectez-vous à votre espace Les Clés d’Alsace pour gérer vos propriétés, réservations et services de conciergerie en toute simplicité et sécurité.',
  },
  signup: {
    title: 'Inscription | Les Clés d’Alsace – Créez votre compte',
    description:
      'Créez votre compte Les Clés d’Alsace pour commencer à gérer vos biens et optimiser vos revenus locatifs. Simple et rapide.',
  },

  // Blog listing "/blog"
  blog: {
    title: 'Blog Les Clés d’Alsace – Conseils pour investisseurs',
    description:
      "Fiscalité, optimisation locative, rentabilité, réglementation : suivez nos analyses et retours d'expérience pour piloter vos biens.",
    openGraph: {
      title: 'Blog – Investissement locatif & gestion de biens',
      description: 'Des contenus clairs, utiles, orientés action pour propriétaires exigeants.',
      url: `${siteURL}/blog`,
      siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Blog Les Clés d’Alsace',
      description: 'Notre expertise au service de votre projet locatif.',
    },
  },

  // Conciergerie page "/conciergerie"
  conciergerie: {
    title: 'Conciergerie Airbnb à Mulhouse & Colmar | Les Clés d’Alsace',
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
    title: 'Nous contacter | Les Clés d’Alsace – Demandez une estimation',
    description:
      "Besoin d'un conseil ou d'une estimation ? Contactez Les Clés d’Alsace pour optimiser la gestion de vos biens et maximiser vos revenus locatifs.",
    openGraph: {
      title: 'Contactez notre équipe',
      description: 'Une prise de contact simple, directe, sans pression.',
      url: `${siteURL}/contact`,
      siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact | Les Clés d’Alsace',
      description: 'On vous écoute, on vous accompagne.',
    },
  },

  // Docs page "/docs"
  docs: {
    title: 'Documentation officielle | Les Clés d’Alsace – Guides et API',
    description:
      'Consultez nos guides, tutoriels et références API pour les intégrations et la gestion des services de conciergerie avec Les Clés d’Alsace.',
  },

  // Success page "/success"
  success: {
    title: 'Merci ! | Les Clés d’Alsace – Votre demande est envoyée',
    description:
      'Votre demande a bien été envoyée. Nous revenons vers vous sous 24 h pour vous accompagner dans la gestion de vos biens avec Les Clés d’Alsace.',
  },

  // Merci page "/merci"
  merci: {
    title: 'Merci ! | Les Clés d’Alsace – Votre demande est confirmée',
    description:
      'Votre demande a bien été envoyée. Nous revenons vers vous sous 24 h pour vous accompagner dans la gestion de vos biens avec Les Clés d’Alsace.',
    openGraph: {
      title: `Merci pour votre demande !`,
      description:
        'Vous êtes entre de bonnes mains : votre demande est bien arrivée chez Les Clés d’Alsace.',
      url: `${siteURL}/merci`,
      siteName,
      type: 'website',
      images: [
        {
          url: `${siteURL}/opengraph/merci.jpg`,
          width: 1200,
          height: 630,
          alt: 'Merci ! Les Clés d’Alsace',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Merci ! | ${siteName}`,
      description: 'Nous avons bien reçu votre demande et revenons vers vous très vite.',
      images: [`${siteURL}/opengraph/merci.jpg`],
    },
    robots: { index: false, follow: false },
    alternates: { canonical: `${siteURL}/merci` },
  },

  // FAQ page "/faq"
  faq: {
    title: 'Réponses à vos questions fréquentes | Les Clés d’Alsace',
    description:
      'Obtenez des réponses claires et détaillées sur nos services de conciergerie, tarifs, garanties et conditions. Guide complet Les Clés d’Alsace.',
    openGraph: {
      title: 'Foire aux questions',
      description: "Une conciergerie sérieuse, c'est aussi une réponse claire à chaque question.",
      url: `${siteURL}/faq`,
      siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'FAQ | Les Clés d’Alsace',
      description: 'Réponses simples et concrètes sur nos services.',
    },
  },

  // Gestion locative page "/gestion-locative"
  'gestion-locative': {
    title: 'Gestion locative à Mulhouse & Colmar | Les Clés d’Alsace',
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
    title: 'Biens en gestion courte et longue durée | Les Clés d’Alsace',
    description:
      'Découvrez des logements soignés, rentables, gérés avec attention. Vitrine de notre méthode et engagement pour vos investissements.',
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

  // Estimation page "/estimation"
  estimation: {
    title: 'Estimation de rentabilité locative | Les Clés d’Alsace',
    description:
      'Estimez gratuitement le potentiel de votre logement en courte durée. Projection fiable, conseils personnalisés, sans engagement.',
    openGraph: {
      title: 'Estimez vos revenus Airbnb à Mulhouse et Colmar',
      description: 'Testez notre outil simple pour savoir combien pourrait rapporter votre bien.',
      url: `${siteURL}/estimation`,
      siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Votre bien peut-il devenir rentable ?',
      description: 'Répondez en quelques clics, nous faisons le calcul pour vous.',
    },
  },

  // Mentions légales page "/mentions-legales"
  'mentions-legales': {
    title: 'Mentions légales | Les Clés d’Alsace – Éditeur et conditions',
    description:
      'Mentions légales de Les Clés d’Alsace : éditeur, hébergeur, propriété intellectuelle, données personnelles, responsabilité et cookies.',
    openGraph: {
      title: 'Mentions légales | Les Clés d’Alsace',
      description:
        'Consultez toutes les informations légales de Les Clés d’Alsace : identité de l’éditeur, hébergeur, droits d’auteur, protection des données et cookies.',
      url: `${siteURL}/mentions-legales`,
      siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Mentions légales | Les Clés d’Alsace',
      description:
        'Mentions légales de Les Clés d’Alsace : éditeur, hébergeur, propriété intellectuelle, données personnelles, responsabilité et cookies.',
    },
    robots: { index: true, follow: true },
    alternates: { canonical: `${siteURL}/mentions-legales` },
  },

  'privacy-policy': {
    title: 'Politique de confidentialité | Les Clés d’Alsace – Gestion des données personnelles',
    description:
      'Découvrez comment Les Clés d’Alsace collecte, utilise et protège vos données personnelles sur www.clefsdalsace.fr.',
    openGraph: {
      title: 'Politique de confidentialité | Les Clés d’Alsace',
      description:
        'Consultez la politique de confidentialité de Les Clés d’Alsace : collecte, finalités, droits, cookies et sécurité de vos données.',
      url: `${siteURL}/privacy-policy`,
      siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Politique de confidentialité | Les Clés d’Alsace',
      description:
        'Découvrez la politique de confidentialité de Les Clés d’Alsace : comment nous collectons et protégeons vos données personnelles.',
    },
    robots: { index: true, follow: true },
    alternates: { canonical: `${siteURL}/privacy-policy` },
  },

  terms: {
    title: 'Conditions Générales de Vente | Les Clés d’Alsace – Prestations et tarifs',
    description:
      'Consultez les Conditions Générales de Vente de Les Clés d’Alsace : prestations, tarifs, paiement, responsabilité et propriété intellectuelle.',
    openGraph: {
      title: 'Conditions Générales de Vente | Les Clés d’Alsace',
      description:
        'Toutes les informations légales sur les prestations de Les Clés d’Alsace : gestion locative, conciergerie, tarifs et conditions.',
      url: `${siteURL}/terms`,
      siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Conditions Générales de Vente | Les Clés d’Alsace',
      description:
        'Découvrez les Conditions Générales de Vente de Les Clés d’Alsace : services, tarifs, modalités de paiement et responsabilités.',
    },
    robots: { index: true, follow: true },
    alternates: { canonical: `${siteURL}/terms` },
  },
  cookies: {
    title: 'Politique de cookies | Les Clés d’Alsace – Gestion des cookies et traceurs',
    description:
      'Découvrez comment Les Clés d’Alsace utilise les cookies : types, gestion, consentement et politique de confidentialité associée.',
    openGraph: {
      title: 'Politique de cookies | Les Clés d’Alsace',
      description:
        'Consultez la politique de cookies de Les Clés d’Alsace : utilité, analyse de trafic, marketing et gestion de votre consentement.',
      url: `${siteURL}/cookies`,
      siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Politique de cookies | Les Clés d’Alsace',
      description:
        'Apprenez comment Les Clés d’Alsace gère les cookies techniques, analytiques et marketing, et comment donner ou retirer votre consentement.',
    },
    robots: { index: true, follow: true },
    alternates: { canonical: `${siteURL}/cookies` },
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

/**
 * Génère dynamiquement la metadata pour un article de blog
 * Utilisée par generateMetadata() dans BlogSlugPage
 */
export async function makeBlogMetadata(post: Blog): Promise<Metadata> {
  if (!post) {
    return {
      title: `Article non trouvé | ${siteName}`,
      description: "L'article que vous recherchez n'existe pas ou a été déplacé.",
      robots: { index: false, follow: false },
    };
  }

  const slug = post.slug.current;
  const postUrl = `${siteURL}/blog/${slug}`;
  const defaultOg = `${siteURL}/default-og.jpg`;
  const imageUrl = post.mainImage ? imageBuilder(post.mainImage).url() : defaultOg;

  const description = post.metadata
    ? `${post.metadata.slice(0, 155)}…`
    : `Article sur ${post.title}`;

  return {
    title: `${post.title} | ${siteName}`,
    description,
    alternates: { canonical: postUrl },
    authors: [{ name: authorName }],
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: `${post.title} | ${siteName}`,
      description,
      url: postUrl,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1800,
          height: 1600,
          alt: post.title,
        },
      ],
      locale: 'fr_FR',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | ${siteName}`,
      description,
      creator: `@${authorName}`,
      site: `@${siteName}`,
      images: [imageUrl],
    },
  };
}

export async function makePropertyMetadata(slug: string): Promise<Metadata> {
  const property: Property | null = await getPropertyBySlug(slug);

  if (!property) {
    return {
      title: `Bien introuvable | ${siteName}`,
      description: "Ce bien n'existe plus ou a été retiré de notre catalogue.",
      robots: { index: false, follow: false },
    };
  }

  const imageUrl = property.imagePrincipale
    ? imageBuilder(property.imagePrincipale).url()
    : `${siteURL}/default-property.jpg`;

  const description = property.shortDescription || property.longDescription?.slice(0, 155) || '';

  return {
    title: `${property.name} | ${siteName}`,
    description,
    openGraph: {
      title: `${property.name} | ${siteName}`,
      description,
      url: `${siteURL}/nos-biens/${property.slug.current}`,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: property.name,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${property.name} | ${siteName}`,
      description,
      images: [imageUrl],
    },
    robots: { index: true, follow: true },
  };
}
