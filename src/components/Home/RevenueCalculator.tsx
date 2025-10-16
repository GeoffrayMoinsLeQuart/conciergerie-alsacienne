'use client';

import { useEffect, useMemo, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Calculator, TrendingUp } from 'lucide-react';
import { Label } from '../others/label';
import { Slider } from '../others/slider';
import EstimationModal from './EstimationModal';
import { useFormData } from '@/hooks/useFormData';
import { useHeaderOffset } from '@/hooks/useHeaderOffset';
import { useFormState } from '@/app/context/FormStateContext';

// 🔹 Constantes typées
const PROPERTY_TYPES = ['studio', 't2', 'maison'] as const;
type PropertyType = (typeof PROPERTY_TYPES)[number];

const FINISHES = ['Économique', 'Standard', 'Premium'] as const;
type Finish = (typeof FINISHES)[number];

const MANAGEMENT_TYPES = ['conciergerie', 'gestion-locative'] as const;
type ManagementType = (typeof MANAGEMENT_TYPES)[number];

const CITIES = ['Mulhouse', 'Colmar', 'Saint-Louis'] as const;
type City = (typeof CITIES)[number];

// 🔹 Validation du formulaire
const CalculatorSchema = Yup.object().shape({
  propertyType: Yup.string().required(),
  surface: Yup.number().required().positive(),
  bedrooms: Yup.number().min(0),
  location: Yup.string().required(),
  finish: Yup.string().required(),
  managementType: Yup.string().required(),
});

interface FormValues {
  propertyType: PropertyType;
  surface: number;
  bedrooms: number;
  location: City;
  finish: Finish;
  managementType: ManagementType;
  calculatorData: {
    dailyRate: number;
    monthlyGross: number;
    monthlyNet: number;
    traditionalRent: number;
    gain: number;
  };
}

// ==========================================================
// 🔹 Composant principal : setup Formik
// ==========================================================
export default function RevenueCalculator() {
  const { formData, updateField } = useFormData();
  const { setFormState } = useFormState();
  const offset = useHeaderOffset();

  const initialValues: FormValues = {
    propertyType: (formData.propertyType as PropertyType) || 'studio',
    surface: formData.surface ? parseInt(formData.surface, 10) : 50,
    bedrooms: 1,
    location: (formData.location as City) || 'Mulhouse',
    finish: (formData.finish as Finish) || 'Standard',
    managementType: (formData.managementType as ManagementType) || 'conciergerie',
    calculatorData: formData.calculatorData || {
      dailyRate: 0,
      monthlyGross: 0,
      monthlyNet: 0,
      traditionalRent: 0,
      gain: 0,
    },
  };

  return (
    <Formik<FormValues>
      initialValues={initialValues}
      validationSchema={CalculatorSchema}
      onSubmit={(values) => {
        Object.entries(values).forEach(([k, v]) => updateField(k as any, v as any));
        setFormState({ source: 'simulateur', data: { ...formData, ...values } });

        const el = document.getElementById('revenus-estimes');
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = window.scrollY + rect.top - offset.navHeight - 40;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }}
    >
      {(formikProps) => <RevenueCalculatorForm {...formikProps} />}
    </Formik>
  );
}

