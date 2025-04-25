import { Prestation } from '@/types/prestation';
import { v4 as uuid } from 'uuid';

export const prestationConciergerie: Prestation[] = [
  {
    id: uuid(),
    title: 'Gestion des Annonces',
    description: 'Création optimisée avec photos pros',
    slug: 'gestion-annonces',
    image:
      'https://res.cloudinary.com/dx96rdxwk/image/upload/v1744914805/Conciergerie%20alsacienne/Icon%20landing/Conciergerie/gestion-des-annonces-image_e0nls8.webp',
    icon: 'https://res.cloudinary.com/dx96rdxwk/image/upload/v1745324326/Conciergerie%20alsacienne/Icon%20landing/Conciergerie/gestion-annonces-icon_l9ojpu.webp',
    details:
      'Des annonces irrésistibles avec photos professionnelles et textes optimisés. Gagnez en visibilité, en clics, et en réservations.',
  },
  {
    id: uuid(),
    title: 'Gestion des Réservations',
    description: 'Tarification dynamique & sélection des voyageurs',
    slug: 'gestion-reservations',
    image:
      'https://res.cloudinary.com/dx96rdxwk/image/upload/v1744914027/Conciergerie%20alsacienne/Icon%20landing/Conciergerie/gestion-des-reservations-image_ymuuq8.webp',
    icon: 'https://res.cloudinary.com/dx96rdxwk/image/upload/v1745324334/Conciergerie%20alsacienne/Icon%20landing/Conciergerie/gestion-reservations-icon_ji9dhe.webp',
    details:
      'Un calendrier toujours rempli grâce à notre tarification intelligente et notre sélection rigoureuse des voyageurs.',
  },
  {
    id: uuid(),
    title: 'Conciergerie Premium',
    description: 'Accueil, assistance 24/7, expérience 5⭐',
    slug: 'conciergerie-premium',
    image:
      'https://res.cloudinary.com/dx96rdxwk/image/upload/v1744914744/Conciergerie%20alsacienne/Icon%20landing/Conciergerie/Conciergerie-Premium-image_n9o3eu.webp',
    icon: 'https://res.cloudinary.com/dx96rdxwk/image/upload/v1745324333/Conciergerie%20alsacienne/Icon%20landing/Conciergerie/conciergerie-premium-icon_osxhfd.webp',
    details:
      'Un service haut de gamme pour vos voyageurs : accueil chaleureux, support personnalisé et excellence au quotidien.',
  },
  {
    id: uuid(),
    title: 'Entretien du Bien',
    description: 'Ménage hôtelier, linge & maintenance',
    slug: 'entretien-bien',
    image:
      'https://res.cloudinary.com/dx96rdxwk/image/upload/v1744914028/Conciergerie%20alsacienne/Icon%20landing/Conciergerie/Entretien-du-Bien-image_b03cve.webp',
    icon: 'https://res.cloudinary.com/dx96rdxwk/image/upload/v1745324332/Conciergerie%20alsacienne/Icon%20landing/Conciergerie/entretien-bien-icon_e5fo7u.webp',
    details:
      'Propreté impeccable, linge de qualité et suivi technique régulier pour un bien toujours au top.',
  },
  {
    id: uuid(),
    title: 'Conseils Personnalisés',
    description: 'Aménagements, fiscalité, rentabilité',
    slug: 'conseils-personnalises',
    image:
      'https://res.cloudinary.com/dx96rdxwk/image/upload/v1744914026/Conciergerie%20alsacienne/Icon%20landing/Conciergerie/Conseils-Personnalises-image_tshssh.webp',
    icon: 'https://res.cloudinary.com/dx96rdxwk/image/upload/v1745324333/Conciergerie%20alsacienne/Icon%20landing/Conciergerie/conseils-personalise-icon_zmcd8y.webp',
    details:
      "On vous guide pour booster vos revenus : stratégie d'aménagement, fiscalité, réglementations locales.",
  },
];

export const prestationGestionLocative: Prestation[] = [
  {
    id: uuid(),
    title: 'Mise en Location',
    description: "Rédaction d'annonces optimisées et diffusion multicanale",
    slug: 'mise-en-location',
    image: '', // à remplir ultérieurement
    icon: 'https://res.cloudinary.com/dx96rdxwk/image/upload/v1745318491/Conciergerie%20alsacienne/Icon%20landing/Gestion%20locative/mise-en-location-icon_acpygo.webp',
    details:
      'Nous créons pour vous une annonce percutante, avec photos professionnelles et descriptif SEO-friendly, puis diffusons votre bien sur les meilleures plateformes.',
  },
  {
    id: uuid(),
    title: 'Sélection des Locataires',
    description: 'Vérification rigoureuse des dossiers',
    slug: 'selection-locataires',
    image: '',
    icon: 'https://res.cloudinary.com/dx96rdxwk/image/upload/v1745318492/Conciergerie%20alsacienne/Icon%20landing/Gestion%20locative/selection-locataires-icon_quo6gg.webp',
    details:
      'Étude approfondie des profils, vérification des garanties et antécédents, pour vous garantir des locataires fiables et respectueux.',
  },
  {
    id: uuid(),
    title: 'Gestion Administrative',
    description: 'Contrats, états des lieux & dépôt de garantie',
    slug: 'gestion-administrative',
    image: '',
    icon: 'https://res.cloudinary.com/dx96rdxwk/image/upload/v1745318491/Conciergerie%20alsacienne/Icon%20landing/Gestion%20locative/gestion-administrative-icon_dmvlr6.webp',
    details:
      "Rédaction et suivi des baux, réalisation des états des lieux d'entrée et de sortie, conservation et restitution des dépôts de garantie en toute sérénité.",
  },
  {
    id: uuid(),
    title: 'Suivi Financier',
    description: 'Encaissement des loyers & quittances',
    slug: 'suivi-financier',
    image: '',
    icon: 'https://res.cloudinary.com/dx96rdxwk/image/upload/v1745318491/Conciergerie%20alsacienne/Icon%20landing/Gestion%20locative/suivi-financier-icon_ceaqa3.webp',
    details:
      'Encaissement sécurisé des loyers, émission de quittances et réconciliation bancaire mensuelle, vous recevez vos revenus sans lever le petit doigt.',
  },
  {
    id: uuid(),
    title: 'Entretien & Maintenance',
    description: 'Interventions techniques & ménage',
    slug: 'entretien-maintenance',
    image: '',
    icon: 'https://res.cloudinary.com/dx96rdxwk/image/upload/v1745318491/Conciergerie%20alsacienne/Icon%20landing/Gestion%20locative/entretien-maintenance-icon_famjet.webp',
    details:
      'Suivi régulier des interventions (plombier, électricien, ménage hôtelier…), planification de la maintenance préventive et prise en charge rapide des imprévus.',
  },
  {
    id: uuid(),
    title: 'Relations Locataires',
    description: 'Support 7j/7 & gestion des réclamations',
    slug: 'relations-locataires',
    image: '',
    icon: 'https://res.cloudinary.com/dx96rdxwk/image/upload/v1745318492/Conciergerie%20alsacienne/Icon%20landing/Gestion%20locative/relations-locataires-icon_crx21j.webp',
    details:
      "Nous sommes l'interlocuteur unique de vos locataires : traitement des demandes, gestion des urgences et renouvellement de bail pour des relations durables.",
  },
];
