"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { testimonialData } from "@/static-data/testimonial";

export default function TestimonialsSection() {
  const averageRating = 4.9;
  const totalReviews = 127;

  const items = testimonialData;
  const itemsPerSet = items.length;

  // 3 copies pour la boucle : [A][A][A]
  const tripled = useMemo(() => [...items, ...items, ...items], [items]);

  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);

  const [copyWidth, setCopyWidth] = useState(0); // largeur d'un set A
  const [step, setStep] = useState(0); // largeur d'une carte + gap
  const [activeIndex, setActiveIndex] = useState(0); // index modulo items.length

  // Mesures: largeur d'un set + pas (carte + gap)
  const measure = () => {
    const scroller = scrollerRef.current;
    const track = trackRef.current;
    const card = firstCardRef.current;
    if (!scroller || !track || !card) return;

    // largeur d'un set = scrollWidth / 3 (car 3 copies)
    const setW = track.scrollWidth / 3;
    setCopyWidth(setW);

    // pas = carte + gap (gap vient de column-gap du track)
    const styles = getComputedStyle(track);
    const gap =
      parseFloat((styles.columnGap || styles.gap || "0").toString()) || 0;
    const cardW = card.getBoundingClientRect().width;
    setStep(cardW + gap);

    // placer le scroll au début du set central (invisible pour l’utilisateur)
    const prevBehavior = scroller.style.scrollBehavior;
    scroller.style.scrollBehavior = "auto";
    scroller.scrollLeft = setW; // début du 2e set
    scroller.style.scrollBehavior = prevBehavior || "smooth";
  };

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(() => measure());
    if (trackRef.current) ro.observe(trackRef.current);
    if (scrollerRef.current) ro.observe(scrollerRef.current);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Bouclage transparent quand on approche des extrémités
  const onScroll = () => {
    const scroller = scrollerRef.current;
    if (!scroller || !copyWidth || !step) return;

    // si on part trop à gauche du set central → on rajoute un set
    if (scroller.scrollLeft < copyWidth * 0.5) {
      const prev = scroller.style.scrollBehavior;
      scroller.style.scrollBehavior = "auto";
      scroller.scrollLeft += copyWidth;
      scroller.style.scrollBehavior = prev || "smooth";
    }
    // si on part trop à droite du set central → on retire un set
    else if (scroller.scrollLeft > copyWidth * 1.5) {
      const prev = scroller.style.scrollBehavior;
      scroller.style.scrollBehavior = "auto";
      scroller.scrollLeft -= copyWidth;
      scroller.style.scrollBehavior = prev || "smooth";
    }

    // calcul d'un index "virtuel" dans le set central pour les pastilles
    const positionInMiddle = scroller.scrollLeft - copyWidth; // 0 = début du set central
    if (positionInMiddle >= 0 && step > 0) {
      const i = Math.round(positionInMiddle / step) % itemsPerSet;
      setActiveIndex(((i % itemsPerSet) + itemsPerSet) % itemsPerSet);
    }
  };

  // navigation par flèches (avance/recul d’une carte)
  const scrollByOne = (dir: 1 | -1) => {
    const scroller = scrollerRef.current;
    if (!scroller || !step) return;
    scroller.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative py-24 bg-gradient-to-b from-[#F8FAFF] to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#E63946] font-semibold uppercase tracking-wide text-sm">
            Témoignages
          </span>
          <h2
            id="testimonials-heading"
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900"
          >
            Ce que disent nos{" "}
            <span className="text-[#0072FF]">propriétaires</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Des propriétaires alsaciens satisfaits, des revenus optimisés et une
            tranquillité retrouvée.
          </p>

          {/* Note globale */}
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[#E63946] fill-[#E63946]" />
            ))}
            <span className="ml-2 text-gray-800 font-semibold">
              {averageRating} ★ sur {totalReviews} séjours gérés
            </span>
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Gradients latéraux pour rendre le slider évident */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F8FAFF] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F8FAFF] to-transparent z-10" />

          {/* Flèches visibles */}
          <button
            type="button"
            aria-label="Témoignage précédent"
            onClick={() => scrollByOne(-1)}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
          <button
            type="button"
            aria-label="Témoignage suivant"
            onClick={() => scrollByOne(1)}
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow hover:bg-white"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>

          {/* Piste scrollable */}
          <div
            ref={scrollerRef}
            onScroll={onScroll}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory"
          >
            <div
              ref={trackRef}
              className="flex gap-8 px-1"
              // role list pour accessibilité
              role="list"
            >
              {tripled.map((t, idx) => (
                <div
                  key={`${t.id}-${idx}`}
                  ref={idx === itemsPerSet ? firstCardRef : undefined} // première carte du set central
                  role="listitem"
                  className="snap-start min-w-[320px] md:min-w-[380px] bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300"
                >
                  <Quote className="mb-4 h-10 w-10 text-[#0072FF]/15" />
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    “{t.review}”
                  </p>

                  <div className="flex items-center gap-4">
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
              ))}
            </div>
          </div>

          {/* indicateurs (index modulo la vraie liste) */}
          <div className="mt-8 flex justify-center gap-2">
            {items.map((_, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === activeIndex ? "bg-[#E63946]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* aide visuelle mobile */}
          <p className="mt-3 text-center text-xs text-gray-400 md:hidden">
            Glissez ↔︎ pour voir plus d’avis
          </p>
        </div>
      </div>
    </section>
  );
}
