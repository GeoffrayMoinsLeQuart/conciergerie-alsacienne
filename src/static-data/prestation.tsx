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
    description: "Création, optimisation, photos professionnelles",
    slug: "gestion-annonces",
    image: "/images/services/service-01.jpg",
    details: serviceDetails,
  },
  {
    id: uuid(),
    title: "Gestion des Réservations",
    description: "Vérification des voyageurs, tarification dynamique",
    slug: "gestion-reservations",
    image: "/images/services/service-02.jpg",
    details: serviceDetails,
  },
  {
    id: uuid(),
    title: "Conciergerie Premium",
    description: "Accueil personnalisé, remise des clés, assistance",
    slug: "conciergerie-premium",
    image: "/images/services/service-03.jpg",
    details: serviceDetails,
  },
  {
    id: uuid(),
    title: "Entretien du Bien",
    description: "Ménage professionnel, linge de qualité, maintenance",
    slug: "entretien-bien",
    image: "/images/services/service-03.jpg",
    details: serviceDetails,
  },
  {
    id: uuid(),
    title: "Conseils Personnalisés",
    description: "Aménagements, investissements, réglementations",
    slug: "conseils-personnalises",
    image: "/images/services/service-03.jpg",
    details: serviceDetails,
  },
];
