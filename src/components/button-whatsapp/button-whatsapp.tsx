'use client';

import Link from 'next/link';

interface WhatsappButtonProps {
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

export default function WhatsappButton({ color }: WhatsappButtonProps) {
  const baseClass =
    'inline-block text-white text-lg font-medium py-3 px-6 rounded-md transition';

  const colorClasses = {
    inherit: 'bg-gray-500 hover:bg-gray-600',
    primary: 'bg-primary hover:bg-primary/90',
    secondary: 'bg-secondary hover:bg-secondary/90',
    success: 'bg-green-600 hover:bg-green-700',
    error: 'bg-red-600 hover:bg-red-700',
    info: 'bg-blue-600 hover:bg-blue-700',
    warning: 'bg-yellow-500 hover:bg-yellow-600',
  };

  const selectedClass = color ? colorClasses[color] ?? colorClasses.inherit : colorClasses.inherit;

  return (
    <Link href="https://wa.me/+33621471922" target="_blank" rel="noopener noreferrer">
      <button
        type="button"
        aria-label="contact-us-whatsapp"
        className="rounded-md bg-black px-6 py-3 font-medium text-white"
        >
        Avez vous WhatsApp?
      </button>
    </Link>
  );
}