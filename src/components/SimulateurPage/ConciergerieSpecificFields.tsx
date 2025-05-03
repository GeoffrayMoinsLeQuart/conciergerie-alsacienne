import React from 'react';
import { FormData } from '@/hooks/useSimulator'; // Adjust path as needed
import * as C from '@/constants/simulatorConstants'; // Import constants

interface ConciergerieSpecificFieldsProps {
  formData: Pick<FormData, 'ambiance' | 'furnitureQuality' | 'additionalServices'>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // Add errors prop if needed for inline validation display
  // errors?: Partial<Record<keyof FormData['additionalServices'], string>>;
}

export default function ConciergerieSpecificFields({
  formData,
  onInputChange,
  onCheckboxChange,
}: ConciergerieSpecificFieldsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 border-t border-gray-200 pt-6 md:grid-cols-2">
      <h3 className="md:col-span-2 mb-2 text-lg font-semibold text-gray-700">Détails Conciergerie</h3>

      {/* Ambiance */}
      <div>
        <label htmlFor="ambiance" className="mb-2 block font-medium text-gray-700">
          {C.LABEL_AMBIANCE}
        </label>
        {/* TODO: Replace with Radio/Segmented Control as per user agreement */}
        <select
          id="ambiance"
          name="ambiance"
          value={formData.ambiance}
          onChange={onInputChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">{C.OPTION_SELECT}</option>
          {C.AMBIANCE_LEVELS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Furniture Quality */}
      <div>
        <label htmlFor="furnitureQuality" className="mb-2 block font-medium text-gray-700">
          {C.LABEL_FURNITURE_QUALITY}
        </label>
        {/* TODO: Replace with Radio/Segmented Control as per user agreement */}
        <select
          id="furnitureQuality"
          name="furnitureQuality"
          value={formData.furnitureQuality}
          onChange={onInputChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">{C.OPTION_SELECT}</option>
          {C.FURNITURE_QUALITY_LEVELS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Additional Services Checkboxes - Updated with Fieldset/Legend */}
      <fieldset className="md:col-span-2">
        <legend className="mb-2 block font-medium text-gray-700">{C.LABEL_ADDITIONAL_SERVICES}</legend>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
          {C.ADDITIONAL_SERVICES_OPTIONS.map((service) => (
            <label key={service.name} className="flex items-center">
              <input
                type="checkbox"
                name={service.name}
                checked={formData.additionalServices[service.name]}
                onChange={onCheckboxChange}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">{service.label}</span>
            </label>
          ))}
        </div>
        {/* TODO: Add potential error display for the fieldset if needed */}
      </fieldset>
    </div>
  );
}

