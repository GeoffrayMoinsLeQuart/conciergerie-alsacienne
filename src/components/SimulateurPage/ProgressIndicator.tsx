import React from 'react';

interface Step {
  id: number;
  label: string;
}

interface ProgressIndicatorProps {
  steps: Step[];
  currentStep: number;
  maxCompletedStep: number; // Track the highest step reached
  onStepClick: (stepId: number) => void; // Handler for clicking a step
}

export default function ProgressIndicator({
  steps,
  currentStep,
  maxCompletedStep,
  onStepClick,
}: ProgressIndicatorProps) {
  return (
    <nav aria-label="Progress" className="mb-8">
      <ol role="list" className="flex items-center justify-center space-x-2 sm:space-x-4">
        {steps.map((step, index) => {
          const isCompleted = maxCompletedStep > step.id;
          const isCurrent = currentStep === step.id;
          const isAccessible = step.id <= maxCompletedStep; // Can navigate to this step

          return (
            <li key={step.label} className="flex items-center">
              {index > 0 && (
                // Connector line
                <div
                  className={`h-0.5 w-6 sm:w-12 md:w-16 ${isCompleted || isCurrent ? 'bg-blue-600' : 'bg-gray-300'}`}
                  aria-hidden="true"
                />
              )}
              <button
                type="button"
                className={`flex flex-col items-center text-center ${isAccessible ? 'cursor-pointer' : 'cursor-default'}`}
                onClick={() => isAccessible && onStepClick(step.id)}
                disabled={!isAccessible}
                aria-label={`Go to step ${step.id}: ${step.label}`}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors duration-150 ease-in-out
                    ${isCurrent ? 'border-2 border-blue-600 bg-white text-blue-600' :
                      isCompleted ? 'bg-blue-600 text-white hover:bg-blue-700' :
                      isAccessible ? 'border-2 border-gray-300 bg-white text-gray-500 hover:border-gray-400' :
                      'border-2 border-gray-300 bg-gray-100 text-gray-400'}` // Style for inaccessible steps
                  }
                  aria-current={isCurrent ? 'step' : undefined}
                >
                  {isCompleted ? (
                    // Checkmark for completed steps
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <span>{step.id}</span>
                  )}
                </div>
                <span className={`mt-2 text-xs sm:text-sm font-medium transition-colors duration-150 ease-in-out ${isCurrent || isCompleted ? 'text-blue-600' : isAccessible ? 'text-gray-500 group-hover:text-gray-700' : 'text-gray-400'}`}>
                  {step.label}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

