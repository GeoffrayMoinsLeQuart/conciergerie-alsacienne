// Assuming this is app/simulateur/page.tsx (merged)

'use client';

import React from 'react';
// import { getMetadata } from '@/app/config/pageMetadata'; // Adjust path as needed
import { useSimulator } from '@/hooks/useSimulator'; // Adjust path as needed
import SimulatorTabs from '@/components/SimulateurPage/SimulatorTabs'; // Adjust path as needed
import SimulatorForm from '@/components/SimulateurPage/SimulatorForm'; // Adjust path as needed
import EstimationResultsDisplay from '@/components/SimulateurPage/EstimationResultsDisplay'; // Adjust path as needed
import * as C from '@/constants/simulatorConstants'; // Import constants

// Metadata export (should work in client components in App Router)
// export const metadata = getMetadata('simulateur'); // Commenting out as getMetadata might be server-only

export default function SimulateurPage() {
  const {
    activeTab,
    addressData,
    formData,
    showResults,
    estimationResults,
    simulatorErrors,
    currentStep,
    maxCompletedStep,
    steps,
    totalSteps,
    contactFormData,
    contactFormErrors,
    isSubmittingContact,
    contactSubmitStatus,
    handleTabChange,
    handleAddressSelect,
    handleInputChange,
    handleCheckboxChange,
    handleReset,
    handleNextStep,
    handlePrevStep,
    handleStepClick,
    handleContactInputChange,
    handleContactSubmit,
  } = useSimulator();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 pt-[50px] text-center text-3xl font-bold text-gray-800 sm:pt-[100px]">
        {C.SIMULATOR_MAIN_TITLE} {/* Use a constant for the main title */}
      </h1>

      {/* Tabs */}
      <SimulatorTabs activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Conditional Rendering: Form or Results */}
      {showResults ? (
        <EstimationResultsDisplay
          results={estimationResults}
          addressData={addressData} // Pass addressData for summary
          contactFormData={contactFormData}
          contactFormErrors={contactFormErrors}
          isSubmittingContact={isSubmittingContact}
          contactSubmitStatus={contactSubmitStatus}
          onReset={handleReset}
          onContactInputChange={handleContactInputChange}
          onContactSubmit={handleContactSubmit}
        />
      ) : (
        <SimulatorForm
          activeTab={activeTab}
          formData={formData}
          addressData={addressData}
          errors={simulatorErrors}
          currentStep={currentStep}
          maxCompletedStep={maxCompletedStep}
          steps={steps}
          totalSteps={totalSteps}
          onInputChange={handleInputChange}
          onCheckboxChange={handleCheckboxChange}
          onAddressSelect={handleAddressSelect}
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
          onStepClick={handleStepClick}
        />
      )}
    </div>
  );
}
