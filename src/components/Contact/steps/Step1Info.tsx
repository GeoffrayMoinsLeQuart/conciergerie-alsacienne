'use client';

import React from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import { ContactFormValues } from '@/types/form';

/**
 * Step1Info component handles the first step of the form wizard
 * collecting user's personal information (name, email, phone)
 */
const Step1Info: React.FC = () => {
  const { values } = useFormikContext<ContactFormValues>();
  
  return (
    <fieldset className="animate-fadeIn">
      <legend className="text-xl font-semibold text-gray-800 mb-4">
        Vos informations
      </legend>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700">
            Nom &amp; Prénom <span className="text-red-500">*</span>
          </label>
          <Field
            name="name"
            id="name"
            autoComplete="name"
            aria-required="true"
            aria-invalid={!!values.name ? 'false' : 'true'}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
            placeholder="Votre nom complet"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="text-sm text-red-500 mt-1"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <Field
            name="email"
            type="email"
            id="email"
            autoComplete="email"
            aria-required="true"
            aria-invalid={!!values.email ? 'false' : 'true'}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
            placeholder="votre@email.com"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-sm text-red-500 mt-1"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block font-medium text-gray-700">
            Téléphone <span className="text-red-500">*</span>
          </label>
          <Field
            name="phone"
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-required="true"
            aria-invalid={!!values.phone ? 'false' : 'true'}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
            placeholder="06 XX XX XX XX"
          />
          <ErrorMessage
            name="phone"
            component="div"
            className="text-sm text-red-500 mt-1"
          />
        </div>
      </div>
      
      {/* Honeypot field for anti-spam - hidden from users but visible to bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="honeypot">Ne pas remplir ce champ</label>
        <Field name="honeypot" id="honeypot" />
      </div>
    </fieldset>
  );
};

export default Step1Info;
