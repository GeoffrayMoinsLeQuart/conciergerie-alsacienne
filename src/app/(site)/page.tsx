import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import Contact from "@/components/Contact";
import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Service from "@/components/Home/Service";
import Testimonial from "@/components/Home/Testimonial";
import Properties from "@/components/property";
import { Metadata } from "next";
import { integrations } from "../../../integrations.config";

const siteName = process.env.SITE_NAME || "Conciergerie Alsacienne";

export const metadata: Metadata = {
  title: `Conciergerie Alsacienne | Services de conciergerie et gestion locative en Alsace`,
  description:
    "Service clé en main de gestion Airbnb et locations saisonnières. Maximisez vos revenus et libérez-vous totalement des contraintes de gestion grâce à notre expertise locale.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Properties />
      <Testimonial />
      {integrations?.isSanityEnabled && <HomeBlogSection />}
      <Contact />
    </>
  );
}
