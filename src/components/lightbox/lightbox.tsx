'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';
import Iconify from '../iconify';
import StyledLightbox from './styles';
import { LightBoxProps } from './types';
import { useLightboxState } from 'yet-another-react-lightbox';

// On retire le <…> générique et on cast après
const ReactLightbox = dynamic(
  () => import('yet-another-react-lightbox').then((mod) => mod.default),
  { ssr: false }
) as React.ComponentType<LightBoxProps>;

// Les plugins restent en import statique
import Zoom       from 'yet-another-react-lightbox/plugins/zoom';
import Video      from 'yet-another-react-lightbox/plugins/video';
import Captions   from 'yet-another-react-lightbox/plugins/captions';
import Slideshow  from 'yet-another-react-lightbox/plugins/slideshow';
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
  const totalItems = slides?.length ?? 0;
  const { currentIndex } = useLightboxState();

  const getPlugins = () => {
    let plugins = [Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom];
    if (disabledThumbnails) plugins = plugins.filter((p) => p !== Thumbnails);
    if (disabledCaptions)   plugins = plugins.filter((p) => p !== Captions);
    if (disabledFullscreen) plugins = plugins.filter((p) => p !== Fullscreen);
    if (disabledSlideshow)  plugins = plugins.filter((p) => p !== Slideshow);
    if (disabledZoom)       plugins = plugins.filter((p) => p !== Zoom);
    if (disabledVideo)      plugins = plugins.filter((p) => p !== Video);
    return plugins;
  };

  return (
    <>
      <StyledLightbox />
      <ReactLightbox
        slides={slides}
        plugins={getPlugins()}
        on={{ view: ({ index }) => onGetCurrentIndex?.(index) }}
        toolbar={{
          buttons: [
            <span key="total" className="yarl__button">
              {currentIndex + 1} / {totalItems}
            </span>,
            'close',
          ],
        }}
        render={{
          iconClose: () => <Iconify width={24} icon="carbon:close" />,
          // …
        }}
        {...other}
      />
    </>
  );
};

export default Lightbox;
