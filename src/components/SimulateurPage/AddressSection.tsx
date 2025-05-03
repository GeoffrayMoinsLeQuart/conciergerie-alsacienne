import React from 'react';
import AddressAutocomplete, { AddressComponents } from '@/components/AddressAutocomplete'; // Adjust path as needed
import * as C from '@/constants/simulatorConstants'; // Import constants

interface AddressSectionProps {
  addressData: AddressComponents | null;
  onAddressSelect: (components: AddressComponents | null) => void;
  error?: string; // Add error prop
}

export default function AddressSection({ addressData, onAddressSelect, error }: AddressSectionProps) {
  return (
    <>
      {/* Address Autocomplete Input */}
      <div className="md:col-span-2">
        <AddressAutocomplete
          onAddressSelect={onAddressSelect}
          placeholder={C.PLACEHOLDER_ADDRESS}
          label={C.LABEL_ADDRESS}
          required={true}
        />
        {/* Display Address Error */}
        {error && (
          <p className="mt-1 text-sm text-red-600" id="address-error">
            {error}
          </p>
        )}
        <p className={`mt-1 text-sm ${error ? 'text-red-700' : 'text-gray-500'}`}>
          {C.HELP_TEXT_ADDRESS}
        </p>
      </div>

      {/* Display Selected Address Details */}
      {addressData && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:col-span-2 border-t border-gray-200 pt-4 mt-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-500">{C.LABEL_CITY}</label>
            <input
              type="text"
              value={addressData.city}
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-0"
              readOnly
              aria-label={`${C.LABEL_CITY} (automatiquement remplie)`}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-500">{C.LABEL_POSTAL_CODE}</label>
            <input
              type="text"
              value={addressData.postalCode}
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-0"
              readOnly
              aria-label={`${C.LABEL_POSTAL_CODE} (automatiquement rempli)`}
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-medium text-gray-500">{C.LABEL_DEPARTMENT}</label>
            <input
              type="text"
              value={addressData.department}
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-0"
              readOnly
              aria-label={`${C.LABEL_DEPARTMENT} (automatiquement rempli)`}
            />
          </div>
        </div>
      )}
    </>
  );
}

