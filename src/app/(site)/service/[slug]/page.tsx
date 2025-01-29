import PageTitle from "@/components/Common/PageTitle";
import ServiceLayout from "@/components/Service/ServiceLayout";
import { serviceData } from "@/static-data/service";
import { Service } from "@/types/service";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  const service = serviceData.find((item) => item?.slug === params?.slug);

  if (service) {
    return {
      title: `${service?.title || "Single Post Page"} | ${siteName}`,
      description: `${service?.description?.slice(0, 136)}...`,
      author: authorName,

      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },

      openGraph: {
        title: `${service?.title} | ${siteName}`,
        description: service?.description,
        url: `${siteURL}/blog/${service?.slug}`,
        siteName: siteName,
        locale: "en_US",
        type: "article",
      },

      twitter: {
        card: "summary_large_image",
        title: `${service?.title} | ${siteName}`,
        description: `${service?.description?.slice(0, 136)}...`,
        creator: `@${authorName}`,
        site: `@${siteName}`,
        url: `${siteURL}/blog/${service?.slug}`,
      },
    };
  } else {
    return {
      title: "Not Found",
      description: "No blog article has been found",
    };
  }
}

export default async function ServiceDetailPage(props: Props) {
  const params = await props.params;
  const service = serviceData.find((item) => item?.slug === params?.slug);
  return (
    <>
      <PageTitle
        pageTitle="Service Details"
        pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero. "
      />
      <ServiceLayout service={service as Service} />
    </>
  );
}
