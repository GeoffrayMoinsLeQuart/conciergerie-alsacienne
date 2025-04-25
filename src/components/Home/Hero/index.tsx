// src/components/Hero.tsx
'use client';

import { Calculator, Mail } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CTAButtons from '@/components/Buttons/CTAButtons';

export default function Hero() {
  return (
    <section
      className="relative mb-24 overflow-hidden bg-cover bg-center bg-no-repeat"
      aria-labelledby="hero-title"
    >
      <div className="bg-white/90">
        <div className="container mx-auto flex flex-col items-center justify-center pt-20 text-center md:min-h-screen">
          {/* Images responsive avec ratio correct */}
          <div className="w-full">
            {/* Desktop */}
            <div
              className="relative hidden rounded-lg md:block w-full"
              style={{ aspectRatio: '12 / 5' }}
            >
              <Image
                src="https://res.cloudinary.com/dx96rdxwk/image/upload/v1717939157/Immobilier/website/Header-desktop_nddksd.webp"
                alt="Location meublée premium en Alsace"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Tablet */}
            <div
              className="relative mx-auto hidden rounded-lg sm:block md:hidden w-full"
              style={{ aspectRatio: '2 / 1' }}
            >
              <Image
                src="https://res.cloudinary.com/dx96rdxwk/image/upload/v1717939157/Immobilier/website/Header-tablet_uczvdn.webp"
                alt="Location meublée premium en Alsace"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Mobile */}
            <div
              className="relative mx-auto rounded-lg sm:hidden w-full"
              style={{ aspectRatio: '4 / 3' }}
            >
              <Image
                src="https://res.cloudinary.com/dx96rdxwk/image/upload/v1717939157/Immobilier/website/Header-mobil_kvve7t.webp"
                alt="Location meublée premium en Alsace"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Texte animé & accessibilité */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10"
          >
            <h1
              id="hero-title"
              className="mb-4 text-2xl font-bold text-black md:text-3xl lg:text-4xl"
            >
              Conciergerie & Gestion Locative à Mulhouse
            </h1>

            <p className="text-lg text-gray-600 md:text-xl">
              Une expertise locale pour une gestion rentable et sereine.
            </p>
            <p className="mb-8 text-lg text-gray-600 md:text-xl">Proximité, exigence, sérénité.</p>

            {/* Boutons centrés en mobile et desktop */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <CTAButtons
                primary={{
                  label: 'Estimer mes revenus',
                  href: '/simulateur',
                  icon: <Calculator className="h-5 w-5" />,
                }}
                secondary={{
                  label: 'Nous contacter',
                  href: '/contact',
                  icon: <Mail className="h-5 w-5" />,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
