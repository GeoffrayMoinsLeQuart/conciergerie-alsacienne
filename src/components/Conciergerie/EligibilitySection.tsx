'use client';

import { motion } from 'framer-motion';
import { MapPin, Home, Star, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '../Buttons/button';

const criteria = [
  {
    icon: MapPin,
    title: 'Localisation stratégique',
    good: [
      'Centre-ville ou zones touristiques',
      'Proximité transports/commerces',
      'Quartiers recherchés',
    ],
    avoid: ['Zones trop isolées', 'Accès difficile'],
  },
  {
    icon: Home,
    title: 'Qualité du bien',
    good: ['Logement en bon état', 'Équipements modernes', 'Décoration soignée ou neutre'],
    avoid: ['Travaux importants nécessaires', 'Vétusté marquée'],
  },
  {
    icon: Star,
    title: 'Potentiel de revenus',
    good: [
      'Surface optimale (studio à 4 pièces)',
      'Bien adapté à la clientèle locale',
      'Autorisations en règle',
    ],
    avoid: ['Réglementation trop contraignante', 'Marché saturé'],
  },
];

export default function EligibilitySection() {
  return (
    <section
      id="eligibilite"
      aria-labelledby="eligibility-heading"
      className="py-20 md:py-28 bg-gradient-to-tr 
      from-background via-secondary/15 to-primary/10 relative overflow-hidden"
    >
      {/* ✅ Background image */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80')] bg-cover bg-center" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* ✅ Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2
            id="eligibility-heading"
            className="text-3xl md:text-5xl font-bold text-foreground mb-6"
          >
            Votre bien est-il éligible&nbsp;?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Nous sélectionnons des biens à fort potentiel pour garantir des performances optimales
            et une satisfaction durable.
          </p>
        </motion.div>

        {/* ✅ Grid des critères */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {criteria.map((criterion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between bg-card border border-border rounded-2xl p-8 space-y-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon + titre */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <criterion.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{criterion.title}</h3>
              </div>

              {/* ✅ Idéal si */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Idéal si :
                </div>
                <ul className="space-y-2 pl-6">
                  {criterion.good.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ❌ À éviter */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <XCircle className="w-4 h-4 text-destructive" />À éviter :
                </div>
                <ul className="space-y-2 pl-6">
                  {criterion.avoid.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center pt-12"
        >
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20 space-y-4 max-w-2xl mx-auto">
            <p className="text-foreground font-semibold text-lg">
              Votre bien correspond à ces critères&nbsp;?
            </p>
            <Button
              size="lg"
              className="shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Obtenir mon estimation gratuite
            </Button>
            <p className="text-sm text-muted-foreground">Réponse sous 24h par un expert local</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
