'use client';

import { FC } from 'react';
import { CheckCircle, FileText, Camera, BadgeCheck, Shield } from 'lucide-react';
import SectionTitle from '../../Common/SectionTitle';

const FraisInitiauxCard: FC = () => {
  const items = [
    {
      icon: FileText,
      text: 'Établissement du bail conforme à la législation',
    },
    {
      icon: Camera,
      text: "État des lieux d'entrée détaillé avec photos",
    },
    {
      icon: BadgeCheck,
      text: 'Vérification complète des dossiers locataires',
    },
    {
      icon: Shield,
      text: "Constitution des dossiers d'assurance",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle
          mainTitle="NOS FORMULES"
          title="Des solutions adaptées à vos besoins"
          paragraph="Choisissez la formule la plus alignée avec vos besoins et votre patrimoine."
          center
        />

        <div className="mx-auto mt-10 max-w-5xl rounded-2xl border-l-4 border-primary bg-white p-8 shadow-md">
          <div className="mb-6 flex items-center gap-3 text-gray-800">
            <CheckCircle className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">Frais initiaux de mise en location</h3>
          </div>

          <p className="mb-6 text-gray-600">
            Des frais équivalents à un mois de loyer hors charges sont appliqués lors de la mise en
            location initiale. Ces frais couvrent les éléments suivants :
          </p>

          <ul className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            {items.map(({ icon: Icon, text }, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </span>
                <span className="leading-snug">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FraisInitiauxCard;
