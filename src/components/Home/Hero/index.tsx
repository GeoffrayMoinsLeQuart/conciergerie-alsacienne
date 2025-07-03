// src/components/Home/Hero.tsx
import Image from 'next/image';
import { t } from '@/app/libs/content';
import HeroClient from './HeroClient';

// Données de placeholder pour les images (à générer une seule fois)
const blurDesktop =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDEyMDAgNTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOWZmIi8+PC9zdmc+';
const blurTablet =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgODAwIDQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2Y4ZjlmZiIvPjwvc3ZnPg==';
const blurMobile =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2Y4ZjlmZiIvPjwvc3ZnPg==';

export default function Hero() {
  return (
    <section
      className="relative mb-24 overflow-hidden bg-cover bg-center bg-no-repeat"
      aria-labelledby="hero-title"
    >
      <div className="bg-white/90">
        <div className="container mx-auto flex flex-col items-center justify-center pt-20 text-center md:min-h-screen">
          {/* Images */}
          <div className="w-full">
            {/* Desktop */}
            <div
              className="relative hidden rounded-lg md:block w-full  mt-12"
              style={{ aspectRatio: '12/5', contain: 'layout' }}
            >
              <Image
                src="https://res.cloudinary.com/dx96rdxwk/image/upload/v1751578985/Conciergerie%20alsacienne/Image%20site/LES_CLEFS_D%27ALSACE_homepage.webp"
                alt={t('home', 'Hero.imageAlt')}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 1024px, 1280px"
                priority
                quality={85}
                placeholder="blur"
                blurDataURL={blurDesktop}
                fetchPriority="high"
                loading="eager"
              />
            </div>
            {/* Tablet */}
            <div
              className="relative mx-auto hidden rounded-lg sm:block md:hidden w-full mt-8"
              style={{ aspectRatio: '2/1', contain: 'layout' }}
            >
              <Image
                src="https://res.cloudinary.com/dx96rdxwk/image/upload/v1751578985/Conciergerie%20alsacienne/Image%20site/LES_CLEFS_D%27ALSACE_homepage.webp"
                alt={t('home', 'Hero.imageAlt')}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 640px, 768px"
                priority
                quality={85}
                placeholder="blur"
                blurDataURL={blurTablet}
                fetchPriority="high"
                loading="eager"
              />
            </div>
            {/* Mobile */}
            <div
              className="relative mx-auto rounded-lg sm:hidden w-full mt-8"
              style={{ aspectRatio: '4/3', contain: 'layout' }}
            >
              <Image
                src="https://res.cloudinary.com/dx96rdxwk/image/upload/v1751578985/Conciergerie%20alsacienne/Image%20site/LES_CLEFS_D%27ALSACE_homepage.webp"
                alt={t('home', 'Hero.imageAlt')}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw"
                priority
                quality={85}
                placeholder="blur"
                blurDataURL={blurMobile}
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>

          {/* Texte & CTA */}
          <HeroClient />
        </div>
      </div>
    </section>
  );
}
