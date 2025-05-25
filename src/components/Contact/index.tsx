// src/components/Home/ContactForm.tsx
'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Formik, FormikHelpers, Form } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import SectionTitle from '../Common/SectionTitle';
import FormProgress from './FormProgress';
import Step1Info from './steps/Step1Info';
import Step2Service from './steps/Step2Service';
import Step3Property from './steps/Step3Property';
import Step4Message from './steps/Step4Message';
import { Activity, ContactFormValues } from '@/types/form';
import { t } from '@/app/libs/content';
import PrevButton from '../Buttons/PrevNext/PrevButton';
import NextButton from '../Buttons/PrevNext/NextButton';

const WEBHOOK_URL = 'https://n8n.conciergerie-alsacienne.fr/webhook/lead-capture-contact';

const pageKey = 'contact';

// Récupération des textes
const { title: sectionTitle, paragraph: sectionParagraph } = t(pageKey, 'Contact.SectionTitle') as {
  title: string;
  paragraph: string;
};

const secondaryParagraph = t(pageKey, 'Contact.SectionTitle.secondaryParagraph') as string;

const STEP_TITLES = t(pageKey, 'Contact.steps') as string[];

const BUTTONS = t(pageKey, 'Contact.buttons') as Record<string, string>;
const ARIA = t(pageKey, 'Contact.aria') as { sectionId: string };
const ARIA_LABELS = t(pageKey, 'Contact.ariaLabels') as Record<string, string>;
const VALID = t(pageKey, 'Contact.validation') as Record<string, string>;
const TOAST = t(pageKey, 'Contact.toast') as Record<string, string>;

// Validation schemas
const validationSchemas = [
  Yup.object({
    firstName: Yup.string().required(VALID.requiredFirstName),
    lastName: Yup.string().required(VALID.requiredLastName),
    email: Yup.string().email(VALID.invalidEmail).required(VALID.requiredEmail),
    phone: Yup.string().required(VALID.requiredPhone),
    honeypot: Yup.string().test('is-empty', VALID.botDetected, (v) => !v),
  }),
  Yup.object({
    serviceType: Yup.mixed<Activity>()
      .oneOf(Object.values(Activity), VALID.chooseService)
      .required(VALID.chooseService),
    formule: Yup.string().when('serviceType', ([serviceType], schema) =>
      serviceType === Activity.GestionLocative || serviceType === Activity.Conciergerie
        ? schema.required(VALID.chooseFormula)
        : schema.notRequired(),
    ),
  }),
  Yup.object({
    address: Yup.string().required(VALID.requiredAddress),
  }),
  Yup.object({
    consent: Yup.boolean().oneOf([true], VALID.requiredConsent),
    preferredChannel: Yup.string()
      .oneOf(['call', 'email', 'whatsapp'], VALID.chooseChannel)
      .required(VALID.chooseChannel),
  }),
];

export default function ContactForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [step, setStep] = useState(0);
  const [highestStepReached, setHighestStepReached] = useState(0);
  const totalSteps = STEP_TITLES.length;

  const initialService = (params.get('service') || '') as Activity;
  const initialFormule = params.get('formule') || '';

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
    honeypot: '',
    submissionTime: '',
    preferredChannel: 'call',
  };

  const handleSubmit = async (
    values: ContactFormValues,
    { setSubmitting }: FormikHelpers<ContactFormValues>,
  ) => {
    try {
      values.submissionTime = new Date().toISOString();
      if (values.honeypot) throw new Error('bot');

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error(response.statusText);

      toast.success(TOAST.success);
      router.push('/merci#confirmation');
    } catch {
      console.error('Form submission error');
      toast.error(TOAST.error);
    } finally {
      setSubmitting(false);
    }
  };

  const nextStep = async (
    validateForm: () => Promise<any>,
    setTouched: (fields: Record<string, boolean>) => void,
  ) => {
    const fields = Object.keys(validationSchemas[step].fields);
    setTouched(fields.reduce((a, f) => ({ ...a, [f]: true }), {}));
    const errs = await validateForm();
    if (Object.keys(errs).length === 0) {
      const next = Math.min(step + 1, totalSteps - 1);
      setStep(next);
      setHighestStepReached((h) => Math.max(h, next));
      document.getElementById(ARIA.sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 0));
    document.getElementById(ARIA.sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={ARIA.sectionId} className="bg-white py-[120px]">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="sr-only">{sectionTitle}</h1>
        <SectionTitle title={sectionTitle} paragraph={sectionParagraph} center />
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 text-center">
          {secondaryParagraph}
        </p>
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mt-8">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchemas[step]}
            onSubmit={handleSubmit}
            validateOnMount={false}
            validateOnChange
            validateOnBlur
          >
            {({ isSubmitting, validateForm, setTouched, errors, values }) => (
              <Form aria-live="polite" noValidate>
                <FormProgress
                  currentStep={step}
                  steps={STEP_TITLES}
                  onStepClick={(i) => {
                    if (i <= highestStepReached) {
                      setStep(i);
                      document
                        .getElementById(ARIA.sectionId)
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                />
                <div className="min-h-[400px]">
                  {step === 0 && <Step1Info />}
                  {step === 1 && <Step2Service />}
                  {step === 2 && <Step3Property />}
                  {step === 3 && <Step4Message />}
                </div>

                <div className="mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:justify-between">
                  {step > 0 ? (
                    <PrevButton
                      onClick={prevStep}
                      aria-label={ARIA_LABELS.prev}
                      label={BUTTONS.prev}
                    />
                  ) : (
                    <div />
                  )}

                  {step < totalSteps - 1 ? (
                    <NextButton
                      onClick={() => nextStep(validateForm, setTouched)}
                      aria-label={`${ARIA_LABELS.nextPrefix} ${step + 2}: ${STEP_TITLES[step + 1]}`}
                      label={BUTTONS.next}
                    />
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-70"
                      aria-busy={isSubmitting}
                      id="cta-button-submit-contact-form"
                    >
                      {isSubmitting ? BUTTONS.submitting : BUTTONS.submit}
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
}
