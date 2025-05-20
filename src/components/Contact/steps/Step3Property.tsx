'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import { Activity, ContactFormValues } from '@/types/form';

// Import dynamique pour éviter les soucis SSR
const AddressAutocomplete = dynamic(
  () => import('@/components/AddressAutocomplete'),
  { ssr: false }
);

const Step3Property: React.FC = () => {
  const { values, setFieldValue } =
    useFormikContext<ContactFormValues>();
  const { serviceType, address, city, postalCode } = values;

  return (
    <fieldset className="animate-fadeIn">
      <legend className="text-xl font-semibold text-gray-800 mb-4">
        Détails du bien
      </legend>

      {/* === ADRESSE contrôlée === */}
      <div className="mb-6">
        <AddressAutocomplete
          value={address}
          onAddressSelect={({ fullAddress, city, postalCode }) => {
            setFieldValue('address', fullAddress);
            setFieldValue('city', city);
            setFieldValue('postalCode', postalCode);
          }}
          placeholder="Commencez à saisir l'adresse"
          required
          className=""
        />
        <ErrorMessage
          name="address"
          component="div"
          className="text-sm text-red-500 mt-1"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="propertyType"
            className="block font-medium text-gray-700"
          >
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
            placeholder="Ex: 65"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
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
              placeholder="Budget pour la transformation"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
            />
          </div>
        )}
      </div>

      {/* Champs cachés pour ville & code postal */}
      <Field type="hidden" name="city" />
      <Field type="hidden" name="postalCode" />
    </fieldset>
  );
};

export default Step3Property;
