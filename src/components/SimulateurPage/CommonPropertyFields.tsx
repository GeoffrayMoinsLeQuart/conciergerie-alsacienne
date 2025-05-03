import React from 'react';
import { FormData, FormErrors } from '@/hooks/useSimulator'; // Adjust path as needed
import * as C from '@/constants/simulatorConstants'; // Import constants

// TODO: Implement RadioButtonGroup component for Finishing Level
// import RadioButtonGroup from '@/components/ui/RadioButtonGroup';

// Define the specific error keys this component handles
type CommonFieldsErrors = Pick<FormErrors, 'propertyType' | 'surface'>;

interface CommonPropertyFieldsProps {
  formData: Pick<
    FormData,
    'propertyType' | 'surface' | 'floor' | 'finishingLevel' | 'hasParking' | 'isFurnished'
  >;
  errors: CommonFieldsErrors; // Use the specific error type
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CommonPropertyFields({
  formData,
  errors,
  onInputChange,
  onCheckboxChange,
}: CommonPropertyFieldsProps) {

  // Helper function to get input class with error styling
  // Explicitly type fieldName to match the keys of the errors prop
  const getInputClassName = (fieldName: keyof CommonFieldsErrors) => {
    // Check if the fieldName exists in the errors object before accessing
    const hasError = fieldName in errors && errors[fieldName];
    return `w-full rounded-lg border ${hasError ? 'border-red-500' : 'border-gray-300'} px-4 py-2 focus:outline-none focus:ring-2 ${hasError ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`;
  };

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
      {/* Property Type */}
      <div>
        <label htmlFor="propertyType" className="mb-2 block font-medium text-gray-700">
          {C.LABEL_PROPERTY_TYPE} <span className="text-red-500">{C.REQUIRED_FIELD_INDICATOR}</span>
        </label>
        <select
          id="propertyType"
          name="propertyType"
          value={formData.propertyType}
          onChange={onInputChange}
          className={getInputClassName('propertyType')}
          required
          aria-required="true"
          aria-describedby={errors.propertyType ? 'propertyType-error' : undefined}
        >
          <option value="">{C.OPTION_SELECT}</option>
          {C.PROPERTY_TYPES.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.propertyType && (
          <p className="mt-1 text-sm text-red-600" id="propertyType-error">
            {errors.propertyType}
          </p>
        )}
      </div>

      {/* Surface */}
      <div>
        <label htmlFor="surface" className="mb-2 block font-medium text-gray-700">
          {C.LABEL_SURFACE} <span className="text-red-500">{C.REQUIRED_FIELD_INDICATOR}</span>
        </label>
        <input
          id="surface"
          type="number"
          name="surface"
          value={formData.surface}
          onChange={onInputChange}
          className={getInputClassName('surface')}
          placeholder={C.PLACEHOLDER_SURFACE}
          required
          aria-required="true"
          min="1"
          aria-describedby={errors.surface ? 'surface-error' : undefined}
        />
        {errors.surface && (
          <p className="mt-1 text-sm text-red-600" id="surface-error">
            {errors.surface}
          </p>
        )}
      </div>

      {/* Floor */}
      <div>
        <label htmlFor="floor" className="mb-2 block font-medium text-gray-700">{C.LABEL_FLOOR}</label>
        <select
          id="floor"
          name="floor"
          value={formData.floor}
          onChange={onInputChange}
          // Use default styling, assuming not required/validated for now
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">{C.OPTION_SELECT}</option>
          {C.FLOOR_LEVELS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Finishing Level - TODO: Replace with Radio/Segmented Control */}
      <div>
        <label htmlFor="finishingLevel" className="mb-2 block font-medium text-gray-700">{C.LABEL_FINISHING_LEVEL}</label>
        {/* Placeholder for RadioButtonGroup implementation */}
        <select
          id="finishingLevel"
          name="finishingLevel"
          value={formData.finishingLevel}
          onChange={onInputChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">{C.OPTION_SELECT}</option>
          {C.FINISHING_LEVELS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* Example Radio Button Group Structure (requires a dedicated component) */}
        {/* <RadioButtonGroup
          name="finishingLevel"
          selectedValue={formData.finishingLevel}
          options={C.FINISHING_LEVELS}
          onChange={onInputChange} // Adjust handler if needed for radio
        /> */}
      </div>

      {/* Parking */}
      <div className="pt-2">
        <label className="mb-2 block font-medium text-gray-700">{C.LABEL_PARKING}</label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="hasParking"
              checked={formData.hasParking}
              onChange={onCheckboxChange}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">{C.LABEL_YES}</span>
          </label>
        </div>
      </div>

      {/* Furnished */}
      <div className="pt-2">
        <label className="mb-2 block font-medium text-gray-700">{C.LABEL_FURNISHED}</label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="isFurnished"
              checked={formData.isFurnished}
              onChange={onCheckboxChange}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">{C.LABEL_YES}</span>
          </label>
        </div>
      </div>
    </div>
  );
}

