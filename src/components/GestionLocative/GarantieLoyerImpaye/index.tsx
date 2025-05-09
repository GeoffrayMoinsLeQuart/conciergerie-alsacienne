'use client';

import SectionTitle from '../../Common/SectionTitle';
import { FC } from 'react';
import { ShieldCheck, Gavel, AlertTriangle, Home, Slash, Timer, CheckCircle } from 'lucide-react';
import Script from 'next/script';
import dynamic from 'next/dynamic';

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);


const GarantiesLoyers: FC = () => {
  const garanties = [
    {
      icon: ShieldCheck,
      title: "Vos loyers versés quoi qu'il arrive",
      description:
        "Même en cas d'impayé, nous vous versons 100 % de votre loyer (loyer + charges) à la date convenue chaque mois. Vos revenus locatifs restent ainsi stables et prévisibles, sans interruption*.",
    },
    {
      icon: Timer,
      title: 'Aucune carence, aucune franchise',
      description:
        "Notre garantie prend effet dès le premier jour de retard de paiement, sans délai d'attente. Vous n'avez aucune franchise à supporter – chaque euro de loyer impayé est couvert, dès le premier impayé.",
    },
    {
      icon: Gavel,
      title: 'Tranquillité juridique incluse',
      description:
        "Vous profitez d'une protection juridique complète : tous les frais de contentieux, d'huissier, d'expulsion et de justice sont pris en charge. Nous gérons tout pour vous, sans frais supplémentaires.",
    },
    {
      icon: AlertTriangle,
      title: 'Dégradations du bien couvertes',
      description:
        'Les détériorations causées par le locataire sont indemnisées au-delà du dépôt de garantie. Les réparations sont prises en charge*, préservant ainsi la valeur de votre bien.',
    },
    {
      icon: Slash,
      title: 'Protection contre le squat',
      description:
        "Les loyers perdus en cas d'occupation illégale sont couverts, et nous prenons en charge les frais de procédure pour évincer les squatteurs.",
    },
    {
      icon: Home,
      title: 'Vacance locative (optionnelle)',
      description:
        "Entre deux locataires, nous pouvons compenser les loyers non perçus pour sécuriser votre trésorerie, même en période d'inoccupation.*",
    },
  ];

  return (
    <section
      id="garanties"
      className="bg-primary bg-opacity-5 py-20"
      aria-labelledby="garanties-title"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          id="garanties-title"
          mainTitle="GARANTIE LOYERS IMPAYÉS"
          title="Une protection financière à toute épreuve"
          paragraph="Notre garantie vous assure des revenus locatifs stables, quoi qu'il arrive."
          center
        />

        <div className="mx-auto mt-12 max-w-6xl">
          <div className="rounded-lg border-t-4 border-primary bg-white p-8 shadow-md">
            <div className="mb-10 flex flex-col items-center justify-center gap-6 md:flex-row md:items-start">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary bg-opacity-10">
                <CheckCircle className="h-10 w-10 text-primary" aria-hidden="true" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="mb-2 text-2xl font-bold text-gray-800">
                  Garantie à 100% de vos loyers
                </h3>
                <p className="max-w-2xl text-gray-600">
                  Même en cas d'impayés, vous recevez l'intégralité de vos loyers et charges à date
                  fixe chaque mois, vous assurant des revenus stables et prévisibles.
                </p>
              </div>
            </div>

            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {garanties.map(({ title, description, icon: Icon }) => (
                <li key={title}>
                  <MotionDiv
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="flex h-full flex-col rounded-lg bg-gray-50 p-6 shadow-sm transition duration-300 ease-in-out hover:shadow-md"
                  >
                    <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-800">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                      </span>
                      {title}
                    </h4>
                    <p className="flex-grow text-sm leading-relaxed text-gray-600">{description}</p>
                  </MotionDiv>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-sm text-gray-500">
              *Conditions : Contrat assuré par GALIAN-SMABTP. Plafonds d'indemnisation : 100 000 €
              pour les loyers impayés et frais de procédure, 10 000 € pour les dégradations
              immobilières. Détérioration : vétusté déduite, dépôt de garantie déduit. Option
              vacance locative sous réserve de souscription spécifique. Garantie valable pour les
              locations de résidence principale, sous réserve de l'acceptation du dossier du
              locataire.
            </p>
          </div>
        </div>
      </div>

      {/* Schema.org JSON-LD pour SEO */}
      <Script
        id="schema-garanties"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'OfferCatalog',
            name: 'Garanties loyers impayés',
            description:
              'Catalogue des protections offertes dans le cadre de notre gestion locative haut de gamme à Mulhouse & Colmar.',
            url: 'https://www.conciergerie-alsacienne.fr/gestion-locative#garanties',
            itemListElement: garanties.map((g, idx) => ({
              '@type': 'Offer',
              name: g.title,
              description: g.description,
              position: idx + 1,
              itemOffered: {
                '@type': 'Service',
                name: g.title,
                description: g.description,
              },
            })),
          }),
        }}
      />
    </section>
  );
};

export default GarantiesLoyers;
