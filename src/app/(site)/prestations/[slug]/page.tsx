import PageTitle from "@/components/Common/PageTitle";
import PrestationLayout from "@/components/Service/PrestationLayout";
import { prestationConciergerie } from "@/static-data/prestation";
import { Prestation } from "@/types/prestation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  const service = prestationConciergerie.find(
    (item) => item?.slug === params?.slug,
  );

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

export default async function PrestationDetailPage(props: Props) {
  const params = await props.params;
  const prestation = prestationConciergerie.find(
    (item) => item?.slug === params?.slug,
  );
  return (
    <>
      <PageTitle
        pageTitle="Prestation Details"
        pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero. "
        showMenu={true}
      />
      <PrestationLayout prestation={prestation as Prestation} />
    </>
  );
}
