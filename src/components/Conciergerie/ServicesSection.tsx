'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, Users, Sparkles, Wrench, Calendar, BarChart } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Photos professionnelles',
    description:
      'Shooting HD et retouches optimisées pour valoriser votre bien sur toutes les plateformes.',
    highlighted: false,
  },
  {
    icon: Users,
    title: 'Accueil & ménage hôtelier',
    description:
      'Check-in/out fluide, linge fourni et nettoyage professionnel après chaque séjour.',
    highlighted: false,
  },
  {
    icon: Sparkles,
    title: 'Entretien continu',
    description: 'Contrôle qualité régulier, rangement et approvisionnement entre chaque location.',
    highlighted: false,
  },
  {
    icon: Wrench,
    title: 'Maintenance & assistance locale',
    description:
      'Intervention rapide en cas de panne, maintenance préventive assurée par nos partenaires.',
    highlighted: false,
  },
  {
    icon: Calendar,
    title: 'Gestion multi-plateformes',
    description: 'Synchronisation et optimisation du calendrier Airbnb, Booking, Abritel, etc.',
    highlighted: false,
  },
  {
    icon: BarChart,
    title: 'Reporting & optimisation Premium',
    description: 'Suivi de performance, optimisation tarifaire et accompagnement fiscal LMNP.',
    highlighted: true,
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Parallax doux
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '5%']);

  return (
    <section
      id="prestations"
      aria-labelledby="services-heading"
      ref={ref}
      className="py-20 md:py-28 bg-gradient-to-br 
      from-primary/5 via-background to-secondary/10 relative overflow-hidden"
    >
      {/* ✅ Fond avec parallax */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80')] bg-cover bg-center"
          role="presentation"
        />
      </motion.div>

      {/* ✅ Overlay dégradé */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"
        aria-hidden="true"
      />

      {/* ✅ Contenu principal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2
              id="services-heading"
              className="text-3xl md:text-5xl font-bold text-foreground mb-6"
            >
              Tout est inclus dans notre service
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Une prise en charge complète de votre bien, de la mise en ligne à la gestion
              quotidienne.
            </p>
          </motion.div>

          {/* ✅ Grille de services animée */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-card border rounded-xl p-6 space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  service.highlighted
                    ? 'border-primary/40 shadow-primary/10 shadow-lg bg-gradient-to-br from-primary/5 to-background/50'
                    : 'border-border'
                }`}
              >
                {/* Badge premium */}
                {service.highlighted && (
                  <div className="absolute -top-3 right-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold shadow-sm">
                    Premium
                  </div>
                )}

                {/* Icône */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shadow-sm hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Texte */}
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ✅ Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Présents à <strong>Mulhouse</strong>, <strong>Colmar</strong> et{' '}
              <strong>Saint-Louis</strong> — notre équipe locale gère tout sur place.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
