// src/components/Hero.tsx
'use client';

import { Calculator, Clock, Mail, User } from 'lucide-react';
import Image from 'next/image';
import CTAButtons from '@/components/Buttons/CTAButtons';
import dynamic from 'next/dynamic';
import { t } from '@/app/libs/content';
import Badge from '@/components/Badge';

// Données de placeholder pour les images (à générer une seule fois)
const blurDesktop =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDEyMDAgNTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOWZmIi8+PC9zdmc+';
const blurTablet =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgODAwIDQwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2Y4ZjlmZiIvPjwvc3ZnPg==';
const blurMobile =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2Y4ZjlmZiIvPjwvc3ZnPg==';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false,
});

export default function Hero() {
  return (
    <section
      className="relative mb-24 overflow-hidden bg-cover bg-center bg-no-repeat"
      aria-labelledby="hero-title"
    >
      <div className="bg-white/90">
        <div className="container mx-auto flex flex-col items-center justify-center pt-20 text-center md:min-h-screen">
          {/* Images responsive avec ratio correct et optimisations */}
          <div className="w-full">
            {/* Desktop */}
            <div
              className="relative hidden rounded-lg md:block w-full"
              style={{ aspectRatio: '12 / 5', contain: 'layout' }}
            >
              <Image
                src="https://res.cloudinary.com/dx96rdxwk/image/upload/q_auto,f_auto,w_1200/v1748531765/Mon%20projet%20locatif/Header-desktop_rtmbza.webp"
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
              className="relative mx-auto hidden rounded-lg sm:block md:hidden w-full"
              style={{ aspectRatio: '2 / 1', contain: 'layout' }}
            >
              <Image
                src="https://res.cloudinary.com/dx96rdxwk/image/upload/q_auto,f_auto,w_768/v1748531997/Mon%20projet%20locatif/Header-tablet_edp2mu.webp"
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

            {/* Mobile - avec optimisation Cloudinary améliorée */}
            <div
              className="relative mx-auto rounded-lg sm:hidden w-full"
              style={{ aspectRatio: '4 / 3', contain: 'layout' }}
            >
              <Image
                src="https://res.cloudinary.com/dx96rdxwk/image/upload/q_auto,f_auto,w_400/v1748531998/Mon%20projet%20locatif/Header-mobil_tbfewv.webp"
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

          {/* Texte animé & accessibilité - avec hauteur minimale pour éviter les layout shifts */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }} // Léger délai pour permettre au contenu principal de s'afficher
            className="mt-10 min-h-[200px]" // Hauteur minimale pour réduire les layout shifts
          >
            <h1
              id="hero-title"
              className="mb-4 text-2xl font-bold text-black md:text-3xl lg:text-4xl"
            >
              {t('home', 'Hero.title')}
            </h1>

            <p className="text-lg text-gray-600 md:text-xl">{t('home', 'Hero.subtitle')}</p>
            <p className="mb-8 text-lg text-gray-600 md:text-xl">{t('home', 'Hero.tagline')}</p>

            {/* Badges améliorés avec hauteur fixe */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 min-h-[40px]">
              <Badge icon={<Clock className="w-4 h-4" />} variant="filled">
                Réponse en 24 h garantie
              </Badge>

              <Badge icon={<User className="w-4 h-4" />} variant="outline">
                Conseiller dédié
              </Badge>
            </div>

            {/* Boutons centrés en mobile et desktop avec hauteur fixe */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center min-h-[48px]">
              <CTAButtons
                primary={{
                  label: t('home', 'Hero.primaryLabel'),
                  href: '/estimation',
                  icon: <Calculator className="h-5 w-5" />,
                }}
                secondary={{
                  label: t('home', 'Hero.secondaryLabel'),
                  href: '/contact',
                  icon: <Mail className="h-5 w-5" />,
                }}
              />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
