'use client';

import React, { useEffect, useRef, useState } from 'react';

// Types pour l’auto-complétion
export interface AddressComponents {
  streetNumber: string;
  street: string;
  city: string;
  postalCode: string;
  department: string;
  fullAddress: string;
  location: { lat: number; lng: number };
}

interface AddressFeature {
  properties: {
    label: string;
    housenumber?: string;
    street?: string;
    city: string;
    postcode: string;
    context?: string;
  };
  geometry: { coordinates: [number, number] };
}

interface AddressAutocompleteProps {
  value?: string; // valeur contrôlée par Formik
  onAddressSelect: (addressComponents: AddressComponents) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
  className?: string;
}

const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({
  value,
  onAddressSelect,
  placeholder = "Commencez à saisir l'adresse...",
  label = 'Adresse du bien',
  required = true,
  className = '',
}) => {
  const [inputValue, setInputValue] = useState<string>(value || '');
  const [suggestions, setSuggestions] = useState<AddressFeature[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  // 1️⃣ Resynchronisation si Formik change `value`
  useEffect(() => {
    if (value !== undefined && value !== inputValue) {
      setInputValue(value);
    }
  }, [value]);

  // 2️⃣ Ferme la dropdown au clic hors champ
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchAddresses = async (q: string) => {
    if (q.length < 3) {
      setSuggestions([]);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(
          q
        )}&limit=5&autocomplete=1`
      );
      const data = await res.json();
      setSuggestions(Array.isArray(data.features) ? data.features : []);
    } catch {
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (feat: AddressFeature) => {
    const p = feat.properties;
    const coords = feat.geometry.coordinates;
    let dept = '';
    if (p.context) {
      const parts = p.context.split(',').map((s) => s.trim());
      if (parts[1]) dept = parts[1];
    }
    const comp: AddressComponents = {
      streetNumber: p.housenumber || '',
      street: p.street || '',
      city: p.city,
      postalCode: p.postcode,
      department: dept,
      fullAddress: p.label,
      location: { lat: coords[1], lng: coords[0] },
    };
    setInputValue(p.label);
    setShowSuggestions(false);
    onAddressSelect(comp);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setInputValue(v);
    // l’utilisateur modifie manuellement => on peut éventuellement réinitialiser la sélection
    searchAddresses(v);
    setShowSuggestions(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (suggestions.length) handleSelect(suggestions[0]);
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      <label className="mb-2 block font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        aria-required={required}
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {loading && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            className="animate-spin h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0
                 5.373 0 12h4zm2 5.291A7.962
                 7.962 0 014 12H0c0 3.042
                 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}

      {showSuggestions && suggestions.length > 0 && (
        <ul
          ref={suggestionsRef}
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-300 bg-white shadow-lg"
        >
          {suggestions.map((f, i) => (
            <li
              key={i}
              className="cursor-pointer border-b border-gray-100 px-4 py-2 last:border-b-0 hover:bg-blue-50"
              onClick={() => handleSelect(f)}
            >
              <div className="font-medium">{f.properties.label}</div>
              <div className="text-sm text-gray-500">
                {f.properties.postcode} {f.properties.city}
              </div>
            </li>
          ))}
        </ul>
      )}

      {showSuggestions &&
        inputValue.length >= 3 &&
        !loading &&
        suggestions.length === 0 && (
          <div className="absolute z-10 mt-1 w-full rounded-lg border border-gray-300 bg-white p-4 text-center shadow-lg">
            <p className="text-gray-500">
              Aucune adresse trouvée. Veuillez vérifier votre saisie.
            </p>
          </div>
        )}
    </div>
  );
};

export default AddressAutocomplete;
