'use client';

import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../Buttons/button';

const FinalCTASection = () => {
  return (
    <section className="py-24 md:py-36 bg-gradient-to-br from-accent-red via-accent-red to-accent-red/90 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80')] bg-cover bg-center" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Main content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Prêt à déléguer la gestion de <span className="text-white/90">votre bien ?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Estimez votre rentabilité nette en quelques clics ou échangez avec votre conseiller
              dédié.
            </p>
            <p className="text-base text-white font-semibold">
              Un conseiller local vous répond sous 24h depuis Mulhouse.
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-8 justify-center items-center text-sm text-white/90">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span>Réponse en 24 h garantie</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span>Conseiller dédié</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="text-lg px-10 py-7 bg-white text-accent-red hover:bg-white/90 shadow-2xl hover:scale-[1.02] transition-all duration-500 border-2 border-white/40 font-semibold min-w-[280px]"
            >
              Estimer mes revenus locatifs
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 min-w-[280px] bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent-red transition-all duration-500"
            >
              Parler à un conseiller
            </Button>
          </div>

          {/* Contact info */}
          <div className="pt-8">
            <p className="text-sm text-white/80 mb-2">Ou appelez-nous directement au</p>
            <a
              href="tel:+33621471922"
              className="inline-flex items-center gap-2 text-2xl font-bold text-white hover:text-white/90 transition-colors"
            >
              <Phone className="w-6 h-6" />
              06 21 47 19 22
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
