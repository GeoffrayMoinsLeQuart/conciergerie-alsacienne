import React, { FC, ButtonHTMLAttributes } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrevButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

/**
 * Bouton “Retour” avec icône lucide
 */
const PrevButton: FC<PrevButtonProps> = ({
  label = 'Retour',
  onClick,
  'aria-label': ariaLabel,
  ...props
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel ?? label}
    className="
      w-full sm:w-auto
      px-6 py-3
      rounded-lg
      bg-gray-200 hover:bg-gray-300
      transition-colors
      focus:outline-none focus:ring-2 focus:ring-gray-400
      inline-flex items-center justify-center
    "
    {...props}
  >
    <ArrowLeft className="mr-2" size={16} aria-hidden="true" />
    {label}
  </button>
);

export default PrevButton;
