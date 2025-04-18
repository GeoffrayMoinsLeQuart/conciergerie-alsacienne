"use client";

import { FC } from "react";
import SectionTitle from "@/components/Common/SectionTitle";
// import TransformationSlider from "@/components/Transformations/Slider";

const NosTransformations: FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <SectionTitle
          mainTitle="TRANSFORMATIONS RÉUSSIES"
          title="Avant / Après : le pouvoir de la valorisation"
          paragraph="Voici quelques exemples concrets de biens que nous avons transformés pour les intégrer à notre portefeuille premium."
          center
        />
        <div className="mt-10">
          {/* <TransformationSlider /> */}
          <div className="rounded-lg border border-dashed border-gray-300 p-10 text-center text-sm italic text-body-color">
            [Cette section présentera bientôt notre galerie de transformations
            avant/après, illustrant comment nous avons métamorphosé des biens
            pour maximiser leur attractivité et leur rentabilité]
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosTransformations;
