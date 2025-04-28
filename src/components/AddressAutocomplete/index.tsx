import React, { useEffect, useRef, useState } from 'react';

// Types pour les propriétés du composant
interface AddressAutocompleteProps {
  onAddressSelect: (addressComponents: AddressComponents) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
  className?: string;
}

// Types pour les composants d'adresse
export interface AddressComponents {
  streetNumber: string;
  street: string;
  city: string;
  postalCode: string;
  department: string;
  fullAddress: string;
  location: {
    lat: number;
    lng: number;
  };
}

// Interface pour les propriétés d'une suggestion d'adresse
interface AddressFeature {
  properties: {
    label: string;
    housenumber?: string;
    street?: string;
    city: string;
    postcode: string;
  };
  geometry: {
    coordinates: [number, number]; // [longitude, latitude]
  };
}

// Composant d'auto-complétion d'adresse réutilisable utilisant l'API Adresse (BAN)
// ...imports et interfaces inchangés...

const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({
  onAddressSelect,
  placeholder = "Commencez à saisir l'adresse...",
  label = 'Adresse du bien',
  required = true,
  className = '',
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [suggestions, setSuggestions] = useState<AddressFeature[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedAddress, setSelectedAddress] = useState<AddressComponents | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const searchAddresses = async (query: string) => {
    if (!query || query.length < 3) {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(query)}&limit=5`,
      );
      const data = await response.json();
      // Ensure suggestions is always an array
      setSuggestions(Array.isArray(data.features) ? data.features : []);
    } catch (error) {
      console.error("Erreur lors de la recherche d'adresses:", error);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectAddress = (feature: AddressFeature) => {
    const properties = feature.properties;
    const coordinates = feature.geometry.coordinates;

    const addressComponents: AddressComponents = {
      streetNumber: properties.housenumber || '',
      street: properties.street || '',
      city: properties.city || '',
      postalCode: properties.postcode || '',
      department: '', // 👈 Vide par défaut si non précisé
      fullAddress: properties.label || '',
      location: {
        lat: coordinates[1],
        lng: coordinates[0],
      },
    };

    setInputValue(properties.label);
    setSelectedAddress(addressComponents);
    setShowSuggestions(false);

    if (onAddressSelect) {
      onAddressSelect(addressComponents);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (selectedAddress && selectedAddress.fullAddress !== value) {
      setSelectedAddress(null);
    }

    searchAddresses(value);
    setShowSuggestions(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (suggestions.length > 0) {
        handleSelectAddress(suggestions[0]);
      }
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      <label className="mb-2 block font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        aria-required="true"
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required={required}
      />

      {loading && <div className="absolute right-3 top-10">{/* spinner inchangé */}</div>}

      {showSuggestions && suggestions.length > 0 && (
        <ul
          ref={suggestionsRef}
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-300 bg-white shadow-lg"
        >
          {suggestions.map((feature, index) => (
            <li
              key={index}
              className="cursor-pointer border-b border-gray-100 px-4 py-2 last:border-b-0 hover:bg-blue-50"
              onClick={() => handleSelectAddress(feature)}
            >
              <div className="font-medium">{feature.properties.label}</div>
              <div className="text-sm text-gray-500">
                {feature.properties.postcode} {feature.properties.city}
              </div>
            </li>
          ))}
        </ul>
      )}

      {showSuggestions && inputValue.length >= 3 && suggestions.length === 0 && !loading && (
        <div className="absolute z-10 mt-1 w-full rounded-lg border border-gray-300 bg-white p-4 text-center shadow-lg">
          <p className="text-gray-500">Aucune adresse trouvée. Veuillez vérifier votre saisie.</p>
        </div>
      )}
    </div>
  );
};

export default AddressAutocomplete;
