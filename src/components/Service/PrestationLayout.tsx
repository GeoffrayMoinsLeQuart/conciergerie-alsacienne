import { prestationConciergerie } from '@/static-data/prestation';
import { Prestation } from '@/types/prestation';
import CallToActionCard from './CallToActionCard';
import PrestationTabButtons from './PrestationTabButtons';
import PrestationTabContent from './PrestationTabContent';

export default function PrestationLayout({ prestation }: { prestation: Prestation }) {
  return (
    <>
      <section className="bg-gray-50 pb-20 pt-[90px]">
        <div className="container">
          <div className="-mx-5 flex flex-wrap">
            <div className="w-full px-5 lg:w-4/12">
              <div className="space-y-10">
                <PrestationTabButtons prestationConciergerie={prestationConciergerie} />

                <CallToActionCard />
              </div>
            </div>

            <div className="w-full px-5 lg:w-8/12">
              <PrestationTabContent prestation={prestation as Prestation} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
