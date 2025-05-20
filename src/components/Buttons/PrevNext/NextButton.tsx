import React, { FC, ButtonHTMLAttributes } from 'react';
import { ArrowRight } from 'lucide-react';

interface NextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

/**
 * Bouton “Suivant” avec icône lucide
 */
const NextButton: FC<NextButtonProps> = ({
  label = 'Suivant',
  onClick,
  'aria-label': ariaLabel,
  disabled = false,
  ...props
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel ?? label}
    disabled={disabled}
    className={`
      w-full sm:w-auto
      px-6 py-3
      rounded-lg
      bg-primary text-white hover:bg-primary/90
      transition-colors
      focus:outline-none focus:ring-2 focus:ring-primary
      inline-flex items-center justify-center
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    `}
    {...props}
  >
    {label}
    <ArrowRight className="ml-2" size={16} aria-hidden="true" />
  </button>
);

export default NextButton;
