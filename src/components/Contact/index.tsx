// components/Form/ContactForm.tsx
'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import AddressAutocomplete, { AddressComponents } from '@/components/AddressAutocomplete';
import SectionTitle from '../Common/SectionTitle';
import {
  Activity,
  ContactFormValues,
  FormuleConciergerie,
  FormuleGestionLocative,
} from '@/types/form';

const ContactForm: React.FC = () => {
  const router = useRouter();
  const params = useSearchParams();

  const initialService = (params.get('service') || '') as Activity;
  const initialFormule = (params.get('formule') || '') as
    | FormuleConciergerie
    | FormuleGestionLocative;

  const validationSchema = Yup.object({
    name: Yup.string().required('Obligatoire'),
    email: Yup.string().email('Email invalide').required('Obligatoire'),
    phone: Yup.string().required('Obligatoire'),
    serviceType: Yup.string().required('Choisissez un service'),
    consent: Yup.boolean().oneOf([true], 'Accepter la politique est requis'),
  });

  const FormuleSelector = () => {
    const { values } = useFormikContext<ContactFormValues>();

    const options =
      values.serviceType === Activity.GestionLocative
        ? [
            { label: 'Formule Essentielle', value: 'essentielle' },
            { label: 'Formule Serenite', value: 'serenite' },
            { label: 'Formule Premium', value: 'premium' },
          ]
        : values.serviceType === Activity.Conciergerie
          ? [
              { label: 'Formule Standard', value: 'standard' },
              { label: 'Formule Premium', value: 'premium' },
              { label: 'Formule Exclusive', value: 'exclusive' },
            ]
          : [];

    if (!options.length) return null;

    return (
      <div>
        <label id="formule-group" className="block font-medium">
          Formule <span className="text-red-500">*</span>
        </label>
        <div role="group" aria-labelledby="formule-group" className="space-y-2">
          {options.map((opt) => (
            <label key={opt.value} className="flex items-center">
              <Field
                type="radio"
                name="formule"
                value={opt.value}
                className="h-5 w-5 text-primary"
              />
              <span className="ml-2 text-gray-700">{opt.label}</span>
            </label>
          ))}
        </div>
        <ErrorMessage name="formule" component="div" className="text-sm text-red-500" />
      </div>
    );
  };

  return (
    <section id="contact-formulaire-projet-immobilier" className="bg-white py-[120px]">
      <div className="container">
        <h1 className="sr-only">Contactez-nous pour votre projet immobilier</h1>
        <SectionTitle
          title="Un projet immobilier en tête ?"
          paragraph="Contactez-nous pour discuter de votre bien et découvrir comment notre service de conciergerie peut maximiser vos revenus locatifs en Alsace."
          center
        />
        <div className="container mx-auto max-w-4xl px-4">
          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              availability: '',
              serviceType: initialService || '',
              formule: initialFormule || '',
              address: '',
              city: '',
              postalCode: '',
              propertyType: '',
              surface: '',
              budget: '',
              message: '',
              consent: false,
            }}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const res = await fetch('/api/contact', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(values),
                });
                if (!res.ok) throw new Error('Erreur API');
                toast.success('Demande envoyée !');
                router.push('/merci#confirmation');
              } catch {
                toast.error("Échec de l'envoi, réessayez.");
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting, setFieldValue, values }) => (
              <Form className="space-y-6" aria-live="polite">
                <h3 className="text-xl font-semibold text-gray-800">Vos informations</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block font-medium text-gray-700">
                      Nom & Prénom <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="name"
                      aria-required="true"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="email"
                      aria-required="true"
                      type="email"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block font-medium text-gray-700">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="phone"
                      aria-required="true"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800">Service souhaité</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label id="serviceType-group" className="mb-4 block font-medium">
                      Type de service <span className="text-red-500">*</span>
                    </label>
                    <div role="group" aria-labelledby="serviceType-group" className="space-y-2">
                      {['gestion-locative', 'conciergerie', 'transformation'].map((opt) => (
                        <label key={opt} className="flex items-center">
                          <Field
                            aria-required="true"
                            type="radio"
                            name="serviceType"
                            value={opt}
                            className="h-5 w-5 text-primary"
                          />
                          <span className="ml-2 text-gray-700">
                            {opt === 'transformation'
                              ? 'Transformation du design'
                              : opt === 'gestion-locative'
                                ? 'Gestion locative'
                                : 'Conciergerie'}
                          </span>
                        </label>
                      ))}
                    </div>
                    <ErrorMessage
                      name="serviceType"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>
                  <FormuleSelector />
                </div>

                <h3 className="text-xl font-semibold text-gray-800">Détails du bien</h3>
                <div>
                  <AddressAutocomplete
                    onAddressSelect={(c: AddressComponents) => {
                      setFieldValue('address', c.fullAddress);
                      setFieldValue('city', c.city);
                      setFieldValue('postalCode', c.postalCode);
                    }}
                    placeholder="Saisissez votre adresse"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="propertyType" className="mb-2 block font-medium text-gray-700">
                      Type de bien
                    </label>
                    <Field
                      as="select"
                      name="propertyType"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="studio">Studio</option>
                      <option value="t1">T1</option>
                      <option value="t2">T2</option>
                      <option value="t3">T3</option>
                      <option value="t4+">T4+</option>
                      <option value="maison">Maison</option>
                    </Field>
                  </div>

                  <div>
                    <label htmlFor="surface" className="mb-2 block font-medium text-gray-700">
                      Surface (m²)
                    </label>
                    <Field
                      name="surface"
                      type="number"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block font-medium text-gray-700">
                    Message / Commentaires
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    rows={4}
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="flex items-start">
                    <Field
                      aria-required="true"
                      type="checkbox"
                      name="consent"
                      className="h-5 w-5 text-primary"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      J'accepte la politique de confidentialité{' '}
                      <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <ErrorMessage name="consent" component="div" className="text-sm text-red-500" />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-full bg-primary px-9 py-4 font-semibold text-white shadow-md transition hover:bg-opacity-90"
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? 'Envoi en cours…' : 'Envoyer ma demande'}
                  </button>
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