// ==========================================================
// 🔹 Sous-composant pour isoler les hooks
// ==========================================================
function RevenueCalculatorForm({ values, setFieldValue, handleSubmit }: any) {
  const { updateField } = useFormData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);

  // ---- Calculs principaux ----
  const results = useMemo(() => {
    const basePrice = values.location === 'Mulhouse' ? 65 : values.location === 'Colmar' ? 70 : 75;
    const finishFactor =
      values.finish === 'Économique' ? 0.9 : values.finish === 'Standard' ? 1 : 1.15;
    const effectiveBedrooms = values.propertyType === 'studio' ? 0 : values.bedrooms;
    const dailyRate = (basePrice + effectiveBedrooms * 18 + values.surface * 0.45) * finishFactor;
    const occupancyRate = 0.7;
    const monthlyGross = dailyRate * 30 * occupancyRate;
    const monthlyNet = Math.round(monthlyGross);
    const traditionalRent = Math.round(values.surface * 13.5);
    const gain = Math.round(((monthlyNet - traditionalRent) / Math.max(traditionalRent, 1)) * 100);

    return {
      dailyRate: Math.round(dailyRate),
      monthlyGross,
      monthlyNet,
      traditionalRent,
      gain,
    };
  }, [values]);

  // ---- Synchronisation après rendu ----
  useEffect(() => {
    const c = values.calculatorData;
    const isSame =
      c &&
      c.dailyRate === results.dailyRate &&
      c.monthlyGross === results.monthlyGross &&
      c.monthlyNet === results.monthlyNet &&
      c.traditionalRent === results.traditionalRent &&
      c.gain === results.gain;

    if (!isSame) {
      setFieldValue('calculatorData', results, false);
      updateField('calculatorData', results);
    }
  }, [results, setFieldValue, updateField, values.calculatorData]);

  // ==========================================================
  // 🔹 UI
  // ==========================================================
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        setHasCalculated(true);
      }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Calculateur de Revenus</h3>
          <p className="text-sm text-gray-600">Estimez vos revenus nets potentiels</p>
          <p className="text-xs text-gray-500 mt-1">
            Basé sur les données réelles des Clés d’Alsace
          </p>
        </div>
      </div>

      {/* ---- Formulaire ---- */}
      <div className="space-y-6">
        {/* Type de bien */}
        <div className="space-y-3">
          <Label>Type de bien</Label>
          <div className="grid grid-cols-3 gap-2">
            {PROPERTY_TYPES.map((type) => (
              <button
                type="button"
                key={type}
                onClick={() => setFieldValue('propertyType', type)}
                className={`px-4 py-2 rounded-2xl font-medium transition-all ${
                  values.propertyType === type
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {type === 't2' ? 'Appartement' : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Surface */}
        <div className="space-y-3">
          <div className="flex justify-between">
            <Label>Surface (m²)</Label>
            <span className="text-sm font-semibold text-blue-700">{values.surface} m²</span>
          </div>
          <Slider
            value={[values.surface]}
            onValueChange={(v) => setFieldValue('surface', v[0])}
            min={20}
            max={150}
            step={5}
          />
        </div>

        {/* Chambres */}
        {values.propertyType !== 'studio' && (
          <div className="space-y-3">
            <div className="flex justify-between">
              <Label>Nombre de chambres</Label>
              <span className="text-sm font-semibold text-blue-700">{values.bedrooms}</span>
            </div>
            <Slider
              value={[values.bedrooms]}
              onValueChange={(v) => setFieldValue('bedrooms', v[0])}
              min={1}
              max={5}
              step={1}
            />
          </div>
        )}

        {/* Ville */}
        <div className="space-y-3">
          <Label>Ville</Label>
          <div className="grid grid-cols-3 gap-2">
            {CITIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFieldValue('location', c)}
                className={`px-4 py-2 rounded-2xl font-medium transition-all ${
                  values.location === c ? 'bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Finition */}
        <div className="space-y-3">
          <Label>Finition</Label>
          <div className="grid grid-cols-3 gap-2">
            {FINISHES.map((f) => (
              <button
                type="button"
                key={f}
                onClick={() => setFieldValue('finish', f)}
                className={`px-4 py-2 rounded-2xl font-medium transition-all ${
                  values.finish === f ? 'bg-red-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Type de gestion */}
        <div className="space-y-3">
          <Label>Type de gestion</Label>
          <div className="grid grid-cols-2 gap-2">
            {MANAGEMENT_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFieldValue('managementType', type)}
                className={`p-3 rounded-2xl font-medium transition-all text-left ${
                  values.managementType === type
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <div className="font-semibold">
                  {type === 'conciergerie' ? 'Conciergerie (LCD)' : 'Gestion locative (LLD)'}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          type="submit"
          className="w-full py-3 px-6 rounded-2xl font-semibold text-white shadow-sm transition-all bg-gradient-to-r from-blue-700 via-purple-600 to-red-500 hover:shadow-md"
        >
          Calculer mes revenus
        </button>

        {/* Résultats */}
        {hasCalculated && values.calculatorData?.monthlyNet > 0 && (
          <div
            id="revenus-estimes"
            className="mt-8 pt-8 border-t border-gray-200 space-y-4 animate-fade-in"
          >
            <div className="rounded-2xl p-6 text-white shadow-md bg-gradient-to-br from-blue-700 via-purple-600 to-red-500">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Revenus estimés
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/80">Tarif journalier</span>
                  <span className="text-2xl font-bold">{results.dailyRate}€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Revenus mensuels</span>
                  <span className="text-3xl font-bold">{results.monthlyNet}€</span>
                </div>
              </div>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <p className="text-center text-gray-600">
                Gain vs location classique :
                <span className="block text-4xl font-bold text-red-600 mt-1">+{results.gain}%</span>
              </p>
            </div>
            <p className="text-xs text-gray-500 text-center">
              * Estimation basée sur un taux d’occupation de 70%. Résultats non contractuels.
            </p>

            <EstimationModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 px-8 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl flex items-center justify-center gap-3 shadow-sm transition-all"
            >
              Obtenir mon estimation personnalisée
            </button>
          </div>
        )}
      </div>
    </Form>
  );
}
