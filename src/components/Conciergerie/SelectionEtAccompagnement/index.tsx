'use client';

import { FC } from 'react';
import SectionTitle from '@/components/Common/SectionTitle';

const criteria = [
  {
    title: 'Design soigné et ambiance unique',
    description:
      "Nous privilégions les biens au caractère unique et à l'esthétique soignée, offrant une expérience mémorable à vos voyageurs.",
  },
  {
    title: 'Mobilier harmonieux et de qualité',
    description:
      'Un mobilier de qualité et harmonieux est essentiel pour garantir le confort et la satisfaction de vos hôtes.',
  },
  {
    title: 'Équipements modernes et fonctionnels',
    description:
      'Des équipements modernes et fonctionnels pour un confort optimal et une expérience sans faille pour vos voyageurs.',
  },
  {
    title: 'Emplacement et attractivité locative',
    description:
      "L'emplacement et les caractéristiques du bien doivent permettre une valorisation premium et des revenus optimisés.",
  },
];

const SelectionEtAccompagnement: FC = () => {
  return (
    <section
      id="selection"
      aria-labelledby="selection-heading"
      className="bg-[#f8f9ff] py-20"
    >
      <div className="container">
        <SectionTitle
          mainTitle="SÉLECTION & ACCOMPAGNEMENT"
          title="Exigence & Transformation"
          paragraph="Notre modèle repose sur deux piliers : une sélection rigoureuse des biens et un accompagnement sur-mesure pour révéler leur potentiel."
          center
        />

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {criteria.map((item, i) => (
            <article key={i} className="text-center" aria-labelledby={`criterion-${i}`}> 
              <div className="mx-auto mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-primary font-bold text-white">
                {i + 1}
              </div>
              <h3 id={`criterion-${i}`} className="mb-3 text-xl font-bold text-black">{item.title}</h3>
              <p className="font-medium text-body-color">{item.description}</p>
            </article>
          ))}
        </div>

        <div
          className="mt-14 rounded-lg bg-white p-8 shadow-md"
          aria-label="Approche de sélection personnalisée"
        >
          <h3 className="mb-4 text-center text-2xl font-bold text-black">
            Notre Approche de Sélection
          </h3>
          <p className="mb-5 text-center text-base font-medium leading-relaxed text-body-color">
            Nous considérons chaque bien comme unique, avec son propre potentiel. Notre processus
            d&apos;évaluation n&apos;est pas simplement un filtre, mais une opportunité de
            valorisation.
          </p>
          <p className="text-center text-base font-medium leading-relaxed text-body-color">
            Lorsqu&apos;un bien ne répond pas encore à tous nos critères, nous ne le refusons pas
            définitivement – nous vous proposons plutôt un parcours d&apos;amélioration personnalisé
            grâce à notre service d&apos;accompagnement pour la décoration et l&apos;aménagement,
            disponible en formules Standard et Luxe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SelectionEtAccompagnement;
