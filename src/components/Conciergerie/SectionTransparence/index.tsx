'use client';

import { FC } from 'react';
import SectionTitle from '@/components/Common/SectionTitle';

const SectionTransparence: FC = () => {
  return (
    <section id="transparence" aria-labelledby="transparence-heading" className="bg-white py-20">
      <div className="container">
        <header className="mb-12 text-center">
          <SectionTitle
            id="transparence-heading"
            mainTitle="TRANSPARENCE"
            title="Des coûts clairs et prévisibles"
            paragraph="La mise en place de votre bien dans notre portefeuille implique certains frais de démarrage évalués au cas par cas."
            center
          />
        </header>

        <div
          className="mx-auto max-w-3xl rounded-lg bg-[#f8f9ff] p-8 shadow-md"
          role="region"
          aria-labelledby="transparence-heading"
        >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Bloc 1 : Frais de démarrage */}
            <article aria-labelledby="frais-demarrage-title" className="text-body-color">
              <h3 id="frais-demarrage-title" className="mb-4 text-xl font-bold text-black">
                Frais de démarrage
              </h3>
              <ul className="space-y-4 list-disc list-inside text-base font-medium">
                <li>
                  <strong>État des lieux</strong> détaillé de votre bien
                </li>
                <li>
                  <strong>Création d'annonces</strong> & <strong>photos professionnelles</strong>
                </li>
                <li>350€ – 500€ selon la taille du logement</li>
              </ul>
            </article>

            {/* Bloc 2 : Services optionnels */}
            <article aria-labelledby="services-optionnels-title" className="text-body-color">
              <h3 id="services-optionnels-title" className="mb-4 text-xl font-bold text-black">
                Services optionnels
              </h3>
              <ul className="space-y-4 list-disc list-inside text-base font-medium">
                <li>
                  <strong>Décoration niveau Standard</strong> (sur devis personnalisé)
                </li>
                <li>
                  <strong>Décoration niveau Luxe</strong> (sur devis personnalisé)
                </li>
              </ul>
            </article>
          </div>

          <p className="mt-6 text-center text-sm italic text-body-color">
            Ces montants sont donnés à titre indicatif et peuvent varier selon les spécificités de
            votre bien. Une évaluation personnalisée vous sera proposée lors de notre première
            rencontre.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionTransparence;
