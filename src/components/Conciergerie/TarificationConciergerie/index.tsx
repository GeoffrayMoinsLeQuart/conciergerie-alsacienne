'use client';

import { FC } from 'react';
import SectionTitle from '@/components/Common/SectionTitle';
import CTAButtons from '@/components/Buttons/CTAButtons';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check } from 'lucide-react';

// ✅ data/tarifs.ts
export const tarifsConciergerie = [
  {
    name: 'Formule Standard',
    price: 'À partir de 16% des revenus',
    features: [
      'Création et optimisation des annonces',
      'Gestion des réservations',
      'Accueil des voyageurs',
      'Optimisation des tarifs',
      'Reporting mensuel',
    ],
    recommended: false,
    color: 'bg-white',
    text: 'text-gray-900',
    badge: null,
    href: '/contact?service=conciergerie&formule=standard',
  },
  {
    name: 'Formule Premium',
    price: 'À partir de 21% des revenus',
    features: ['Tous les services de la formule Standard', 'Ménage inclus', 'Support 24/7'],
    recommended: true,
    color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    text: 'text-white',
    badge: 'Recommandée',
    href: '/contact?service=conciergerie&formule=premium',
  },
  {
    name: 'Formule Exclusive',
    price: 'À partir de 23% des revenus',
    features: ['Tous les services de la formule Premium', 'Linge hôtelier premium'],
    recommended: false,
    color: 'bg-white',
    text: 'text-gray-900',
    badge: null,
    href: '/contact?service=conciergerie&formule=exclusive',
  },
];

interface TarifPlan {
  name: string;
  price: string;
  features: string[];
  recommended: boolean;
  color: string;
  text: string;
  badge?: string | null;
  href: string;
}

const TarifCard: FC<{ plan: TarifPlan; index: number }> = ({ plan, index }) => (
  <motion.article
    className={`relative flex flex-col justify-between rounded-2xl p-8 pt-10 shadow-pricing transition-transform duration-300 hover:scale-[1.02] ${plan.color}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    aria-label={`Offre ${plan.name}`}
  >
    {plan.recommended && (
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute right-4 top-2 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-primary shadow-sm"
      >
        ⭐ {plan.badge}
      </motion.span>
    )}

    <header className="mb-6">
      <h3 className={`mb-2 text-2xl font-bold ${plan.text}`}>{plan.name}</h3>
      <p className={`text-lg font-bold opacity-80 ${plan.text}`}>{plan.price}</p>
    </header>

    <ul className="mb-6 space-y-3">
      {plan.features.map((feature, idx) => (
        <li key={idx} className={`flex items-start gap-2 ${plan.text}`}>
          <Check size={18} className="mt-1 shrink-0 text-green-500" />
          <span className="text-base leading-tight">{feature}</span>
        </li>
      ))}
    </ul>

    <Link
      href={plan.href}
      role="button"
      className={`mt-auto inline-block w-full rounded-lg px-6 py-3 text-center text-sm font-semibold transition ${
        plan.recommended
          ? 'bg-white text-primary hover:bg-white/80'
          : 'bg-primary text-white hover:bg-opacity-90'
      }`}
    >
      Choisir cette formule
    </Link>
  </motion.article>
);

const Tarification: FC = () => {
  return (
    <section id="tarifs" aria-labelledby="tarifs-heading" className="bg-[#f8f9ff] py-24">
      <div className="container">
        <header className="mb-16 text-center">
          <SectionTitle
            id="tarifs-heading"
            mainTitle="NOS FORMULES"
            title="Tarifs de notre conciergerie"
            paragraph="Choisissez l'accompagnement qui vous ressemble, pour une gestion sereine et sur‑mesure de votre bien."
            center
          />
        </header>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {tarifsConciergerie.map((plan, index) => (
            <TarifCard key={index} plan={plan} index={index} />
          ))}
        </div>

        <footer className="mt-14 text-center">
          <CTAButtons
            primary={{
              label: 'Demander un devis',
              href: '/contact',
              icon: <Mail className="h-5 w-5" />,
              colorClass: 'bg-primary text-white hover:bg-opacity-90',
            }}
          />
        </footer>
      </div>
    </section>
  );
};

export default Tarification;
