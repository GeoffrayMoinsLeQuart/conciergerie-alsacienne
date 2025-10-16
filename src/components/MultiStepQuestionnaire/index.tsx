'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { useFormData } from '@/hooks/useFormData';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '../Buttons/button';
import { useFormState } from '@/app/context/FormStateContext';

interface MultiStepQuestionnaireProps {
  variant?: 'hero' | 'light';
  initialStep?: number;
}

// ────────────────────────────────
// Validation schemas
// ────────────────────────────────
const step1Schema = Yup.object({
  propertyType: Yup.string().required('Sélectionnez un type de bien'),
});

const step2Schema = Yup.object({
  location: Yup.string().min(2, 'Entrez une ville valide').required('Entrez une ville'),
  surface: Yup.number()
    .min(1, 'Entrez une surface approximative')
    .required('Entrez une surface approximative'),
  finish: Yup.string().required('Sélectionnez un niveau de finition'),
});

const step3Schema = Yup.object({
  managementType: Yup.string().required('Sélectionnez un type de gestion'),
});

const step4Schema = Yup.object({
  name: Yup.string().min(2, 'Nom requis').required('Nom requis'),
  email: Yup.string().email('Email invalide').required('Email requis'),
  phone: Yup.string()
    .matches(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, 'Numéro invalide')
    .required('Numéro de téléphone requis'),
});

const schemas = [step1Schema, step2Schema, step3Schema, step4Schema];

