import Head from "next/head";
import { FC } from "react";

interface StructuredDataProps {
  type:
    | "WebSite"
    | "Organization"
    | "Service"
    | "BlogPosting"
    | "FAQPage"
    | "BreadcrumbList";
  data: Record<string, any>;
}

const StructuredData: FC<StructuredDataProps> = ({ type, data }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
      />
    </Head>
  );
};

export default StructuredData;
