"use client";

import React, { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import AddressAutocomplete, {
  AddressComponents,
} from "@/components/AddressAutocomplete";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    availability: "",
    serviceType: "",
    propertyType: "",
    surface: "",
    message: "",
    consent: false,
  });

  const [addressData, setAddressData] = useState<AddressComponents | null>(
    null,
  );
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Gérer la sélection d'adresse
  const handleAddressSelect = (components: AddressComponents) => {
    setAddressData(components);
  };

  // Gérer les changements de champs du formulaire
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Gérer la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      alert(
        "Veuillez accepter la politique de confidentialité pour continuer.",
      );
      return;
    }

    setIsSubmitting(true);

    // Combiner les données du formulaire et de l'adresse
    const completeFormData = {
      ...formData,
      address: addressData?.fullAddress || "",
      streetNumber: addressData?.streetNumber || "",
      street: addressData?.street || "",
      city: addressData?.city || "",
      postalCode: addressData?.postalCode || "",
      department: addressData?.department || "",
    };

    try {
      // Envoi des données à l'API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(completeFormData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Erreur lors de l'envoi du formulaire");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-[120px]">
      <div className="container">
        <SectionTitle
          title="Un projet immobilier en tête ?"
          paragraph="Contactez-nous pour discuter de votre bien et découvrir comment notre service de conciergerie peut maximiser vos revenus locatifs en Alsace."
          center
        />

        <div className="-mx-4 flex justify-center">
          <div className="w-full px-4 lg:w-9/12">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="-mx-4 flex flex-wrap">
                  {/* Informations personnelles */}
                  <div className="mb-6 w-full px-4">
                    <h3 className="mb-4 text-xl font-semibold text-gray-800">
                      Vos informations
                    </h3>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label className="mb-2 block font-medium text-gray-700">
                        Nom et prénom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                        className="input-field"
                        required
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label className="mb-2 block font-medium text-gray-700">
                        Société (Optionnel)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Votre société"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label className="mb-2 block font-medium text-gray-700">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jean.dupont@example.com"
                        className="input-field"
                        required
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label className="mb-2 block font-medium text-gray-700">
                        Téléphone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="06 12 34 56 78"
                        className="input-field"
                        required
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label className="mb-2 block font-medium text-gray-700">
                        Date de disponibilité du bien
                      </label>
                      <input
                        type="date"
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>
                  </div>

                  {/* Informations sur le service */}
                  <div className="mb-6 mt-4 w-full px-4">
                    <h3 className="mb-4 text-xl font-semibold text-gray-800">
                      Service souhaité
                    </h3>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-6">
                      <label className="mb-2 block font-medium text-gray-700">
                        Type de service <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="serviceType"
                            value="gestion"
                            checked={formData.serviceType === "gestion"}
                            onChange={handleChange}
                            className="h-5 w-5 text-primary"
                            required
                          />
                          <span className="ml-2 text-gray-700">
                            Gestion locative
                          </span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="serviceType"
                            value="conciergerie"
                            checked={formData.serviceType === "conciergerie"}
                            onChange={handleChange}
                            className="h-5 w-5 text-primary"
                          />
                          <span className="ml-2 text-gray-700">
                            Conciergerie
                          </span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="serviceType"
                            value="both"
                            checked={formData.serviceType === "both"}
                            onChange={handleChange}
                            className="h-5 w-5 text-primary"
                          />
                          <span className="ml-2 text-gray-700">Les deux</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Adresse avec auto-complétion */}
                  <div className="w-full px-4">
                    <div className="mb-6">
                      <AddressAutocomplete
                        onAddressSelect={handleAddressSelect}
                        placeholder="Saisissez l'adresse de votre bien en Alsace"
                        label="Adresse du bien"
                        required={true}
                      />
                    </div>
                  </div>

                  {/* Champs d'adresse remplis automatiquement */}
                  {addressData && (
                    <>
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-6">
                          <label className="mb-2 block font-medium text-gray-700">
                            Ville
                          </label>
                          <input
                            type="text"
                            value={addressData.city}
                            className="input-field bg-gray-50"
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-6">
                          <label className="mb-2 block font-medium text-gray-700">
                            Code postal
                          </label>
                          <input
                            type="text"
                            value={addressData.postalCode}
                            className="input-field bg-gray-50"
                            readOnly
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label className="mb-2 block font-medium text-gray-700">
                        Type de bien
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="input-field"
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
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label className="mb-2 block font-medium text-gray-700">
                        Surface (m²)
                      </label>
                      <input
                        type="number"
                        name="surface"
                        value={formData.surface}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Ex: 65"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-6">
                      <label className="mb-2 block font-medium text-gray-700">
                        Message / Commentaires
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Précisez votre demande, vos questions ou toute information complémentaire..."
                        className="input-field resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* Consentement RGPD */}
                  <div className="w-full px-4">
                    <div className="mb-6">
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          required
                          className="mt-1 h-5 w-5 text-primary"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          J'accepte que mes données soient traitées par la
                          Conciergerie Alsacienne pour traiter ma demande. Pour
                          en savoir plus sur la gestion de vos données et vos
                          droits, consultez notre politique de confidentialité.
                          <span className="text-red-500">*</span>
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="pt-4 text-center">
                      <button
                        type="submit"
                        className="mx-auto inline-flex items-center justify-center rounded-full bg-primary px-9 py-4 font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-signUp"
                        disabled={isSubmitting}
                      >
                        {isSubmitting
                          ? "Envoi en cours..."
                          : "Envoyer ma demande"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center text-green-800">
                <svg
                  className="mx-auto mb-4 h-16 w-16 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <h3 className="mb-2 text-xl font-bold">
                  Demande envoyée avec succès !
                </h3>
                <p className="mb-4">
                  Nous avons bien reçu votre demande et nous vous contacterons
                  dans les plus brefs délais.
                </p>

                <Link
                  href="/"
                  className="inline-block rounded-lg bg-primary px-4 py-2 font-medium text-white transition duration-300 hover:bg-opacity-90"
                >
                  Retour à l'accueil
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
