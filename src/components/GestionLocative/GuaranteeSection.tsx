'use client';

import { Shield, Check, Scale, Home, AlertTriangle, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const guarantees = [
  {
    icon: Check,
    title: 'Loyers versés à date fixe chaque mois',
    description:
      "En cas d'impayé locataire, nous vous versons 100 % du loyer et des charges à la date convenue. Vos revenus restent stables et prévisibles, sans interruption.*",
  },
  {
    icon: Shield,
    title: 'Sans carence ni franchise',
    description:
      'La garantie prend effet dès le premier jour de retard. Aucune franchise à supporter : chaque euro de loyer impayé est couvert dès le premier incident.',
  },
  {
    icon: Scale,
    title: 'Tranquillité juridique incluse',
    description:
      "Vous profitez d'une protection juridique complète : tous les frais de contentieux, d'huissier et d'expulsion sont pris en charge. Nous gérons tout pour vous, sans frais supplémentaires.",
  },
  {
    icon: Home,
    title: 'Dégradations du bien couvertes',
    description:
      'Les détériorations causées par le locataire sont indemnisées au-delà du dépôt de garantie. Les réparations sont prises en charge*, préservant ainsi la valeur de votre bien.',
  },
  {
    icon: AlertTriangle,
    title: 'Protection contre le squat',
    description:
      "Les loyers perdus en cas d'occupation illégale sont couverts, et nous prenons en charge les frais de procédure pour évincer les squatteurs.",
  },
  {
    icon: Calendar,
    title: 'Vacance locative (optionnelle)',
    description:
      "Entre deux locataires, nous pouvons compenser les loyers non perçus pour sécuriser votre trésorerie, même en période d'inoccupation.*",
  },
];

const GuaranteeSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white via-[#F9FAFB] to-[#EEF2F6] relative overflow-hidden">
      {/* ✅ Décor de fond doux */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80')] bg-cover bg-center" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* ✅ En-tête */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-sm uppercase tracking-wider text-[#3B82F6] font-semibold mb-4">
              Garantie Loyers Impayés
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A8A] mb-6">
              Vos loyers garantis, <span className="text-[#E63946]">sans franchise ni carence</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Vos loyers sont versés à date fixe, même en cas d'impayé. Une couverture juridique et
              financière complète, sans avance ni délai d’attente.
            </p>

            <div className="mt-8 inline-block bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full px-6 py-3 shadow-sm">
              <p className="text-sm font-semibold text-[#1E3A8A]">
                Assurée par GALIAN-SMABTP • Plafond 100 000 €
              </p>
            </div>
          </div>

          {/* ✅ Grille des garanties */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                    <guarantee.icon className="w-6 h-6 text-[#1E3A8A]" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-semibold text-[#1E3A8A]">{guarantee.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{guarantee.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ✅ Mention légale */}
          <div className="mt-10 p-6 bg-white/70 border border-gray-200 rounded-xl shadow-sm">
            <p className="text-xs text-gray-500 leading-relaxed">
              *Conditions : contrat assuré par GALIAN-SMABTP. Plafonds d'indemnisation : 100 000 €
              pour les loyers impayés et frais de procédure, 10 000 € pour les dégradations
              immobilières. Option vacance locative disponible sur demande. Garantie valable pour
              les locations de résidence principale, sous réserve d’acceptation du dossier du
              locataire.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
