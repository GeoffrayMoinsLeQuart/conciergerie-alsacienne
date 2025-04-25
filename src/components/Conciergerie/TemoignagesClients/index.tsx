'use client';

import SectionTitle from '@/components/Common/SectionTitle';
import Image from 'next/image';
import { FC } from 'react';

const testimonials = [
  {
    name: 'Claire R.',
    role: 'Propriétaire à Colmar',
    image: '/avatars/avatar1.jpg',
    quote:
      "Grâce à La Conciergerie Alsacienne, je n'ai plus à me soucier de rien. Mon bien est mieux noté et mieux rempli qu'avant !",
  },
  {
    name: 'Julien M.',
    role: 'Investisseur Mulhousien',
    image: '/avatars/avatar2.jpg',
    quote:
      'Une équipe réactive, des conseils design précieux, et un vrai suivi de mes performances. Je recommande à 100%.',
  },
  {
    name: 'Sophie L.',
    role: 'Propriétaire débutante',
    image: '/avatars/avatar3.jpg',
    quote:
      "Ils m'ont accompagnée dès le départ. Tout a été pensé pour faciliter ma vie de propriétaire. Un vrai soulagement !",
  },
];

/**
 * Affiche une section avec des témoignages clients.
 * Cette section renforce la crédibilité sociale et met en avant la satisfaction des clients.
 */
const TémoignagesClients: FC = () => {
  return (
    <section
      id="temoignages"
      aria-labelledby="temoignages-heading"
      className="bg-white py-20"
    >
      <div className="container mx-auto px-4">
        {/* Titre de section */}
        <header className="mb-12 text-center">
          <SectionTitle
            id="temoignages-heading"
            mainTitle="ILS NOUS FONT CONFIANCE"
            title="Témoignages de nos propriétaires"
            paragraph="Découvrez les retours authentiques de ceux qui nous ont confié la gestion de leur bien."
            center
          />
        </header>

        {/* Liste des témoignages */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg"
              aria-label={`Témoignage de ${testimonial.name}`}
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={`Photo de ${testimonial.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="italic text-body-color">
                “{testimonial.quote}”
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TémoignagesClients;
