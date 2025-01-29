import PageTitle from "@/components/Common/PageTitle";
import { portfolioData } from "@/static-data/portfolio";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  const project = portfolioData.find(
    (portfolio) => portfolio?.slug === params?.slug,
  );

  if (project) {
    return {
      title: `${project?.title || "Single Post Page"} | ${siteName}`,
      description: `${project?.sortDescription?.slice(0, 136)}...`,
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
        title: `${project?.title} | ${siteName}`,
        description: project?.sortDescription,
        url: `${siteURL}/blog/${project?.slug}`,
        siteName: siteName,
        locale: "en_US",
        type: "article",
      },

      twitter: {
        card: "summary_large_image",
        title: `${project?.title} | ${siteName}`,
        description: `${project?.sortDescription?.slice(0, 136)}...`,
        creator: `@${authorName}`,
        site: `@${siteName}`,
        url: `${siteURL}/blog/${project?.slug}`,
      },
    };
  } else {
    return {
      title: "Not Found",
      description: "No blog article has been found",
    };
  }
}

export default async function PortfolioSlugPage(props: Props) {
  const params = await props.params;
  const project = portfolioData.find(
    (portfolio) => portfolio?.slug === params?.slug,
  );

  return (
    <>
      <PageTitle
        pageTitle="Portfolio Details"
        pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus"
      />

      <section className="bg-white pb-20 pt-[90px]">
        <div className="container">
          <div className="-mx-5 flex flex-wrap">
            <div className="w-full px-5 lg:w-8/12">
              <div>
                <div className="relative mb-8 aspect-[518/291] overflow-hidden rounded-sm bg-stone-100">
                  {project?.image ? (
                    <Image
                      src={project?.image}
                      alt="image"
                      fill
                      className="w-full border border-stroke object-cover object-center"
                    />
                  ) : (
                    "no image found"
                  )}
                </div>
                <h1 className="mb-7 text-2xl font-bold text-black sm:text-4xl lg:text-3xl">
                  {project?.title}
                </h1>

                <>{project?.details as any}</>
              </div>
            </div>
            <div className="w-full px-5 lg:w-4/12">
              <div className="mb-10 rounded-sm border border-[#D7DFFF] bg-[#F8F9FF] px-6 py-9 sm:p-9 lg:px-6 xl:px-5">
                <h3 className="mb-7 text-[22px] font-bold text-primary">
                  Project Info
                </h3>
                <ul className="space-y-3">
                  <li className="flex lg:flex-wrap xl:flex-nowrap">
                    <span className="flex w-full max-w-[90px] justify-between text-base font-medium text-black">
                      Category
                      <span className="text-body-color">:</span>
                    </span>
                    <span className="w-full pl-5 text-base font-medium text-body-color lg:pl-0 xl:pl-5">
                      {project?.categories
                        ? project?.categories.map((category, i) => (
                            <span
                              key={i}
                              className="pl-0.5 after:pr-0.5 after:content-[','] first-of-type:pl-0 last-of-type:after:hidden"
                            >
                              {category}
                            </span>
                          ))
                        : "Not Added"}
                    </span>
                  </li>
                  {project?.completedDate && (
                    <li className="flex lg:flex-wrap xl:flex-nowrap">
                      <span className="flex w-full max-w-[90px] justify-between text-base font-medium text-black">
                        Date
                        <span className="text-body-color">:</span>
                      </span>
                      <span className="w-full pl-5 text-base font-medium text-body-color lg:pl-0 xl:pl-5">
                        {project?.completedDate}
                      </span>
                    </li>
                  )}
                  <li className="flex lg:flex-wrap xl:flex-nowrap">
                    <span className="flex w-full max-w-[90px] justify-between text-base font-medium text-black">
                      Tags
                      <span className="text-body-color">:</span>
                    </span>
                    <span className="w-full pl-5 text-base font-medium text-body-color lg:pl-0 xl:pl-5">
                      {project?.tags
                        ? project?.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="pl-0.5 after:pr-0.5 after:content-[','] first-of-type:pl-0 last-of-type:after:hidden"
                            >
                              {tag}
                            </span>
                          ))
                        : "Not Added"}
                    </span>
                  </li>
                  {project?.website && (
                    <li className="flex lg:flex-wrap xl:flex-nowrap">
                      <span className="flex w-full max-w-[90px] justify-between text-base font-medium text-black">
                        Website
                        <span className="text-body-color">:</span>
                      </span>
                      <span className="w-full pl-5 text-base font-medium text-body-color lg:pl-0 xl:pl-5">
                        {project?.website}
                      </span>
                    </li>
                  )}
                  {project?.location && (
                    <li className="flex lg:flex-wrap xl:flex-nowrap">
                      <span className="flex w-full max-w-[90px] justify-between text-base font-medium text-black">
                        Location
                        <span className="text-body-color">:</span>
                      </span>
                      <span className="w-full pl-5 text-base font-medium text-body-color lg:pl-0 xl:pl-5">
                        {project?.location}
                      </span>
                    </li>
                  )}
                </ul>
              </div>
              <div className="rounded-sm border border-[#D7DFFF] bg-[#F8F9FF] px-6 py-9 sm:p-9 lg:px-6 xl:px-5">
                <h3 className="mb-7 text-[22px] font-bold text-primary">
                  Downoad Files
                </h3>
                <ul>
                  <li className="mb-4 flex">
                    <button className="flex w-full items-center rounded-sm bg-primary px-5 py-3 text-base font-medium text-white">
                      <span className="pr-2">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          className="fill-current"
                        >
                          <path d="M5.00327 2.6569C4.56125 2.65777 4.13767 2.83419 3.82572 3.14736C3.51377 3.46053 3.339 3.88479 3.33986 4.32682L3.3659 17.6601C3.36676 18.1022 3.54318 18.5257 3.85635 18.8377C4.16952 19.1496 4.59379 19.3244 5.03581 19.3235L15.0358 19.304C15.4778 19.3032 15.9014 19.1267 16.2134 18.8136C16.5253 18.5004 16.7001 18.0761 16.6992 17.6341L16.6797 7.63411L11.6699 2.64389L5.00327 2.6569ZM5.00653 4.32357L10.8398 4.31218L10.848 8.47884L15.0146 8.4707L15.0325 17.6374L5.03256 17.6569L5.00653 4.32357ZM6.68621 10.987L6.68946 12.6536L13.3561 12.6406L13.3529 10.9739L6.68621 10.987ZM6.69271 14.3203L6.69597 15.987L10.8626 15.9788L10.8594 14.3122L6.69271 14.3203Z" />
                        </svg>
                      </span>
                      <span> Main-project-file.zif </span>
                    </button>
                  </li>
                  <li className="flex">
                    <button className="flex w-full items-center rounded-sm bg-primary px-5 py-3 text-base font-medium text-white">
                      <span className="pr-2">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          className="fill-current"
                        >
                          <path d="M5.00327 2.6569C4.56125 2.65777 4.13767 2.83419 3.82572 3.14736C3.51377 3.46053 3.339 3.88479 3.33986 4.32682L3.3659 17.6601C3.36676 18.1022 3.54318 18.5257 3.85635 18.8377C4.16952 19.1496 4.59379 19.3244 5.03581 19.3235L15.0358 19.304C15.4778 19.3032 15.9014 19.1267 16.2134 18.8136C16.5253 18.5004 16.7001 18.0761 16.6992 17.6341L16.6797 7.63411L11.6699 2.64389L5.00327 2.6569ZM5.00653 4.32357L10.8398 4.31218L10.848 8.47884L15.0146 8.4707L15.0325 17.6374L5.03256 17.6569L5.00653 4.32357ZM6.68621 10.987L6.68946 12.6536L13.3561 12.6406L13.3529 10.9739L6.68621 10.987ZM6.69271 14.3203L6.69597 15.987L10.8626 15.9788L10.8594 14.3122L6.69271 14.3203Z" />
                        </svg>
                      </span>
                      <span> Design-file.zif </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
