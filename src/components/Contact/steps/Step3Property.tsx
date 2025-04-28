'use client';

import React from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import { Activity, ContactFormValues } from '@/types/form';
import dynamic from 'next/dynamic';

// Dynamically import AddressAutocomplete to avoid SSR issues
const AddressAutocomplete = dynamic(() => import('@/components/AddressAutocomplete'), {
  ssr: false,
});

/**
 * Step3Property component handles the third step of the form wizard
 * collecting property details including address, property type, and surface area.
 */
const Step3Property: React.FC = () => {
  const { setFieldValue, values } = useFormikContext<ContactFormValues>();
  const { serviceType } = values;

  return (
    <fieldset className="animate-fadeIn">
      <legend className="text-xl font-semibold text-gray-800 mb-4">Détails du bien</legend>

      <div className="mb-6">
        <AddressAutocomplete
          onAddressSelect={({ fullAddress, city, postalCode }) => {
            setFieldValue('address', fullAddress);
            setFieldValue('city', city);
            setFieldValue('postalCode', postalCode);
          }}
          placeholder="Commencez à saisir l'adresse"
          required={true}
        />
        <ErrorMessage name="address" component="div" className="text-sm text-red-500 mt-1" />
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
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
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
            min="0"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
            placeholder="Ex: 65"
          />
        </div>

        {serviceType === Activity.Transformation && (
          <div>
            <label htmlFor="budget" className="block font-medium text-gray-700">
              Budget estimé (€)
            </label>
            <Field
              name="budget"
              type="number"
              id="budget"
              min="0"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
              placeholder="Budget pour la transformation"
            />
          </div>
        )}
      </div>

      {/* Hidden fields to store address components */}
      <Field type="hidden" name="city" />
      <Field type="hidden" name="postalCode" />
    </fieldset>
  );
};

export default Step3Property;
