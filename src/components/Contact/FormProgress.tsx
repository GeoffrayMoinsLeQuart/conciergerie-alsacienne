// src/components/Home/FormProgress.tsx
'use client';

import React from 'react';
import { t } from '@/app/libs/content';

interface FormProgressProps {
  currentStep: number;
  steps: string[];
  onStepClick: (stepIndex: number) => void;
}

/**
 * FormProgress component displays the progress of the multi-step form
 * with visual indicators for completed, current, and upcoming steps.
 */
const FormProgress: React.FC<FormProgressProps> = ({ currentStep, steps, onStepClick }) => {
  const pageKey = 'contact';
  // Récupère le template d'aria-label et le tooltip
  const ariaTemplate = t(pageKey, 'Contact.FormProgress.ariaLabelTemplate') as string;
  const tooltip = t(pageKey, 'Contact.FormProgress.tooltip') as string;
  // Remplace les placeholders {current} et {total}
  const ariaLabel = ariaTemplate
    .replace('{current}', String(currentStep + 1))
    .replace('{total}', String(steps.length));

  return (
    <div
      role="progressbar"
      aria-label={ariaLabel}
      aria-valuemin={1}
      aria-valuemax={steps.length}
      aria-valuenow={currentStep + 1}
      className="mb-8"
    >
      <div className="flex flex-wrap justify-between text-sm text-gray-600">
        {steps.map((title, i) => (
          <div
            key={i}
            onClick={() => onStepClick(i)}
            className={`flex items-center mb-3 cursor-pointer hover:opacity-80 transition-opacity relative group ${
              i === currentStep ? 'text-primary font-bold' : ''
            }`}
            role="button"
            tabIndex={0}
            aria-label={`${ariaLabel}: ${title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onStepClick(i);
            }}
          >
            <div
              className={`flex items-center justify-center w-7 h-7 sm:w-6 sm:h-6 rounded-full mr-2 text-xs
                ${
                  i < currentStep
                    ? 'bg-primary text-white'
                    : i === currentStep
                      ? 'border-2 border-primary text-primary'
                      : 'border border-gray-300 text-gray-400'
                } hover:shadow-md transition-shadow`}
            >
              {i < currentStep ? '✓' : i + 1}
            </div>
            <span
              className={`${i <= currentStep ? 'text-gray-800' : 'text-gray-400'} hidden sm:inline`}
            >
              {title}
            </span>
            <span
              className={`${i <= currentStep ? 'text-gray-800' : 'text-gray-400'} sm:hidden text-[10px]`}
            >
              {title}
            </span>
            <span className="absolute -bottom-5 left-0 right-0 text-center text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
              {tooltip}
            </span>
          </div>
        ))}
      </div>

      <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default FormProgress;
