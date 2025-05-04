'use client';

import React from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import { ContactFormValues } from '@/types/form';

/**
 * Step4Message component handles the final step of the form wizard
 * collecting additional message and consent for privacy policy.
 */
const Step4Message: React.FC = () => {
  const { errors, submitCount } = useFormikContext<ContactFormValues>();

  return (
    <fieldset className="animate-fadeIn">
      <legend className="text-xl font-semibold text-gray-800 mb-4">Message & Consentement</legend>

      <div className="mb-6">
        <label htmlFor="message" className="block font-medium text-gray-700">
          Message / Commentaires
        </label>
        <Field
          as="textarea"
          name="message"
          id="message"
          rows={4}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow resize-none"
          placeholder="Précisez votre projet, vos questions ou vos besoins spécifiques..."
        />
      </div>

      <div className="sm:col-span-2 mb-6">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Je préfère être contacté par <span className="text-red-500">*</span>
        </label>
        <div role="group" aria-labelledby="preferred-channel-group" className="flex gap-4">
          <label className="flex items-center">
            <Field type="radio" name="preferredChannel" value="email" className="mr-2" />
            Email
          </label>
          <label className="flex items-center">
            <Field type="radio" name="preferredChannel" value="whatsapp" className="mr-2" />
            WhatsApp
          </label>
        </div>
        {errors.preferredChannel && (
          <p className="mt-1 text-sm text-red-600">{errors.preferredChannel}</p>
        )}
      </div>

      <div className="mb-4">
        <div className="flex items-start">
          <Field
            type="checkbox"
            name="consent"
            id="consent"
            aria-required="true"
            className="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded mt-1 mr-2"
          />
          <label htmlFor="consent" className="text-gray-700">
            J'accepte la politique de confidentialité et le traitement de mes données personnelles
            pour être contacté(e) par Conciergerie Alsacienne.
            <span className="text-red-500">*</span>
          </label>
        </div>
        {/* Only show consent error after submission attempt */}
        {submitCount > 0 && errors.consent && (
          <ErrorMessage name="consent" component="div" className="text-sm text-red-500 mt-1" />
        )}
      </div>

      <div className="text-sm text-gray-500 mt-6">
        <p>
          En soumettant ce formulaire, vous acceptez que les informations saisies soient utilisées
          pour vous recontacter dans le cadre de votre demande. Pour connaître et exercer vos
          droits, consultez notre{' '}
          <a href="/politique-confidentialite" className="text-primary hover:underline">
            politique de confidentialité
          </a>
          .
        </p>
      </div>
    </fieldset>
  );
};

export default Step4Message;
