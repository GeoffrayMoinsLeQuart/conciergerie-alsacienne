import PageTitle from "@/components/Common/PageTitle";
import Contact from "@/components/Contact";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Support Page | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function ContactPage() {
  return (
    <>
      <PageTitle
        pageTitle="Contact Page"
        pageDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eius velit dicta, et distinctio error facilis"
      />

      <Contact />
    </>
  );
}
