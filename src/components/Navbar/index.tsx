'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { onScroll } from '@/utils/scrollActive';
import MobileSubmenu from './MobileSubmenu';
import DesktopSubmenu from './DesktopSubmenu';

export const useHydrationCheck = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => setIsHydrated(true), []);
  return isHydrated;
};

export default function Navbar() {
  const isHydrated = useHydrationCheck();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Sticky
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY >= 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ScrollSpy home
  useEffect(() => {
    if (pathname === '/') {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, [pathname]);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 56;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  if (!isHydrated) return null;

  return (
    <header
      id="site-header"
      aria-labelledby="main-navigation-label"
      role="banner"
      className={`header fixed top-0 left-0 z-50 w-full transition ${
        sticky ? 'sticky-navbar' : 'bg-white/95 backdrop-blur-md'
      } h-[74px] lg:h-[80px] flex items-center`}
    >
      <div className="mx-auto w-full px-4 xl:container">
        {/* Rangée principale */}
        <div className="flex items-center justify-between h-full">
          {/* Logo (gauche) */}
          <Link
            href="/"
            aria-label="Retour à la page d’accueil Les Clés d’Alsace"
            className="flex items-center"
          >
            <div className="relative h-12 w-[110px] lg:h-12 lg:w-[140px]">
              <Image
                src="/images/logo/logo.svg"
                alt="Logo Les Clés d’Alsace"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 80px, 150px"
              />
            </div>
          </Link>
          {/* Zone droite : pousse tout à droite */}
          {/* Bouton burger (mobile ONLY) */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="lg:hidden flex flex-col justify-center items-center h-10 w-10 rounded-md hover:bg-gray-100 transition"
          >
            <span
              className={`block h-[2px] w-[22px] bg-dark transition-transform duration-200 ${
                menuOpen ? 'rotate-45 translate-y-[6px]' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-[22px] bg-dark my-[4px] transition-opacity duration-200 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-[22px] bg-dark transition-transform duration-200 ${
                menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
              }`}
            />
          </button>
          {/* Menu desktop */}
          <MobileSubmenu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            scrollToSection={scrollToSection}
          />
          <DesktopSubmenu scrollToSection={scrollToSection} />
          {/* CTA Desktop */}
          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="whitespace-nowrap rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white hover:bg-opacity-90 hover:shadow-md transition"
              aria-label="Demander un devis ou une estimation gratuite"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
