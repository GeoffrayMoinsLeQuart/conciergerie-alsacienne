'use client';

import { useEffect, useRef, useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useFormData } from '@/hooks/useFormData';
import { useFormState } from '@/app/context/FormStateContext';
import { useHeaderOffset } from '@/hooks/useHeaderOffset';
import { createPortal } from 'react-dom';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Le nom est requis'),
  email: Yup.string().email('Email invalide').required('Email requis'),
  phone: Yup.string().required('Téléphone requis'),
  message: Yup.string().optional(),
});

interface EstimationModalProps {
  open: boolean;
  onClose: () => void;
}

export default function EstimationModal({ open, onClose }: EstimationModalProps) {
  const router = useRouter();
  const { formData, updateField, clearFormData } = useFormData();
  const { formState, setFormState } = useFormState();
  const { navHeight } = useHeaderOffset();
  const modalRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState<1 | 2>(1);

  const data = formState?.data || formData;

  // 🔹 Fermer sur clic extérieur ou touche Échap
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [onClose]);

  if (!open) return null;

  // 🔹 Contenu de la modale
  const modalContent = (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
      style={{ paddingTop: `${navHeight + 40}px` }}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in"
      >
        {/* --- HEADER --- */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {step === 1 ? 'Récapitulatif' : 'Vos coordonnées'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* --- CONTENU --- */}
        <div className="p-6 space-y-6">
          {step === 1 ? (
            <>
              {/* --- RÉCAPITULATIF --- */}
              <div className="rounded-2xl p-6 text-white bg-gradient-to-br from-blue-700 via-purple-600 to-red-500 shadow-md">
                <h3 className="text-lg font-semibold mb-4">Votre bien</h3>
                {data ? (
                  <ul className="space-y-1 text-white/90">
                    <li>
                      <b>Type :</b>{' '}
                      {data.propertyType === 'studio'
                        ? 'Studio'
                        : data.propertyType === 't2'
                          ? 'Appartement'
                          : data.propertyType === 'maison'
                            ? 'Maison'
                            : '-'}
                    </li>
                    {data.surface && (
                      <li>
                        <b>Surface :</b> {data.surface} m²
                      </li>
                    )}
                    {data.location && (
                      <li>
                        <b>Ville :</b> {data.location}
                      </li>
                    )}
                    {data.finish && (
                      <li>
                        <b>Finition :</b> {data.finish}
                      </li>
                    )}
                    {data.managementType && (
                      <li>
                        <b>Gestion :</b>{' '}
                        {data.managementType === 'conciergerie'
                          ? 'Conciergerie (courte durée)'
                          : 'Gestion locative (longue durée)'}
                      </li>
                    )}
                  </ul>
                ) : (
                  <p className="text-white/80">Aucune donnée disponible</p>
                )}
              </div>

              {/* --- REVENUS --- */}
              {data?.calculatorData && (
                <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                  <h3 className="font-semibold mb-3 text-gray-800">Revenus estimés</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>
                      <b>Tarif journalier :</b> {data.calculatorData.dailyRate} €
                    </li>
                    <li>
                      <b>Revenus mensuels nets :</b> {data.calculatorData.monthlyNet} €
                    </li>
                    <li>
                      <b>Gain vs classique :</b> +{data.calculatorData.gain} %
                    </li>
                  </ul>
                </div>
              )}

              <button
                onClick={() => setStep(2)}
                className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl flex justify-center items-center gap-2 transition-all"
              >
                Confirmer <CheckCircle className="w-5 h-5" />
              </button>
            </>
          ) : (
            // --- FORMULAIRE DE CONTACT ---
            <Formik
              initialValues={{
                name: data.name || '',
                email: data.email || '',
                phone: data.phone || '',
                message: data.message || '',
              }}
              validationSchema={ContactSchema}
              onSubmit={(values) => {
                Object.entries(values).forEach(([k, v]) => updateField(k as any, v as any));

                const completeData = { ...data, ...values };
                setFormState?.({ source: 'simulateur', data: completeData });

                toast.success('✅ Estimation envoyée !');

                setTimeout(() => {
                  router.push('/merci');
                  clearFormData();
                  onClose();
                }, 1000);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4 animate-fade-in">
                  {/* NOM */}
                  <div>
                    <label className="block mb-2 font-medium text-gray-900">Nom complet *</label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Jean Dupont"
                      className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block mb-2 font-medium text-gray-900">Email *</label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="jean.dupont@email.com"
                      className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>

                  {/* TÉLÉPHONE */}
                  <div>
                    <label className="block mb-2 font-medium text-gray-900">Téléphone *</label>
                    <Field
                      type="tel"
                      name="phone"
                      placeholder="06 XX XX XX XX"
                      className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block mb-2 font-medium text-gray-900">
                      Message (optionnel)
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      rows={4}
                      placeholder="Précisions complémentaires..."
                      className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none resize-none"
                    />
                  </div>

                  {/* INFO */}
                  <div className="bg-red-50 border border-red-100 rounded-2xl p-4 text-gray-900 text-sm">
                    ✅ Réponse sous 2h ouvrées
                    <br />✅ Estimation gratuite et sans engagement
                  </div>

                  {/* BOUTONS */}
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-2xl transition-all"
                    >
                      Retour
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3 px-6 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all"
                    >
                      Obtenir mon estimation
                      <CheckCircle className="w-5 h-5" />
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </div>
  );

  // 🔹 Affiche la modale au niveau du <body> via un portal
  return createPortal(modalContent, document.body);
}