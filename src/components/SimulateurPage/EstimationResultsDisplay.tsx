import React from 'react';
import { EstimationResults } from '@/hooks/useSimulator'; // Adjust path as needed
import { formatCurrency, formatPercentage } from '@/utils/formatting'; // Import formatting functions
import * as C from '@/constants/simulatorConstants'; // Import constants

interface EstimationResultsDisplayProps {
  results: EstimationResults;
  onReset: () => void;
  onContactRedirect: () => void; // <-- Add the missing prop
}

export default function EstimationResultsDisplay({ results, onReset, onContactRedirect }: EstimationResultsDisplayProps) {
  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">{C.RESULTS_TITLE}</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Monthly Revenue Card */}
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 text-center shadow-sm">
          <h3 className="mb-2 text-lg font-semibold text-blue-800">{C.RESULTS_MONTHLY_REVENUE}</h3>
          <p className="text-3xl font-bold text-blue-700">
            {formatCurrency(results.monthlyRevenueMin)} - {formatCurrency(results.monthlyRevenueMax)}
          </p>
        </div>

        {/* Annual Revenue Card */}
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 text-center shadow-sm">
          <h3 className="mb-2 text-lg font-semibold text-blue-800">{C.RESULTS_ANNUAL_REVENUE}</h3>
          <p className="text-3xl font-bold text-blue-700">
            {formatCurrency(results.annualRevenueMin)} - {formatCurrency(results.annualRevenueMax)}
          </p>
        </div>

        {/* Occupancy Rate */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
          <h4 className="mb-1 text-base font-medium text-gray-600">{C.RESULTS_OCCUPANCY_RATE}</h4>
          <p className="text-xl font-semibold text-gray-800">
            {formatPercentage(results.occupancyRate)}
          </p>
        </div>

        {/* Profitability */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
          <h4 className="mb-1 text-base font-medium text-gray-600">{C.RESULTS_PROFITABILITY}</h4>
          <p className="text-xl font-semibold text-gray-800">
            {formatPercentage(results.profitability)} {/* Assuming profitability is a string like '17%' */}
          </p>
          <p className="mt-1 text-xs text-gray-500">({C.RESULTS_PROFITABILITY_NOTE})</p>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-gray-500">
        {C.RESULTS_DISCLAIMER}
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
        <button
          onClick={onReset}
          className="w-full rounded-lg border border-blue-600 px-6 py-3 text-lg font-semibold text-blue-600 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
        >
          {C.BUTTON_NEW_SIMULATION}
        </button>
        <button
          onClick={onContactRedirect} // <-- Connect the handler
          type="button"
          className="w-full rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
        >
          {C.BUTTON_CONTACT_US}
        </button>
      </div>
    </div>
  );
}

