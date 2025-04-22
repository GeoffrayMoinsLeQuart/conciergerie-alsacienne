import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import Contact from "@/components/Contact";
import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Prestation from "@/components/Home/Prestation";
import Testimonial from "@/components/Home/Testimonial";
import Properties from "@/components/Property";
import { Metadata } from "next";
import { integrations } from "../../../integrations.config";

const siteName = process.env.SITE_NAME || "Conciergerie Alsacienne";

export const metadata: Metadata = {
  title: "Conciergerie Alsacienne | Gestion locative premium en Alsace",
  description:
    "Boostez vos revenus locatifs en Alsace avec la Conciergerie Alsacienne : conciergerie dédiée à la location courte durée, optimisation Airbnb, suivi 24/7 et prestation personnalisé.",
};

export default function HomePage() {
  return (
    <>
      {/* <Hero />
      <About /> 
      <Prestation />
      <Properties homePage />
      <Testimonial /> */}
      {integrations?.isSanityEnabled && <HomeBlogSection />}
      <Contact />
    </>
  );
}
