// constants/simulatorConstants.ts

// Tabs
export const TAB_GESTION = 'gestion';
export const TAB_CONCIERGERIE = 'conciergerie';
export const TAB_GESTION_LABEL = 'Gestion Locative';
export const TAB_CONCIERGERIE_LABEL = 'Conciergerie';

// Form Labels & Placeholders
export const LABEL_ADDRESS = 'Adresse du bien';
export const PLACEHOLDER_ADDRESS = "Saisissez l'adresse de votre bien"; // Updated to be more generic as per user feedback
export const HELP_TEXT_ADDRESS = "Saisissez l'adresse complète pour une estimation précise"; // Removed Alsace restriction
export const LABEL_CITY = 'Ville';
export const LABEL_POSTAL_CODE = 'Code postal';
export const LABEL_DEPARTMENT = 'Département';
export const LABEL_PROPERTY_TYPE = 'Type de bien';
export const LABEL_SURFACE = 'Surface (m²)';
export const PLACEHOLDER_SURFACE = 'Ex: 65';
export const LABEL_FLOOR = 'Étage';
export const LABEL_FINISHING_LEVEL = 'Niveau de finition';
export const LABEL_PARKING = 'Garage/Parking';
export const LABEL_FURNISHED = 'Meublé';
export const LABEL_AMBIANCE = 'Ambiance décorative';
export const LABEL_FURNITURE_QUALITY = 'Qualité du mobilier';
export const LABEL_ADDITIONAL_SERVICES = 'Services additionnels';
export const LABEL_YES = 'Oui';
export const REQUIRED_FIELD_INDICATOR = '*'; // Use this constant instead of hardcoding "*"

// Form Options
export const OPTION_SELECT = 'Sélectionnez';

export const PROPERTY_TYPES = [
  { value: 'studio', label: 'Studio' },
  { value: 't1', label: 'T1' },
  { value: 't2', label: 'T2' },
  { value: 't3', label: 'T3' },
  { value: 't4+', label: 'T4 ou plus' },
  { value: 'maison', label: 'Maison' },
];

export const FLOOR_LEVELS = [
  { value: 'rdc', label: 'Rez-de-chaussée' },
  { value: '1', label: '1er étage' },
  { value: '2', label: '2ème étage' },
  { value: '3', label: '3ème étage' },
  { value: '4', label: '4ème étage' },
  { value: '5+', label: '5ème étage ou plus' },
];

export const FINISHING_LEVELS = [
  { value: 'standard', label: 'Standard' },
  { value: 'premium', label: 'Premium' },
  { value: 'luxe', label: 'Luxe' },
];

export const AMBIANCE_LEVELS = [
  { value: 'standard', label: 'Standard' },
  { value: 'moderne', label: 'Moderne' },
  { value: 'design', label: 'Design' },
];

export const FURNITURE_QUALITY_LEVELS = [
  { value: 'standard', label: 'Standard' },
  { value: 'premium', label: 'Premium' },
  { value: 'luxe', label: 'Luxe' },
];

export const ADDITIONAL_SERVICES_OPTIONS = [
  { name: 'airConditioning', label: 'Climatisation' },
  { name: 'balcony', label: 'Balcon/Terrasse' },
  { name: 'highEndEquipment', label: 'Équipement haut de gamme' },
  { name: 'exceptionalView', label: 'Vue exceptionnelle' },
  { name: 'elevator', label: 'Ascenseur' },
  { name: 'accessibleEntrance', label: 'Entrée accessible PMR' },
];

// Calculation Constants
// Base prices per property type
export const BASE_PRICE_STUDIO = 500;
export const BASE_PRICE_T1 = 600;
export const BASE_PRICE_T2 = 750;
export const BASE_PRICE_T3 = 900;
export const BASE_PRICE_T4_PLUS = 1100;
export const BASE_PRICE_MAISON = 1300;
export const BASE_PRICE_DEFAULT = 700;

// Surface normalization factor
export const SURFACE_NORMALIZATION_M2 = 50;

// Bonuses
export const BONUS_PARKING = 50;
export const BONUS_FURNISHED = 100;
export const BONUS_FINISHING_PREMIUM = 100;
export const BONUS_FINISHING_LUXE = 200;
export const BONUS_AMBIANCE_MODERNE_DESIGN = 100;
export const BONUS_FURNITURE_PREMIUM = 150;
export const BONUS_FURNITURE_LUXE = 300;
export const BONUS_SERVICE_AC = 50;
export const BONUS_SERVICE_BALCONY = 80;
export const BONUS_SERVICE_HIGH_END = 100;
export const BONUS_SERVICE_VIEW = 150;
export const BONUS_SERVICE_ELEVATOR = 30;
export const BONUS_SERVICE_ACCESSIBLE = 20; // Placeholder value from previous code

