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
const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({ 
  onAddressSelect, 
  placeholder = "Commencez à saisir l'adresse...",
  label = "Adresse du bien",
  required = true,
  className = ""
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [suggestions, setSuggestions] = useState<AddressFeature[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedAddress, setSelectedAddress] = useState<AddressComponents | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  // Gérer les clics en dehors de la liste de suggestions pour la fermer
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node) && 
          inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Fonction pour vérifier si une adresse est en Alsace (codes postaux 67 et 68)
  const isInAlsace = (postcode: string | undefined): boolean => {
    if (!postcode) return false;
    return postcode.startsWith('67') || postcode.startsWith('68');
  };

  // Fonction pour rechercher des adresses via l'API BAN
  const searchAddresses = async (query: string) => {
    if (!query || query.length < 3) {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    try {
      // Utilisation de l'API Adresse (BAN) - gratuite et sans clé API
      const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(query)}&limit=5`);
      const data = await response.json();
      
      // Filtrer pour ne garder que les adresses en Alsace
      const alsaceAddresses = data.features.filter((feature: AddressFeature) => 
        isInAlsace(feature.properties.postcode)
      );
      
      setSuggestions(alsaceAddresses);
    } catch (error) {
      console.error('Erreur lors de la recherche d\'adresses:', error);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour gérer la sélection d'une adresse
  const handleSelectAddress = (feature: AddressFeature) => {
    const properties = feature.properties;
    const coordinates = feature.geometry.coordinates;
    
    // Créer un objet avec les composants d'adresse
    const addressComponents: AddressComponents = {
      streetNumber: properties.housenumber || '',
      street: properties.street || '',
      city: properties.city || '',
      postalCode: properties.postcode || '',
      department: properties.postcode?.startsWith('67') ? 'Bas-Rhin (67)' : 'Haut-Rhin (68)',
      fullAddress: properties.label || '',
      location: {
        lat: coordinates[1],
        lng: coordinates[0]
      }
    };
    
    // Mettre à jour l'état local
    setInputValue(properties.label);
    setSelectedAddress(addressComponents);
    setShowSuggestions(false);
    
    // Appeler le callback avec les composants d'adresse
    if (onAddressSelect) {
      onAddressSelect(addressComponents);
    }
  };

  // Gérer les changements de valeur de l'input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    // Réinitialiser l'adresse sélectionnée si l'utilisateur modifie le texte
    if (selectedAddress && selectedAddress.fullAddress !== value) {
      setSelectedAddress(null);
    }
    
    // Rechercher des adresses
    searchAddresses(value);
    setShowSuggestions(true);
  };

  // Gérer la touche Entrée pour sélectionner la première suggestion
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (suggestions.length > 0) {
        handleSelectAddress(suggestions[0]);
      }
    }
  };

  return (
    <div className={`w-full relative ${className}`}>
      <label className="block text-gray-700 font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required={required}
      />
      
      {loading && (
        <div className="absolute right-3 top-10">
          <svg className="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      )}
      
      {showSuggestions && suggestions.length > 0 && (
        <ul 
          ref={suggestionsRef}
          className="absolute z-10 w-full bg-white mt-1 border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto"
        >
          {suggestions.map((feature, index) => (
            <li 
              key={index}
              className="px-4 py-2 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0"
              onClick={() => handleSelectAddress(feature)}
            >
              <div className="font-medium">{feature.properties.label}</div>
              <div className="text-sm text-gray-500">
                {feature.properties.postcode} {feature.properties.city}
                {feature.properties.postcode?.startsWith('67') ? ' - Bas-Rhin' : ' - Haut-Rhin'}
              </div>
            </li>
          ))}
        </ul>
      )}
      
      {showSuggestions && inputValue.length >= 3 && suggestions.length === 0 && !loading && (
        <div className="absolute z-10 w-full bg-white mt-1 border border-gray-300 rounded-lg shadow-lg p-4 text-center">
          <p className="text-gray-500">Aucune adresse trouvée en Alsace. Veuillez vérifier votre saisie.</p>
        </div>
      )}
    </div>
  );
};

export default AddressAutocomplete;
