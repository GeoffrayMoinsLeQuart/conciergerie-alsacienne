"use client";
import { Portfolio } from "@/types/portfolio";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function SinglePortfolio({
  portfolio,
}: {
  portfolio: Portfolio;
}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="mb-4">
        <div className="group relative mb-8 aspect-[518/291] overflow-hidden rounded-md shadow-service">
          <Image src={portfolio?.image} alt="image" fill className="w-full" />
          <div className="invisible absolute left-0 top-0 flex h-full w-full items-center justify-center bg-primary bg-opacity-[17%] opacity-0 transition group-hover:visible group-hover:opacity-100">
            <button
              onClick={() => setOpen(true)}
              className="glightbox flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>
        <h3 className="mt-6">
          <Link
            href={`/portfolio/${portfolio?.slug}`}
            className="mb-3 inline-block text-xl font-semibold text-black hover:text-primary"
          >
            {portfolio?.title}
          </Link>
        </h3>
        <p className="text-base font-medium text-body-color">
          {portfolio?.sortDescription}
        </p>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: portfolio?.image as string,
          },
        ]}
      />
    </>
  );
}
