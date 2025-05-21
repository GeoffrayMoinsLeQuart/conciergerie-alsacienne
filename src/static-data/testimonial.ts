import { Testimonial } from '@/types/testimonial';
import { v4 as uuid } from 'uuid';

export const testimonialData: Testimonial[] = [
  {
    id: uuid(),
    review:
      "Depuis que j'ai confié mon appartement à aux Clés d’Alsace, mes revenus ont augmenté de 30% et je n'ai plus aucun souci à me faire. Leur équipe est réactive et professionnelle.",
    companyName: 'Propriétaire T2 Mulhouse',
    name: 'Sophie Martin',
    image: '/images/testimonial/image-1.png',
    designation: 'Propriétaire depuis 2022',
    companyLogo: '/images/testimonial/image-1.png',
  },
  {
    id: uuid(),
    review:
      "Service impeccable ! La gestion de mon bien est entre de bonnes mains. Les voyageurs sont ravis de l'accueil et mon appartement est toujours parfaitement entretenu.",
    companyName: 'Propriétaire Studio Colmar',
    name: 'Thomas Dubois',
    image: '/images/testimonial/image-2.png',
    designation: 'Propriétaire depuis 2021',
    companyLogo: '/images/testimonial/image-1.png',
  },
  {
    id: uuid(),
    review:
      "Je recommande vivement Les Clés d’Alsace pour leur professionnalisme et leur connaissance du marché local. Mes deux appartements affichent un taux d'occupation exceptionnel.",
    companyName: 'Propriétaire 2 biens Strasbourg',
    name: 'Marie Klein',
    image: '/images/testimonial/image-3.png',
    designation: 'Propriétaire depuis 2023',
    companyLogo: '/images/testimonial/image-1.png',
  },
  {
    id: uuid(),
    review:
      "Grâce à leurs conseils, j'ai pu optimiser mon bien et augmenter significativement mes revenus. Leur service de conciergerie est irréprochable et très apprécié par mes locataires.",
    companyName: 'Propriétaire T3 Mulhouse',
    name: 'Pierre Schmitt',
    image: '/images/testimonial/image-4.png',
    designation: 'Propriétaire depuis 2020',
    companyLogo: '/images/testimonial/image-1.png',
  },
];
