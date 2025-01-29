import PageTitle from "@/components/Common/PageTitle";
import SinglePortfolio from "@/components/Portfolio/SinglePortfolio";
import { portfolioData } from "@/static-data/portfolio";

import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Portfolio Page | ${siteName}`,
  description: "This is Portfolio page description",
  // other metadata
};

export default function PortfolioPage() {
  return (
    <>
      <PageTitle
        pageTitle="Portfolio Page"
        pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero. "
      />

      <section className="bg-white pb-20 pt-[90px]">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 2xl:grid-cols-3">
            {portfolioData.map((portfolio) => (
              <SinglePortfolio key={portfolio?.id} portfolio={portfolio} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
