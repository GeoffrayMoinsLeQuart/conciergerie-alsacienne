'use client';

import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../Buttons/button';

const formulas = [
  {
    name: 'Essentielle',
    description: 'La base solide de la gestion locative',
    price: '6%',
    priceDetail: 'HT des loyers encaissés',
    features: [
      'Recherche et sélection des locataires',
      'Rédaction du bail et état des lieux',
      'Encaissement des loyers et quittances',
      'Révision annuelle du loyer',
      'Régularisation des charges',
      'Assistance téléphonique dédiée',
      'Espace propriétaire en ligne',
      'Protection juridique incluse',
      'Couverture des dégradations*',
      'Garantie contre le squat',
    ],
    cta: 'Je choisis la simplicité',
    highlighted: false,
  },
  {
    name: 'Sérénité',
    description: 'Pour ceux qui veulent dormir tranquille',
    price: '7,5%',
    priceDetail: 'HT des loyers encaissés',
    badge: 'Formule recommandée',
    features: [
      '✓ Inclut tous les avantages de la Formule Essentielle',
      'Garantie loyers impayés à 100% (2.5% loyers + charges, sans carence)',
      'Visites techniques annuelles',
      "Gestion des interventions d'urgence 24h/24",
      'Bilan de gestion annuel personnalisé',
      'Option PNO : 75 € (franchise 300 €, plafond 1.5 M€)',
    ],
    cta: 'Je choisis la tranquillité',
    highlighted: true,
  },
  {
    name: 'Premium',
    description: "L'expérience complète, clé en main",
    price: '9%',
    priceDetail: 'HT des loyers encaissés',
    features: [
      '✓ Inclut tous les avantages de la Formule Sérénité',
      'Accompagnement sur votre fiscalité',
      'Visite technique semestrielle',
      'Conseiller dédié joignable 7j/7',
      'Option PNO : 92 € (franchise 135 €, plafond 3 M€)',
      'Vacance locative : à venir',
    ],
    cta: "Je choisis l'excellence",
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-secondary/50 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">
              Nos Formules
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Des solutions adaptées à vos besoins
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Choisissez la formule la plus alignée avec vos besoins et votre patrimoine.
            </p>
          </div>

          {/* Initial fees note */}
          <div className="mb-12 p-6 bg-primary/5 border border-primary/20 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Frais initiaux de mise en location
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Des frais équivalents à un mois de loyer hors charges sont appliqués lors de la mise
              en location initiale. Ces frais couvrent les éléments suivants :
            </p>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Établissement du bail conforme à la législation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>État des lieux d'entrée détaillé avec photos</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Vérification complète des dossiers locataires</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Constitution des dossiers d'assurance</span>
              </li>
            </ul>
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {formulas.map((formula, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  formula.highlighted
                    ? 'bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary shadow-2xl scale-105'
                    : index % 2 === 0
                      ? 'bg-card border border-border shadow-md'
                      : 'bg-secondary/30 border border-border shadow-md'
                } transition-all duration-300 hover:shadow-xl`}
              >
                {formula.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    {formula.badge}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-2 pb-6 border-b border-border">
                    <h3 className="text-2xl font-bold text-foreground">{formula.name}</h3>
                    <p className="text-sm text-muted-foreground">{formula.description}</p>
                    <div className="pt-4">
                      <div className="text-4xl font-bold text-primary">{formula.price}</div>
                      <div className="text-sm text-muted-foreground">{formula.priceDetail}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {formula.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span
                          className={`text-sm ${
                            feature.startsWith('✓')
                              ? 'font-semibold text-foreground'
                              : 'text-muted-foreground'
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="pt-4">
                    <Button
                      className="w-full hover:scale-105 transition-all duration-300"
                      variant={formula.highlighted ? 'default' : 'outline'}
                      size="lg"
                    >
                      {formula.cta}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="text-center mt-12 max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vous hésitez encore entre nos formules ? Estimez vos revenus nets selon votre
              situation, le type de bien et la formule choisie.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
