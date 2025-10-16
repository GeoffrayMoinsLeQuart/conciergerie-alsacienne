'use client';

import { ArrowRight, TrendingUp, MapPin, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../Buttons/button';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ResultsSection = () => {
  const router = useRouter();

  const caseStudies = [
    {
      location: 'Strasbourg – Hypercentre',
      propertyType: 'T2 – 45m²',
      before: '850 €/mois',
      after: '1 420 €/mois',
      increase: '+67%',
      duration: '2 mois',
      image:
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1756809289/Immobilier/Tour%20de%20l%27europe/after/MG_01092025-01_dby0ff.webp',
    },
    {
      location: 'Colmar – Petite Venise',
      propertyType: 'Studio – 28m²',
      before: '520 €/mois',
      after: '890 €/mois',
      increase: '+71%',
      duration: '1 mois',
      image:
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1756809289/Immobilier/Tour%20de%20l%27europe/after/MG_01092025-01_dby0ff.webp',
    },
    {
      location: 'Mulhouse – Centre',
      propertyType: 'T3 – 65m²',
      before: '780 €/mois',
      after: '1 180 €/mois',
      increase: '+51%',
      duration: '3 mois',
      image:
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1756809289/Immobilier/Tour%20de%20l%27europe/after/MG_01092025-01_dby0ff.webp',
    },
  ];

  const statsData = [
    {
      value: '+47%',
      label: 'Revenus moyens en plus',
      bgClass:
        'bg-gradient-to-br from-[#0072FF]/15 to-[#0072FF]/5 border border-[#0072FF]/30 shadow-[0_0_20px_rgba(0,114,255,0.08)]',
      textClass: 'text-[#0072FF]',
    },
    {
      value: '83%',
      label: 'Taux d’occupation moyen',
      bgClass:
        'bg-gradient-to-br from-[#E63946]/15 to-[#E63946]/5 border border-[#E63946]/30 shadow-[0_0_20px_rgba(230,57,70,0.08)]',
      textClass: 'text-[#E63946]',
    },
    {
      value: '2 mois',
      label: 'Délai moyen pour atteindre +40%',
      bgClass:
        'bg-gradient-to-br from-[#0072FF]/10 to-[#E63946]/10 border border-[#0072FF]/30 shadow-[0_0_20px_rgba(0,114,255,0.08)]',
      textClass: 'text-[#0072FF]',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      id="results"
      aria-labelledby="results-heading"
      className="py-20 bg-gradient-to-b from-[#0072FF]/10 to-white bg-[length:200%_200%] animate-[gradientShift_12s_infinite_alternate]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="results-heading" className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Nos <span className="text-[#E63946]">Résultats</span> Concrets
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des propriétaires alsaciens qui ont vu leurs revenus exploser grâce à notre gestion haut
            de gamme.
          </p>
        </div>


        {/* ✅ Stats globales dynamiques + animées */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl text-center backdrop-blur-sm ${stat.bgClass} transition-transform duration-300 hover:scale-[1.02]`}
            >
              <div className={`text-4xl md:text-5xl font-extrabold ${stat.textClass} mb-2`}>
                {stat.value}
              </div>
              <div className="text-base text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Études de cas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.3,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#E63946]/50 hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.location}
                  fill // Utiliser fill pour que l'image remplisse le conteneur parent
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Exemple de sizes, à ajuster
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white text-sm mb-1">
                    <MapPin className="w-4 h-4" />
                    {study.location}
                  </div>
                  <div className="flex items-center gap-2 text-white/80 text-xs">
                    <Home className="w-3 h-3" />
                    {study.propertyType}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Avant</div>
                    <div className="text-lg font-bold line-through text-gray-400">
                      {study.before}
                    </div>
                  </div>
                  <TrendingUp className="w-8 h-8 text-[#E63946]" />
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Après</div>
                    <div className="text-lg font-bold text-[#E63946]">{study.after}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-[#E63946]/10 border border-[#E63946]/20">
                  <div>
                    <div className="text-2xl font-bold text-[#E63946]">{study.increase}</div>
                    <div className="text-xs text-gray-500">d’augmentation</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">En {study.duration}</div>
                    <div className="text-xs text-gray-500">seulement</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            onClick={() => router.push('/contact')}
            className="gap-2 bg-[#E63946] hover:bg-[#c22f3c]"
          >
            Obtenir mon estimation gratuite
            <ArrowRight className="w-5 h-5" />
          </Button>
          <p className="text-sm text-gray-500 mt-4">Réponse sous 2h ouvrées • Sans engagement</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ResultsSection;
