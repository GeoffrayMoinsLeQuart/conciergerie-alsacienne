import React from 'react';
import { SimulatorTab } from '@/hooks/useSimulator'; // Adjust path as needed

interface SimulatorTabsProps {
  activeTab: SimulatorTab;
  onTabChange: (tab: SimulatorTab) => void;
}

export default function SimulatorTabs({ activeTab, onTabChange }: SimulatorTabsProps) {
  return (
    <div className="mb-8 flex justify-center border-b border-gray-200">
      <button
        onClick={() => onTabChange('gestion')}
        className={`px-6 py-3 text-lg font-medium ${activeTab === 'gestion' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
        aria-pressed={activeTab === 'gestion'}
      >
        Gestion Locative
      </button>
      <button
        onClick={() => onTabChange('conciergerie')}
        className={`px-6 py-3 text-lg font-medium ${activeTab === 'conciergerie' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
        aria-pressed={activeTab === 'conciergerie'}
      >
        Conciergerie
      </button>
    </div>
  );
}

