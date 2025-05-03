import React from 'react';
import { FormData, SimulatorTab, SimulatorFormErrors, Step } from '@/hooks/useSimulator'; // Corrected import
import { AddressComponents } from '@/components/AddressAutocomplete'; // Adjust path as needed
import AddressSection from './AddressSection';
import CommonPropertyFields from './CommonPropertyFields';
import ExpensesFormFields from './ExpensesFormFields'; // Import Expenses fields
import ConciergerieSpecificFields from './ConciergerieSpecificFields';
import ProgressIndicator from './ProgressIndicator'; // Import Progress Indicator
import * as C from '@/constants/simulatorConstants'; // Import constants

// Define Steps Constants (matching the hook)
const STEP_ADDRESS = 1;
const STEP_COMMON_DETAILS = 2;
const STEP_EXPENSES = 3;
const STEP_CONCIERGERIE_DETAILS = 4;

interface SimulatorFormProps {
  activeTab: SimulatorTab;
  formData: FormData;
  addressData: AddressComponents | null;
  errors: SimulatorFormErrors; // Use corrected type
  currentStep: number;
  maxCompletedStep: number; // <-- Add maxCompletedStep prop
  steps: Step[]; // Add steps definition
  totalSteps: number;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddressSelect: (components: AddressComponents | null) => void;
  onNextStep: () => void;
  onPrevStep: () => void;
  onStepClick: (stepId: number) => void; // <-- Add onStepClick prop
}

export default function SimulatorForm({
  activeTab,
  formData,
  addressData,
  errors,
  currentStep,
  maxCompletedStep, // <-- Receive maxCompletedStep
  steps, // Receive steps definition
  totalSteps,
  onInputChange,
  onCheckboxChange,
  onAddressSelect,
  onNextStep,
  onPrevStep,
  onStepClick, // <-- Receive onStepClick
}: SimulatorFormProps) {

  // Find current step label
  const currentStepLabel = steps.find(step => step.id === currentStep)?.label || 'Formulaire';

  return (
    <div className="mx-auto mb-8 max-w-3xl rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-center text-xl font-semibold text-gray-600">
        {activeTab === C.TAB_GESTION
          ? C.TAB_GESTION_LABEL
          : C.TAB_CONCIERGERIE_LABEL}
      </h2>

      {/* Progress Indicator - Pass necessary props */}
      <ProgressIndicator
        steps={steps}
        currentStep={currentStep}
        maxCompletedStep={maxCompletedStep} // <-- Pass maxCompletedStep
        onStepClick={onStepClick} // <-- Pass onStepClick
      />

      <h3 className="mb-6 text-center text-2xl font-bold text-gray-800">{currentStepLabel}</h3>

      {/* Use a div instead of form to prevent default submission on Enter */}
      <div className="space-y-6">
        {/* Step 1: Address */}
        {currentStep === STEP_ADDRESS && (
          <AddressSection
            addressData={addressData}
            onAddressSelect={onAddressSelect}
            error={errors.address}
          />
        )}

        {/* Step 2: Common Fields */}
        {currentStep === STEP_COMMON_DETAILS && (
          <CommonPropertyFields
            formData={formData}
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            errors={errors} // Pass the whole errors object
          />
        )}

        {/* Step 3: Expenses Fields */}
        {currentStep === STEP_EXPENSES && (
          <ExpensesFormFields
            formData={formData}
            errors={errors} // Pass the whole errors object
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            activeTab={activeTab}
          />
        )}

        {/* Step 4: Conciergerie Specific Fields (Conditional) */}
        {currentStep === STEP_CONCIERGERIE_DETAILS && activeTab === C.TAB_CONCIERGERIE && (
          <ConciergerieSpecificFields
            formData={formData}
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            // errors={errors} // Pass relevant errors if needed
          />
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={onPrevStep}
            className={`rounded-lg px-6 py-2 text-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${currentStep === STEP_ADDRESS ? 'invisible' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            disabled={currentStep === STEP_ADDRESS}
            aria-label={C.BUTTON_PREVIOUS_STEP}
          >
            {C.BUTTON_PREVIOUS_STEP}
          </button>
          <button
            type="button"
            onClick={onNextStep}
            className="rounded-lg bg-blue-600 px-6 py-2 text-lg font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label={currentStep === totalSteps ? C.BUTTON_SUBMIT_ESTIMATION : C.BUTTON_NEXT_STEP}
          >
            {currentStep === totalSteps ? C.BUTTON_SUBMIT_ESTIMATION : C.BUTTON_NEXT_STEP}
          </button>
        </div>
      </div>
    </div>
  );
}

