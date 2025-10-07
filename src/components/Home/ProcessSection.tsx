"use client";

import { PhoneCall, LineChart, KeyRound } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Vous nous contactez",
    description:
      "Un expert vous répond sous 2 h et évalue gratuitement votre bien. Premier échange humain, sans engagement.",
    icon: <PhoneCall className="w-8 h-8 text-[#E63946]" />,
  },
  {
    id: 2,
    title: "Nous estimons votre bien",
    description:
      "Nous comparons votre bien à des dizaines d’annonces locales et simulons vos revenus potentiels en location courte ou longue durée.",
    icon: <LineChart className="w-8 h-8 text-[#E63946]" />,
  },
  {
    id: 3,
    title: "Nous gérons tout, vous encaissez",
    description:
      "Photos, annonces, ménage, linge, check-in/out, fiscalité : nous prenons tout en charge. Vous percevez les revenus sans le stress.",
    icon: <KeyRound className="w-8 h-8 text-[#E63946]" />,
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-24 bg-gradient-to-b from-[#E6F0FF] to-white relative overflow-hidden"
    >
      {/* fond décoratif discret */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230072FF' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM36 4V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* titre principal */}
        <div className="text-center mb-16">
          <h2
            id="process-heading"
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
          >
            Comment <span className="text-[#E63946]">ça marche ?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trois étapes simples pour transformer votre bien en revenu passif.
          </p>
        </div>

        {/* grille des étapes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0072FF]/10 mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              {/* ligne reliant les cartes sur desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-5%] w-[10%] h-[2px] bg-gradient-to-r from-[#0072FF]/20 to-[#E63946]/40" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
