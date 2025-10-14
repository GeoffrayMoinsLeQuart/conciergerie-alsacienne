'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import MultiStepQuestionnaire from '@/components/MultiStepQuestionnaire';
import { useFormData } from '@/hooks/useFormData';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const searchParams = useSearchParams();
  const skipToStepParam = searchParams.get('skipToStep');
  const skipToStep = skipToStepParam ? parseInt(skipToStepParam, 10) : undefined;
  const [showContinuationBanner, setShowContinuationBanner] = useState(false);

  const { formData } = useFormData();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (skipToStep && Object.keys(formData).length > 0) {
      setShowContinuationBanner(true);
    }
  }, [skipToStep, formData]);

  return (
    <>
      {/* HERO */}
      <section
        className="relative pt-28 pb-12 bg-gradient-to-br 
        from-[#0048BA] 
        to-[#0072FF] overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Parlons de votre <span className="text-accent">projet</span>
          </h1>
          <p className="text-xl text-white/90">
            Réponse garantie sous 24h. Estimation gratuite et sans engagement.
          </p>
        </div>
      </section>

      {/* QUESTIONNAIRE */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {showContinuationBanner && (
            <div className="mb-6 bg-accent/10 border border-accent/30 text-accent px-4 py-3 rounded-lg text-sm font-medium">
              ✅ Vos premières réponses ont bien été enregistrées. Il ne reste plus que quelques
              informations pour finaliser votre estimation.
            </div>
          )}

          <h2 className="text-3xl font-bold mb-3 text-center">
            {showContinuationBanner
              ? 'Finalisez votre estimation gratuite'
              : 'Obtenez votre estimation gratuite'}
          </h2>

          <p className="text-muted-foreground text-lg mb-8 text-center">
            {showContinuationBanner
              ? 'Encore quelques détails et notre équipe vous enverra votre estimation personnalisée sous 24h.'
              : 'Répondez à quelques questions et recevez une estimation personnalisée sous 24h.'}
          </p>

          <div className="bg-blue rounded-2xl shadow-lg border border-gray-200">
            <MultiStepQuestionnaire variant="light" initialStep={skipToStep ?? 1} />
          </div>
        </div>
      </section>

      {/* CONTACT INFOS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* COLONNE GAUCHE - CONTACT INFOS */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contactez-nous</h2>
                <p className="text-muted-foreground mb-8">
                  Notre équipe est à votre disposition pour répondre à toutes vos questions.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="tel:+33621471922"
                  className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-service hover:shadow-elegant transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Téléphone</div>
                    <div className="text-sm text-muted-foreground">06 21 47 19 22</div>
                    <div className="text-xs text-accent mt-1">Cliquez pour appeler</div>
                  </div>
                </a>

                <a
                  href="mailto:contact@clesdalsace.fr"
                  className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-service hover:shadow-elegant transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-sm text-muted-foreground">contact@clesdalsace.fr</div>
                    <div className="text-xs text-accent mt-1">Réponse sous 24h</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-service">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Localisation</div>
                    <div className="text-sm text-muted-foreground">
                      Mulhouse, Alsace
                      <br />
                      France
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-service">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Horaires</div>
                    <div className="text-sm text-muted-foreground">
                      Lundi - Samedi
                      <br />
                      9h00 - 19h00
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-xl p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  Pourquoi nous choisir ?
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Réponse garantie sous 24h</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Estimation gratuite et sans engagement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Expertise locale reconnue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>+40% de revenus en moyenne</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}