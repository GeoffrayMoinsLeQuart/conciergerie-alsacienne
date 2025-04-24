import { Suspense } from "react";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import ContactForm from "@/components/Contact";
import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Prestation from "@/components/Home/Prestation";
import Testimonial from "@/components/Home/Testimonial";
import Properties from "@/components/Property";
import { Metadata } from "next";
import { integrations } from "../../../integrations.config";
import { fetchProperties } from "@/sanity/sanity-utils";
import SeoSchemaInjector from "@/components/SEO/SeoSchemaInjector";

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Conciergerie Alsacienne",
  url: "https://www.conciergerie-alsacienne.fr",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.conciergerie-alsacienne.fr/faq?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const metadata: Metadata = {
  title: "Conciergerie Alsacienne | Gestion locative premium en Alsace",
  description:
    "Boostez vos revenus locatifs en Alsace avec la Conciergerie Alsacienne : conciergerie dédiée à la location courte durée, optimisation Airbnb, suivi 24/7 et prestation personnalisé.",
};

export default async function HomePage() {
  const properties = await fetchProperties();

  return (
    <>
      <SeoSchemaInjector schema={homeSchema} />
      <Hero />
      <About />
      <Prestation />
      {properties && <Properties properties={properties} homePage />}
      <Testimonial />
      {integrations?.isSanityEnabled && <HomeBlogSection />}

      {/* Wrap the client ContactForm in Suspense so useSearchParams() is handled correctly */}
      <Suspense fallback={<p>Chargement du formulaire…</p>}>
        <ContactForm />
      </Suspense>
    </>
  );
}
