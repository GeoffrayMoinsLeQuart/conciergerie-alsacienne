'use client';

import { TrendingUp } from 'lucide-react';

const ResultsShowcase = () => {
  const results = [
    {
      title: "Tour de l'Europe – T3 90m²",
      before: '1 500 €/mois',
      after: '2 100 €/mois',
      increase: '+40%',
      image: '/images/projects/tour-europe.jpg',
      type: 'Conciergerie Mulhouse',
    },
    {
      title: 'Rue Franklin – T3 65m²',
      before: '520 €/mois',
      after: '820 €/mois',
      increase: '+58%',
      image: '/images/projects/rue-franklin.jpg',
      type: 'Gestion locative',
    },
    {
      title: 'Centre-ville – T2 50m²',
      before: '1 230 €/mois',
      after: '1 600 €/mois',
      increase: '+30%',
      image: '/images/projects/centre-ville.jpg',
      type: 'Conciergerie Airbnb',
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0072FF]/10 to-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230072FF' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM36 4V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: '60px 60px',
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#E63946] font-semibold uppercase tracking-wide text-sm">
            Résultats réels
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
            +40% de revenus <span className="text-[#E63946]">dès le 1er mois</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Des propriétaires alsaciens qui ont vu leurs revenus exploser grâce à notre gestion haut
            de gamme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={result.image}
                  alt={result.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#E63946] text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                  {result.increase}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{result.title}</h3>
                <span className="inline-block px-3 py-1 bg-[#0072FF]/10 text-[#0072FF] text-sm font-medium rounded-full mb-4">
                  {result.type}
                </span>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Avant :</span>
                    <span className="font-semibold line-through text-gray-400">
                      {result.before}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Après :</span>
                    <span className="font-bold text-2xl text-[#E63946] flex items-center gap-1">
                      {result.after}
                      <TrendingUp className="w-5 h-5 text-[#E63946]" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;
