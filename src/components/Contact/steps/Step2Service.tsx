'use client';

import React, { useMemo, useEffect } from 'react';
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
  const { values, setFieldValue } = useFormikContext<ContactFormValues>();
  const { serviceType, formule } = values;

  // Memoize the options array to prevent unnecessary re-renders and fix exhaustive-deps warning
  const options = useMemo(() => {
    if (serviceType === Activity.GestionLocative) {
      return [
        {
          label: 'Formule Essentielle',
          value: FormuleGestionLocative.Essentielle,
        },
        {
          label: 'Formule Serenite',
          value: FormuleGestionLocative.Serenite,
        },
        {
          label: 'Formule Premium',
          value: FormuleGestionLocative.Premium,
        },
      ];
    } else if (serviceType === Activity.Conciergerie) {
      return [
        {
          label: 'Formule Standard',
          value: FormuleConciergerie.Standard,
        },
        {
          label: 'Formule Premium',
          value: FormuleConciergerie.Premium,
        },
        {
          label: 'Formule Exclusive',
          value: FormuleConciergerie.Exclusive,
        },
      ];
    } else {
      return [];
    }
  }, [serviceType]);

  // Effect to clear formule when serviceType changes to one that doesn't need it
  useEffect(() => {
    if (
      serviceType !== Activity.GestionLocative &&
      serviceType !== Activity.Conciergerie &&
      formule // Only clear if a formula was previously selected
    ) {
      setFieldValue('formule', '');
    }
  }, [serviceType, formule, setFieldValue]);

  // Effect to auto-select a formula if required and none is selected
  useEffect(() => {
    // For Conciergerie, always ensure a formula is selected regardless of URL parameters
    if (serviceType === Activity.Conciergerie && options.length > 0) {
      const isValidFormula = options.some((opt) => opt.value === formule);
      if (!formule || !isValidFormula) {
        setFieldValue('formule', options[0].value);
      }
    }
    // For GestionLocative, select first option if none selected
    else if (serviceType === Activity.GestionLocative && !formule && options.length > 0) {
      setFieldValue('formule', options[0].value);
    }
  }, [serviceType, formule, options, setFieldValue]);

  // Do not render the selector if the service type doesn't require it
  if (serviceType !== Activity.GestionLocative && serviceType !== Activity.Conciergerie) {
    return null;
  }

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
