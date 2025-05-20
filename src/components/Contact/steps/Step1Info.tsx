// src/components/Home/Step1Info.tsx
'use client';

import React from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import { ContactFormValues } from '@/types/form';
import { t } from '@/app/libs/content';

/**
 * Step1Info component handles the first step of the form wizard
 * collecting user's personal information (name, email, phone)
 */
const Step1Info: React.FC = () => {
  const { values } = useFormikContext<ContactFormValues>();
  const pageKey = 'contact';

  // JSON texts
  const legend = t(pageKey, 'Contact.Step1Info.legend') as string;
  const fields = t(pageKey, 'Contact.Step1Info.fields') as Record<
    string,
    { label: string; placeholder?: string }
  >;

  return (
    <fieldset className="animate-fadeIn">
      <legend className="text-xl font-semibold text-gray-800 mb-4">{legend}</legend>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {['firstName', 'lastName', 'email', 'phone'].map((key) => {
          const field = fields[key];
          return (
            <div key={key}>
              <label htmlFor={key} className="block font-medium text-gray-700">
                {field.label}
                <span className="text-red-500">*</span>
              </label>
              <Field
                name={key}
                id={key}
                type={key === 'email' ? 'email' : key === 'phone' ? 'tel' : 'text'}
                autoComplete={key === 'firstName' || key === 'lastName' ? key : key}
                aria-required="true"
                aria-invalid={!!(values as any)[key] ? 'false' : 'true'}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                placeholder={field.placeholder}
              />
              <ErrorMessage name={key} component="div" className="text-sm text-red-500 mt-1" />
            </div>
          );
        })}
      </div>

      {/* Honeypot field for anti-spam - hidden from users but visible to bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="honeypot">{fields.honeypot.label}</label>
        <Field name="honeypot" id="honeypot" />
      </div>
    </fieldset>
  );
};

export default Step1Info;
