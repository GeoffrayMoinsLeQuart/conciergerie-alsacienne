import PageTitle from "@/components/Common/PageTitle";
import { fetchProperties, imageBuilder } from "@/sanity/sanity-utils";
import { Property } from "@/types/property";
import { notFound } from "next/navigation";
import MarkdownRenderer from "@/utils/markdownConfig";
import ProjectDetailsGallery from "@/components/Gallery/property-gallery";

// Ajout pour ISR
export const revalidate = 3600; // 1 heure

export async function generateStaticParams() {
  const properties = await fetchProperties();

  return properties.map((property) => ({
    slug: property.slug?.current || "",
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;

    const properties = await fetchProperties();

    const property = properties?.find((p) => p.slug?.current === slug);

    if (!property) {
      return notFound();
    }

    const slides = [];

    if (property?.imagePrincipale) {
      slides.push({
        src: imageBuilder(property.imagePrincipale).url(), // <== ICI LA CORRECTION
        alt: property.shortDescription || "Image principale",
      });
    }

    if (property?.galleryImage && property.galleryImage.length > 0) {
      property.galleryImage.forEach((img) => {
        slides.push({
          src: imageBuilder(img).url(),
          alt: img.caption || "Image additionnelle",
        });
      });
    }

    return (
      <>
        <PageTitle
          pageTitle="Portfolio Details"
          pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus"
          showMenu={true}
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
                          {/* icône */}
                          <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            className="fill-current"
                          >
                            <path d="M5.00327 2.6569C4.56125 2.65777 4.13767 2.83419..." />
                          </svg>
                        </span>
                        <span> Main-project-file.zip </span>
                      </button>
                    </li>
                    <li className="flex">
                      <button className="flex w-full items-center rounded-sm bg-primary px-5 py-3 text-base font-medium text-white">
                        <span className="pr-2">
                          {/* icône */}
                          <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            className="fill-current"
                          >
                            <path d="M5.00327 2.6569C4.56125 2.65777 4.13767 2.83419..." />
                          </svg>
                        </span>
                        <span> Design-file.zip </span>
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
