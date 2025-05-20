// src/components/Contact/steps/Step4Message.tsx
'use client';

import React from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import { ContactFormValues } from '@/types/form';
import { t } from '@/app/libs/content';

const pageKey = 'contact';

export default function Step4Message() {
  const { errors, submitCount } = useFormikContext<ContactFormValues>();

  const legend = t(pageKey, 'Contact.Step4Message.legend') as string;
  const messageLabel = t(pageKey, 'Contact.Step4Message.messageLabel') as string;
  const messagePlaceholder = t(pageKey, 'Contact.Step4Message.messagePlaceholder') as string;
  const preferredContactLabel = t(pageKey, 'Contact.Step4Message.preferredContactLabel') as string;
  const preferredOptions = t(pageKey, 'Contact.Step4Message.preferredOptions') as Record<
    string,
    string
  >;
  const consentLabel = t(pageKey, 'Contact.Step4Message.consentLabel') as string;
  const privacyLinkText = t(pageKey, 'Contact.Step4Message.privacyLinkText') as string;

  return (
    <fieldset className="animate-fadeIn">
      <legend className="text-xl font-semibold text-gray-800 mb-4">{legend}</legend>

      <div className="mb-6">
        <label htmlFor="message" className="block font-medium text-gray-700 mb-2">
          {messageLabel}
        </label>
        <Field
          as="textarea"
          name="message"
          id="message"
          rows={4}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow resize-none"
          placeholder={messagePlaceholder}
        />
      </div>

      <div className="sm:col-span-2 mb-6">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {preferredContactLabel} <span className="text-red-500">*</span>
        </label>
        <div role="group" aria-labelledby="preferred-channel-group" className="flex gap-4">
          {Object.entries(preferredOptions).map(([value, label]) => (
            <label key={value} className="flex items-center">
              <Field type="radio" name="preferredChannel" value={value} className="mr-2" />
              {label}
            </label>
          ))}
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
            {consentLabel}
            <span className="text-red-500">*</span>
          </label>
        </div>
        {submitCount > 0 && errors.consent && (
          <ErrorMessage name="consent" component="div" className="text-sm text-red-500 mt-1" />
        )}
      </div>

      <div className="text-sm text-gray-500 mt-6">
        <p>
          {t(pageKey, 'Contact.Step4Message.footer')}
          <a href="/politique-confidentialite" className="text-primary hover:underline">
            {privacyLinkText}
          </a>
          .
        </p>
      </div>
    </fieldset>
  );
}
