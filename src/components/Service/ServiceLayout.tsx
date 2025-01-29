import { serviceData } from "@/static-data/service";
import { Service } from "@/types/service";
import CallToActionCard from "./CallToActionCard";
import ServiceTabButtons from "./ServiceTabButtons";
import ServiceTabContent from "./ServiceTabContent";

export default function ServiceLayout({ service }: { service: Service }) {
  return (
    <>
      <section className="bg-gray-50 pb-20 pt-[90px]">
        <div className="container">
          <div className="-mx-5 flex flex-wrap">
            <div className="w-full px-5 lg:w-4/12">
              <div className="space-y-10">
                <ServiceTabButtons serviceData={serviceData} />

                <CallToActionCard />
              </div>
            </div>

            <div className="w-full px-5 lg:w-8/12">
              <ServiceTabContent service={service as Service} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
