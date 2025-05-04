import React from 'react';
import { EstimationResults, ContactFormData, ContactFormErrors } from '@/hooks/useSimulator'; // Removed AddressComponents import
import { AddressComponents } from '@/components/AddressAutocomplete'; // Corrected import path
import { formatCurrency, formatPercentage } from '@/utils/formatting'; // Import formatting functions
import * as C from '@/constants/simulatorConstants'; // Import constants

interface EstimationResultsDisplayProps {
  results: EstimationResults;
  addressData: AddressComponents | null; // Added addressData prop
  contactFormData: ContactFormData;
  contactFormErrors: ContactFormErrors;
  isSubmittingContact: boolean;
  contactSubmitStatus: 'success' | 'error' | null;
  onReset: () => void;
  onContactInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onContactSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function EstimationResultsDisplay({
  results,
  addressData, // Destructure addressData
  contactFormData,
  contactFormErrors,
  isSubmittingContact,
  contactSubmitStatus,
  onReset,
  onContactInputChange,
  onContactSubmit,
}: EstimationResultsDisplayProps) {
  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">{C.RESULTS_TITLE}</h2>

      {/* Results Display */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Monthly Revenue Card */}
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 text-center shadow-sm">
          <h3 className="mb-2 text-lg font-semibold text-blue-800">{C.RESULTS_MONTHLY_REVENUE}</h3>
          <p className="text-3xl font-bold text-blue-700">
            {formatCurrency(results.monthlyRevenueMin)} -{formatCurrency(results.monthlyRevenueMax)}
          </p>
        </div>

        {/* Annual Revenue Card */}
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 text-center shadow-sm">
          <h3 className="mb-2 text-lg font-semibold text-blue-800">{C.RESULTS_ANNUAL_REVENUE}</h3>
          <p className="text-3xl font-bold text-blue-700">
            {formatCurrency(results.annualRevenueMin)} - {formatCurrency(results.annualRevenueMax)}
          </p>
        </div>

        {/* Occupancy Rate */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
          <h4 className="mb-1 text-base font-medium text-gray-600">{C.RESULTS_OCCUPANCY_RATE}</h4>
          <p className="text-xl font-semibold text-gray-800">
            {formatPercentage(results.occupancyRate)}
          </p>
        </div>

        {/* Profitability */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
          <h4 className="mb-1 text-base font-medium text-gray-600">{C.RESULTS_PROFITABILITY}</h4>
          <p className="text-xl font-semibold text-gray-800">
            {formatPercentage(results.profitability)}
          </p>
          <p className="mt-1 text-xs text-gray-500">({C.RESULTS_PROFITABILITY_NOTE})</p>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-gray-500">{C.RESULTS_DISCLAIMER}</p>

      {/* --- Integrated Contact Form --- */}
      <div className="mt-10 border-t border-gray-200 pt-8">
        {/* Added Summary Line */}
        {addressData && (
          <p className="mb-4 text-center text-gray-600">
            {C.CONTACT_FORM_SUMMARY_PREFIX}
            {addressData.fullAddress}, {addressData.postalCode} {addressData.city} (
            {addressData.department})
          </p>
        )}

        <h3 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          {C.CONTACT_FORM_TITLE}
        </h3>

        <form onSubmit={onContactSubmit} className="mx-auto max-w-lg">
          {contactSubmitStatus === 'success' && (
            <div className="mb-6 rounded-md bg-green-100 p-4 text-center text-green-800">
              {C.CONTACT_FORM_SUCCESS}
            </div>
          )}
          {contactSubmitStatus === 'error' && (
            <div className="mb-6 rounded-md bg-red-100 p-4 text-center text-red-800">
              {C.CONTACT_FORM_ERROR}
            </div>
          )}

          {/* Hide form fields after successful submission */}
          {contactSubmitStatus !== 'success' && (
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              {/* First Name */}
              <div>
                <label
                  htmlFor="contactFirstName"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  {C.FIELD_LABEL_FIRST_NAME} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contactFirstName"
                  name="firstName" // Matches ContactFormData key
                  value={contactFormData.firstName}
                  onChange={onContactInputChange}
                  required
                  className={`w-full rounded-lg border ${contactFormErrors.firstName ? 'border-red-500' : 'border-gray-300'} px-4 py-2 focus:outline-none focus:ring-2 ${contactFormErrors.firstName ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}
                  aria-describedby={
                    contactFormErrors.firstName ? 'contactFirstName-error' : undefined
                  }
                />
                {contactFormErrors.firstName && (
                  <p className="mt-1 text-sm text-red-600" id="contactFirstName-error">
                    {contactFormErrors.firstName}
                  </p>
                )}
              </div>
              {/* Last Name */}
              <div>
                <label
                  htmlFor="contactLastName"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  {C.FIELD_LABEL_LAST_NAME} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contactLastName"
                  name="lastName" // Matches ContactFormData key
                  value={contactFormData.lastName}
                  onChange={onContactInputChange}
                  required
                  className={`w-full rounded-lg border ${contactFormErrors.lastName ? 'border-red-500' : 'border-gray-300'} px-4 py-2 focus:outline-none focus:ring-2 ${contactFormErrors.lastName ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}
                  aria-describedby={
                    contactFormErrors.lastName ? 'contactLastName-error' : undefined
                  }
                />
                {contactFormErrors.lastName && (
                  <p className="mt-1 text-sm text-red-600" id="contactLastName-error">
                    {contactFormErrors.lastName}
                  </p>
                )}
              </div>
              {/* Email */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="contactEmail"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  {C.FIELD_LABEL_EMAIL} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="email" // Matches ContactFormData key
                  value={contactFormData.email}
                  onChange={onContactInputChange}
                  required
                  className={`w-full rounded-lg border ${contactFormErrors.email ? 'border-red-500' : 'border-gray-300'} px-4 py-2 focus:outline-none focus:ring-2 ${contactFormErrors.email ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}
                  aria-describedby={contactFormErrors.email ? 'contactEmail-error' : undefined}
                />
                {contactFormErrors.email && (
                  <p className="mt-1 text-sm text-red-600" id="contactEmail-error">
                    {contactFormErrors.email}
                  </p>
                )}
              </div>
              {/* Phone */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="contactPhone"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  {C.FIELD_LABEL_PHONE} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="phone" // Matches ContactFormData key
                  value={contactFormData.phone}
                  onChange={onContactInputChange}
                  required
                  className={`w-full rounded-lg border ${contactFormErrors.phone ? 'border-red-500' : 'border-gray-300'} px-4 py-2 focus:outline-none focus:ring-2 ${contactFormErrors.phone ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}
                  aria-describedby={contactFormErrors.phone ? 'contactPhone-error' : undefined}
                />
                {contactFormErrors.phone && (
                  <p className="mt-1 text-sm text-red-600" id="contactPhone-error">
                    {contactFormErrors.phone}
                  </p>
                )}
              </div>
              {/* Converted "Preferred Channel" block to match the other form inputs */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="preferredChannel"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  {C.FIELD_LABEL_CANAL_PREFERENCE} <span className="text-red-500">*</span>
                </label>
                <div role="radiogroup" aria-labelledby="preferredChannel" className="flex gap-4">
                  <label htmlFor="preferredChannelCall" className="flex items-center">
                    <input
                      type="radio"
                      id="preferredChannelCall"
                      name="preferredChannel"
                      value="call"
                      checked={contactFormData.preferredChannel === 'call'}
                      onChange={onContactInputChange}
                      className={`h-4 w-4 border ${contactFormErrors.preferredChannel ? 'border-red-500' : 'border-gray-300'} focus:ring-2 ${contactFormErrors.preferredChannel ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}
                    />
                    <span className="ml-2 text-sm text-gray-700">Appel</span>
                  </label>

                  <label htmlFor="preferredChannelWhatsApp" className="flex items-center">
                    <input
                      type="radio"
                      id="preferredChannelWhatsApp"
                      name="preferredChannel"
                      value="whatsapp"
                      checked={contactFormData.preferredChannel === 'whatsapp'}
                      onChange={onContactInputChange}
                      className={`h-4 w-4 border ${contactFormErrors.preferredChannel ? 'border-red-500' : 'border-gray-300'} focus:ring-2 ${contactFormErrors.preferredChannel ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}
                    />
                    <span className="ml-2 text-sm text-gray-700">WhatsApp</span>
                  </label>

                  <label htmlFor="preferredChannelEmail" className="flex items-center">
                    <input
                      type="radio"
                      id="preferredChannelEmail"
                      name="preferredChannel"
                      value="email"
                      checked={contactFormData.preferredChannel === 'email'}
                      onChange={onContactInputChange}
                      className={`h-4 w-4 border ${contactFormErrors.preferredChannel ? 'border-red-500' : 'border-gray-300'} focus:ring-2 ${contactFormErrors.preferredChannel ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}
                      aria-describedby={
                        contactFormErrors.preferredChannel ? 'preferredChannel-error' : undefined
                      }
                    />
                    <span className="ml-2 text-sm text-gray-700">Email</span>
                  </label>
                </div>

                {contactFormErrors.preferredChannel && (
                  <p className="mt-1 text-sm text-red-600" id="preferredChannel-error">
                    {contactFormErrors.preferredChannel}
                  </p>
                )}
              </div>
              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="contactMessage"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  {C.FIELD_LABEL_MESSAGE}
                </label>
                <textarea
                  id="contactMessage"
                  name="message" // Matches ContactFormData key
                  rows={4}
                  value={contactFormData.message}
                  onChange={onContactInputChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Honeypot field for anti-spam - hidden from users but visible to bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="honeypot">Ne pas remplir ce champ</label>
                <input type="text" name="honeypot" id="honeypot" />
              </div>
              {/* Submit Button */}
              <div className="mt-4 text-center sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmittingContact}
                  className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                >
                  {isSubmittingContact ? C.BUTTON_SUBMITTING : C.BUTTON_SUBMIT_CONTACT}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>

      {/* Reset Button - Always visible below contact form area */}
      <div className="mt-10 text-center border-t border-gray-200 pt-8">
        <button
          onClick={onReset}
          className="rounded-lg border border-blue-600 px-6 py-3 text-lg font-semibold text-blue-600 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {C.BUTTON_NEW_SIMULATION}
        </button>
      </div>
    </div>
  );
}
