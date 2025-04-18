"use client";

import { FC } from "react";
import Link from "next/link";

const CTAGestionLocative: FC = () => {
  return (
    <section className="bg-primary bg-opacity-10 py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="mb-6 text-3xl font-bold text-gray-800">
        Prêt à déléguer la gestion de votre bien ?
      </h2>
      <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
        Contactez-nous dès aujourd'hui pour une estimation personnalisée et découvrez comment nous pouvons maximiser la
        rentabilité de votre investissement.
      </p>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Link
          href="/simulateur"
          className="rounded-lg bg-primary px-8 py-4 font-medium text-white transition duration-300 hover:bg-opacity-90"
        >
          Estimer mes revenus
        </Link>
        <Link
          href="/contact"
          className="rounded-lg border border-primary bg-white px-8 py-4 font-medium text-primary transition duration-300 hover:bg-gray-50"
        >
          Nous contacter
        </Link>
      </div>
      <p className="mt-8 text-gray-600">
        Ou appelez-nous directement au <span className="font-semibold">03 XX XX XX XX</span> pour discuter de votre
        projet avec un conseiller.
      </p>
    </div>
  </section>
  );
};

export default CTAGestionLocative;
