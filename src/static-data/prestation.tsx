import { Prestation } from "@/types/prestation";
import { v4 as uuid } from "uuid";

const serviceDetails = (
  <div>
    <p className="mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Notre équipe de professionnels prend en charge tous les aspects de la
      gestion de votre bien pour maximiser vos revenus tout en vous libérant des
      contraintes.
    </p>
    <p className="mb-10 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Que vous soyez propriétaire d'un studio, d'un appartement ou d'une maison
      en Alsace, nous vous proposons des services sur mesure adaptés à vos
      besoins et à votre bien.
    </p>
    <h4 className="mb-8 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">01.</span> Nos engagements
    </h4>
    <ul className="list mb-7 list-inside list-disc">
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          Qualité de service irréprochable pour vos locataires
        </span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          Transparence totale sur la gestion de votre bien
        </span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          Optimisation continue de vos revenus locatifs
        </span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          Réactivité et disponibilité à toute heure
        </span>
      </li>
    </ul>
    <p className="mb-10 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Notre objectif est de vous offrir une tranquillité d'esprit totale tout en
      maximisant la rentabilité de votre investissement immobilier.
    </p>
    <h4 className="mb-8 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">02.</span> Notre expertise locale
    </h4>
    <p className="mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Basés en Alsace, nous connaissons parfaitement le marché local et les
      attentes des voyageurs. Cette expertise nous permet d'optimiser votre bien
      pour attirer les meilleurs clients et maximiser votre taux d'occupation.
    </p>
  </div>
);

export const prestationData: Prestation[] = [
  {
    id: uuid(),
    title: "Gestion des Annonces",
    description: "Création optimisée avec photos pros",
    slug: "gestion-annonces",
    image: "https://res.cloudinary.com/dx96rdxwk/image/upload/v1744914027/Conciergerie%20alsacienne/Icon%20landing/gestion-des-annonces-image_e0nls8.webp",
    icon: "https://res.cloudinary.com/dx96rdxwk/image/upload/v1744914030/Conciergerie%20alsacienne/Icon%20landing/gestions-des-annonces-icon2_jc34fq.webp",
    details: "Des annonces irrésistibles avec photos professionnelles et textes optimisés. Gagnez en visibilité, en clics, et en réservations.",
  },
  {
    id: uuid(),
    title: "Gestion des Réservations",
    description: "Tarification dynamique & sélection des voyageurs",
    slug: "gestion-reservations",
    image: "https://res.cloudinary.com/dx96rdxwk/image/upload/v1744914027/Conciergerie%20alsacienne/Icon%20landing/gestion-des-reservations-image_ymuuq8.webp",
    icon: "https://res.cloudinary.com/dx96rdxwk/image/upload/v1744914028/Conciergerie%20alsacienne/Icon%20landing/gestion-des-reservations-icon_nh4isj.webp",
    details: "Un calendrier toujours rempli grâce à notre tarification intelligente et notre sélection rigoureuse des voyageurs.",
  },
  {
    id: uuid(),
    title: "Conciergerie Premium",
    description: "Accueil, assistance 24/7, expérience 5⭐",
    slug: "conciergerie-premium",
    image: "https://res.cloudinary.com/dx96rdxwk/image/upload/v1744914027/Conciergerie%20alsacienne/Icon%20landing/Conciergerie-Premium-image_n9o3eu.webp",
    icon: "https://res.cloudinary.com/dx96rdxwk/image/upload/v1744914029/Conciergerie%20alsacienne/Icon%20landing/Conciergerie-Premium-icon_eyvfq8.webp",
    details: "Un service haut de gamme pour vos voyageurs : accueil chaleureux, support personnalisé et excellence au quotidien.",
  },
  {
    id: uuid(),
    title: "Entretien du Bien",
    description: "Ménage hôtelier, linge & maintenance",
    slug: "entretien-bien",
    image: "https://res.cloudinary.com/dx96rdxwk/image/upload/v1744914028/Conciergerie%20alsacienne/Icon%20landing/Entretien-du-Bien-image_b03cve.webp",
    icon: "https://res.cloudinary.com/dx96rdxwk/image/upload/v1744914029/Conciergerie%20alsacienne/Icon%20landing/Entretien-du-Bien-icon_m3tycr.webp",
    details: "Propreté impeccable, linge de qualité et suivi technique régulier pour un bien toujours au top.",
  },
  {
    id: uuid(),
    title: "Conseils Personnalisés",
    description: "Aménagements, fiscalité, rentabilité",
    slug: "conseils-personnalises",
    image: "https://res.cloudinary.com/dx96rdxwk/image/upload/v1744914026/Conciergerie%20alsacienne/Icon%20landing/Conseils-Personnalises-image_tshssh.webp",
    icon: "https://res.cloudinary.com/dx96rdxwk/image/upload/v1744914027/Conciergerie%20alsacienne/Icon%20landing/Conseils-Personnalises-icon_la0ccd.webp",
    details: "On vous guide pour booster vos revenus : stratégie d’aménagement, fiscalité, réglementations locales.",
  },
];
