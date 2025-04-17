"use client";

import SectionTitle from "../../Common/SectionTitle";
import { FC } from "react";

const GarantiesLoyers: FC = () => {
  const garanties = [
    {
      title: "Sans franchise ni délai de carence",
      description:
        "Notre garantie s'applique dès le premier jour d'impayé, sans période d'attente ni franchise, pour une protection immédiate et complète.",
    },
    {
      title: "Protection juridique incluse",
      description:
        "Tous les frais de contentieux, de procédure et d'expulsion sont pris en charge, vous évitant des démarches coûteuses et chronophages.",
    },
    {
      title: "Couverture des détériorations",
      description:
        "Les dégradations causées par le locataire au-delà du dépôt de garantie sont couvertes, préservant ainsi la valeur de votre investissement.",
    },
  ];

  return (
    <section className="bg-primary bg-opacity-5 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle
          mainTitle="GARANTIE LOYERS IMPAYÉS"
          title="Une protection financière à toute épreuve"
          paragraph="Notre garantie vous assure des revenus locatifs stables, quoi qu'il arrive."
          center
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="rounded-lg border-t-4 border-primary bg-white p-8 shadow-md">
            <div className="mb-8 flex flex-col items-center md:flex-row">
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary bg-opacity-10 md:mb-0 md:mr-8">
                <svg
                  className="h-12 w-12 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-gray-800">
                  Garantie à 100% de vos loyers
                </h3>
                <p className="text-gray-600">
                  Même en cas d'impayés, vous recevez l'intégralité de vos loyers et charges à date fixe chaque mois, vous assurant des revenus stables et prévisibles.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {garanties.map((item) => (
                <div key={item.title} className="rounded-lg bg-gray-50 p-6">
                  <h4 className="mb-3 text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GarantiesLoyers;
