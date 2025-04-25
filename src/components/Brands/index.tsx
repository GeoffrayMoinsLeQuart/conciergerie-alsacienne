import { brandsData } from '@/static-data/brands';
import Image from 'next/image';

export default function Brands() {
  return (
    <section id="clients" className="relative bg-black pb-[250px] pt-20">
      <div className="container">
        <div className="mx-[-16px] flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[570px] text-center">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Some of Our Happy Clients
              </h2>
              <p className="text-lg font-medium text-body-color">
                There are many variations of passages of Lorem Ipsum available but the majority have
                suffered alteration in some form.
              </p>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              {brandsData.map((brand) => (
                <a
                  key={brand?.id}
                  href={brand?.link}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="relative mx-3 flex max-w-[120px] items-center justify-center py-[15px] opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]"
                >
                  <Image src={brand?.image} alt={brand?.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
