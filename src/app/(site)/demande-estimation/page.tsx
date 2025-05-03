// src/app/contact/page.tsx

"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

// Define the structure for form data
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  // Include simulator data captured from URL
  sim_service?: string | null;
  sim_address?: string | null;
  sim_city?: string | null;
  sim_postalCode?: string | null;
  sim_department?: string | null;
  sim_estimatedRevenue?: string | null;
  sim_propertyType?: string | null;
  sim_surface?: string | null;
}

// Define the structure for form errors
interface ContactFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

// A simple loading component for Suspense
function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}

// The main component that reads search params
function ContactFormContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    // Initialize simulator data from search params
    sim_service: searchParams.get("service"),
    sim_address: searchParams.get("address"),
    sim_city: searchParams.get("city"),
    sim_postalCode: searchParams.get("postalCode"),
    sim_department: searchParams.get("department"),
    sim_estimatedRevenue: searchParams.get("estimatedRevenue"),
    sim_propertyType: searchParams.get("propertyType"),
    sim_surface: searchParams.get("surface"),
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  // Update state if searchParams change (though usually they don't post-load)
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      sim_service: searchParams.get("service"),
      sim_address: searchParams.get("address"),
      sim_city: searchParams.get("city"),
      sim_postalCode: searchParams.get("postalCode"),
      sim_department: searchParams.get("department"),
      sim_estimatedRevenue: searchParams.get("estimatedRevenue"),
      sim_propertyType: searchParams.get("propertyType"),
      sim_surface: searchParams.get("surface"),
    }));
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis.";
      isValid = false;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis.";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'adresse email est invalide.";
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Le numéro de téléphone est requis.";
      isValid = false;
    } // Add more specific phone validation if needed

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // --- Submission Logic --- 
    // Replace this with your actual backend endpoint call or email service integration
    console.log("Form Data to Submit:", formData);
    try {
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      // Assume success for now
      setSubmitStatus("success");
      // Optionally reset form: setFormData({ ...initial state... });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper to display search param safely
  const getParam = (key: keyof ContactFormData) => formData[key] || "N/A";

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 pt-[50px] text-center text-3xl font-bold text-gray-800 sm:pt-[100px]">
        Contactez-nous concernant votre estimation
      </h1>

      <div className="mx-auto max-w-2xl">
        {/* Summary Display */}
        <div className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-gray-800">Votre Estimation :</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Type de service :</strong> {getParam("sim_service")}</p>
            <p>
              <strong>Adresse :</strong> {getParam("sim_address")}, {getParam("sim_postalCode")} {getParam("sim_city")} ({getParam("sim_department")})
            </p>
            <p>
              <strong>Type de bien :</strong> {getParam("sim_propertyType")}, {getParam("sim_surface")} m²
            </p>
            <p><strong>Estimation mensuelle :</strong> {getParam("sim_estimatedRevenue")}</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-6 text-xl font-semibold text-gray-800">Vos Coordonnées :</h2>
          
          {submitStatus === "success" && (
            <div className="mb-4 rounded-md bg-green-100 p-4 text-center text-green-800">
              Merci ! Votre demande a été envoyée avec succès. Nous vous recontacterons bientôt.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="mb-4 rounded-md bg-red-100 p-4 text-center text-red-800">
              Une erreur s'est produite lors de l'envoi. Veuillez réessayer.
            </div>
          )}

          <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-gray-700">Prénom <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className={`w-full rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} px-4 py-2 focus:outline-none focus:ring-2 ${errors.firstName ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}
                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
              />
              {errors.firstName && <p className="mt-1 text-sm text-red-600" id="firstName-error">{errors.firstName}</p>}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-gray-700">Nom <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className={`w-full rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} px-4 py-2 focus:outline-none focus:ring-2 ${errors.lastName ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}
                aria-describedby={errors.lastName ? 'lastName-error' : undefined}
              />
              {errors.lastName && <p className="mt-1 text-sm text-red-600" id="lastName-error">{errors.lastName}</p>}
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} px-4 py-2 focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600" id="email-error">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="sm:col-span-2">
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">Téléphone <span className="text-red-500">*</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className={`w-full rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} px-4 py-2 focus:outline-none focus:ring-2 ${errors.phone ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600" id="phone-error">{errors.phone}</p>}
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">Votre Message (Optionnel)</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Hidden fields to capture simulator data - already in formData state */}

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Wrap the component in Suspense for useSearchParams
export default function ContactPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ContactFormContent />
    </Suspense>
  );
}

