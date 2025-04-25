'use client';

import { FC } from 'react';

interface SectionTitleProps {
  title: string;
  mainTitle?: string;
  paragraph?: string;
  center?: boolean;
  width?: string;
  marginBottom?: string;
  color?: 'white' | 'black';
  titleWidth?: string;
  paragraphWidth?: string;
  id?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({
  title,
  mainTitle = '',
  paragraph,
  center,
  width = '600px',
  marginBottom = '50px',
  color = 'black',
  titleWidth,
  paragraphWidth,
  id,
}) => {
  const containerClass = center ? 'mx-auto text-center' : '';
  const titleColor = color === 'white' ? 'text-white' : 'text-black';

  return (
    <div className={containerClass} style={{ maxWidth: width, marginBottom }}>
      {mainTitle && (
        <span className="mb-2 block text-lg font-semibold text-primary">{mainTitle}</span>
      )}

      <h2
        id={id}
        className={`text-3xl font-bold sm:text-4xl md:text-[45px]/[55px] ${titleColor} ${
          paragraph ? 'mb-5' : ''
        } ${titleWidth && center ? 'mx-auto' : ''}`}
        style={{ maxWidth: titleWidth }}
      >
        {title}
      </h2>

      {paragraph && (
        <p
          className={`text-lg font-medium text-body-color ${
            paragraphWidth && center ? 'mx-auto' : ''
          }`}
          style={{ maxWidth: paragraphWidth }}
        >
          {paragraph}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
