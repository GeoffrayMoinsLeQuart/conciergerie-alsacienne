'use client';

import Image from 'next/image';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { testimonialData } from '@/static-data/testimonial';

export default function TestimonialsSection() {
  const averageRating = 4.9;
  const totalReviews = 127;
  const items = testimonialData;

  // 🎠 Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start', // ← au lieu de 'center'
      skipSnaps: false,
      dragFree: true,
      containScroll: 'trimSnaps',
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  // navigation
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi && emblaApi.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  // 🌈 Parallaxe du fond
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#FFF8F6] to-[#F8FAFF]"
    >
      {/* 🌈 Fond et halo animé */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#FFF8F6] via-[#F8FAFF] to-[#E9F2FF]"
        style={{ y }}
      />
      <motion.div
        animate={{ opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-64 left-1/2 w-[900px] h-[900px] rounded-full 
                   bg-gradient-to-tr from-[#E63946]/20 via-[#0072FF]/15 to-transparent 
                   blur-3xl opacity-60"
        style={{ x: '-50%', y }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16 relative z-10">
          <span className="text-[#E63946] font-semibold uppercase tracking-wide text-sm">
            Témoignages
          </span>
          <h2
            id="testimonials-heading"
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900"
          >
            Ce que disent nos <span className="text-[#0072FF]">propriétaires</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Des propriétaires alsaciens satisfaits, des revenus optimisés et une tranquillité
            retrouvée.
          </p>

          {/* ⭐ Note globale animée */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[#E63946] fill-[#E63946]" />
            ))}
            <span className="ml-2 text-gray-800 font-semibold">
              {averageRating} ★ sur {totalReviews} séjours gérés
            </span>
          </motion.div>
        </div>

        {/* 🎠 Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {items.map((t, i) => (
              <motion.div
                key={t.id || i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex-[0_0_90%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
              >
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 h-full flex flex-col justify-between relative z-10">
                  <Quote className="h-10 w-10 text-[#0072FF]/15 mb-4" />
                  <p className="text-gray-700 leading-relaxed mb-6 italic">“{t.review}”</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={60}
                        height={60}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{t.name}</h3>
                      <p className="text-sm text-gray-500">{t.companyName}</p>
                      <p className="text-xs text-gray-400">{t.designation}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🔹 Flèches navigation desktop */}
        <button
          onClick={scrollPrev}
          aria-label="Témoignage précédent"
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white/60 backdrop-blur-sm shadow-sm hover:bg-white/80 transition-all"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </button>
        <button
          onClick={scrollNext}
          aria-label="Témoignage suivant"
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white/60 backdrop-blur-sm shadow-sm hover:bg-white/80 transition-all"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </button>

        {/* 🔹 Indicateurs */}
        <div className="mt-8 flex justify-center gap-2 relative z-10">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                selectedIndex === i ? 'bg-[#E63946] scale-110' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Aller au témoignage ${i + 1}`}
            />
          ))}
        </div>

        {/* 🔹 Aide mobile */}
        <p className="mt-3 text-center text-xs text-gray-400 md:hidden relative z-10">
          Glissez ↔︎ pour voir plus d’avis
        </p>
      </div>
    </section>
  );
}
