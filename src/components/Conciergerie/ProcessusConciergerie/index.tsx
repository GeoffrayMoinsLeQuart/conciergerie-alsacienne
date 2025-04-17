"use client";

import { FC } from "react";
import SectionTitle from "@/components/Common/SectionTitle";

const processSteps = [
  {
    num: "1",
    title: "Évaluation préliminaire",
    description:
      "Visite de votre bien, diagnostic selon nos critères de qualité, et recommandations personnalisées. Si des améliorations sont nécessaires, nous vous proposons notre service d'accompagnement.",
  },
  {
    num: "2",
    title: "Préparation du bien",
    description:
      "État des lieux complet, création d'annonces attractives avec photos professionnelles, et mise en place de tous les éléments nécessaires. Si vous avez opté pour notre service de décoration, nous coordonnons l'ensemble des interventions.",
  },
  {
    num: "3",
    title: "Gestion quotidienne",
    description:
      "Gestion complète des réservations, accueil personnalisé des voyageurs, ménage professionnel entre chaque séjour, et résolution de toutes les problématiques qui pourraient survenir.",
  },
  {
    num: "4",
    title: "Suivi & Optimisation",
    description:
      "Rapports détaillés sur l'activité de votre bien, optimisation continue des tarifs selon la saisonnalité et les événements locaux, et conseils pour améliorer constamment la performance de votre investissement.",
  },
];

const ProcessusConciergerie: FC = () => {
  return (
    <section className="bg-[#f8f9ff] py-20" aria-label="Processus Conciergerie">
      <div className="container">
        <SectionTitle
          mainTitle="PROCESSUS"
          title="Un accompagnement fluide et sur-mesure"
          paragraph="Notre méthodologie vous garantit une mise en location rapide, optimisée, et sans effort de votre part."
          center
        />

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="mx-auto mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-primary font-bold text-white">
                {step.num}
              </div>
              <h3 className="mb-2 text-lg font-bold text-black">{step.title}</h3>
              <p className="text-base text-body-color">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessusConciergerie;
