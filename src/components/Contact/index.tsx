'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import AddressAutocomplete, { AddressComponents } from '@/components/AddressAutocomplete';
import SectionTitle from '../Common/SectionTitle';
import { Activity, ContactFormValues, FormuleConciergerie, FormuleGestionLocative } from '@/types/form';

const ContactForm: React.FC = () => {
  const router = useRouter();
  const params = useSearchParams();

  const initialService = (params.get('service') || '') as Activity;
  const initialFormule = (params.get('formule') || '') as FormuleConciergerie | FormuleGestionLocative;

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
        <fieldset aria-labelledby="formule-group">
          <legend id="formule-group" className="block font-medium">
            Formule <span className="text-red-500">*</span>
          </legend>
          <div className="space-y-2">
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
        </fieldset>
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
            {({ isSubmitting, setFieldValue }) => (
              <Form className="space-y-6" aria-live="polite">
                <fieldset>
                  <legend className="text-xl font-semibold text-gray-800">Vos informations</legend>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block font-medium text-gray-700">
                        Nom & Prénom <span className="text-red-500">*</span>
                      </label>
                      <Field
                        name="name"
                        id="name"
                        aria-required="true"
                        autoComplete="name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ErrorMessage name="name" component="div" className="text-sm text-red-500" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-medium text-gray-700">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Field
                        name="email"
                        id="email"
                        type="email"
                        autoComplete="email"
                        aria-required="true"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ErrorMessage name="email" component="div" className="text-sm text-red-500" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block font-medium text-gray-700">
                        Téléphone <span className="text-red-500">*</span>
                      </label>
                      <Field
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-required="true"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ErrorMessage name="phone" component="div" className="text-sm text-red-500" />
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-xl font-semibold text-gray-800">Service souhaité</legend>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <fieldset role="group" aria-labelledby="serviceType-group">
                        <legend id="serviceType-group" className="mb-4 block font-medium">
                          Type de service <span className="text-red-500">*</span>
                        </legend>
                        <div className="space-y-2">
                          {['gestion-locative', 'conciergerie', 'transformation'].map((opt) => (
                            <label key={opt} className="flex items-center">
                              <Field
                                type="radio"
                                name="serviceType"
                                value={opt}
                                aria-required="true"
                                className="h-5 w-5 text-primary"
                              />
                              <span className="ml-2 text-gray-700">
                                {opt === 'transformation' ? 'Transformation du design' : opt === 'gestion-locative' ? 'Gestion locative' : 'Conciergerie'}
                              </span>
                            </label>
                          ))}
                        </div>
                        <ErrorMessage name="serviceType" component="div" className="text-sm text-red-500" />
                      </fieldset>
                    </div>
                    <FormuleSelector />
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-xl font-semibold text-gray-800">Détails du bien</legend>
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
                      <label htmlFor="propertyType" className="block font-medium text-gray-700">
                        Type de bien
                      </label>
                      <Field
                        as="select"
                        name="propertyType"
                        id="propertyType"
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
                      <label htmlFor="surface" className="block font-medium text-gray-700">
                        Surface (m²)
                      </label>
                      <Field
                        name="surface"
                        type="number"
                        id="surface"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="sr-only">Message complémentaire</legend>
                  <div>
                    <label htmlFor="message" className="block font-medium text-gray-700">
                      Message / Commentaires
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      id="message"
                      rows={4}
                      className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="sr-only">Consentement</legend>
                  <div>
                    <label className="flex items-start">
                      <Field
                        type="checkbox"
                        name="consent"
                        aria-required="true"
                        className="h-5 w-5 text-primary"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        J'accepte la politique de confidentialité <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <ErrorMessage name="consent" component="div" className="text-sm text-red-500" />
                  </div>
                </fieldset>

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