// ────────────────────────────────
// Component
// ────────────────────────────────
export default function MultiStepQuestionnaire({
  variant = 'hero',
  initialStep = 1,
}: MultiStepQuestionnaireProps) {
  const { setFormState } = useFormState();
  const [step, setStep] = useState(initialStep);
  const [submittedOnce, setSubmittedOnce] = useState(false); // ✅ Nouveau pour étape 4
  const router = useRouter();
  const { formData, updateField, clearFormData } = useFormData();
  const totalSteps = 4;
  const isLight = variant === 'light';

  // ────────────────────────────────
  // Formik setup
  // ────────────────────────────────
  const formik = useFormik({
    initialValues: {
      propertyType: formData.propertyType || '',
      location: formData.location || '',
      surface: formData.surface || '',
      finish: formData.finish || '',
      managementType: formData.managementType || '',
      name: formData.name || '',
      email: formData.email || '',
      phone: formData.phone || '',
      message: formData.message || '',
    },
    validationSchema: schemas[step - 1],

    onSubmit: async (values) => {
      toast.success('Estimation en cours ! Nous analysons votre bien.');

      setTimeout(() => {
        // ✅ Envoi complet au contexte
        setFormState({
          data: values,
          source: 'questionnaire',
        });

        window.dispatchEvent(new Event('estimation:complete'));

        router.push('/merci');
        clearFormData(); // nettoie ton hook local
      }, 1500);
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  // ────────────────────────────────
  // Synchronisation FormData ↔ Formik
  // ────────────────────────────────
  useEffect(() => {
    for (const key in formik.values) {
      if (
        formik.values[key as keyof typeof formik.values] !== formData[key as keyof typeof formData]
      ) {
        updateField(key as keyof typeof formData, formik.values[key as keyof typeof formik.values]);
      }
    }
  }, [formik.values, formData, updateField]);

  // ────────────────────────────────
  // Navigation entre étapes
  // ────────────────────────────────
  const nextStep = async () => {
    const currentSchema = schemas[step - 1];
    try {
      await currentSchema.validate(formik.values, { abortEarly: false });
      if (step < totalSteps) {
        setStep(step + 1);
        formik.setTouched({});
        formik.setErrors({});
      }
    } catch (validationErrors: any) {
      const newErrors: Record<string, string> = {};
      validationErrors.inner.forEach((error: any) => {
        newErrors[error.path] = error.message;
      });
      formik.setErrors(newErrors);
      formik.setTouched(newErrors);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      formik.setErrors({});
      formik.setTouched({});
    }
  };

  // ────────────────────────────────
  // Render
  // ────────────────────────────────
  return (
    <div
      className={`rounded-2xl p-8 border ${
        isLight
          ? 'bg-white shadow-lg border-gray-200'
          : 'bg-white/10 backdrop-blur-sm border-white/20'
      }`}
    >
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`flex-1 h-2 rounded-full mx-1 transition-all ${
                s <= step ? 'bg-red-600' : isLight ? 'bg-gray-200' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
        <p className={`text-sm text-center ${isLight ? 'text-gray-500' : 'text-white/70'}`}>
          Étape {step} sur {totalSteps}
        </p>
      </div>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (step === 4) {
            setSubmittedOnce(true);
            const currentSchema = schemas[3];
            try {
              await currentSchema.validate(formik.values, { abortEarly: false });
              formik.handleSubmit(e);
            } catch (validationErrors: any) {
              const newErrors: Record<string, string> = {};
              validationErrors.inner.forEach((error: any) => {
                newErrors[error.path] = error.message;
              });
              formik.setErrors(newErrors);
            }
          } else {
            nextStep();
          }
        }}
      >
        {/* // ─────────────── Étape 1 ─────────────── */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <h3 className={`text-2xl font-bold mb-4 ${isLight ? 'text-gray-900' : 'text-white'}`}>
              Quel type de bien possédez-vous ?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: 'studio', label: 'Studio' },
                { value: 't2', label: 'T2' },
                { value: 't3', label: 'T3 / T4' },
                { value: 'maison', label: 'Maison' },
              ].map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => formik.setFieldValue('propertyType', type.value)}
                  className={`p-6 rounded-xl font-semibold text-center transition-all border-2 ${
                    isLight
                      ? formik.values.propertyType === type.value
                        ? 'border-[#E63946] bg-[#FEEAEA] text-[#C21E2B]'
                        : 'border-gray-200 bg-gray-100/50 text-gray-900 hover:border-[#E63946]/60 hover:bg-red-50'
                      : formik.values.propertyType === type.value
                        ? 'border-[#E63946] bg-[#E63946]/20 text-white'
                        : 'bg-white/10 border-white/20 text-white hover:border-[#E63946] hover:bg-white/20'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
            {formik.touched.propertyType && formik.errors.propertyType && (
              <p className={`text-sm mt-2 ${isLight ? 'text-[#E63946]' : 'text-red-500'}`}>
                {formik.errors.propertyType}
              </p>
            )}
          </div>
        )}
        {/* ─────────────── Étape 2 ─────────────── */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <h3 className={`text-2xl font-bold mb-4 ${isLight ? 'text-gray-900' : 'text-white'}`}>
              Caractéristiques de votre bien
            </h3>

            {/* Ville */}
            <div>
              <label
                className={`block mb-2 font-medium ${isLight ? 'text-gray-900' : 'text-white'}`}
              >
                Ville
              </label>
              <input
                type="text"
                name="location"
                value={formik.values.location}
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                placeholder="Ex: Mulhouse, Colmar..."
                className={`w-full px-4 py-3 rounded-lg border outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 ${
                  isLight
                    ? 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-500'
                    : 'bg-white/10 border-white/20 text-white placeholder:text-white/50'
                }`}
              />
              {formik.touched.location && formik.errors.location && (
                <p className={`text-sm mt-1 ${isLight ? 'text-[#E63946]' : 'text-red-600'}`}>
                  {formik.errors.location}
                </p>
              )}
            </div>

            {/* Surface */}
            <div>
              <label
                className={`block mb-2 font-medium ${isLight ? 'text-gray-900' : 'text-white'}`}
              >
                Surface (m²)
              </label>
              <input
                type="number"
                name="surface"
                min="1"
                value={formik.values.surface}
                onChange={(e) => {
                  formik.handleChange(e);
                  updateField('surface', e.target.value);
                }}
                placeholder="Ex: 50, 75..."
                className={`w-full px-4 py-3 rounded-lg border outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 ${
                  isLight
                    ? 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-500'
                    : 'bg-white/10 border-white/20 text-white placeholder:text-white/50'
                }`}
              />
              {formik.touched.surface && formik.errors.surface && (
                <p className={`text-sm mt-1 ${isLight ? 'text-[#E63946]' : 'text-red-600'}`}>
                  {formik.errors.surface}
                </p>
              )}
            </div>

            {/* Niveau de finition */}
            <div>
              <label
                className={`block mb-2 font-medium ${isLight ? 'text-gray-900' : 'text-white'}`}
              >
                Niveau de finition
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Économique', 'Standard', 'Premium'].map((finish) => (
                  <button
                    key={finish}
                    type="button"
                    onClick={() => {
                      formik.setFieldValue('finish', finish);
                      updateField('finish', finish);
                    }}
                    className={`px-4 py-3 rounded-lg font-medium transition-all border-2 ${
                      isLight
                        ? formik.values.finish === finish
                          ? 'border-[#E63946] bg-[#FEEAEA] text-[#C21E2B]'
                          : 'border-gray-200 bg-gray-100/50 text-gray-900 hover:border-[#E63946]/60 hover:bg-red-50'
                        : formik.values.finish === finish
                          ? 'border-[#E63946] bg-[#E63946]/20 text-white'
                          : 'bg-white/5 hover:bg-white/10 border border-white/20 text-white'
                    }`}
                  >
                    {finish}
                  </button>
                ))}
              </div>
              {formik.touched.finish && formik.errors.finish && (
                <p className={`text-sm mt-1 ${isLight ? 'text-[#E63946]' : 'text-red-600'}`}>
                  {formik.errors.finish}
                </p>
              )}
            </div>
          </div>
        )}
        {/* ─────────────── Étape 3 ─────────────── */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <h3 className={`text-2xl font-bold mb-4 ${isLight ? 'text-gray-900' : 'text-white'}`}>
              Quel type de gestion souhaitez-vous ?
            </h3>
            <div className="space-y-3">
              {[
                {
                  value: 'conciergerie',
                  label: 'Conciergerie Airbnb',
                  desc: 'Gestion complète location courte durée',
                },
                {
                  value: 'gestion-locative',
                  label: 'Gestion Locative',
                  desc: 'Location longue durée sécurisée',
                },
              ].map((obj) => (
                <button
                  key={obj.value}
                  type="button"
                  onClick={() => {
                    formik.setFieldValue('managementType', obj.value);
                  }}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    isLight
                      ? formik.values.managementType === obj.value
                        ? 'border-[#E63946] bg-[#FEEAEA] text-[#C21E2B]'
                        : 'border-gray-200 bg-gray-100/50 text-gray-900 hover:border-[#E63946]/60 hover:bg-red-50'
                      : formik.values.managementType === obj.value
                        ? 'border-[#E63946] bg-[#E63946]/20 text-white'
                        : 'bg-white/10 border-white/20 hover:border-[#E63946] hover:bg-white/20 text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <p className={`font-semibold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                        {obj.label}
                      </p>
                      <p className={`text-sm ${isLight ? 'text-gray-600' : 'text-white/70'}`}>
                        {obj.desc}
                      </p>
                    </div>
                    {formik.values.managementType === obj.value && (
                      <CheckCircle
                        className={`w-6 h-6 ${isLight ? 'text-[#E63946]' : 'text-accent'}`}
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>
            {formik.touched.managementType && formik.errors.managementType && (
              <p className={`text-sm mt-1 ${isLight ? 'text-[#E63946]' : 'text-red-600'} mt-2`}>
                {formik.errors.managementType}
              </p>
            )}
          </div>
        )}
        {/* ─────────────── Étape 4 corrigée ─────────────── */}
        {step === 4 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <h3 className={`text-2xl font-bold mb-4 ${isLight ? 'text-gray-900' : 'text-white'}`}>
              Dernière étape : vos coordonnées
            </h3>
            {/* Nom */}
            <div>
              <label
                className={`block mb-2 font-medium ${isLight ? 'text-gray-900' : 'text-white'}`}
              >
                Nom complet
              </label>
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                placeholder="Jean Dupont"
                className={`w-full px-4 py-3 rounded-lg border outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 ${
                  isLight
                    ? 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-500'
                    : 'bg-white/10 border-white/20 text-white placeholder:text-white/50'
                }`}
              />
              {submittedOnce && formik.errors.name && (
                <p className={`text-sm text-sm mt-1 text-red-600`}>{formik.errors.name}</p>
              )}
            </div>
            {/* Email */}
            <div>
              <label
                className={`block mb-2 font-medium ${isLight ? 'text-gray-900' : 'text-white'}`}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={(e) => {
                  formik.handleChange(e);
                  updateField('email', e.target.value);
                }}
                placeholder="jean.dupont@email.com"
                className={`w-full px-4 py-3 rounded-lg border outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 ${
                  isLight
                    ? 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-500'
                    : 'bg-white/10 border-white/20 text-white placeholder:text-white/50'
                }`}
              />
              {submittedOnce && formik.errors.email && (
                <p className={`text-sm text-sm mt-1 text-red-600`}>{formik.errors.email}</p>
              )}
            </div>
            {/* Téléphone */}
            <div>
              <label
                className={`block mb-2 font-medium ${isLight ? 'text-gray-900' : 'text-white'}`}
              >
                Téléphone
              </label>
              <input
                type="tel"
                name="phone"
                value={formik.values.phone}
                onChange={(e) => {
                  formik.handleChange(e);
                  updateField('phone', e.target.value);
                }}
                placeholder="06 XX XX XX XX"
                className={`w-full px-4 py-3 rounded-lg border outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 ${
                  isLight
                    ? 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-500'
                    : 'bg-white/10 border-white/20 text-white placeholder:text-white/50'
                }`}
              />
              {submittedOnce && formik.errors.phone && (
                <p className={`text-sm text-sm mt-1 text-red-600`}>{formik.errors.phone}</p>
              )}
            </div>

            {/* Message optionnel */}
            <div>
              <label
                className={`block mb-2 font-medium ${isLight ? 'text-gray-900' : 'text-white'}`}
              >
                Message (optionnel)
              </label>
              <textarea
                rows={3}
                name="message"
                value={formik.values.message}
                onChange={(e) => {
                  formik.handleChange(e);
                  updateField('message', e.target.value);
                }}
                placeholder="Précisions complémentaires..."
                className={`w-full px-4 py-3 rounded-lg border outline-none resize-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 ${
                  isLight
                    ? 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-500'
                    : 'bg-white/10 border-white/20 text-white placeholder:text-white/50'
                }`}
              />
            </div>

            {/* Encadré d'information */}
            <div
              className={`border rounded-lg p-4 ${
                isLight
                  ? 'bg-red-50 border-red-200 text-gray-800'
                  : 'bg-red-600/10 border-red-400/30 text-white/90'
              }`}
            >
              <p className="text-sm">
                ✅ Réponse sous 2h ouvrées • Estimation gratuite et sans engagement
              </p>
            </div>
          </div>
        )}
        {/* ─────────────── Boutons de navigation ─────────────── */}
        <div className="flex gap-4 mt-8">
          {step > 1 && (
            <Button
              type="button"
              onClick={prevStep}
              variant="outline"
              className={
                isLight
                  ? 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  : 'bg-white/10 border-white/30 text-white hover:bg-white/20'
              }
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
          )}

          {step < totalSteps ? (
            <Button type="submit" className="flex-1 bg-red-600 hover:bg-red-700 text-white">
              Continuer
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button type="submit" className="flex-1 bg-red-600 hover:bg-red-700 text-white">
              Obtenir mon estimation
              <CheckCircle className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
