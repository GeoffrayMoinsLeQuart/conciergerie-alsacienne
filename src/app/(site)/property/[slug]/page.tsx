import PageTitle from "@/components/Common/PageTitle";
import { fetchProperties } from "@/sanity/sanity-utils";
import { Property } from "@/types/property";
import { notFound } from "next/navigation";
import MarkdownRenderer from "@/utils/markdownConfig";
import ProjectDetailsGallery from "@/components/Gallery/property-gallery";

// Ajout pour ISR
export const revalidate = 3600; // 1 heure

export async function generateStaticParams() {
  try {
    const properties = await fetchProperties();
    return properties.map((property) => ({
      slug: property.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Simplification maximale des types
export default async function Page({ params }: any) {
  try {
    const properties = await fetchProperties();
    const property = properties?.find((p) => p.slug === params.slug);

    if (!property) {
      return notFound();
    }

    const slides = [];

    if (property?.image) {
      slides.push({
        src: property.image,
        alt: property.name || "Image principale",
      });
    }

    if (property?.galleryImage && property.galleryImage.length > 0) {
      property.galleryImage.forEach((img) => {
        slides.push({
          src: img.url,
          alt: img.caption || "Image additionnelle",
        });
      });
    }

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
                  <ProjectDetailsGallery slides={slides} />
                  <h1 className="mb-7 text-2xl font-bold text-black sm:text-4xl lg:text-3xl">
                    {property.name}
                  </h1>

                  <div className="prose max-w-none">
                    <MarkdownRenderer
                      markdownContent={property.longDescription}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full px-5 lg:w-4/12">
                <div className="mb-10 rounded-sm border border-[#D7DFFF] bg-[#F8F9FF] px-6 py-9 sm:p-9 lg:px-6 xl:px-5">
                  <h3 className="mb-7 text-[22px] font-bold text-primary">
                    Property Info
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex lg:flex-wrap xl:flex-nowrap">
                      <span className="flex w-full max-w-[90px] justify-between text-base font-medium text-black">
                        Categories
                        <span className="text-body-color">:</span>
                      </span>
                      <span className="w-full pl-5 text-base font-medium text-body-color lg:pl-0 xl:pl-5">
                        {property.categories
                          ? property.categories.map(
                              (category: { value: string }, i: number) => (
                                <span
                                  key={i}
                                  className="pl-0.5 after:pr-0.5 after:content-[','] first-of-type:pl-0 last-of-type:after:hidden"
                                >
                                  {category.value}
                                </span>
                              ),
                            )
                          : "Not Added"}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-sm border border-[#D7DFFF] bg-[#F8F9FF] px-6 py-9 sm:p-9 lg:px-6 xl:px-5">
                  <h3 className="mb-7 text-[22px] font-bold text-primary">
                    Download Files
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
  } catch (error) {
    console.error("Error in page component:", error);
    return notFound();
  }
}