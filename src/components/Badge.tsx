// src/components/Badge.tsx
'use client';

import React, { ReactNode } from 'react';

interface BadgeProps {
  icon: ReactNode;
  children: ReactNode;
  variant?: 'filled' | 'outline';
  className?: string;
}

export default function Badge({ icon, children, variant = 'filled', className = '' }: BadgeProps) {
  const baseClasses = 'inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold';
  const variantClasses =
    variant === 'filled'
      ? 'bg-primary text-white border border-transparent'
      : 'bg-white text-primary border-2 border-primary';

  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`}>
      {icon}
      {children}
    </span>
  );
}
