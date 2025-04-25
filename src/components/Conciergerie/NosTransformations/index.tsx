'use client';

import { FC } from 'react';
import SectionTitle from '@/components/Common/SectionTitle';
// import TransformationSlider from '@/components/Transformations/Slider'; // à activer dès que prêt

const NosTransformations: FC = () => {
  return (
    <section
      id="transformations"
      aria-labelledby="transformations-heading"
      className="bg-white py-20"
    >
      <div className="container">
        <header className="text-center">
          <SectionTitle
            id="transformations-heading"
            mainTitle="TRANSFORMATIONS RÉUSSIES"
            title="Avant / Après : le pouvoir de la valorisation"
            paragraph="Plongez dans nos projets de relooking et voyez par vous-même comment nous transformons chaque bien pour en révéler tout le potentiel locatif."
            center
          />
        </header>

        <div
          className="mt-10"
          role="region"
          aria-label="Galerie avant/après : transformations immobilières"
        >
          {/* À activer dès que le composant est prêt */}
          {/* <TransformationSlider /> */}

          <div className="rounded-lg border border-dashed border-gray-300 p-10 text-center text-sm italic text-body-color">
            [Notre galerie arrive bientôt : vous découvrirez les transformations concrètes que nous
            avons réalisées pour sublimer nos biens sous gestion.]
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosTransformations;
