'use client';

import React from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import {
  Activity,
  ContactFormValues,
  FormuleConciergerie,
  FormuleGestionLocative,
} from '@/types/form';

/**
 * FormuleSelector component dynamically renders the formula options
 * based on the selected service type.
 */
const FormuleSelector: React.FC = () => {
  const { values, setFieldValue, errors, touched } = useFormikContext<ContactFormValues>();

  const options =
    values.serviceType === Activity.GestionLocative
      ? [
          { label: 'Formule Essentielle (15%)', value: FormuleGestionLocative.Essentielle },
          { label: 'Formule Premium (20%)', value: FormuleGestionLocative.Serenite },
          { label: 'Formule All-Inclusive (25%)', value: FormuleGestionLocative.Premium },
        ]
      : values.serviceType === Activity.Conciergerie
        ? [
            { label: 'Formule Essentielle (15%)', value: FormuleConciergerie.Standard },
            { label: 'Formule Premium (20%)', value: FormuleConciergerie.Premium },
            { label: 'Formule All-Inclusive (25%)', value: FormuleConciergerie.Exclusive },
          ]
        : [];

  // Always show the formule section if service type is GestionLocative or Conciergerie
  if (
    values.serviceType !== Activity.GestionLocative &&
    values.serviceType !== Activity.Conciergerie
  ) {
    // Clear formule if service type changes to one that doesn't need it
    React.useEffect(() => {
      if (values.formule) {
        setFieldValue('formule', '');
      }
    }, [values.serviceType, values.formule, setFieldValue]);
    return null;
  }

  // Always ensure a formula is selected for GestionLocative and Conciergerie
  React.useEffect(() => {
    // For Conciergerie, always ensure a formula is selected regardless of URL parameters
    if (values.serviceType === Activity.Conciergerie && options.length > 0) {
      // If no formula or formula doesn't match available options, select first option
      const isValidFormula = options.some((opt) => opt.value === values.formule);
      if (!values.formule || !isValidFormula) {
        setFieldValue('formule', options[0].value);
      }
    }
    // For GestionLocative, select first option if none selected
    else if (
      values.serviceType === Activity.GestionLocative &&
      !values.formule &&
      options.length > 0
    ) {
      setFieldValue('formule', options[0].value);
    }
  }, [values.serviceType, values.formule, options, setFieldValue]);

  return (
    <div className="mt-6">
      <fieldset role="group" aria-labelledby="formule-group">
        <legend id="formule-group" className="block font-medium text-gray-700 mb-2">
          Choisissez une formule <span className="text-red-500">*</span>
        </legend>
        <div className="space-y-2">
          {options.map((opt) => (
            <label key={opt.value} className="flex items-center cursor-pointer">
              <Field
                type="radio"
                name="formule"
                value={opt.value}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 mr-2"
              />
              <span className="text-gray-700">{opt.label}</span>
            </label>
          ))}
        </div>
        <ErrorMessage name="formule" component="div" className="text-sm text-red-500 mt-1" />
      </fieldset>
    </div>
  );
};

/**
 * Step2Service component handles the second step of the form wizard
 * collecting service type and formula selection.
 */
const Step2Service: React.FC = () => {
  return (
    <fieldset className="animate-fadeIn">
      <legend className="text-xl font-semibold text-gray-800 mb-4">Service & Formule</legend>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <fieldset role="group" aria-labelledby="serviceType-group">
            <legend id="serviceType-group" className="block font-medium text-gray-700 mb-2">
              Type de service <span className="text-red-500">*</span>
            </legend>
            <div className="space-y-2">
              {[Activity.GestionLocative, Activity.Conciergerie, Activity.Transformation].map(
                (opt) => (
                  <label key={opt} className="flex items-center cursor-pointer">
                    <Field
                      type="radio"
                      name="serviceType"
                      value={opt}
                      aria-required="true"
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 mr-2"
                    />
                    <span className="text-gray-700">
                      {opt === Activity.GestionLocative
                        ? 'Gestion locative'
                        : opt === Activity.Conciergerie
                          ? 'Conciergerie'
                          : 'Transformation du design'}
                    </span>
                  </label>
                ),
              )}
            </div>
            <ErrorMessage
              name="serviceType"
              component="div"
              className="text-sm text-red-500 mt-1"
            />
          </fieldset>
        </div>
        <FormuleSelector />
      </div>
    </fieldset>
  );
};

export default Step2Service;
