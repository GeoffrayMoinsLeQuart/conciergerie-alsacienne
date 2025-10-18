'use client';

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Marie L.",
    role: "Propriétaire d’un T3 à Mulhouse",
    avatar: "M",
    quote:
      "Depuis que j’ai confié mon appartement aux Clés d’Alsace, je n’ai plus à me soucier des appels de locataires ou des soucis techniques.",
    highlight:
      "Mes loyers sont versés à date fixe et leur garantie loyers impayés m’assure une tranquillité totale."
  },
  {
    name: "Pierre et Sophie D.",
    role: "Propriétaires de deux studios à Strasbourg",
    avatar: "P",
    quote:
      "En tant qu’expatriés, nous avions besoin d’une gestion à distance fiable et réactive.",
    highlight:
      "L’équipe des Clés d’Alsace gère nos biens comme si c’étaient les leurs. Leur professionnalisme est irréprochable."
  },
  {
    name: "Jean-Marc B.",
    role: "Investisseur immobilier",
    avatar: "J",
    quote:
      "Après avoir testé plusieurs agences, j’ai enfin trouvé un partenaire qui comprend mes objectifs de rentabilité.",
    highlight:
      "Leur formule Premium me permet de développer mon patrimoine sereinement, avec un ROI optimisé."
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white via-[#F9FAFB] to-[#EEF2F6] relative overflow-hidden">
      {/* Décor de fond subtil */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80')] bg-cover bg-center" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <p className="text-sm uppercase tracking-wider text-[#3B82F6] font-semibold mb-4">
              Témoignages clients
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A8A] mb-6">
              Ils nous font confiance
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Découvrez les retours de nos propriétaires qui ont choisi la sérénité.
            </p>
          </motion.div>

          {/* Grille des témoignages */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                {/* Avatar & identité */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3B82F6]/20 to-[#E63946]/20 flex items-center justify-center text-[#1E3A8A] font-semibold text-xl shadow-inner">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E3A8A]">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                {/* Citation */}
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <p className="text-sm text-[#1E3A8A] font-medium italic leading-relaxed border-l-4 border-[#E63946]/40 pl-3">
                    “{testimonial.highlight}”
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};