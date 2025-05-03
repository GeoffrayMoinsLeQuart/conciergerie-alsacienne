import React from 'react';
import { FormData, SimulatorFormErrors } from '@/hooks/useSimulator'; // Corrected import
import * as C from '@/constants/simulatorConstants'; // Import constants

// Define the specific error keys this component handles
type ExpensesFieldsErrors = Pick<SimulatorFormErrors, 'propertyTax' | 'fixedCharges'>;

interface ExpensesFormFieldsProps {
  formData: Pick<FormData, 'propertyTax' | 'fixedCharges' | 'estimateUtilities'>;
  errors: ExpensesFieldsErrors; // Use the specific error type
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  activeTab: typeof C.TAB_GESTION | typeof C.TAB_CONCIERGERIE; // Needed to conditionally show utility checkbox
}

export default function ExpensesFormFields({
  formData,
  errors,
  onInputChange,
  onCheckboxChange,
  activeTab,
}: ExpensesFormFieldsProps) {

  // Helper function to get input class with error styling
  // Explicitly type fieldName to match the keys of the errors prop
  const getInputClassName = (fieldName: keyof ExpensesFieldsErrors) => {
    // Check if the fieldName exists in the errors object before accessing
    const hasError = fieldName in errors && errors[fieldName];
    return `w-full rounded-lg border ${hasError ? 'border-red-500' : 'border-gray-300'} px-4 py-2 focus:outline-none focus:ring-2 ${hasError ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`;
  };

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
      {/* Property Tax */}
      <div>
        <label htmlFor="propertyTax" className="mb-2 block font-medium text-gray-700">
          {C.LABEL_PROPERTY_TAX}
        </label>
        <div className="relative rounded-md shadow-sm">
          <input
            id="propertyTax"
            type="number"
            name="propertyTax"
            value={formData.propertyTax}
            onChange={onInputChange}
            className={`${getInputClassName('propertyTax')} pr-12`}
            placeholder={C.PLACEHOLDER_PROPERTY_TAX}
            min="0" // Ensure non-negative
            step="0.01" // Allow decimals
            aria-describedby={errors.propertyTax ? 'propertyTax-error' : undefined}
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500 sm:text-sm">€</span>
          </div>
        </div>
        {errors.propertyTax && (
          <p className="mt-1 text-sm text-red-600" id="propertyTax-error">
            {errors.propertyTax}
          </p>
        )}
        <p className="mt-1 text-sm text-gray-500">{C.HELP_TEXT_PROPERTY_TAX}</p>
      </div>

      {/* Fixed Charges */}
      <div>
        <label htmlFor="fixedCharges" className="mb-2 block font-medium text-gray-700">
          {C.LABEL_FIXED_CHARGES}
        </label>
        <div className="relative rounded-md shadow-sm">
          <input
            id="fixedCharges"
            type="number"
            name="fixedCharges"
            value={formData.fixedCharges}
            onChange={onInputChange}
            className={`${getInputClassName('fixedCharges')} pr-12`}
            placeholder={C.PLACEHOLDER_FIXED_CHARGES}
            min="0" // Ensure non-negative
            step="0.01" // Allow decimals
            aria-describedby={errors.fixedCharges ? 'fixedCharges-error' : undefined}
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500 sm:text-sm">€ / mois</span>
          </div>
        </div>
        {errors.fixedCharges && (
          <p className="mt-1 text-sm text-red-600" id="fixedCharges-error">
            {errors.fixedCharges}
          </p>
        )}
        <p className="mt-1 text-sm text-gray-500">{C.HELP_TEXT_FIXED_CHARGES}</p>
      </div>

      {/* Estimate Utilities Checkbox (Conditional for Conciergerie) */}
      {activeTab === C.TAB_CONCIERGERIE && (
        <div className="md:col-span-2 pt-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="estimateUtilities"
              checked={formData.estimateUtilities}
              onChange={onCheckboxChange}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">{C.LABEL_ESTIMATE_UTILITIES}</span>
          </label>
          <p className="mt-1 text-xs text-gray-500 pl-6">{C.HELP_TEXT_ESTIMATE_UTILITIES}</p>
        </div>
      )}
    </div>
  );
}

