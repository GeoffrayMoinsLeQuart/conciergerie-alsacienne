import { Suspense } from "react";
import ContactForm from "@/components/Contact";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Support Page | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function ContactPage() {
  return (
    <Suspense fallback={<p>Chargement du formulaire…</p>}>
      <ContactForm />
    </Suspense>
  );
}