// Multipliers & Rates
export const CONCIERGERIE_SURFACE_FACTOR_MULTIPLIER = 1.2;
export const ESTIMATION_RANGE_LOW_MULTIPLIER = 0.9;
export const ESTIMATION_RANGE_HIGH_MULTIPLIER = 1.1;
export const OCCUPANCY_RATE_GESTION = '95%'; // Placeholder
export const OCCUPANCY_RATE_CONCIERGERIE = '75%'; // Placeholder
export const PROFITABILITY_RATE_GESTION = 'Net Profitability (after ~17% fee)'; // Placeholder, needs real calculation
export const PROFITABILITY_RATE_CONCIERGERIE = 'Net Profitability (after ~22% fee)'; // Placeholder, needs real calculation

// New Pricing Structure (Percentages)
export const PRICING_GESTION_PERCENTAGE = 0.17; // 17%
export const PRICING_CONCIERGERIE_PERCENTAGE = 0.22; // 22%
// Note: How these percentages apply (e.g., to calculate net profit from gross revenue) needs clarification.

// Results Display
export const RESULTS_TITLE = "Résultats de l'estimation";
export const LABEL_MONTHLY_REVENUE = 'Revenu mensuel estimé :';
export const LABEL_ANNUAL_REVENUE = 'Revenu annuel estimé :';
export const LABEL_OCCUPANCY_RATE = "Taux d'occupation moyen :";
export const LABEL_PROFITABILITY = 'Rentabilité brute estimée :'; // Label might need update based on 17%/22% usage
export const RESULTS_DISCLAIMER =
  'Ces estimations sont basées sur les informations fournies et des données de marché générales. Une évaluation précise nécessite une visite du bien.';
export const BUTTON_NEW_SIMULATION = 'Nouvelle Simulation';
export const BUTTON_SUBMIT_ESTIMATION = 'Estimer mes revenus';

// Validation Messages (Placeholders)
export const ERROR_REQUIRED_FIELD = 'Ce champ est requis';
export const ERROR_POSITIVE_NUMBER = 'Veuillez saisir un nombre positif';
export const ERROR_ADDRESS_REQUIRED = 'Veuillez sélectionner une adresse valide';

// Multi-Step Form (Placeholders)
export const BUTTON_NEXT_STEP = 'Suivant';
export const BUTTON_PREVIOUS_STEP = 'Précédent';

// Multi-Step Form Labels
export const STEP_LABEL_ADDRESS = 'Étape 1: Adresse du bien';
export const STEP_LABEL_COMMON_DETAILS = 'Étape 2: Détails du bien';
export const STEP_LABEL_EXPENSES = 'Étape 3: Charges et Taxes';
export const STEP_LABEL_CONCIERGERIE_DETAILS = 'Étape 4: Détails Conciergerie';

// Expenses Step Labels & Help Text
export const LABEL_PROPERTY_TAX = 'Taxe foncière annuelle';
export const PLACEHOLDER_PROPERTY_TAX = 'Ex: 800';
export const HELP_TEXT_PROPERTY_TAX = 'Montant annuel de votre taxe foncière (optionnel)';
export const LABEL_FIXED_CHARGES = 'Charges fixes mensuelles';
export const PLACEHOLDER_FIXED_CHARGES = 'Ex: 150';
export const HELP_TEXT_FIXED_CHARGES = 'Charges de copropriété, assurance PNO, etc. (optionnel)';
export const LABEL_ESTIMATE_UTILITIES =
  'Inclure une estimation des charges locatives (eau, électricité, internet)?';
export const HELP_TEXT_ESTIMATE_UTILITIES =
  'Cochez si vous souhaitez une estimation des charges récupérables sur le locataire (pour Conciergerie).';

// Results Display Enhancements
export const SIMULATOR_MAIN_TITLE = 'Estimez vos revenus locatifs';
export const RESULTS_MONTHLY_REVENUE = 'Revenu mensuel estimé';
export const RESULTS_ANNUAL_REVENUE = 'Revenu annuel estimé';
export const RESULTS_OCCUPANCY_RATE = "Taux d'occupation moyen";
export const RESULTS_PROFITABILITY = 'Rentabilité brute estimée'; // Label might need update based on 17%/22% usage
export const RESULTS_PROFITABILITY_NOTE = 'Avant déduction des frais de service'; // Clarification for profitability
export const BUTTON_CONTACT_US = 'Être recontacté';

// --- Integrated Contact Form Constants ---
export const CONTACT_FORM_TITLE = 'Recevez une analyse personnalisée';
export const FIELD_LABEL_FIRST_NAME = 'Prénom';
export const FIELD_LABEL_LAST_NAME = 'Nom';
export const FIELD_LABEL_EMAIL = 'Email';
export const FIELD_LABEL_PHONE = 'Téléphone';
export const FIELD_LABEL_CANAL_PREFERENCE = 'Je préfère être contacté par *';
export const FIELD_LABEL_MESSAGE = 'Votre Message (Optionnel)';
export const BUTTON_SUBMIT_CONTACT = 'Envoyer ma demande';
export const BUTTON_SUBMITTING = 'Envoi en cours...';
export const CONTACT_FORM_SUCCESS =
  'Merci ! Votre demande a été envoyée avec succès. Nous vous recontacterons bientôt.';
export const CONTACT_FORM_ERROR = "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.";

export const CONTACT_FORM_SUMMARY_PREFIX = 'Pour votre bien situé à :';
