'use client';

import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function FloatingCallButton() {
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  const excluded = [
    '/mentions-legales',
    '/conditions-generales-vente',
    '/politique-confidentialite',
    '/cookies',
    '/merci', // ✅ ajouté ici
  ];

  // Scroll-up / scroll-down behavior
  useEffect(() => {
    if (excluded.includes(pathname)) {
      setHidden(true);
      return;
    }
    setHidden(false);

    let lastY = window.pageYOffset;
    let ticking = false;
    const handleScroll = () => {
      const currentY = window.pageYOffset;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setHidden(currentY > lastY && currentY > 100);
          lastY = Math.max(currentY, 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Do not render on excluded paths
  if (excluded.includes(pathname)) return null;

  return (
    <a
      href="tel:0033621471922"
      aria-label="Appeler les Clés d'Alsace"
      title="Appelez-nous"
      className={`
        fixed bottom-4 right-4 w-14 h-14 rounded-full flex items-center justify-center
        bg-primary text-white shadow-lg z-50 transition-transform duration-300 ease-in-out
        sm:hidden
        active:bg-[#C8102E]
        focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400
        ${hidden ? 'translate-y-20 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}
      `}
    >
      <Phone className="w-6 h-6" aria-hidden="true" />
    </a>
  );
}
