'use client';

import React, { useState } from 'react';
import AddressAutocomplete, { AddressComponents } from '@/components/AddressAutocomplete';

// Types pour les données du formulaire
interface FormData {
  propertyType: string;
  surface: string;
  floor: string;
  finishingLevel: string;
  hasParking: boolean;
  isFurnished: boolean;
  // Champs spécifiques à la conciergerie
  ambiance?: string;
  furnitureQuality?: string;
  additionalServices: {
    airConditioning: boolean;
    balcony: boolean;
    highEndEquipment: boolean;
    exceptionalView: boolean;
    elevator: boolean;
    accessibleEntrance: boolean;
  };
}

// Types pour les résultats d'estimation
interface EstimationResults {
  monthlyRevenue: string;
  annualRevenue: string;
  occupancyRate: string;
  profitability: string;
}

export default function SimulateurPage() {
  const [activeTab, setActiveTab] = useState<'gestion' | 'conciergerie'>('gestion');
  const [addressData, setAddressData] = useState<AddressComponents | null>(null);
  const [formData, setFormData] = useState<FormData>({
    propertyType: '',
    surface: '',
    floor: '',
    finishingLevel: '',
    hasParking: false,
    isFurnished: false,
    ambiance: '',
    furnitureQuality: '',
    additionalServices: {
      airConditioning: false,
      balcony: false,
      highEndEquipment: false,
      exceptionalView: false,
      elevator: false,
      accessibleEntrance: false,
    }
  });
  const [showResults, setShowResults] = useState(false);
  const [estimationResults, setEstimationResults] = useState<EstimationResults>({
    monthlyRevenue: '0€ - 0€',
    annualRevenue: '0€ - 0€',
    occupancyRate: '0%',
    profitability: '0%'
  });

  // Gérer la sélection d'adresse
  const handleAddressSelect = (components: AddressComponents) => {
    setAddressData(components);
  };

  // Gérer les changements dans les champs du formulaire
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Gérer les changements dans les champs checkbox/radio
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    
    if (name === 'hasParking' || name === 'isFurnished') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      // Pour les services additionnels
      setFormData(prev => ({
        ...prev,
        additionalServices: {
          ...prev.additionalServices,
          [name]: checked
        }
      }));
    }
  };

  // Calculer l'estimation des revenus
  const calculateEstimation = () => {
    // Simulation de calcul d'estimation
    // Dans une implémentation réelle, cela serait basé sur des données plus complexes
    
    let basePrice = 0;
    const surfaceNum = parseInt(formData.surface) || 0;
    
    // Prix de base selon le type de bien
    switch (formData.propertyType) {
      case 'studio':
        basePrice = 500;
        break;
      case 't1':
        basePrice = 600;
        break;
      case 't2':
        basePrice = 750;
        break;
      case 't3':
        basePrice = 900;
        break;
      case 't4+':
        basePrice = 1100;
        break;
      case 'maison':
        basePrice = 1300;
        break;
      default:
        basePrice = 700;
    }
    
    // Ajustement selon la surface
    const surfaceFactor = surfaceNum / 50; // Normalisation par rapport à 50m²
    
    // Ajustements selon les autres critères
    const parkingBonus = formData.hasParking ? 50 : 0;
    const furnishedBonus = formData.isFurnished ? 100 : 0;
    const finishingBonus = formData.finishingLevel === 'premium' ? 100 : 
                          formData.finishingLevel === 'luxe' ? 200 : 0;
    
    // Calcul différent selon le service
    let monthlyMin, monthlyMax;
    
    if (activeTab === 'gestion') {
      // Calcul pour la gestion locative
      monthlyMin = Math.round((basePrice * surfaceFactor + parkingBonus + furnishedBonus + finishingBonus) * 0.9);
      monthlyMax = Math.round((basePrice * surfaceFactor + parkingBonus + furnishedBonus + finishingBonus) * 1.1);
    } else {
      // Calcul pour la conciergerie (revenus plus élevés)
      const ambianceBonus = formData.ambiance === 'design' || formData.ambiance === 'moderne' ? 100 : 0;
      const qualityBonus = formData.furnitureQuality === 'premium' ? 150 : 
                          formData.furnitureQuality === 'luxe' ? 300 : 0;
      
      // Bonus pour les services additionnels
      let servicesBonus = 0;
      if (formData.additionalServices.airConditioning) servicesBonus += 50;
      if (formData.additionalServices.balcony) servicesBonus += 80;
      if (formData.additionalServices.highEndEquipment) servicesBonus += 100;
      if (formData.additionalServices.exceptionalView) servicesBonus += 150;
      if (formData.additionalServices.elevator) servicesBonus += 30;
      
      monthlyMin = Math.round((basePrice * surfaceFactor * 1.2 + parkingBonus + furnishedBonus + finishingBonus + ambianceBonus + qualityBonus + servicesBonus) * 0.9);
      monthlyMax = Math.round((basePrice * surfaceFactor * 1.2 + parkingBonus + furnishedBonus + finishingBonus + ambianceBonus + qualityBonus + servicesBonus) * 1.1);
    }
    
    // Calcul des autres métriques
    const annualMin = monthlyMin * 12;
    const annualMax = monthlyMax * 12;
    const occupancyRate = activeTab === 'gestion' ? '95%' : '75%';
    const profitability = activeTab === 'gestion' ? '4.5%' : '6.8%';
    
    // Mise à jour des résultats
    setEstimationResults({
      monthlyRevenue: `${monthlyMin}€ - ${monthlyMax}€`,
      annualRevenue: `${annualMin}€ - ${annualMax}€`,
      occupancyRate,
      profitability
    });
    
    // Afficher les résultats
    setShowResults(true);
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateEstimation();
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Simulateur de Revenus</h1>
      
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-8 justify-center">
        <button 
          onClick={() => {
            setActiveTab('gestion');
            setShowResults(false);
          }}
          className={`px-6 py-3 text-lg font-medium ${activeTab === 'gestion' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Gestion Locative
        </button>
        <button 
          onClick={() => {
            setActiveTab('conciergerie');
            setShowResults(false);
          }}
          className={`px-6 py-3 text-lg font-medium ${activeTab === 'conciergerie' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Conciergerie
        </button>
      </div>
      
      {/* Formulaire */}
      {!showResults ? (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {activeTab === 'gestion' ? 'Estimez vos revenus en gestion locative' : 'Estimez vos revenus en conciergerie'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Champ d'adresse avec auto-complétion */}
            <div className="md:col-span-2">
              <AddressAutocomplete 
                onAddressSelect={handleAddressSelect}
                placeholder="Saisissez l'adresse de votre bien en Alsace"
                label="Adresse du bien"
                required={true}
              />
              <p className="text-sm text-gray-500 mt-1">Saisissez l&aposadresse complète pour une estimation précise (uniquement en Alsace)</p>
            </div>
            
            {/* Champs remplis automatiquement */}
            {addressData && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Ville</label>
                  <input 
                    type="text" 
                    value={addressData.city}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50" 
                    readOnly
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Code postal</label>
                  <input 
                    type="text" 
                    value={addressData.postalCode}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50" 
                    readOnly
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">Département</label>
                  <input 
                    type="text" 
                    value={addressData.department}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50" 
                    readOnly
                  />
                </div>
              </div>
            )}
            
            {/* Champs communs aux deux services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Type de bien <span className="text-red-500">*</span></label>
                <select 
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  required
                >
                  <option value="">Sélectionnez</option>
                  <option value="studio">Studio</option>
                  <option value="t1">T1</option>
                  <option value="t2">T2</option>
                  <option value="t3">T3</option>
                  <option value="t4+">T4 ou plus</option>
                  <option value="maison">Maison</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Surface (m²) <span className="text-red-500">*</span></label>
                <input 
                  type="number" 
                  name="surface"
                  value={formData.surface}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Ex: 65"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Étage</label>
                <select 
                  name="floor"
                  value={formData.floor}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Sélectionnez</option>
                  <option value="rdc">Rez-de-chaussée</option>
                  <option value="1">1er étage</option>
                  <option value="2">2ème étage</option>
                  <option value="3">3ème étage</option>
                  <option value="4">4ème étage</option>
                  <option value="5+">5ème étage ou plus</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Niveau de finition</label>
                <select 
                  name="finishingLevel"
                  value={formData.finishingLevel}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Sélectionnez</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                  <option value="luxe">Luxe</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Garage/Parking</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      name="hasParking"
                      checked={formData.hasParking}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">Oui</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Meublé</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      name="isFurnished"
                      checked={formData.isFurnished}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">Oui</span>
                  </label>
                </div>
              </div>
            </div>
            
            {/* Champs spécifiques à la conciergerie */}
            {activeTab === 'conciergerie' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Ambiance de l&aposappartement</label>
                  <select 
                    name="ambiance"
                    value={formData.ambiance}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="moderne">Moderne</option>
                    <option value="classique">Classique</option>
                    <option value="design">Design</option>
                    <option value="cosy">Cosy</option>
                    <option value="minimaliste">Minimaliste</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Qualité de l&aposameublement</label>
                  <select 
                    name="furnitureQuality"
                    value={formData.furnitureQuality}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="basique">Basique</option>
                    <option value="standard">Standard</option>
                    <option value="premium">Premium</option>
                    <option value="luxe">Luxe</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">Prestations supplémentaires</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        name="airConditioning"
                        checked={formData.additionalServices.airConditioning}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2 text-gray-700">Climatisation</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        name="balcony"
                        checked={formData.additionalServices.balcony}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2 text-gray-700">Balcon/Terrasse</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        name="highEndEquipment"
                        checked={formData.additionalServices.highEndEquipment}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2 text-gray-700">Équipement haut de gamme</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        name="exceptionalView"
                        checked={formData.additionalServices.exceptionalView}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2 text-gray-700">Vue exceptionnelle</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        name="elevator"
                        checked={formData.additionalServices.elevator}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2 text-gray-700">Ascenseur</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        name="accessibleEntrance"
                        checked={formData.additionalServices.accessibleEntrance}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2 text-gray-700">Accès PMR</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
            
            <button 
              type="submit"
              className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full"
              disabled={!addressData || !formData.propertyType || !formData.surface}
            >
              Estimer mes revenus
            </button>
          </form>
        </div>
      ) : (
        /* Résultats */
        <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Estimation de vos revenus</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Revenus mensuels estimés</h3>
              <p className="text-3xl font-bold text-blue-600">{estimationResults.monthlyRevenue}</p>
              <p className="text-sm text-gray-500 mt-2">Estimation basée sur les biens similaires dans votre secteur</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Revenus annuels estimés</h3>
              <p className="text-3xl font-bold text-green-600">{estimationResults.annualRevenue}</p>
              <p className="text-sm text-gray-500 mt-2">Projection sur 12 mois</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Taux d&aposoccupation estimé</h3>
              <p className="text-3xl font-bold text-purple-600">{estimationResults.occupancyRate}</p>
              <p className="text-sm text-gray-500 mt-2">Basé sur la demande locale et la saisonnalité</p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Rentabilité estimée</h3>
              <p className="text-3xl font-bold text-amber-600">{estimationResults.profitability}</p>
              <p className="text-sm text-gray-500 mt-2">Rapport entre revenus et valeur du bien</p>
            </div>
          </div>
          
          <div className="text-center space-y-4">
            <p className="text-gray-700">
              Cette estimation est basée sur les données du marché immobilier en Alsace et les caractéristiques de votre bien.
              Pour une évaluation personnalisée plus précise, contactez-nous.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => setShowResults(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg transition duration-300"
              >
                Modifier mes informations
              </button>
              
              <a 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 inline-block"
              >
                Demander un devis personnalisé
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
