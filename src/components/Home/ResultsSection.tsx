'use client';

import { ArrowRight, TrendingUp, MapPin, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../Buttons/button';

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
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop',
    },
    {
      location: 'Colmar – Petite Venise',
      propertyType: 'Studio – 28m²',
      before: '520 €/mois',
      after: '890 €/mois',
      increase: '+71%',
      duration: '1 mois',
      image:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop',
    },
    {
      location: 'Mulhouse – Centre',
      propertyType: 'T3 – 65m²',
      before: '780 €/mois',
      after: '1 180 €/mois',
      increase: '+51%',
      duration: '3 mois',
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section
      id="results"
      aria-labelledby="results-heading"
      className="py-20 bg-gradient-to-b from-[#0072FF]/10 to-white"
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

        {/* Stats globales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0072FF]/10 to-[#0072FF]/5 border border-[#0072FF]/20 text-center">
            <div className="text-4xl font-bold text-[#0072FF] mb-2">+47%</div>
            <div className="text-sm text-gray-500">Revenus moyens en plus</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#E63946]/10 to-[#E63946]/5 border border-[#E63946]/20 text-center">
            <div className="text-4xl font-bold text-[#E63946] mb-2">83%</div>
            <div className="text-sm text-gray-500">Taux d’occupation moyen</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0072FF]/10 to-[#E63946]/10 border border-[#0072FF]/20 text-center">
            <div className="text-4xl font-bold text-[#0072FF] mb-2">2 mois</div>
            <div className="text-sm text-gray-500">Délai moyen pour atteindre +40%</div>
          </div>
        </div>

        {/* Études de cas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#E63946]/50 hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.location}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => router.push('/contact')}
            className="gap-2 bg-[#E63946] hover:bg-[#c22f3c]"
          >
            Obtenir mon estimation gratuite
            <ArrowRight className="w-5 h-5" />
          </Button>
          <p className="text-sm text-gray-500 mt-4">Réponse sous 2h ouvrées • Sans engagement</p>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
