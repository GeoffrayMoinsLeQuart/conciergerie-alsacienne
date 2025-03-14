"use client";

import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Lightbox, { useLightbox } from "@/components/lightbox";
import { varTranHover } from "../animate/variants";
import Image from "next/image";
import { m } from "framer-motion";

type Slide = {
  src: string;
  alt: string;
};

// Supprimez le mot-clé async ici
export default function ProjectDetailsGallery({ slides }: { slides: Slide[] }) {
  const lightbox = useLightbox(slides);

  return (
    <>
      <div className="mb-5 grid cursor-pointer grid-cols-1 gap-1 md:mb-10 md:grid-cols-2">
        {slides[0] && (
          <PhotoItem
            imageToDisplay={slides[0].src}
            onOpenLightbox={() => lightbox.onOpen(slides[0].src)}
          />
        )}

        <div className="grid grid-cols-2 gap-1">
          {slides.slice(1, 5).map((slide, index) => (
            <PhotoItem
              key={index}
              imageToDisplay={slide.src}
              onOpenLightbox={() => lightbox.onOpen(slide.src)}
            />
          ))}
        </div>
      </div>

      <Lightbox
        index={lightbox.selected}
        slides={slides}
        open={lightbox.open}
        close={lightbox.onClose}
        plugins={[Thumbnails, Video]}
      />
    </>
  );
}

type PhotoItemProps = {
  imageToDisplay: string;
  onOpenLightbox: VoidFunction;
};

function PhotoItem({ imageToDisplay, onOpenLightbox }: PhotoItemProps) {
  return (
    <m.div
      whileHover="hover"
      variants={{
        hover: { opacity: 0.8 },
      }}
      transition={varTranHover()}
    >
      <Image
        src={imageToDisplay}
        alt={imageToDisplay.toString()}
        onClick={onOpenLightbox}
        width={1000}
        height={1000}
      />
    </m.div>
  );
}
