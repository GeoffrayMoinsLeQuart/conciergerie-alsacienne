'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useRef } from 'react';

const testimonials = [
  {
    name: 'Marie L.',
    location: 'Strasbourg',
    property: 'Appartement T3 - Petite France',
    rating: 5,
    text: "Après avoir hésité pendant des mois, je me suis lancée avec leur conciergerie. En 6 mois, j'ai déjà gagné 40% de plus qu'avec mon ancien locataire longue durée. Et surtout : je ne m'occupe de rien. Ils gèrent absolument tout.",
    revenue: '+4 200 € de revenus annuels',
    highlight: 'Je ne m’occupe plus de rien !',
    avatar: 'ML',
  },
  {
    name: 'Thomas B.',
    location: 'Colmar',
    property: 'Studio - Centre historique',
    rating: 5,
    text: "J'étais sceptique sur le concept, mais leur professionnalisme m'a convaincu dès la première réunion. Mon studio affiche un taux d'occupation de 95% et je reçois mes virements comme une horloge. Service impeccable.",
    revenue: 'Taux d’occupation : 95 %',
    highlight: 'Service impeccable',
    avatar: 'TB',
  },
  {
    name: 'Nathalie & Jean-Marc D.',
    location: 'Mulhouse',
    property: 'Maison 4 chambres',
    rating: 5,
    text: "On a confié notre maison de famille en conciergerie pendant qu'on vit à l'étranger. C'est rassurant de savoir qu'elle est entre de bonnes mains, entretenue et valorisée. Les rapports mensuels sont clairs et détaillés.",
    revenue: 'Patrimoine valorisé',
    highlight: 'Entre de bonnes mains',
    avatar: 'ND',
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  return (
    <section
      id="testimonials"
      ref={ref}
      aria-labelledby="testimonials-heading"
      className="relative py-20 md:py-28 bg-gradient-to-b from-secondary/30 to-background overflow-hidden"
    >
      {/* ✅ Subtle parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-[0.05] bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80')] bg-cover bg-center"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* ✅ Section header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              id="testimonials-heading"
              className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
            >
              Ils nous font confiance
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Découvrez les retours de propriétaires qui ont confié leur bien à notre équipe.
            </p>
            <p className="text-sm text-primary font-semibold mt-4">
              +50 propriétaires satisfaits en Alsace
            </p>
          </div>

          {/* ✅ Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative flex flex-col justify-between bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[460px]"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16 text-primary" />
                </div>

                {/* Avatar & rating */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center text-primary font-semibold">
                    {t.avatar}
                  </div>
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                {/* Highlight */}
                <div className="bg-primary/5 rounded-lg p-3 border-l-4 border-primary mb-4">
                  <p className="text-sm font-semibold text-primary italic">“{t.highlight}”</p>
                </div>

                {/* Text */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{t.text}</p>

                {/* Footer */}
                <div className="pt-4 mt-4 border-t border-border">
                  <div className="text-sm font-semibold text-primary">{t.revenue}</div>
                  <div className="mt-2">
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.property}</div>
                    <div className="text-xs text-muted-foreground">{t.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
