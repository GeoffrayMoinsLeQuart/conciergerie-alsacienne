'use client';

import { TrendingUp, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const profiles = [
  {
    icon: TrendingUp,
    emoji: '📊',
    title: 'Investisseur',
    color: 'from-[#F8FAFC] to-white',
    benefits: [
      {
        title: 'Optimisation de la rentabilité',
        items: [
          'Loyers versés à date fixe chaque mois',
          'Évaluation précise du loyer de marché',
          'Conseils fiscaux et patrimoniaux',
          "98 % de taux d’occupation maintenu",
        ],
      },
    ],
  },
  {
    icon: Users,
    emoji: '✈️',
    title: 'Expatrié',
    color: 'from-white to-[#F8FAFC]',
    benefits: [
      {
        title: 'Gestion à distance sans stress',
        items: [
          'Suivi complet des interventions',
          'Gestion 24h/24 des urgences locatives',
          'Visites techniques annuelles du bien',
          'Espace propriétaire en ligne sécurisé',
        ],
      },
    ],
  },
  {
    icon: Award,
    emoji: '🧭',
    title: 'Primo-bailleur',
    color: 'from-[#F8FAFC] to-white',
    benefits: [
      {
        title: 'Accompagnement complet et rassurant',
        items: [
          'Conseiller dédié à Mulhouse',
          'Protection juridique incluse',
          'Garantie loyers impayés sans franchise',
          'Formation aux bonnes pratiques locatives',
        ],
      },
    ],
  },
];

const WhySection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white via-[#F9FAFB] to-[#EEF2F6]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-sm uppercase tracking-wider text-[#3B82F6] font-semibold mb-4">
            Pour chaque type de propriétaire
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A8A] mb-6">
            Une expertise adaptée à votre profil
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Que vous soyez investisseur, expatrié ou primo-bailleur, nos services s’adaptent à votre
            situation pour garantir sérénité et performance.
          </p>
        </motion.div>

        {/* Profiles grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${profile.color} border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500`}
            >
              {/* Icon & Title */}
              <div className="text-center space-y-3 mb-8">
                <div className="relative w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#3B82F6]/10">
                  <span className="text-3xl">{profile.emoji}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1E3A8A]">
                  {profile.title}
                </h3>
              </div>

              {/* Benefits */}
              {profile.benefits.map((benefit, idx) => (
                <div key={idx} className="space-y-4">
                  <h4 className="font-semibold text-[#1E3A8A] text-sm border-l-4 border-[#E63946]/40 pl-3">
                    {benefit.title}
                  </h4>
                  <ul className="space-y-2 pl-6">
                    {benefit.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]/80 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;