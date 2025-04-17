import PageTitle from "@/components/Common/PageTitle";
import SingleService from "@/components/Home/Service/SinglePrestation";
import { prestationData } from "@/static-data/prestation";

import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Services Page | ${siteName}`,
  description: "This is Blog page description",
  // other metadata
};

export default function page() {
  return (
    <>
      <PageTitle
        pageTitle="Service Page"
        pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero. "
        showMenu={true}
      />

      <section className="bg-gray-50 pb-20 pt-[90px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {prestationData.map((prestation) => (
              <SingleService key={prestation?.id} prestation={prestation} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
