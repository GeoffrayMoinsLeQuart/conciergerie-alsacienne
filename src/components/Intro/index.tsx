"use client";

import HeroImage from "@/components/Home/Hero/HeroImage";
import Link from "next/link";
import { FC } from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";

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
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="m-auto w-full px-4 lg:w-6/12 xl:w-6/12">
            <div className="hero-content animate-fade-in-up grid gap-6 text-center lg:text-left">
              <h1 className="mb-3 text-3xl font-bold leading-snug text-dark sm:text-5xl">
                {title}
              </h1>
              <p className="mb-6 max-w-[480px] text-lg text-body-color mx-auto lg:mx-0">
                {content}
              </p>

              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                <Link
                  href="/simulateur"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-center text-base font-semibold text-white shadow-md transition hover:bg-opacity-90"
                >
                  📈 Estimer mes revenus
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-primary px-8 py-4 text-center text-base font-semibold text-primary transition hover:bg-primary hover:text-white"
                >
                  📩 Nous contacter
                </Link>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-right mt-10 w-full px-4 lg:mt-0 lg:w-6/12">
            <div className="relative flex w-full max-lg:mt-10 lg:justify-end">
              <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-[#E0E7FF] opacity-30 blur-2xl"></div>
              <div className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-primary opacity-20 blur-sm"></div>
              <div className="relative z-10 flex aspect-[491/515] w-full max-w-[491px] pt-11 lg:justify-end lg:pt-0">
                <Image
                  src="https://res.cloudinary.com/dx96rdxwk/image/upload/v1745434488/Conciergerie%20alsacienne/Icon%20landing/Conciergerie/ChatGPT_Image_Apr_23_2025_08_23_19_PM_1_nam8th.webp"
                  alt="hero conciergerie"
                  width={846}
                  height={563}
                  className="h-auto w-full rounded-2xl object-cover shadow-lg"
                />
                <span className="absolute -bottom-8 -left-8 z-[-1]">
                  {/* SVG conservé inchangé */}
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {[...Array(5)].map((_, row) =>
                      [...Array(5)].map((_, col) => (
                        <circle
                          key={`${row}-${col}`}
                          cx={2.5 + 22 * col}
                          cy={2.5 + 22 * row}
                          r="2.5"
                          fill="#3056D3"
                        />
                      ))
                    )}
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
