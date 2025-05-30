import Image from 'next/image';
import Link from 'next/link';
import { Highlight } from 'react-instantsearch';

function CustomHits(props: any) {
  const { hit, setSearchModalOpen } = props;
  return (
    <>
      <div className="border-stroke border-t bg-black first-of-type:border-0">
        <div className="bg-white px-[22px] py-3.5 duration-300 hover:bg-[#F9FAFB]">
          <Link
            onClick={() => setSearchModalOpen(false)}
            href={hit?.objectID || hit?.url}
            className="flex cursor-pointer items-center gap-4"
          >
            {hit?.imageURL.length > 1 && (
              <div className={`relative h-[60px] w-[106px] overflow-hidden rounded-lg `}>
                <Image
                  src={hit.imageURL}
                  alt={hit.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                />
              </div>
            )}
            <div className="w-full">
              <h3 className="line-clamp-1 text-base font-medium text-black">
                <Highlight attribute="title" hit={hit} />
              </h3>
              <div className="line-clamp-2 flex text-sm text-body-color">
                <Highlight attribute="url" hit={hit} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default CustomHits;
