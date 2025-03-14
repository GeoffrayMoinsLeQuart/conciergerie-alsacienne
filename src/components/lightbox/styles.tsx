// StyledLightbox.tsx
"use client";

export default function StyledLightbox() {
  return (
    <style jsx global>{`
      .yarl__root {
        --yarl__thumbnails_thumbnail_padding: 0;
        --yarl__thumbnails_thumbnail_border: transparent;
        --yarl__color_backdrop: rgba(33, 33, 33, 0.9);
        --yarl__slide_captions_container_background: rgba(33, 33, 33, 0.48);
      }
      
      /* Caption */
      .yarl__slide_title {
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.5;
      }
      
      .yarl__slide_description {
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.43;
      }
      
      /* Button */
      .yarl__button {
        filter: unset;
      }
      
      /* Thumbnails */
      .yarl__thumbnails_thumbnail {
        opacity: 0.48;
      }
      
      .yarl__thumbnails_thumbnail.yarl__thumbnails_thumbnail_active {
        opacity: 1;
      }
      
      .yarl__thumbnails_vignette {
        --yarl__thumbnails_vignette_size: 0;
      }
      
      /* Video */
      .yarl__video_container {
        background-color: #000;
      }
    `}</style>
  );
}