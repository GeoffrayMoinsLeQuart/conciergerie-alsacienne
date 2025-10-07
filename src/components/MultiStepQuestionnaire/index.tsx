'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../Buttons/button';

interface MultiStepQuestionnaireProps {
  variant?: 'hero' | 'light';
}

type QuestionnaireData = {
  propertyType: string;
  location: string;
  surface: string;
  objective: string;
  name: string;
  email: string;
  phone: string;
};

export default function MultiStepQuestionnaire({ variant = 'hero' }: MultiStepQuestionnaireProps) {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<QuestionnaireData>({ mode: 'onChange' });

  const isLight = variant === 'light';

  const nextStep = async () => {
    const fields = getFieldsForStep(step);
    const isValid = await trigger(fields);
    if (isValid && step < totalSteps) setStep((s) => s + 1);
  };

  const prevStep = () => setStep((s) => Math.max(1, s - 1));

  const getFieldsForStep = (step: number): (keyof QuestionnaireData)[] => {
    switch (step) {
      case 1:
        return ['propertyType'];
      case 2:
        return ['location', 'surface'];
      case 3:
        return ['objective'];
      case 4:
        return ['name', 'email', 'phone'];
      default:
        return [];
    }
  };

  const onSubmit = (data: QuestionnaireData) => {
    toast.success('✅ Estimation envoyée ! Réponse sous 2h ouvrées.');
    setTimeout(() => router.push('/merci'), 1500);
  };

  return (
    <div
      className={`rounded-2xl p-8 border transition-all duration-300 ${
        isLight
          ? 'bg-white/90 backdrop-blur-sm border-gray-200 shadow-xl'
          : 'bg-white/10 backdrop-blur-xl border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.08)]'
      }`}
    >
      {/* Barre de progression rouge */}
      <div className="mb-8">
        <div className="flex w-full gap-2" role="progressbar">
          {Array.from({ length: totalSteps }, (_, i) => i + 1).map((s) => (
            <div
              key={s}
              className={`flex-1 h-2 rounded-full transition-[background-color,width] duration-500 ease-out ${
                s <= step ? 'bg-[#E63946]' : isLight ? 'bg-gray-200' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
        <p className={`mt-2 text-sm text-center ${isLight ? 'text-gray-600' : 'text-white/70'}`}>
          Étape {step} sur {totalSteps}
        </p>
      </div>

      {/* Formulaire */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Étape 1 */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h3 className={`text-2xl font-bold mb-6 ${isLight ? 'text-gray-900' : 'text-white'}`}>
              Quel type de bien possédez-vous ?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {['Studio', 'T2', 'T3/T4', 'Maison'].map((label) => (
                <label key={label} className="cursor-pointer">
                  <input
                    type="radio"
                    value={label}
                    {...register('propertyType', { required: 'Sélectionnez un type de bien' })}
                    className="sr-only peer"
                  />
                  <div
                    className={`p-6 rounded-xl border-2 text-center transition-all peer-checked:border-[#E63946] peer-checked:bg-[#E63946]/15 hover:border-[#E63946]/70 ${
                      isLight ? 'bg-gray-50 border-gray-200' : 'bg-white/5 border-white/20'
                    }`}
                  >
                    <span className={`font-semibold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                      {label}
                    </span>
                  </div>
                </label>
              ))}
            </div>
            {errors.propertyType && (
              <p className={`text-sm mt-2 ${isLight ? 'text-red-600' : 'text-red-300'}`}>
                {errors.propertyType.message}
              </p>
            )}
          </div>
        )}

        {/* Étape 2 */}
        {step === 2 && (
          <div className="animate-fade-in space-y-4">
            <h3 className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'}`}>
              Où se situe votre bien ?
            </h3>
            <input
              {...register('location', { required: 'Entrez une ville' })}
              placeholder="Ville"
              className={`w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-[#E63946]/30 ${
                isLight
                  ? 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400'
                  : 'bg-white/10 border-white/20 text-white placeholder:text-white/50'
              }`}
            />
            {errors.location && (
              <p className={`text-sm ${isLight ? 'text-red-600' : 'text-red-300'}`}>
                {errors.location.message}
              </p>
            )}
            <input
              {...register('surface', { required: 'Entrez une surface' })}
              placeholder="Surface (m²)"
              className={`w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-[#E63946]/30 ${
                isLight
                  ? 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400'
                  : 'bg-white/10 border-white/20 text-white placeholder:text-white/50'
              }`}
            />
            {errors.surface && (
              <p className={`text-sm ${isLight ? 'text-red-600' : 'text-red-300'}`}>
                {errors.surface.message}
              </p>
            )}
          </div>
        )}

        {/* Étape 3 */}
        {step === 3 && (
          <div className="animate-fade-in space-y-4">
            <h3 className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'}`}>
              Quel est votre objectif ?
            </h3>
            {[
              { value: 'conciergerie', label: 'Conciergerie Airbnb' },
              { value: 'gestion-locative', label: 'Gestion Locative' },
              { value: 'estimation', label: 'Simple Estimation' },
            ].map((obj) => (
              <label key={obj.value} className="block cursor-pointer">
                <input
                  type="radio"
                  value={obj.value}
                  {...register('objective', { required: 'Sélectionnez un objectif' })}
                  className="sr-only peer"
                />
                <div
                  className={`p-4 rounded-xl border-2 peer-checked:border-[#E63946] peer-checked:bg-[#E63946]/20 hover:border-[#E63946] transition-all ${
                    isLight ? 'bg-gray-50 border-gray-200' : 'bg-white/5 border-white/20'
                  }`}
                >
                  <p className={`font-semibold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                    {obj.label}
                  </p>
                </div>
              </label>
            ))}
          </div>
        )}

        {/* Étape 4 */}
        {step === 4 && (
          <div className="animate-fade-in space-y-4">
            <h3 className={`text-2xl font-bold ${isLight ? 'text-gray-900' : 'text-white'}`}>
              Vos coordonnées
            </h3>
            <input
              {...register('name', { required: 'Nom requis' })}
              placeholder="Nom complet"
              className={`w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-[#E63946]/30 ${
                isLight
                  ? 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400'
                  : 'bg-white/10 border-white/20 text-white placeholder:text-white/50'
              }`}
            />
            {errors.name && (
              <p className={`text-sm ${isLight ? 'text-red-600' : 'text-red-300'}`}>
                {errors.name.message}
              </p>
            )}
            <input
              {...register('email', { required: 'Email requis' })}
              type="email"
              placeholder="Email"
              className={`w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-[#E63946]/30 ${
                isLight
                  ? 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400'
                  : 'bg-white/10 border-white/20 text-white placeholder:text-white/50'
              }`}
            />
            {errors.email && (
              <p className={`text-sm ${isLight ? 'text-red-600' : 'text-red-300'}`}>
                {errors.email.message}
              </p>
            )}
            <input
              {...register('phone', { required: 'Téléphone requis' })}
              placeholder="Téléphone"
              className={`w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-[#E63946]/30 ${
                isLight
                  ? 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400'
                  : 'bg-white/10 border-white/20 text-white placeholder:text-white/50'
              }`}
            />
            {errors.phone && (
              <p className={`text-sm ${isLight ? 'text-red-600' : 'text-red-300'}`}>
                {errors.phone.message}
              </p>
            )}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-8">
          {step > 1 && (
            <Button
              type="button"
              onClick={prevStep}
              variant="outline"
              className={isLight ? '' : 'bg-white/10 border-white/30 text-white hover:bg-white/20'}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
          )}
          {step < totalSteps ? (
            <Button
              type="button"
              onClick={nextStep}
              className={`!flex-1 !bg-[#E63946] hover:!bg-[#E63946]/80 !text-white !font-semibold py-3 !rounded-lg !transition-colors`}
            >
              Continuer
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              type="submit"
              className={`flex-1 !bg-[#E63946] hover:!bg-[#E63946]/80 text-white font-semibold py-3 rounded-lg transition-colors`}
            >
              Obtenir mon estimation
              <CheckCircle className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
