'use client';
import { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useFormState } from '@/app/context/FormStateContext';
import { Button } from '@/components/Buttons/button';
import Footer from '@/components/Footer';
import { useHeaderOffset } from '@/hooks/useHeaderOffset';

export default function MerciPage() {
  const { formState } = useFormState();
  const data = formState.data;
  const source = formState.source;

  const { paddingTop } = useHeaderOffset(); // 👈 ici

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-16" style={{ paddingTop }}>
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="flex justify-center">
            <CheckCircle2 className="w-20 h-20 text-green-500" />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Merci pour votre demande !</h1>
            <p className="text-xl text-muted-foreground">
              {source === 'simulateur'
                ? 'Votre simulation a bien été enregistrée.'
                : 'Nous avons bien reçu vos informations et nous vous recontacterons dans les plus brefs délais.'}
            </p>
          </div>

          {data ? (
            <div className="bg-muted/50 rounded-lg p-6 text-left space-y-3">
              <h2 className="font-semibold text-lg mb-4">
                {source === 'simulateur'
                  ? 'Résultats de votre simulation'
                  : 'Récapitulatif de votre demande'}
              </h2>

              {/* Property Information */}
              {data.propertyType && (
                <p>
                  <span className="font-medium">Type de bien :</span>{' '}
                  {data.propertyType === 'studio'
                    ? 'Studio'
                    : data.propertyType === 't2'
                      ? 'Appartement T2'
                      : data.propertyType === 't3'
                        ? 'Appartement T3 / T4'
                        : data.propertyType === 'maison'
                          ? 'Maison'
                          : data.propertyType}
                </p>
              )}
              {data.surface && (
                <p>
                  <span className="font-medium">Surface :</span> {data.surface} m²
                </p>
              )}
              {data.location && (
                <p>
                  <span className="font-medium">Ville :</span> {data.location}
                </p>
              )}
              {data.finish && (
                <p>
                  <span className="font-medium">Finition :</span> {data.finish}
                </p>
              )}
              {data.managementType && (
                <p>
                  <span className="font-medium">Type de gestion :</span>{' '}
                  {data.managementType === 'conciergerie'
                    ? 'Conciergerie (courte durée)'
                    : 'Gestion locative (longue durée)'}
                </p>
              )}

              {/* Contact */}
              {data.name && (
                <p>
                  <span className="font-medium">Nom :</span> {data.name}
                </p>
              )}
              {data.email && (
                <p>
                  <span className="font-medium">Email :</span> {data.email}
                </p>
              )}
              {data.phone && (
                <p>
                  <span className="font-medium">Téléphone :</span> {data.phone}
                </p>
              )}
              {data.message && (
                <p>
                  <span className="font-medium">Message :</span>{' '}
                  <span className="text-muted-foreground">{data.message}</span>
                </p>
              )}

              {/* Calculateur (si existant) */}
              {data.calculatorData && (
                <div className="mt-4 pt-4 border-t border-border space-y-1 text-sm">
                  {data.calculatorData.dailyRate && (
                    <p>
                      <span className="font-medium">Tarif journalier :</span>{' '}
                      {data.calculatorData.dailyRate} €
                    </p>
                  )}
                  {data.calculatorData.monthlyNet && (
                    <p>
                      <span className="font-medium">Revenus nets :</span>{' '}
                      {data.calculatorData.monthlyNet} €/mois
                    </p>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-muted/40 rounded-lg p-6 text-center">
              <p>Aucune donnée n’a été transmise.</p>
            </div>
          )}

          {/* CTA */}
          <div className="space-y-4 pt-8">
            <p className="text-lg font-medium">
              Un expert vous contactera sous 24 h pour une estimation personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/">Retour à l’accueil</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/nos-biens">Découvrir nos biens</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
