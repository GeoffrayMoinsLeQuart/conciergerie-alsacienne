'use client';

import { useRef } from 'react';
import { Shield, TrendingUp, Clock, Heart } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Des revenus optimisés chaque mois',
    description:
      'Tarification intelligente et taux d’occupation de 98 % : votre bien génère des revenus sans que vous ayez à vous en occuper.',
    bgColor: 'bg-background',
  },
  {
    icon: Shield,
    title: 'Zéro stress, on gère tout',
    description:
      'Accueil, ménage, maintenance : votre bien est entre de bonnes mains. Notre équipe locale s’occupe de chaque détail.',
    bgColor: 'bg-secondary/30',
  },
  {
    icon: Clock,
    title: 'Vous ne faites rien',
    description:
      'On gère tout, 7j/7. Vous recevez vos revenus chaque mois, et gardez l’accès à votre bien quand vous le souhaitez.',
    bgColor: 'bg-background',
  },
  {
    icon: Heart,
    title: 'Votre patrimoine valorisé',
    description:
      'Entretien professionnel permanent et aménagement soigné : votre bien est préservé et mis en valeur au quotidien.',
    bgColor: 'bg-primary/5',
  },
];

export default function WhySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Mouvement très subtil du fond
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '4%']);

  return (
    <section
      id="expertise"
      aria-labelledby="why-heading"
      ref={ref}
      className="relative py-20 md:py-28 bg-gradient-to-b 
      from-background via-background/80 to-primary/5"
    >
      {/* ✅ Fond parallax discret */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560184897-67f4c0bfc0c7?auto=format&fit=crop&q=80')] bg-cover bg-center"
          role="presentation"
        />
      </motion.div>

      {/* ✅ Overlay dégradé pour la lisibilité */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background"
        aria-hidden="true"
      />

      {/* ✅ Contenu */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 id="why-heading" className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Pourquoi choisir <span className="text-primary">Les Clés d’Alsace&nbsp;?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Un service premium qui transforme votre investissement immobilier en source de revenus
            passive et sécurisée.
          </p>
        </motion.div>

        {/* ✅ Grille des bénéfices */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex gap-6 p-8 rounded-2xl ${benefit.bgColor} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border/50`}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shadow-sm">
                  <benefit.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ Citation de confiance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center pt-10"
        >
          <p className="text-sm text-muted-foreground italic">
            « Je ne m’occupe plus de rien, et mes revenus ont augmenté de 35&nbsp;% » —{' '}
            <span className="font-semibold">Marie L., Strasbourg</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
