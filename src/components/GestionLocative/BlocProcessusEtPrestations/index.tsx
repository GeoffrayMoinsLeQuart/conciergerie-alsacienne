'use client';

import { FC } from 'react';
import SectionTitle from '@/components/Common/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import CTAButtons from '@/components/Buttons/CTAButtons';
import { Calculator } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Évaluation initiale',
    description: 'Estimation du loyer, conseils et signature du mandat',
    icon: 'https://res.cloudinary.com/dx96rdxwk/image/upload/v1745318491/Conciergerie%20alsacienne/Icon%20landing/Gestion%20locative/mise-en-location-icon_acpygo.webp',
    details: [
      'Estimation précise du loyer de marché',
      'Visite détaillée de votre bien',
      'Conseils personnalisés pour optimiser votre rentabilité',
      'Signature du mandat de gestion',
    ],
  },
  {
    number: 2,
    title: 'Mise en location',
    description: 'Photos, annonces, visites et sélection des locataires',
    icon: 'https://res.cloudinary.com/dx96rdxwk/image/upload/v1745318492/Conciergerie%20alsacienne/Icon%20landing/Gestion%20locative/selection-locataires-icon_quo6gg.webp',
    details: [
      'Reportage photos professionnel',
      "Diffusion d'annonces sur les plateformes immobilières majeures",
      'Organisation et conduite des visites',
      'Sélection rigoureuse des candidats locataires',
    ],
  },
  {
    number: 3,
    title: 'Installation du locataire',
    description: 'Bail, état des lieux, assurances et remise des clés',
    icon: 'https://res.cloudinary.com/dx96rdxwk/image/upload/v1745318491/Conciergerie%20alsacienne/Icon%20landing/Gestion%20locative/gestion-administrative-icon_dmvlr6.webp',
    details: [
      'Rédaction du bail et des annexes obligatoires',
      "État des lieux d'entrée détaillé avec photos",
      "Souscription des contrats d'assurance",
      'Remise des clés et accompagnement du locataire',
    ],
  },
  {
    number: 4,
    title: 'Gestion quotidienne',
    description: 'Loyers, demandes, maintenance et suivi régulier',
    icon: 'https://res.cloudinary.com/dx96rdxwk/image/upload/v1745318491/Conciergerie%20alsacienne/Icon%20landing/Gestion%20locative/entretien-maintenance-icon_famjet.webp',
    details: [
      'Encaissement mensuel des loyers',
      'Suivi administratif, technique et financier',
      "Gestion des demandes d'intervention",
      'Visites techniques annuelles',
    ],
  },
  {
    number: 5,
    title: 'Relocation ou renouvellement',
    description: 'Sortie, remise en location ou prolongation du bail',
    icon: 'https://res.cloudinary.com/dx96rdxwk/image/upload/v1745318492/Conciergerie%20alsacienne/Icon%20landing/Gestion%20locative/relations-locataires-icon_crx21j.webp',
    details: [
      'Gestion des fins de bail (congés, renouvellements)',
      'État des lieux de sortie',
      'Restitution du dépôt de garantie',
      'Remise en location rapide en cas de départ',
    ],
  },
];

const AccompagnementEtapes: FC = () => {
  return (
    <section id="prestations" className="bg-[#f8f9ff] py-20">
      <div className="container">
        <SectionTitle
          mainTitle="ACCOMPAGNEMENT & SERVICES"
          title="Notre méthode en 5 étapes claires et efficaces"
          paragraph="De la première estimation à la gestion quotidienne, nous orchestrons chaque étape avec précision pour vous garantir tranquillité et rentabilité."
          center
        />

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="animate-fade-in-up group relative rounded-xl bg-white p-6 shadow-service transition hover:shadow-lg"
            >
              <div className="mb-4 flex items-center justify-center">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={120} // 🔼 augmenté (au lieu de 64)
                  height={120} // 🔼 augmenté (au lieu de 64)
                  className=" object-contain"
                  sizes="120px"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-dark">
                {step.number}. {step.title}
              </h3>
              <p className="mb-4 text-sm font-medium text-body-color">{step.description}</p>
              <ul className="list-disc space-y-1 pl-4 text-sm text-gray-700">
                {step.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButtons
            primary={{
              label: 'Estimer mes revenus',
              href: '/simulateur',
              icon: <Calculator className="h-5 w-5" />,
              colorClass:
                'inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 font-medium text-white transition hover:bg-opacity-90',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AccompagnementEtapes;
