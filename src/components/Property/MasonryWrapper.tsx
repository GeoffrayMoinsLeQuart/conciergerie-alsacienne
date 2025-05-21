'use client';

import { ReactNode } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

interface MasonryWrapperProps {
  children: ReactNode;
  columnsCountBreakPoints: Record<number, number>;
  gutter?: string;
}

export default function MasonryWrapper({
  children,
  columnsCountBreakPoints,
  gutter = '30px',
}: MasonryWrapperProps) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
      <Masonry gutter={gutter}>{children}</Masonry>
    </ResponsiveMasonry>
  );
}
