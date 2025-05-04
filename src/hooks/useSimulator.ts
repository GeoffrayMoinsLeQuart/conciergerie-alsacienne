import { useState, useCallback } from 'react';
// Removed useRouter as redirection is no longer needed
import { AddressComponents } from '@/components/AddressAutocomplete'; // Assuming this path is correct
import * as C from '@/constants/simulatorConstants'; // Import all constants
import { formatCurrency } from '@/utils/formatting'; // Import formatting

const WEBHOOK_URL = 'https://n8n.conciergerie-alsacienne.fr/webhook/lead-capture'; // ← ajuste si besoin

// Types
export interface FormData {
  propertyType: string;
  surface: string;
  floor: string;
  finishingLevel: string;
  hasParking: boolean;
  isFurnished: boolean;
  ambiance?: string;
  furnitureQuality?: string;
  additionalServices: {
    [key: string]: boolean;
    airConditioning: boolean;
    balcony: boolean;
    highEndEquipment: boolean;
    exceptionalView: boolean;
    elevator: boolean;
    accessibleEntrance: boolean;
  };
  propertyTax?: string;
  fixedCharges?: string;
  estimateUtilities?: boolean;
}

export interface EstimationResults {
  monthlyRevenueMin: number;
  monthlyRevenueMax: number;
  annualRevenueMin: number;
  annualRevenueMax: number;
  occupancyRate: string;
  profitability: string;
}

export type SimulatorTab = typeof C.TAB_GESTION | typeof C.TAB_CONCIERGERIE;

// Validation Errors Type for Simulator Steps
export interface SimulatorFormErrors {
  address?: string;
  propertyType?: string;
  surface?: string;
  propertyTax?: string;
  fixedCharges?: string;
}

// Step Definition Type
export interface Step {
  id: number;
  label: string;
}

// NEW: Contact Form Data Type
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  honeypot: string;
  preferredChannel: string;
}

// NEW: Contact Form Errors Type
export interface ContactFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
  honeypot?: string;
  preferredChannel?: string;
}

// Initial States using Constants
const initialFormData: FormData = {
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
  },
  propertyTax: '',
  fixedCharges: '',
  estimateUtilities: false,
};

const initialEstimationResults: EstimationResults = {
  monthlyRevenueMin: 0,
  monthlyRevenueMax: 0,
  annualRevenueMin: 0,
  annualRevenueMax: 0,
  occupancyRate: '0%',
  profitability: '0%',
};

const initialSimulatorErrors: SimulatorFormErrors = {};

// NEW: Initial State for Contact Form
const initialContactFormData: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  honeypot: '',
  preferredChannel: 'call',
};

// NEW: Initial State for Contact Form Errors
const initialContactFormErrors: ContactFormErrors = {};

// Define Steps Constants
const STEP_ADDRESS = 1;
const STEP_COMMON_DETAILS = 2;
const STEP_EXPENSES = 3;
const STEP_CONCIERGERIE_DETAILS = 4;

