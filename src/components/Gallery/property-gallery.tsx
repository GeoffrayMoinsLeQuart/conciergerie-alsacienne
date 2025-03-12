"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Slide = {
  src: string;
  alt: string;
};

// Supprimez le mot-clé async ici
export default function ProjectDetailsGallery({ slides }: { slides: Slide[] }) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <button 
        type="button" 
        onClick={() => setOpen(true)}
        className="mb-6 px-4 py-2 bg-primary text-white rounded-md"
      >
        Voir toutes les photos
      </button>

      <Lightbox open={open} close={() => setOpen(false)} slides={slides} />
    </>
  );
}