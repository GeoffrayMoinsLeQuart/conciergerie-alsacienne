// src/components/Common/StickyAnchorMenu.tsx
'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { t } from '@/app/libs/content';

const pageKey = 'conciergerie';

type Section = { id: string; label: string };

export default function StickyAnchorMenu() {
  const pathname = usePathname() || '';
  const allSections = t(
    pageKey,
    'Conciergerie.StickyAnchorMenu.sections'
  ) as Record<string, Section[]>;
  const sections: Section[] = allSections[pathname] || [];

  // Aria labels from JSON
  const navAriaLabel = t(
    pageKey,
    'Conciergerie.StickyAnchorMenu.navAriaLabel'
  ) as string;
  const mobileButtonAriaLabel = t(
    pageKey,
    'Conciergerie.StickyAnchorMenu.mobileButtonAriaLabel'
  ) as string;
  const mobileMenuAriaLabel = t(
    pageKey,
    'Conciergerie.StickyAnchorMenu.mobileMenuAriaLabel'
  ) as string;

  const [isVisible, setIsVisible] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

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

  if (!isVisible || sections.length === 0) return null;

  return (
    <>
      {/* Desktop */}
      <nav
        className="sticky top-[100px] z-40 hidden w-full bg-white shadow-sm lg:block"
        role="navigation"
        aria-label={navAriaLabel}
      >
        <div className="container mx-auto flex justify-center gap-6 py-3 text-sm font-medium text-gray-700">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="rounded px-3 py-1 hover:text-primary"
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile */}
      <div className="fixed bottom-4 left-4 z-50 lg:hidden">
        <button
          onClick={() => setIsOpenMobile((prev) => !prev)}
          className="rounded-full bg-primary p-3 text-white shadow-lg"
          aria-label={mobileButtonAriaLabel}
        >
          <Menu className="h-5 w-5" />
        </button>
        {isOpenMobile && (
          <div
            className="mt-2 w-48 rounded-lg bg-white p-3 shadow-lg"
            role="menu"
            aria-label={mobileMenuAriaLabel}
          >
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="block w-full text-left px-2 py-1 text-sm text-gray-800 hover:text-primary"
                role="menuitem"
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
