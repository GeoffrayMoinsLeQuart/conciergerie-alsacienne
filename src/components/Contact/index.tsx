'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import SectionTitle from '../Common/SectionTitle';
import FormProgress from './FormProgress';
import Step1Info from './steps/Step1Info';
import Step2Service from './steps/Step2Service';
import Step3Property from './steps/Step3Property';
import Step4Message from './steps/Step4Message';
import { Activity, ContactFormValues } from '@/types/form';

const WEBHOOK_URL = 'https://n8n.conciergerie-alsacienne.fr/webhook/lead-capture-contact'; // ← ajuste si besoin

// Step titles for the progress indicator
const STEP_TITLES = [
  'Vos informations',
  'Service & formule',
  'Détails du bien',
  'Message & consentement',
];

// Validation schemas for each step
const validationSchemas = [
  // Step 1: Personal Information
  Yup.object({
    firstName: Yup.string().required('Votre nom est obligatoire'),
    lastName: Yup.string().required('Votre nom est obligatoire'),
    email: Yup.string().email("Format d'email invalide").required('Votre email est obligatoire'),
    phone: Yup.string().required('Votre téléphone est obligatoire'),
    honeypot: Yup.string().test(
      'is-empty',
      'Bot detected',
      (value) => !value, // Should be empty for real users
    ),
  }),

  // Step 2: Service & Formula
  Yup.object({
    serviceType: Yup.mixed<Activity>()
      .oneOf(Object.values(Activity), 'Choisissez un service')
      .required('Choisissez un service'),
    formule: Yup.string().when('serviceType', ([serviceType], schema) => {
      if (serviceType === Activity.GestionLocative || serviceType === Activity.Conciergerie) {
        return schema.required('Choisissez une formule');
      }
      return schema.notRequired();
    }),
  }),

  // Step 3: Property Details
  Yup.object({
    address: Yup.string().required("L'adresse est obligatoire"),
  }),

  // Step 4: Message & Consent
  Yup.object({
    consent: Yup.boolean().oneOf([true], 'Vous devez accepter la politique de confidentialité'),
    preferredChannel: Yup.string()
      .oneOf(['appel', 'email', 'whatsapp'], 'Choisissez un canal')
      .required('Sélectionnez un canal'),
  }),
];

/**
 * ContactForm component is the main wizard controller that integrates
 * all step components into a functioning multi-step form.
 */
const ContactForm: React.FC = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [step, setStep] = useState(0);
  const [highestStepReached, setHighestStepReached] = useState(0);
  const totalSteps = STEP_TITLES.length;

  // Get initial values from URL parameters if available
  const initialService = (params.get('service') || '') as Activity;
  const initialFormule = params.get('formule') || '';

  // Initial form values
  const initialValues: ContactFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: initialService,
    formule: initialFormule,
    address: '',
    city: '',
    postalCode: '',
    propertyType: '',
    surface: '',
    message: '',
    consent: false,
    honeypot: '', // Anti-spam field
    submissionTime: '', // Will be set on submit
    preferredChannel: 'call', // valeur par défaut
  };

  // Handle form submission
  const handleSubmit = async (
    values: ContactFormValues,
    { setSubmitting }: FormikHelpers<ContactFormValues>,
  ) => {
    try {
      // Ajoute l’horodatage
      values.submissionTime = new Date().toISOString();

      // Anti-spam honeypot
      if (values.honeypot) {
        console.error('Bot submission detected');
        toast.error('Erreur de validation');
        return;
      }

      // 1️⃣ Prépare la payload
      const payload = {
        ...values,
        // Si tu veux injecter des champs supplémentaires, fais-le ici
        // e.g. une version formatée du budget ou du type de bien
      };

      console.log(payload);

      // 2️⃣ Envoi vers n8n
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Webhook error ${response.status}: ${response.statusText}`);
      }

      // 3️⃣ Succès : toast + redirection
      toast.success('Demande envoyée avec succès !');
      router.push('/merci#confirmation');
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("Échec de l'envoi, veuillez réessayer.");
    } finally {
      setSubmitting(false);
    }
  };

  // Navigation functions
  const nextStep = async (
    validateForm: () => Promise<any>,
    setTouched: (fields: { [field: string]: boolean }) => void,
    errors: any,
    values: ContactFormValues,
  ) => {
    // Touch all fields to trigger validation messages
    const currentFields = Object.keys(validationSchemas[step].fields);
    const touchedFields = currentFields.reduce(
      (acc, field) => {
        acc[field] = true;
        return acc;
      },
      {} as { [field: string]: boolean },
    );

    setTouched(touchedFields);

    // Validate form
    const validationErrors = await validateForm();

    if (Object.keys(validationErrors).length === 0) {
      const nextStepIndex = Math.min(step + 1, totalSteps - 1);
      setStep(nextStepIndex);
      setHighestStepReached(Math.max(highestStepReached, nextStepIndex)); // Update highest step reached
      // Scroll to top of form
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 0));
    // Scroll to top of form
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact-form" className="bg-white py-[120px]">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="sr-only">Contactez-nous pour votre projet immobilier</h1>
        <SectionTitle
          title="Un projet immobilier en tête ?"
          paragraph="Contactez-nous pour discuter de votre bien et découvrir comment notre service peut maximiser vos revenus locatifs en Alsace."
          center
        />

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mt-8">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchemas[step]}
            onSubmit={handleSubmit}
            validateOnMount={false}
            validateOnChange={true}
            validateOnBlur={true}
          >
            {({ isSubmitting, validateForm, setTouched, errors, values }) => (
              <Form aria-live="polite" noValidate>
                {/* Progress indicator */}
                <FormProgress
                  currentStep={step}
                  steps={STEP_TITLES}
                  onStepClick={(stepIndex) => {
                    // Only allow navigation to steps that have been reached
                    if (stepIndex <= highestStepReached) {
                      setStep(stepIndex);
                      document
                        .getElementById('contact-form')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                />

                {/* Form steps */}
                <div className="min-h-[400px]">
                  {step === 0 && <Step1Info />}
                  {step === 1 && <Step2Service />}
                  {step === 2 && <Step3Property />}
                  {step === 3 && <Step4Message />}
                </div>

                {/* Navigation buttons */}
                <div className="mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:justify-between">
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
                      aria-label="Retour à l'étape précédente"
                    >
                      ← Retour
                    </button>
                  ) : (
                    <div></div> // Empty div to maintain flex spacing on larger screens
                  )}

                  {step < totalSteps - 1 ? (
                    <button
                      type="button"
                      onClick={() => nextStep(validateForm, setTouched, errors, values)}
                      className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                      aria-label={`Passer à l'étape ${step + 2}: ${STEP_TITLES[step + 1]}`}
                    >
                      Suivant →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-70"
                      aria-busy={isSubmitting}
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                    </button>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
