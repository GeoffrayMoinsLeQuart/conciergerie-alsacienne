'use client';

import { useRef } from 'react';
import { Check } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../Buttons/button';

const formulas = [
  {
    name: 'Essentiel',
    description: 'Pour les propriétaires autonomes',
    commission: 'À partir de 18% des revenus',
    features: [
      'Annonces sur plateformes premium',
      'Gestion des réservations',
      'Photos professionnelles',
      'Check-in/out standardisé',
      'Ménage après séjour',
      'Reporting mensuel',
    ],
    cta: 'Demander un devis',
    highlighted: false,
  },
  {
    name: 'Premium',
    description: 'Notre formule la plus demandée',
    commission: 'En moyenne 20% des revenus',
    features: [
      "Tout l'Essentiel, plus :",
      'Tarification dynamique IA',
      'Conciergerie 7j/7',
      'Maintenance préventive',
      'Linge de maison fourni',
      'Accueil VIP personnalisé',
      'Optimisation continue',
    ],
    cta: 'Obtenir mon estimation gratuite',
    highlighted: true,
  },
  {
    name: 'Excellence',
    description: 'Service haut de gamme intégral',
    commission: 'Sur mesure (à partir de 23%)',
    features: [
      'Tout le Premium, plus :',
      'Décoration & aménagement sur mesure',
      'Gestion multi-propriétés',
      'Conseiller dédié',
      'Stratégie marketing avancée',
      'Garantie revenus minimum',
      'Accompagnement patrimonial',
    ],
    cta: 'Discuter de mon projet',
    highlighted: false,
  },
];

export default function PricingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  return (
    <section
      id="tarifs"
      aria-labelledby="pricing-heading"
      ref={ref}
      className="relative py-20 md:py-28 bg-gradient-to-br 
      from-background via-secondary/10 to-primary/5 overflow-hidden"
    >
      {/* ✅ Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-[0.05] bg-[url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80')] bg-cover bg-center"
        aria-hidden="true"
      />

      {/* ✅ Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-background/90 to-primary/10"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* ✅ Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 id="pricing-heading" className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nos formules de conciergerie
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Rémunération uniquement sur vos revenus. Aucun frais fixe — nous ne gagnons que si votre
            bien performe.
          </p>
          <p className="text-sm text-muted-foreground mt-4">De 18% à 25% selon la formule</p>
        </motion.div>

        {/* ✅ Pricing grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {formulas.map((formula, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
                x: index === 0 ? -50 : index === 2 ? 50 : 0,
              }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className={`relative flex flex-col justify-between rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                formula.highlighted
                  ? 'bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary shadow-lg'
                  : 'bg-card border border-border shadow-md'
              }`}
            >
              {formula.highlighted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary/90 via-primary to-primary/80 text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-md animate-pulse-slow"
                >
                  Recommandé
                </motion.div>
              )}

              {/* ✅ Contenu + CTA aligné */}
              <div className="flex flex-col h-full justify-between">
                {/* Contenu principal */}
                <div className="space-y-6 flex-grow">
                  <div className="space-y-2 pb-6 border-b border-border text-center">
                    <h3 className="text-2xl font-bold text-foreground tracking-tight">
                      {formula.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{formula.description}</p>
                    <div className="pt-2 text-muted-foreground text-sm font-medium">
                      {formula.commission}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {formula.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span
                          className={`text-sm leading-relaxed ${
                            feature.startsWith('Tout')
                              ? 'font-semibold text-foreground'
                              : 'text-muted-foreground'
                          }`}
                        >
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA aligné en bas */}
                <div className="pt-8 mt-auto">
                  <Button
                    size="lg"
                    variant={formula.highlighted ? 'default' : 'outline'}
                    className="w-full hover:scale-[1.02] transition-all duration-300"
                  >
                    {formula.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 max-w-2xl mx-auto space-y-4"
        >
          <div className="p-6 bg-primary/5 rounded-xl border border-primary/20 shadow-sm">
            <p className="text-sm font-semibold text-foreground">
              Aucun frais caché — nous ne gagnons que si votre bien performe.
            </p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Tarifs dégressifs selon le nombre de biens gérés. Contactez-nous pour une estimation
            personnalisée et transparente.
          </p>
          <div className="pt-6">
            <Button size="lg" asChild>
              <a href="/contact">Demander un devis personnalisé</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
