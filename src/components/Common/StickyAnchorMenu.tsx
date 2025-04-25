'use client';

import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

const SECTIONS = [
  { id: 'selection', label: 'Sélection' },
  { id: 'transformations', label: 'Transformations' },
  { id: 'prestations', label: 'Prestations' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'processus', label: 'Processus' },
  { id: 'tarifs', label: 'Tarifs' },
  { id: 'faq', label: 'FAQ' },
];

export default function StickyAnchorMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  // Affichage du menu uniquement après scroll de 200px
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - 52;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      setIsOpenMobile(false);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop - Horizontal sticky menu */}
      <div className="sticky top-[64px] z-40 hidden w-full bg-white shadow-sm lg:block">
        <div className="container mx-auto flex justify-center gap-6 py-3 text-sm font-medium text-gray-700">
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="rounded px-3 py-1 hover:text-primary"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile - Floating button menu */}
      <div className="fixed bottom-4 left-4 z-50 lg:hidden">
        <button
          onClick={() => setIsOpenMobile((prev) => !prev)}
          className="rounded-full bg-primary p-3 text-white shadow-lg"
        >
          <Menu className="h-5 w-5" />
        </button>
        {isOpenMobile && (
          <div className="mt-2 w-48 rounded-lg bg-white p-3 shadow-lg">
            {SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="block w-full text-left px-2 py-1 text-sm text-gray-800 hover:text-primary"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