export function useSimulator() {
  // Removed router initialization
  const [activeTab, setActiveTab] = useState<SimulatorTab>(C.TAB_GESTION);
  const [addressData, setAddressData] = useState<AddressComponents | null>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [showResults, setShowResults] = useState(false);
  const [estimationResults, setEstimationResults] =
    useState<EstimationResults>(initialEstimationResults);
  const [simulatorErrors, setSimulatorErrors] =
    useState<SimulatorFormErrors>(initialSimulatorErrors);
  const [currentStep, setCurrentStep] = useState<number>(STEP_ADDRESS);
  const [maxCompletedStep, setMaxCompletedStep] = useState<number>(STEP_ADDRESS);

  // NEW: State for Integrated Contact Form
  const [contactFormData, setContactFormData] = useState<ContactFormData>(initialContactFormData);
  const [contactFormErrors, setContactFormErrors] =
    useState<ContactFormErrors>(initialContactFormErrors);
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [contactSubmitStatus, setContactSubmitStatus] = useState<'success' | 'error' | null>(null);

  // Define Step Labels and Structure
  const stepsDefinition: Step[] = [
    { id: STEP_ADDRESS, label: C.STEP_LABEL_ADDRESS },
    { id: STEP_COMMON_DETAILS, label: C.STEP_LABEL_COMMON_DETAILS },
    { id: STEP_EXPENSES, label: C.STEP_LABEL_EXPENSES },
  ];

  if (activeTab === C.TAB_CONCIERGERIE) {
    stepsDefinition.push({
      id: STEP_CONCIERGERIE_DETAILS,
      label: C.STEP_LABEL_CONCIERGERIE_DETAILS,
    });
  }

  const totalSteps = stepsDefinition.length;

  // --- Estimation Logic (Unchanged) ---
  const calculateEstimation = useCallback(() => {
    if (!addressData || !formData.propertyType || !formData.surface) {
      console.error('Attempted calculation with invalid data');
      return;
    }
    let basePrice = C.BASE_PRICE_DEFAULT;
    const surfaceNum = parseInt(formData.surface);
    switch (formData.propertyType) {
      case 'studio':
        basePrice = C.BASE_PRICE_STUDIO;
        break;
      case 't1':
        basePrice = C.BASE_PRICE_T1;
        break;
      case 't2':
        basePrice = C.BASE_PRICE_T2;
        break;
      case 't3':
        basePrice = C.BASE_PRICE_T3;
        break;
      case 't4+':
        basePrice = C.BASE_PRICE_T4_PLUS;
        break;
      case 'maison':
        basePrice = C.BASE_PRICE_MAISON;
        break;
    }
    const surfaceFactor = surfaceNum / C.SURFACE_NORMALIZATION_M2;
    const parkingBonus = formData.hasParking ? C.BONUS_PARKING : 0;
    const furnishedBonus = formData.isFurnished ? C.BONUS_FURNISHED : 0;
    const finishingBonus =
      formData.finishingLevel === 'premium'
        ? C.BONUS_FINISHING_PREMIUM
        : formData.finishingLevel === 'luxe'
          ? C.BONUS_FINISHING_LUXE
          : 0;
    let monthlyMin = 0,
      monthlyMax = 0;
    let occupancyRate = C.OCCUPANCY_RATE_GESTION;
    let profitability = C.PROFITABILITY_RATE_GESTION;
    if (activeTab === C.TAB_GESTION) {
      monthlyMin = Math.round(
        (basePrice * surfaceFactor + parkingBonus + furnishedBonus + finishingBonus) *
          C.ESTIMATION_RANGE_LOW_MULTIPLIER,
      );
      monthlyMax = Math.round(
        (basePrice * surfaceFactor + parkingBonus + furnishedBonus + finishingBonus) *
          C.ESTIMATION_RANGE_HIGH_MULTIPLIER,
      );
      profitability = C.PROFITABILITY_RATE_GESTION;
      occupancyRate = C.OCCUPANCY_RATE_GESTION;
    } else {
      // Conciergerie
      const ambianceBonus =
        formData.ambiance === 'design' || formData.ambiance === 'moderne'
          ? C.BONUS_AMBIANCE_MODERNE_DESIGN
          : 0;
      const qualityBonus =
        formData.furnitureQuality === 'premium'
          ? C.BONUS_FURNITURE_PREMIUM
          : formData.furnitureQuality === 'luxe'
            ? C.BONUS_FURNITURE_LUXE
            : 0;
      let servicesBonus = 0;
      C.ADDITIONAL_SERVICES_OPTIONS.forEach((service) => {
        if (formData.additionalServices[service.name]) {
          switch (service.name) {
            case 'airConditioning':
              servicesBonus += C.BONUS_SERVICE_AC;
              break;
            case 'balcony':
              servicesBonus += C.BONUS_SERVICE_BALCONY;
              break;
            case 'highEndEquipment':
              servicesBonus += C.BONUS_SERVICE_HIGH_END;
              break;
            case 'exceptionalView':
              servicesBonus += C.BONUS_SERVICE_VIEW;
              break;
            case 'elevator':
              servicesBonus += C.BONUS_SERVICE_ELEVATOR;
              break;
            case 'accessibleEntrance':
              servicesBonus += C.BONUS_SERVICE_ACCESSIBLE;
              break;
          }
        }
      });
      const grossMonthlyEstimate =
        basePrice * surfaceFactor * C.CONCIERGERIE_SURFACE_FACTOR_MULTIPLIER +
        parkingBonus +
        furnishedBonus +
        finishingBonus +
        ambianceBonus +
        qualityBonus +
        servicesBonus;
      monthlyMin = Math.round(grossMonthlyEstimate * C.ESTIMATION_RANGE_LOW_MULTIPLIER);
      monthlyMax = Math.round(grossMonthlyEstimate * C.ESTIMATION_RANGE_HIGH_MULTIPLIER);
      profitability = C.PROFITABILITY_RATE_CONCIERGERIE;
      occupancyRate = C.OCCUPANCY_RATE_CONCIERGERIE;
    }
    const annualMin = monthlyMin * 12;
    const annualMax = monthlyMax * 12;
    setEstimationResults({
      monthlyRevenueMin: monthlyMin,
      monthlyRevenueMax: monthlyMax,
      annualRevenueMin: annualMin,
      annualRevenueMax: annualMax,
      occupancyRate,
      profitability,
    });
    setShowResults(true);
  }, [formData, activeTab, addressData]);

  // --- Validation Logic (Per Step - Unchanged) ---
  const validateStep = useCallback(
    (step: number): boolean => {
      const newErrors: SimulatorFormErrors = {};
      let isValid = true;
      switch (step) {
        case STEP_ADDRESS:
          if (!addressData) {
            newErrors.address = C.ERROR_ADDRESS_REQUIRED;
            isValid = false;
          }
          break;
        case STEP_COMMON_DETAILS:
          if (!formData.propertyType) {
            newErrors.propertyType = C.ERROR_REQUIRED_FIELD;
            isValid = false;
          }
          if (!formData.surface) {
            newErrors.surface = C.ERROR_REQUIRED_FIELD;
            isValid = false;
          } else if (parseInt(formData.surface) <= 0) {
            newErrors.surface = C.ERROR_POSITIVE_NUMBER;
            isValid = false;
          }
          break;
        case STEP_EXPENSES:
          if (formData.propertyTax && parseFloat(formData.propertyTax) < 0) {
            newErrors.propertyTax = C.ERROR_POSITIVE_NUMBER;
            isValid = false;
          }
          if (formData.fixedCharges && parseFloat(formData.fixedCharges) < 0) {
            newErrors.fixedCharges = C.ERROR_POSITIVE_NUMBER;
            isValid = false;
          }
          break;
        case STEP_CONCIERGERIE_DETAILS:
          break;
      }
      setSimulatorErrors(newErrors);
      return isValid;
    },
    [addressData, formData],
  );

  // --- Step Navigation (Unchanged) ---
  const handleNextStep = useCallback(() => {
    if (validateStep(currentStep)) {
      const nextStep = currentStep + 1;
      if (nextStep <= totalSteps) {
        setCurrentStep(nextStep);
        setMaxCompletedStep((prevMax) => Math.max(prevMax, nextStep));
        setSimulatorErrors(initialSimulatorErrors);
      } else {
        calculateEstimation();
      }
    }
  }, [currentStep, totalSteps, validateStep, calculateEstimation]);

  const handlePrevStep = useCallback(() => {
    if (currentStep > STEP_ADDRESS) {
      setCurrentStep((step) => step - 1);
      setSimulatorErrors(initialSimulatorErrors);
    }
  }, [currentStep]);

  const handleStepClick = useCallback(
    (targetStep: number) => {
      if (targetStep <= maxCompletedStep) {
        setCurrentStep(targetStep);
        setSimulatorErrors(initialSimulatorErrors);
      }
    },
    [maxCompletedStep],
  );

  // --- Event Handlers (Simulator Form - Unchanged) ---
  const handleTabChange = useCallback((tab: SimulatorTab) => {
    setActiveTab(tab);
    setShowResults(false);
    setSimulatorErrors(initialSimulatorErrors);
    setCurrentStep(STEP_ADDRESS);
    setMaxCompletedStep(STEP_ADDRESS);
    setContactFormData(initialContactFormData); // Reset contact form too
    setContactFormErrors(initialContactFormErrors);
    setContactSubmitStatus(null);
  }, []);

  const handleAddressSelect = useCallback(
    (components: AddressComponents | null) => {
      setAddressData(components);
      if (components && simulatorErrors.address) {
        setSimulatorErrors((prev) => ({ ...prev, address: undefined }));
      }
    },
    [simulatorErrors.address],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
      if (type === 'number') {
        if (value === '' || !isNaN(Number(value))) {
          setFormData((prev) => ({ ...prev, [name]: value }));
        }
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
      if (simulatorErrors[name as keyof SimulatorFormErrors]) {
        setSimulatorErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [simulatorErrors],
  );

  const handleCheckboxChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name === 'hasParking' || name === 'isFurnished' || name === 'estimateUtilities') {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({
        ...prev,
        additionalServices: { ...prev.additionalServices, [name]: checked },
      }));
    }
  }, []);

  // --- Reset (Updated to reset contact form too) ---
  const handleReset = useCallback(() => {
    setShowResults(false);
    setSimulatorErrors(initialSimulatorErrors);
    setCurrentStep(STEP_ADDRESS);
    setMaxCompletedStep(STEP_ADDRESS);
    setAddressData(null);
    setFormData(initialFormData);
    setContactFormData(initialContactFormData); // Reset contact form
    setContactFormErrors(initialContactFormErrors);
    setContactSubmitStatus(null);
  }, []);

  // --- NEW: Integrated Contact Form Handlers ---
  const handleContactInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setContactFormData((prev) => ({ ...prev, [name]: value }));
      if (contactFormErrors[name as keyof ContactFormErrors]) {
        setContactFormErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [contactFormErrors],
  );

  const validateContactForm = useCallback((): boolean => {
    const newErrors: ContactFormErrors = {};
    let isValid = true;
    if (!contactFormData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis.';
      isValid = false;
    }
    if (!contactFormData.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis.';
      isValid = false;
    }
    if (!contactFormData.email.trim()) {
      newErrors.email = "L'email est requis.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(contactFormData.email)) {
      newErrors.email = "L'adresse email est invalide.";
      isValid = false;
    }
    if (!contactFormData.phone.trim()) {
      newErrors.phone = 'Le numéro de téléphone est requis.';
      isValid = false;
    }
    setContactFormErrors(newErrors);
    return isValid;
  }, [contactFormData]);

  const handleContactSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!validateContactForm()) {
        return;
      }

      setIsSubmittingContact(true);
      setContactSubmitStatus(null);

      // Combine simulator data and contact data for submission
      const submissionData = {
        // Contact Info
        ...contactFormData,
        // Simulator Context
        service: activeTab,
        address: addressData?.fullAddress || '',
        city: addressData?.city || '',
        postalCode: addressData?.postalCode || '',
        department: addressData?.department || '',
        estimatedRevenue: `${formatCurrency(estimationResults.monthlyRevenueMin)} - ${formatCurrency(estimationResults.monthlyRevenueMax)}`,
        // Include all relevant formData fields
        ...formData,
      };

      console.log('Combined Data to Submit:', submissionData);

      try {
        // ▶️ Envoi vers n8n
        const response = await fetch(
          WEBHOOK_URL, // ← Remplace par ton URL Production
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(submissionData),
          },
        );

        if (!response.ok) {
          // si n8n renvoie une erreur HTTP
          throw new Error(`Webhook failed: ${response.status} ${response.statusText}`);
        }

        setContactSubmitStatus('success');
        // Optionnel : réinitialiser le formulaire de contact
        // setContactFormData(initialContactFormData);
      } catch (error) {
        console.error('Contact form submission error:', error);
        setContactSubmitStatus('error');
      } finally {
        setIsSubmittingContact(false);
      }
    },
    [validateContactForm, contactFormData, activeTab, addressData, estimationResults, formData],
  );

  // --- REMOVED handleContactRedirect ---

  // --- Return Values (Updated) ---
  return {
    // Simulator State & Handlers
    activeTab,
    addressData,
    formData,
    showResults,
    estimationResults,
    simulatorErrors, // Renamed from errors
    currentStep,
    maxCompletedStep,
    steps: stepsDefinition,
    totalSteps,
    handleTabChange,
    handleAddressSelect,
    handleInputChange,
    handleCheckboxChange,
    handleReset,
    handleNextStep,
    handlePrevStep,
    handleStepClick,
    // Integrated Contact Form State & Handlers
    contactFormData,
    contactFormErrors,
    isSubmittingContact,
    contactSubmitStatus,
    handleContactInputChange,
    handleContactSubmit,
  };
}
