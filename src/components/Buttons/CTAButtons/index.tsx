'use client';

import Link from 'next/link';
import { cn } from '@/utils/utils';
import { FC, ReactNode } from 'react';

interface CTAButtonProps {
  primary?: {
    label: string;
    href: string;
    icon?: ReactNode;
    colorClass?: string;
  };
  secondary?: {
    label: string;
    href: string;
    icon?: ReactNode;
    colorClass?: string;
  };
}

const CTAButtons: FC<CTAButtonProps> = ({ primary, secondary }) => {
  if (!primary && !secondary) return null;

  return (
    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      {primary && (
        <Link
          href={primary.href}
          className={cn(
            'inline-flex items-center justify-center rounded-2xl px-6 py-4 text-base font-semibold shadow-md transition',
            primary.colorClass || 'bg-primary text-white hover:bg-opacity-90',
          )}
        >
          {primary.icon && (
            <span className="mr-2 flex h-5 w-5 items-center justify-center">{primary.icon}</span>
          )}
          {primary.label}
        </Link>
      )}

      {secondary && (
        <Link
          href={secondary.href}
          className={cn(
            'inline-flex items-center justify-center rounded-2xl border px-6 py-4 text-base font-semibold transition',
            secondary.colorClass || 'border-primary text-primary hover:bg-primary hover:text-white',
          )}
        >
          {secondary.icon && (
            <span className="mr-2 flex h-5 w-5 items-center justify-center">{secondary.icon}</span>
          )}
          {secondary.label}
        </Link>
      )}
    </div>
  );
};

export default CTAButtons;
