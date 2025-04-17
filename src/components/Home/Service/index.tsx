import SectionTitle from "@/components/Common/SectionTitle";
import { prestationData } from "@/static-data/prestation";
import Link from "next/link";
import SinglePrestation from "./SinglePrestation";

export default function Service() {
  return (
    <section
      id="services"
      className="bg-black pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="-mx-4 mb-10 flex flex-wrap items-end lg:mb-[60px]">
          <div className="w-full px-4 lg:w-8/12">
            <SectionTitle
              mainTitle="NOS PRESTATIONS"
              title="Une solution complète pour votre bien"
              width="625px"
              color="white"
            />
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <div className="mb-[50px] flex lg:justify-end">
              <Link
                href="/prestations"
                className="text-lg font-medium text-white underline hover:text-primary"
              >
                EXPLOREZ NOS PRESTATIONS
              </Link>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {prestationData.map((prestation) => (
            <SinglePrestation key={prestation?.id} prestation={prestation} />
          ))}
        </div>
      </div>
    </section>
  );
}
