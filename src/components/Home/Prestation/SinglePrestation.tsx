import { Prestation } from '@/types/prestation';
import Image from 'next/image';
import Link from 'next/link';

export default function SinglePrestation({ prestation }: { prestation: Prestation }) {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3 rounded-xl">
      <div className="mb-10 bg-white rounded-xl">
        <Link
          href={`/prestation/${prestation?.slug}`}
          className="relative block aspect-[34/23] w-full"
        >
          <Image
            src={prestation?.image}
            alt={prestation?.title || 'Image de la prestation'}
            fill
            sizes="(max-width: 768px) 100vw"
            className="w-full object-cover object-center rounded-xl p-3"
          />
        </Link>
        <div className="p-8 sm:p-11 md:p-8 lg:px-6 xl:p-10 2xl:p-11">
          <h3>
            <Link
              href={`/prestation/${prestation?.slug}`}
              className="mb-4 block text-lg font-bold text-dark hover:text-primary sm:text-xl"
            >
              {prestation?.title}
            </Link>
          </h3>
          <p className="mb-6 border-b border-[#F3F3F3] pb-7 text-base leading-relaxed text-body-color">
            {prestation?.description}
          </p>

          {/* <Link
            href={`/prestation/${prestation?.slug}`}
            className="inline-flex items-center text-base font-medium text-body-color hover:text-primary"
          >
            View Details
            <span className="ml-3">
              <svg
                width="22"
                height="18"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8 10.45L12.6844 3.2313C12.375 2.92192 11.8938 2.92192 11.5844 3.2313C11.275 3.54067 11.275 4.02192 11.5844 4.3313L17.3594 10.2094H2.75002C2.33752 10.2094 1.99377 10.5532 1.99377 10.9657C1.99377 11.3782 2.33752 11.7563 2.75002 11.7563H17.4282L11.5844 17.7032C11.275 18.0126 11.275 18.4938 11.5844 18.8032C11.7219 18.9407 11.9282 19.0094 12.1344 19.0094C12.3407 19.0094 12.5469 18.9407 12.6844 18.7688L19.8 11.55C20.1094 11.2407 20.1094 10.7594 19.8 10.45Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
