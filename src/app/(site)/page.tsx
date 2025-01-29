import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Newsletter from "@/components/Home/Newsletter";
import Pricing from "@/components/Home/Pricing";
import Service from "@/components/Home/Service";
import Team from "@/components/Home/Team";
import Testimonial from "@/components/Home/Testimonial";
import Portfolio from "@/components/Portfolio";
import { Metadata } from "next";
import { integrations } from "../../../integrations.config";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Next.js Portfolio and Agency Site Template | ${siteName}`,
  description: "This is home page description",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Brands />
      <Newsletter />
      <Team />
      <Pricing />
      <Testimonial />
      {integrations?.isSanityEnabled && <HomeBlogSection />}
      <Contact />
    </>
  );
}
