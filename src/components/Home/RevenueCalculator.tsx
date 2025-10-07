'use client';
import { useState } from 'react';
import { Calculator, TrendingUp, Car } from 'lucide-react';
import { Button } from '../Buttons/button';
import { Label } from '../others/label';
import { Slider } from '../others/slider';

const RevenueCalculator = () => {
  const [surface, setSurface] = useState(50);
  const [bedrooms, setBedrooms] = useState(1);
  const [city, setCity] = useState('Mulhouse');
  const [finish, setFinish] = useState('Standard');
  const [hasParking, setHasParking] = useState(false);
  const [taxeFonciere, setTaxeFonciere] = useState(800);
  const [showResults, setShowResults] = useState(false);

  // --- LOGIQUE DE CALCUL ---
  const calculateRevenue = () => {
    const basePrice = city === 'Mulhouse' ? 65 : city === 'Colmar' ? 70 : 75;
    const finishFactor =
      finish === 'Économique' ? 0.9 : finish === 'Standard' ? 1 : finish === 'Premium' ? 1.15 : 1;

    const dailyRate =
      (basePrice + bedrooms * 18 + surface * 0.45) * finishFactor + (hasParking ? 3 : 0);

    const occupancyRate = 0.7;
    const monthlyGross = dailyRate * 30 * occupancyRate;
    const monthlyTaxeFonciere = taxeFonciere / 12;
    const monthlyNet = Math.round(monthlyGross - monthlyTaxeFonciere);

    const traditionalRent = Math.round(surface * 13.5);
    const gain = Math.round(((monthlyNet - traditionalRent) / traditionalRent) * 100);

    return {
      dailyRate: Math.round(dailyRate),
      monthlyGross: Math.round(monthlyGross),
      monthlyNet,
      traditionalRent,
      gain,
    };
  };

  const results = calculateRevenue();

  // --- RENDU ---
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Calculateur de Revenus</h3>
          <p className="text-sm text-gray-600">
            Estimez vos revenus nets potentiels en courte durée
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Basé sur les données réelles des Clés d’Alsace
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-6">
        {/* Surface */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>Surface (m²)</Label>
            <span className="text-sm font-semibold text-primary">{surface} m²</span>
          </div>
          <Slider
            value={[surface]}
            onValueChange={(value) => setSurface(value[0])}
            min={20}
            max={150}
            step={5}
          />
        </div>

        {/* Chambres */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>Nombre de chambres</Label>
            <span className="text-sm font-semibold text-primary">{bedrooms}</span>
          </div>
          <Slider
            value={[bedrooms]}
            onValueChange={(value) => setBedrooms(value[0])}
            min={1}
            max={5}
            step={1}
          />
        </div>

        {/* Ville */}
        <div className="space-y-3">
          <Label>Ville</Label>
          <div className="grid grid-cols-3 gap-2">
            {['Mulhouse', 'Colmar', 'Saint-Louis'].map((c) => (
              <button
                key={c}
                onClick={() => setCity(c)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  city === c ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Niveau de finition */}
        <div className="space-y-3">
          <Label>Niveau de finition</Label>
          <div className="grid grid-cols-3 gap-2">
            {['Économique', 'Standard', 'Premium'].map((f) => (
              <button
                key={f}
                onClick={() => setFinish(f)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  finish === f ? 'bg-accent text-white' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Parking */}
        <div className="flex items-center justify-between">
          <Label className="flex items-center gap-2">
            <Car className="w-4 h-4 text-primary" />
            Parking
          </Label>
          <button
            onClick={() => setHasParking(!hasParking)}
            className={`px-3 py-1 rounded-md font-medium transition-all ${
              hasParking ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {hasParking ? 'Oui' : 'Non'}
          </button>
        </div>

        {/* Taxe foncière */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>Taxe foncière annuelle (€)</Label>
            <span className="text-sm font-semibold text-primary">{taxeFonciere}€</span>
          </div>
          <Slider
            value={[taxeFonciere]}
            onValueChange={(value) => setTaxeFonciere(value[0])}
            min={300}
            max={2000}
            step={50}
          />
        </div>

        {/* Calcul */}
        <Button onClick={() => setShowResults(true)} className="w-full" size="lg">
          Calculer mes revenus
        </Button>

        {/* Résultats */}
        {showResults && (
          <div className="mt-8 pt-8 border-t border-gray-200 space-y-4 animate-fade-in">
            <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-6 text-white shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Revenus estimés
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-white/80">Tarif journalier</span>
                  <span className="text-2xl font-bold">{results.dailyRate}€</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-white/80">Revenus mensuels (bruts)</span>
                  <span className="text-3xl font-bold">{results.monthlyGross}€</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-white/80">Revenus mensuels (nets)</span>
                  <span className="text-3xl font-bold">{results.monthlyNet}€</span>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Gain vs location classique</p>
                <p className="text-4xl font-bold text-accent mb-1">+{results.gain}%</p>
                <p className="text-sm text-gray-600">
                  soit {results.monthlyNet - results.traditionalRent}€/mois de plus
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center">
              * Estimation basée sur un taux d’occupation de 70% et les loyers moyens du marché.
              Résultats non contractuels.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RevenueCalculator;
