'use client';

import { useState } from 'react';

// ✅ Typage fort pour ton questionnaire
export interface FormData {
  propertyType: '' | 'studio' | 't2' | 't3' | 'maison';
  location: string;
  surface: string;
  finish: '' | 'Économique' | 'Standard' | 'Premium';
  managementType: '' | 'conciergerie' | 'gestion-locative';
  hasParking?: boolean;
  taxeFonciere?: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  calculatorData?: {
    dailyRate: number;
    monthlyGross: number;
    monthlyNet: number;
    traditionalRent: number;
    gain: number;
  };
}

// 🔹 Clé utilisée dans localStorage
const STORAGE_KEY = 'formData_cles_alsace';

export function useFormData() {
  // 🔹 État local initialisé vide
  const [formData, setFormData] = useState<FormData>({
    propertyType: '',
    location: '',
    surface: '',
    finish: '',
    managementType: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // -----------------------------
  // ✅ Update typé et sûr : supprime toutes les erreurs TS
  // -----------------------------
  const updateField = <K extends keyof FormData>(
    key: K,
    value: FormData[K] | string, // on accepte aussi string pour les inputs
  ) => {
    // Si l'input envoie un string alors on cast en FormData[K]
    setFormData((prev) => ({ ...prev, [key]: value as FormData[K] }));
  };

  // -----------------------------
  // ✅ Reset complet du formulaire
  // -----------------------------
  const clearFormData = () => {
    const empty: FormData = {
      propertyType: '',
      location: '',
      surface: '',
      finish: '',
      managementType: '',
      name: '',
      email: '',
      phone: '',
      message: '',
    };
    setFormData(empty);
  };

  return { formData, updateField, clearFormData };
}
