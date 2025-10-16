'use client';

import { Home, Key, TrendingUp, Shield, HeartHandshake, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, Variants } from 'framer-motion';
import { Button } from '../Buttons/button';

// ✅ Variants Framer Motion corrigés (ease → cubic bezier arrays)
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const listStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const iconBurst: Variants = {
  hidden: { opacity: 0, scale: 0.7, y: 6 },
  show: {
    opacity: 1,
    scale: [0.7, 1.08, 1],
    y: [6, -2, 0],
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ServicesSection() {
  const router = useRouter();

  const services = [
    {
      icon: Key,
      title: 'Conciergerie Premium',
      description:
        'Gestion complète en courte/moyenne durée : annonces, tarification dynamique, accueil 5⭐ et ménage hôtelier.',
      highlights: [
        'Photos pro & mise en avant optimisée',
        'Optimisation taux d’occupation & revenus',
        'Assistance voyageurs & propriétaires 7j/7',
      ],
      link: '/conciergerie',
      button: 'Découvrir la Conciergerie',
    },
    {
      icon: Home,
      title: 'Gestion Locative Longue Durée',
      description:
        'Location meublée ou vide, loyers sécurisés, sélection rigoureuse et gestion administrative de A à Z.',
      highlights: [
        'Bail meublé ou vide selon votre stratégie',
        'Sélection & suivi des locataires',
        'Reporting & accompagnement fiscal simplifié',
      ],
      link: '/gestion-locative',
      button: 'Découvrir la Gestion Locative',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Transparence totale',
      desc: 'Reporting clair, accès propriétaire en ligne, vision complète de vos revenus.',
    },
    {
      icon: HeartHandshake,
      title: 'Proximité locale',
      desc: 'Présence quotidienne à Mulhouse, Colmar et Saint-Louis pour un suivi terrain.',
    },
    {
      icon: Sparkles,
      title: 'Excellence de service',
      desc: 'Qualité hôtelière, réactivité et soin du détail à chaque étape.',
    },
  ];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24 bg-gradient-to-b from-[#F9FAFB] to-[#F0F4FF]" // ✅ Fond premium différencié
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-[#7A869A] mb-3">
            Solutions adaptées à votre stratégie
          </p>
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Nos <span className="text-[#E63946]">formules</span> sur-mesure
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Deux approches, un même objectif : valoriser votre bien et maximiser vos revenus en
            toute sérénité.
          </p>
        </motion.div>

        {/* SERVICES */}
        <motion.div
          variants={listStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-shadow"
            >
              <motion.div
                variants={iconBurst}
                className="w-16 h-16 rounded-xl bg-[#0072FF]/10 flex items-center justify-center mb-6"
              >
                <service.icon className="w-8 h-8 text-[#E63946]" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#E63946]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => router.push(service.link)}
                className="w-full bg-[#E63946] hover:bg-[#c22f3c] transition-colors gap-2"
              >
                {service.button}
                <TrendingUp className="ml-2 h-4 w-4" />
              </Button>
            </motion.article>
          ))}
        </motion.div>

        {/* VALEURS CLÉS */}
        <motion.div
          variants={listStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={cardVariants}
              className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
            >
              <motion.div
                variants={iconBurst}
                className="w-14 h-14 rounded-full bg-[#0072FF]/10 flex items-center justify-center mx-auto mb-4"
              >
                <v.icon className="w-7 h-7 text-[#0072FF]" />
              </motion.div>
              <h4 className="font-semibold mb-2 text-gray-900">{v.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* PROMESSE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 p-8 rounded-3xl border border-[#E5E7EB] text-center shadow-sm"
          style={{ background: 'linear-gradient(to right, #fdf2f2, #f9fafc, #eff6ff)' }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            Notre promesse : résultats mesurables ou remboursé*
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Nous nous engageons sur une progression mesurable de vos revenus dès les premiers mois.
            Si l’objectif convenu ensemble n’est pas atteint, un geste commercial ou un ajustement
            de nos honoraires est proposé.
          </p>
          <p className="text-xs text-gray-500 mt-4">
            *Voir conditions détaillées dans{' '}
            <a
              href="/conditions-generales-vente"
              className="underline text-[#0072FF] hover:text-[#E63946] transition-colors"
            >
              nos conditions de gestion
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
