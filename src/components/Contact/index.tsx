// components/Form/ContactForm.tsx
"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import AddressAutocomplete, {
  AddressComponents,
} from "@/components/AddressAutocomplete";
import SectionTitle from "../Common/SectionTitle";
import {
  Activity,
  ContactFormValues,
  FormuleConciergerie,
  FormuleGestionLocative,
} from "@/types/form";

const ContactForm: React.FC = () => {
  const router = useRouter();
  const params = useSearchParams();

  // Initial URL params
  const initialService = (params.get("service") || "") as Activity;
  const initialFormule = (params.get("formule") || "") as
    | FormuleConciergerie
    | FormuleGestionLocative;

  const validationSchema = Yup.object({
    name: Yup.string().required("Obligatoire"),
    email: Yup.string().email("Email invalide").required("Obligatoire"),
    phone: Yup.string().required("Obligatoire"),
    serviceType: Yup.string().required("Choisissez un service"),
    consent: Yup.boolean().oneOf([true], "Accepter la politique est requis"),
  });

  return (
    <section id="contact" className="bg-white py-[120px]">
      <div className="container">
        <SectionTitle
          title="Un projet immobilier en tête ?"
          paragraph="Contactez-nous pour discuter de votre bien et découvrir comment notre service de conciergerie peut maximiser vos revenus locatifs en Alsace."
          center
        />
        <div className="container mx-auto max-w-4xl px-4">
          <Formik
            initialValues={
              {
                name: "",
                email: "",
                phone: "",
                availability: "",
                serviceType: initialService || "",
                formule: initialFormule || "",
                address: "",
                city: "",
                postalCode: "",
                propertyType: "",
                surface: "",
                budget: "",
                message: "",
                consent: false,
              } as ContactFormValues
            }
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(values),
                });
                if (!res.ok) throw new Error("Erreur API");
                toast.success("Demande envoyée !");
                router.push("/merci");
              } catch {
                toast.error("Échec de l'envoi, réessayez.");
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form className="space-y-6">
                {/* Vos informations */}
                <h3 className="text-xl font-semibold text-gray-800">
                  Vos informations
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block font-medium">
                      Nom & Prénom <span className="text-red-500">*</span>
                    </label>
                    <Field name="name" className="input-field w-full" />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-medium">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="email"
                      type="email"
                      className="input-field w-full"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-medium">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <Field name="phone" className="input-field w-full" />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="availability" className="block font-medium">
                      Date de disponibilité
                    </label>
                    <Field
                      name="availability"
                      type="date"
                      className="input-field w-full"
                    />
                  </div>
                </div>

                {/* Service & Disponibilité */}
                <h3 className="text-xl font-semibold text-gray-800">
                  Service souhaité
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="block font-medium">
                      Type de service <span className="text-red-500">*</span>
                    </label>
                    <div
                      role="group"
                      aria-labelledby="serviceType-group"
                      className="space-y-2"
                    >
                      {[
                        {
                          label: "Gestion locative",
                          value: "gestion-locative",
                        },
                        { label: "Conciergerie", value: "conciergerie" },
                        { label: "Les deux", value: "both" },
                      ].map((opt) => (
                        <label key={opt.value} className="flex items-center">
                          <Field
                            type="radio"
                            name="serviceType"
                            value={opt.value}
                            checked={opt.value === initialService}
                            className="h-5 w-5 text-primary"
                          />
                          {opt.value}
                          <span className="ml-2 text-gray-700">
                            {opt.label}
                          </span>
                        </label>
                      ))}
                    </div>
                    <ErrorMessage
                      name="serviceType"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>

                  <div>
                    <label className="block font-medium">
                      Formule <span className="text-red-500">*</span>
                    </label>
                    <div
                      role="group"
                      aria-labelledby="formule-group"
                      className="space-y-2"
                    >
                      {[
                        {
                          label: "Gestion locative",
                          value: "gestion-locative",
                        },
                        { label: "Conciergerie", value: "conciergerie" },
                        { label: "Les deux", value: "both" },
                      ].map((opt) => (
                        <label key={opt.value} className="flex items-center">
                          <Field
                            type="radio"
                            name="serviceType"
                            value={opt.value}
                            checked={opt.value === initialService}
                            className="h-5 w-5 text-primary"
                          />
                          {opt.value}
                          <span className="ml-2 text-gray-700">
                            {opt.label}
                          </span>
                        </label>
                      ))}
                    </div>
                    <ErrorMessage
                      name="serviceType"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>
                </div>

                {/* Adresse ASA */}
                <div>
                  <label className="block font-medium">Adresse du bien</label>
                  <AddressAutocomplete
                    onAddressSelect={(c: AddressComponents) => {
                      setFieldValue("address", c.fullAddress);
                      setFieldValue("city", c.city);
                      setFieldValue("postalCode", c.postalCode);
                    }}
                    placeholder="Saisissez votre adresse"
                  />
                </div>

                {/* Détails du bien */}
                <h3 className="text-xl font-semibold text-gray-800">
                  Détails du bien
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div>
                    <label htmlFor="propertyType" className="block font-medium">
                      Type de bien
                    </label>
                    <Field
                      as="select"
                      name="propertyType"
                      className="input-field w-full"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="studio">Studio</option>
                      <option value="t1">T1</option>
                      <option value="t2">T2</option>
                      <option value="t3">T3</option>
                      <option value="t4+">T4+</option>
                      <option value="maison">Maison</option>
                    </Field>
                  </div>
                  <div>
                    <label htmlFor="surface" className="block font-medium">
                      Surface (m²)
                    </label>
                    <Field
                      name="surface"
                      type="number"
                      className="input-field w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block font-medium">
                      Budget estimé (€)
                    </label>
                    <Field
                      name="budget"
                      type="number"
                      className="input-field w-full"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-medium">
                    Message / Commentaires
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    rows={4}
                    className="input-field w-full resize-none"
                  />
                </div>

                {/* Consentement RGPD */}
                <div>
                  <label className="flex items-start">
                    <Field
                      type="checkbox"
                      name="consent"
                      className="h-5 w-5 text-primary"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      J'accepte la politique de confidentialité{" "}
                      <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <ErrorMessage
                    name="consent"
                    component="div"
                    className="text-sm text-red-500"
                  />
                </div>

                {/* Submit */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-full bg-primary px-9 py-4 font-semibold text-white shadow-md transition hover:bg-opacity-90"
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours…" : "Envoyer ma demande"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
