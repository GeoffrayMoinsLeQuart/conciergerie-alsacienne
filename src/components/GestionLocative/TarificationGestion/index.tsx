// Nouveau composant de tarification amélioré

'use client';

import SectionTitle from '../../Common/SectionTitle';
import { FC, useState } from 'react';
import { ShieldCheck, UserCheck, Sparkles, Calculator } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import CTAButtons from '@/components/Buttons/CTAButtons';
import { Activity, FormuleGestionLocative } from '@/types/form';
import dynamic from 'next/dynamic';

const MotionArticle = dynamic(() => import('framer-motion').then((mod) => mod.motion.article), {
  ssr: false,
});

interface Plan {
  name: string;
  price: string;
  priceLabel: string;
  features: string[];
  bgClass: string;
  textClass: string;
  button: {
    text: string;
    href: string;
    style: string;
  };
  icon: JSX.Element;
  iconButton: JSX.Element;
  tag?: string;
  tagline?: string;
  inheritsFrom?: string;
}

const TarificationGestionLocative: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const plans: Plan[] = [
    {
      name: 'Formule Essentielle',
      price: '6%',
      priceLabel: 'HT des loyers encaissés',
      tagline: 'La base solide de la gestion locative',
      features: [
        'Recherche et sélection des locataires',
        'Rédaction du bail et état des lieux',
        'Encaissement des loyers et quittances',
        'Révision annuelle du loyer',
        'Régularisation des charges',
        'Assistance téléphonique dédiée',
        'Espace propriétaire en ligne',
        'Protection juridique incluse',
        'Couverture des dégradations*',
        'Garantie contre le squat',
      ],
      bgClass: 'bg-white',
      textClass: 'text-body-color',
      icon: <UserCheck className="h-6 w-6 text-primary" />,
      iconButton: <UserCheck className="h-5 w-5" />,
      button: {
        text: 'Je choisis la simplicité',
        href: `/contact?service=${Activity.GestionLocative}&formule=${FormuleGestionLocative.Essentielle}`,
        style: 'bg-primary text-white hover:bg-opacity-90',
      },
    },
    {
      name: 'Formule Sérénité',
      price: '7,5%',
      priceLabel: 'HT des loyers encaissés',
      tagline: 'Pour ceux qui veulent dormir tranquille',
      tag: 'Formule recommandée',
      inheritsFrom: 'Formule Essentielle',
      features: [
        '✓ Inclut tous les avantages de la Formule Essentielle',
        'Garantie loyers impayés à 100% (2.5% loyers + charges, sans carence)',
        'Visites techniques annuelles',
        "Gestion des interventions d'urgence 24h/24",
        'Bilan de gestion annuel personnalisé',
        'Option PNO : 75 € (franchise 300 €, plafond 1.5 M€)',
      ],
      bgClass: 'bg-primary/5',
      textClass: 'text-gray-800',
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      iconButton: <ShieldCheck className="h-5 w-5" />,
      button: {
        text: 'Je choisis la tranquillité',
        href: `/contact?service=${Activity.GestionLocative}&formule=${FormuleGestionLocative.Serenite}`,
        style: 'bg-primary text-white hover:bg-opacity-90',
      },
    },
    {
      name: 'Formule Premium',
      price: '9%',
      priceLabel: 'HT des loyers encaissés',
      tagline: "L'expérience complète, clé en main",
      inheritsFrom: 'Formule Sérénité',
      features: [
        '✓ Inclut tous les avantages de la Formule Sérénité',
        'Accompagnement sur votre fiscalité',
        'Visite technique semestrielle',
        'Conseiller dédié joignable 7j/7',
        'Option PNO : 92 € (franchise 135 €, plafond 3 M€)',
        'Vacance locative : à venir',
      ],
      bgClass: 'bg-white',
      textClass: 'text-body-color',
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      iconButton: <Sparkles className="h-5 w-5" />,
      button: {
        text: "Je choisis l'excellence",
        href: `/contact?service=${Activity.GestionLocative}&formule=${FormuleGestionLocative.Premium}`,
        style: 'bg-primary text-white hover:bg-opacity-90',
      },
    },
  ];

  const comparison = [
    'Recherche et sélection des locataires',
    'Rédaction du bail et état des lieux',
    'Encaissement des loyers et quittances',
    'Révision annuelle du loyer',
    'Régularisation des charges',
    'Assistance téléphonique dédiée',
    'Espace propriétaire en ligne',
    'Protection juridique incluse',
    'Couverture des dégradations*',
    'Garantie contre le squat',
    'Garantie loyers impayés à 100% (2.5% loyers + charges, sans carence)',
    'Visites techniques annuelles',
    "Gestion des interventions d'urgence 24h/24",
    'Bilan de gestion annuel personnalisé',
    'Option PNO : 75 € (franchise 300 €, plafond 1.5 M€)',
    'Accompagnement sur votre fiscalité',
    'Visite technique semestrielle',
    'Conseiller dédié joignable 7j/7',
    'Option PNO : 92 € (franchise 135 €, plafond 3 M€)',
    'Vacance locative : à venir',
  ];

  const planHasFeature = (plan: Plan, feature: string) => {
    if (plan.name === 'Formule Sérénité' && plans[0].features.includes(feature)) return true;
    if (
      plan.name === 'Formule Premium' &&
      (plans[0].features.includes(feature) || plans[1].features.includes(feature))
    )
      return true;
    return plan.features.includes(feature);
  };

  return (
    <section
      className="bg-white py-20 lg:py-[120px]"
      id="tarifs"
      aria-label="Tarification Gestion Locative"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          mainTitle="TARIFICATION"
          title="Des tarifs clairs et adaptés à vos besoins"
          paragraph="Choisissez la formule qui vous correspond, avec ou sans ménage, pour maximiser vos revenus."
          center
        />

        <div className="mb-10 flex justify-center">
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-full border border-primary bg-white px-6 py-2 text-sm font-medium text-primary shadow-sm transition hover:bg-primary hover:text-white"
          >
            📊 Comparer les formules
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan, idx) => (
            <MotionArticle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              viewport={{ once: true }}
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-2xl border border-gray-200 p-8 shadow-md transition duration-300 ease-in-out hover:shadow-xl ${plan.bgClass}`}
            >
              {plan.tag && (
                <span className="absolute -top-4 left-6 rounded-full bg-primary px-4 py-1 text-sm font-medium text-white shadow-md">
                  {plan.tag}
                </span>
              )}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2">{plan.icon}</div>
                  <h3 className={`text-xl font-bold ${plan.textClass}`}>{plan.name}</h3>
                </div>

                {plan.tagline && (
                  <p className="mb-4 text-sm italic text-gray-500">{plan.tagline}</p>
                )}

                <div className="mb-6 flex items-baseline text-3xl font-bold text-primary">
                  <span>{plan.price}</span>
                  <span className="ml-2 text-base font-medium text-gray-500">
                    {plan.priceLabel}
                  </span>
                </div>

                <ul className="mb-8 space-y-2 text-sm text-gray-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-primary">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <CTAButtons
                primary={{
                  label: plan.button.text,
                  href: plan.button.href,
                  colorClass: plan.button.style,
                  icon: plan.iconButton,
                }}
              />
            </MotionArticle>
          ))}
        </div>

        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-4xl rounded-xl bg-white p-6 shadow-xl">
              <Dialog.Title className="mb-6 text-xl font-bold text-gray-800">
                Tableau comparatif des formules
              </Dialog.Title>
              <div className="overflow-auto">
                <table className="w-full table-auto border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b text-gray-700">
                      <th className="px-4 py-2 font-semibold">Fonctionnalités</th>
                      <th className="px-4 py-2">Essentielle</th>
                      <th className="px-4 py-2">Sérénité</th>
                      <th className="px-4 py-2">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((feature) => (
                      <tr key={feature} className="border-t">
                        <td className="px-4 py-2 text-gray-700">{feature}</td>
                        {plans.map((plan) => (
                          <td key={plan.name} className="px-4 py-2 text-center">
                            {planHasFeature(plan, feature) ? '✓' : '-'}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>

        <div className="mx-auto mt-16 w-full rounded-xl border border-primary bg-primary bg-opacity-5 px-6 py-8 text-center shadow-sm lg:max-w-[600px]">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 flex flex-col items-center justify-center gap-2 sm:flex-row">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary bg-opacity-10">
                <Calculator className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800">
                Vous hésitez encore entre nos formules ?
              </h4>
            </div>
            <p className="mb-6 text-sm text-gray-600">
              Estimez vos revenus nets selon votre situation, le type de bien et la formule choisie.
              Notre simulateur vous guide pour faire le bon choix.
            </p>
            <CTAButtons
              primary={{
                label: 'Lancer le simulateur',
                href: '/simulateur',
                icon: <Calculator className="h-5 w-5" />,
                colorClass: 'bg-primary text-white hover:bg-opacity-90',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TarificationGestionLocative;
