import { Prestation } from '@/types/prestation';
import Image from 'next/image';

export default function PrestationTabContent({ prestation }: { prestation: Prestation }) {
  return (
    <div>
      <div className="relative mb-8 aspect-[34/20] rounded-sm bg-stone-100">
        {prestation?.image ? (
          <Image
            src={prestation?.image}
            alt="image"
            fill
            className="w-full object-cover object-center"
          />
        ) : (
          'no image found'
        )}
      </div>
      <h1 className="mb-7 text-2xl font-bold text-black sm:text-4xl lg:text-3xl">
        {prestation?.title}
      </h1>

      {prestation?.details}
    </div>
  );
}
