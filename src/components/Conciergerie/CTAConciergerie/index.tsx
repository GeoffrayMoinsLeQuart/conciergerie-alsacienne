"use client";

import { FC } from "react";
import Link from "next/link";

const CTAConciergerie: FC = () => {
  return (
    <section className="bg-primary py-20 text-center">
      <div className="container mx-auto max-w-3xl">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Prêt à valoriser votre bien ?
        </h2>
        <p className="mb-6 text-white text-opacity-90">
          Contactez-nous dès aujourd'hui pour une évaluation préliminaire de
          votre bien. Que votre propriété soit déjà prête à rejoindre notre
          portefeuille premium ou qu'elle nécessite quelques améliorations, nous
          avons la solution adaptée.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-white px-7 py-3 text-center text-base font-medium text-primary hover:bg-opacity-90"
        >
          Demander une évaluation personnalisée
        </Link>
      </div>
    </section>
  );
};

export default CTAConciergerie;
