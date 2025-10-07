'use client';

import { Phone, Mail, Calendar } from 'lucide-react';
import { Button } from '../Buttons/button';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gradient-cta relative overflow-hidden">
      {/* Motif décoratif en fond */}
      <div className="absolute inset-0 opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Titre principal */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
            Prêt à augmenter vos revenus de <span className="text-accent">+40%</span> ?
          </h2>

          {/* Sous-titre */}
          <p className="text-2xl text-white/90 mb-14 max-w-2xl mx-auto">
            Discutons de votre projet dès aujourd'hui. Réponse garantie sous 24h.
          </p>

          {/* Boutons d’action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            {/* Téléphone cliquable */}
            <a href="tel:+33621471922" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 text-base px-8 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                06 21 47 19 22
              </Button>
            </a>

            {/* Bouton contact */}
            <Button
              size="lg"
              variant="outline"
              onClick={() => (window.location.href = '/contact')}
              className="gap-2 text-base px-8 bg-white hover:bg-white/90 text-primary border-white w-full sm:w-auto"
            >
              <Mail className="w-5 h-5" />
              Nous contacter
            </Button>
          </div>

          {/* Disponibilité */}
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Disponible du lundi au samedi, 9h-19h</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
