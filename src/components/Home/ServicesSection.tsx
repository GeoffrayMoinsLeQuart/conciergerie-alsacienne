'use client';

import { Home, Key, TrendingUp, Shield, HeartHandshake, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../Buttons/button';

const ServicesSection = () => {
  const router = useRouter();

  const services = [
    {
      icon: Key,
      title: 'Conciergerie Premium',
      description:
        'Gestion complète de votre bien en location courte ou moyenne durée : annonces, réservations, accueil 5⭐, ménage hôtelier.',
      highlights: [
        'Photos professionnelles & mise en avant optimisée',
        'Tarification dynamique & optimisation du taux d’occupation',
        'Assistance voyageurs et propriétaires 7j/7',
      ],
      link: '/conciergerie',
      button: 'Découvrir la Conciergerie',
    },
    {
      icon: Home,
      title: 'Gestion Locative Longue Durée',
      description:
        'Location meublée ou vide avec loyers sécurisés, sélection rigoureuse des locataires et gestion administrative complète.',
      highlights: [
        'Bail meublé ou vide selon votre stratégie',
        'Sélection et suivi des locataires',
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
      desc: 'Reporting détaillé, accès propriétaire en ligne, visibilité complète sur les revenus.',
    },
    {
      icon: HeartHandshake,
      title: 'Proximité locale',
      desc: 'Présents chaque jour à Mulhouse, Colmar et Saint-Louis pour un suivi terrain.',
    },
    {
      icon: Sparkles,
      title: 'Excellence de service',
      desc: 'Qualité hôtelière, réactivité et souci du détail à chaque étape.',
    },
  ];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24 bg-gradient-to-b from-white to-[#F8FAFF]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Nos <span className="text-[#E63946]">formules</span> sur-mesure
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Deux approches, un même objectif : valoriser votre bien et maximiser vos revenus en
            toute sérénité.
          </p>
        </div>

        {/* Services cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-xl bg-[#0072FF]/10 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-[#E63946]" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 mt-2 rounded-full bg-[#E63946]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => router.push(service.link)}
                className="w-full bg-[#E63946] hover:bg-[#c22f3c] transition-all gap-2"
              >
                {service.button}
                <TrendingUp className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Valeurs clés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 max-w-5xl mx-auto">
          {values.map((value, i) => (
            <div key={i} className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-[#0072FF]/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-[#0072FF]" />
              </div>
              <h4 className="font-bold mb-2 text-gray-900">{value.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Notre Promesse : Résultats Mesurables ou Remboursé*
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Nous nous engageons sur une amélioration mesurable des revenus locatifs dès les premiers
            mois. Si le pourcentage de progression convenu ensemble n’est pas atteint, un geste
            commercial ou un ajustement de nos honoraires est proposé. C’est notre engagement
            qualité.
          </p>

          <p className="text-xs text-muted-foreground mt-4">
            *Voir conditions détaillées sur{' '}
            <a href="/conditions-generales-vente" className="underline hover:text-primary">
              nos conditions de gestion
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
