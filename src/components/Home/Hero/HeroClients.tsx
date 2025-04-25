import { heroClientsData } from '@/static-data/brands';
import Image from 'next/image';

export default function HeroClients() {
  return (
    <div className="clients pt-16">
      <p className="mb-2 flex items-center text-xs font-normal text-body-color">
        Trusted by the best
        <span className="ml-2 inline-block h-[1px] w-8 bg-body-color"></span>
      </p>
      <div className="flex items-center">
        {heroClientsData.map((client) => (
          <div key={client?.id} className="mr-4 w-full py-3">
            <Image src={client?.image} alt={client?.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
