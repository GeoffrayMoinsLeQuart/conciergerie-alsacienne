import { Portfolio } from "@/types/portfolio";
import { v4 as uuid } from "uuid";

const portfolioDetails = (
  <div>
    <p className="mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Niché au <strong>10ᵉ étage</strong>, cet appartement offre une
      <strong>vue panoramique</strong> et un cadre de vie exceptionnel pour
      séduire une clientèle premium. Un bien pensé pour maximiser lexpérience
      client et la rentabilité.
    </p>

    <h4 className="mb-8 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">01.</span> Expérience client & Confort
    </h4>
    <ul className="list mb-7 list-inside list-disc">
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          📍 <strong>Emplacement idéal</strong> : proche des commodités et des
          transports.
        </span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          🏢 <strong>10ᵉ étage</strong> : vue imprenable, luminosité optimale et
          calme absolu.
        </span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          🛋 <strong>Design et confort</strong> : mobilier moderne, décoration
          soignée et literie premium.
        </span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          🔌 <strong>Équipements complets</strong> : WiFi rapide, Smart TV,
          cuisine équipée.
        </span>
      </li>
    </ul>

    <h4 className="mb-8 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">02.</span> Gestion & Rentabilité
    </h4>
    <ul className="list mb-7 list-inside list-disc">
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          🎯 <strong>Tarification dynamique</strong> : ajustement automatique
          pour maximiser le revenu.
        </span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          🏠 <strong>Taux doccupation optimisé</strong> : gestion stratégique
          pour limiter les périodes creuses.
        </span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          🛠 <strong>Maintenance proactive</strong> : suivi régulier et
          réactivité en cas d'intervention nécessaire.
        </span>
      </li>
    </ul>

    <h4 className="mb-8 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">03.</span> Points différenciants
    </h4>
    <ul className="list mb-7 list-inside list-disc">
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          🔑 <strong>Accès autonome</strong> : serrure connectée pour une
          arrivée flexible et sans contrainte.
        </span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          ⭐ <strong>Expérience premium</strong> : ménage soigné, services
          sur-mesure et accueil personnalisé.
        </span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          📊 <strong>Rentabilité projetée</strong> : revenus estimés entre
          <strong>XXX€ et XXX€/mois</strong>.
        </span>
      </li>
    </ul>
  </div>
);

export const portfolioData: Portfolio[] = [
  {
    id: uuid(),
    title: "T1 au 10ème étage",
    slug: "startup-landing-page",
    sortDescription:
      "Ce magnifique appartement perché au **10ᵉ étage** offre une **vue imprenable**, une **luminosité exceptionnelle** et un **confort optimal** pour séduire une clientèle haut de gamme. Aménagé avec goût, il est **parfaitement équipé** pour garantir une **expérience sans faille** à nos voyageurs. 💎 **Atouts clés :**✔ **Emplacement stratégique** pour attirer une demande forte✔ **Prestations premium** : mobilier élégant, équipements modernes✔ **Optimisé pour la location courte durée** avec une gestion fluide et automatisée. Un bien qui s'intègre **parfaitement** dans notre offre de conciergerie, garantissant **rentabilité** et **satisfaction client**. 🚀",
    image: "/images/portfolio/portfolio-01.jpg",
    tags: ["studio"],
    categories: ["landing page"],
    details: portfolioDetails,
  },
  {
    id: uuid(),
    title: "Job portal landing page",
    slug: "job-portal-landing-page",
    sortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.",
    image: "/images/portfolio/portfolio-02.jpg",
    tags: ["t1"],
    details: portfolioDetails,
  },
  {
    id: uuid(),
    title: "SaaS landing page",
    slug: "saas-landing-page",
    sortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.",
    image: "/images/portfolio/portfolio-03.jpg",
    tags: ["t2"],
    details: portfolioDetails,
  },
  {
    id: uuid(),
    title: "Business & corporate template",
    slug: "business-corporate-template",
    sortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.",
    image: "/images/portfolio/portfolio-04.jpg",
    tags: ["t2"],
    details: portfolioDetails,
  },
];
