'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Check, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import CTAButtons from '@/components/Buttons/CTAButtons';
import { Activity, FormuleConciergerie } from '@/types/form';

const plans = [
  {
    name: 'Formule Standard',
    price: 'A partir de 16% des revenus',
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
    href: `/contact?service=${Activity.Conciergerie}&formule=${FormuleConciergerie.Standard}`,
  },
  {
    name: 'Formule Premium',
    price: 'A partir de 21% des revenus',
    features: ['Tous les services de la formule Standard', 'Ménage inclus', 'Support 24/7'],
    recommended: true,
    color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    text: 'text-white',
    badge: 'Recommandée',
    href: `/contact?service=${Activity.Conciergerie}&formule=${FormuleConciergerie.Premium}`,
  },
  {
    name: 'Formule Exclusive',
    price: 'A partir de 23% des revenus',
    features: ['Tous les services de la formule Premium', 'Linge hôtelier premium'],
    recommended: false,
    color: 'bg-white',
    text: 'text-gray-900',
    badge: null,
    href: `/contact?service=${Activity.Conciergerie}&formule=${FormuleConciergerie.Exclusive}`,
  },
];

const Tarification: FC = () => {
  return (
    <section className="bg-[#f8f9ff] py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-dark">Nos Formules</h2>
          <p className="mx-auto max-w-2xl text-lg text-body-color">
            Choisissez l'accompagnement qui vous ressemble, pour une gestion sereine et sur-mesure
            de votre bien.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col justify-between rounded-2xl p-8 pt-10 shadow-pricing transition-transform duration-300 hover:scale-[1.02] ${plan.color}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {plan.recommended && (
                <span className="absolute right-4 top-2 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-primary shadow-sm">
                  ⭐ {plan.badge}
                </span>
              )}

              <div className="mb-6">
                <h3 className={`mb-2 text-2xl font-bold ${plan.text}`}>{plan.name}</h3>
                <p className={`text-lg font-bold opacity-80 ${plan.text}`}>{plan.price}</p>
              </div>

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
                className={`mt-auto inline-block w-full rounded-lg px-6 py-3 text-center text-sm font-semibold transition ${
                  plan.recommended
                    ? 'bg-white text-primary hover:bg-white/80'
                    : 'bg-primary text-white hover:bg-opacity-90'
                }`}
              >
                Choisir cette formule
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <CTAButtons
            primary={{
              label: 'Demander un devis',
              href: '/contact',
              icon: <Mail className="h-5 w-5" />,
              colorClass: 'bg-primary text-white hover:bg-opacity-90',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Tarification;
