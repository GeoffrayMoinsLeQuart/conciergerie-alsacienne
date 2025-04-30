'use client';

import dynamic from 'next/dynamic';
import { FC, useState } from 'react';
import Iconify from '../iconify';
import StyledLightbox from './styles';
import { LightBoxProps } from './types';

// load the lightbox itself dynamically—no hooks needed
const ReactLightbox = dynamic(
  () => import('yet-another-react-lightbox').then((mod) => mod.default),
  { ssr: false },
) as FC<LightBoxProps>;

// static plugin imports
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Video from 'yet-another-react-lightbox/plugins/video';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';

const Lightbox: FC<LightBoxProps> = ({
  slides,
  onGetCurrentIndex,
  disabledZoom,
  disabledVideo,
  disabledCaptions,
  disabledSlideshow,
  disabledThumbnails,
  disabledFullscreen,
  ...other
}) => {
  const [index, setIndex] = useState(0);
  const totalItems = slides?.length ?? 0;

  const plugins = [
    ...(disabledCaptions ? [] : [Captions]),
    ...(disabledFullscreen ? [] : [Fullscreen]),
    ...(disabledSlideshow ? [] : [Slideshow]),
    ...(disabledThumbnails ? [] : [Thumbnails]),
    ...(disabledVideo ? [] : [Video]),
    ...(disabledZoom ? [] : [Zoom]),
  ];

  return (
    <>
      <StyledLightbox />
      <ReactLightbox
        slides={slides}
        plugins={plugins}
        index={index}
        on={{
          view: ({ index: newIndex }) => {
            setIndex(newIndex);
            onGetCurrentIndex?.(newIndex);
          },
        }}
        toolbar={{
          buttons: [
            <span key="counter" className="yarl__button">
              {index + 1} / {totalItems}
            </span>,
            'close',
          ],
        }}
        render={{
          iconClose: () => <Iconify width={24} icon="carbon:close" />,
          // …your other render overrides
        }}
        {...other}
      />
    </>
  );
};

export default Lightbox;
