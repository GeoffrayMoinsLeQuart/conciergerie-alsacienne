// src/components/Intro.tsx
'use client';

import { FC } from 'react';
import { Calculator, Sparkles } from 'lucide-react';
import Image from 'next/image';
import CTAButtons from '@/components/Buttons/CTAButtons';
import { t } from '@/app/libs/content';

interface IntroProps {
  variant: 'conciergerie' | 'gestion-locative';
}

export const Intro: FC<IntroProps> = ({ variant }) => {
  // Page key always matches JSON filename
  const pageKey = 'conciergerie';
  const sectionKey = 'Conciergerie';

  // Externalized texts from JSON
  const title = t(pageKey, `${sectionKey}.Intro.title`) as string;
  const contentRaw = t(pageKey, `${sectionKey}.Intro.content`);
  const content = Array.isArray(contentRaw) ? contentRaw : [contentRaw as string];
  const imageUrl = t(pageKey, `${sectionKey}.Intro.image`) as string;
  const imageAlt = t(pageKey, `${sectionKey}.Intro.imageAlt`) as string;

  const primaryLabel = t(pageKey, `${sectionKey}.Intro.buttons.primary.label`) as string;
  const primaryHref = t(pageKey, `${sectionKey}.Intro.buttons.primary.href`) as string;
  const secondaryLabel = t(pageKey, `${sectionKey}.Intro.buttons.secondary.label`) as string;
  const secondaryHref = t(pageKey, `${sectionKey}.Intro.buttons.secondary.href`) as string;

  return (
    <section
      id="intro"
      aria-labelledby="intro-heading"
      className="relative bg-white pb-20 pt-[120px] lg:pb-[110px] lg:pt-[150px]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 lg:w-6/12 xl:w-6/12">
            <header className="grid gap-6 text-center lg:text-left">
              <h1
                id="intro-heading"
                className="mb-3 text-3xl font-bold leading-snug text-dark sm:text-5xl"
              >
                {title}
              </h1>
              <div className="mx-auto mb-6 max-w-[480px] space-y-2 text-lg text-body-color lg:mx-0">
                {content.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              <CTAButtons
                primary={{
                  label: primaryLabel,
                  href: primaryHref,
                  icon: <Sparkles className="h-5 w-5" aria-hidden="true" />,
                }}
                secondary={{
                  label: secondaryLabel,
                  href: secondaryHref,
                  icon: <Calculator className="h-5 w-5" aria-hidden="true" />,
                }}
              />
            </header>
          </div>

          <div className="mt-10 w-full px-4 lg:mt-0 lg:w-6/12">
            <div className="relative flex w-full lg:justify-end">
              {/* Decorative shapes, hidden from screen readers */}
              <div
                aria-hidden="true"
                className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-[#E0E7FF] opacity-30 blur-2xl"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-primary opacity-20 blur-sm"
              />

              {/* Main image */}
              <div className="relative z-10 flex aspect-[491/515] w-full max-w-[491px]">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  width={846}
                  height={563}
                  priority
                  className="h-auto w-full rounded-2xl object-cover shadow-lg"
                  style={{ height: 'auto' }}
                />
                <span aria-hidden="true" className="absolute -bottom-8 -left-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {[...Array(5)].flatMap((_, row) =>
                      [...Array(5)].map((_, col) => (
                        <circle
                          key={`${row}-${col}`}
                          cx={2.5 + 22 * col}
                          cy={2.5 + 22 * row}
                          r="2.5"
                          fill="#3056D3"
                        />
                      )),
                    )}
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
