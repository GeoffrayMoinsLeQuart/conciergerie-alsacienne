"use client";

import HeroImage from "@/components/Home/Hero/HeroImage";
import Link from "next/link";
import { FC } from "react";

interface IntroProps {
  title: string;
  content: string;
}

const Intro: FC<IntroProps> = ({ title, content }) => {
  return (
    <div
      id="home"
      className="relative bg-white pb-20 pt-[120px] lg:pb-[110px] lg:pt-[150px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="m-auto w-full px-4 lg:w-6/12 xl:w-6/12">
            <div className="hero-content grid gap-6">
              <h1 className="mb-3 text-2xl font-bold leading-snug text-dark sm:text-4xl">
                {title}
              </h1>
              <p className="mb-8 max-w-[480px] text-base text-body-color">
                {content}
              </p>
              <ul className="flex flex-wrap items-center gap-4">
                <li>
                  <Link
                    href="/simulateur"
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-6 xl:px-8"
                  >
                    Estimer mes revenus
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg border border-primary px-8 py-4 text-center text-base font-normal text-primary hover:bg-primary hover:text-white lg:px-6 xl:px-8"
                  >
                    Nous contacter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden px-4 xl:block xl:hidden"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex w-full max-lg:mt-10 lg:justify-end">
              <HeroImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
