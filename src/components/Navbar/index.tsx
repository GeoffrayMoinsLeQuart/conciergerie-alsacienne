'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { onScroll } from '@/utils/scrollActive';
import MobileSubmenu from './MobileSubmenu';
import DesktopSubmenu from './DesktopSubmenu';

export const useHydrationCheck = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated;
};

export default function Navbar() {
  const isHydrated = useHydrationCheck();

  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Sticky header
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY >= 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Home scrollspy
  useEffect(() => {
    if (pathname === '/') {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, [pathname]);

  // scroll with 56px offset
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 56;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  if (!isHydrated) return null; // ❗ Solution : bloquer rendu client avant hydratation

  return (
    <header
      className={`header left-0 top-0 z-40 w-full items-center transition ${
        sticky ? 'sticky-navbar' : 'absolute bg-transparent'
      }`}
      role="banner"
    >
      <div className="mx-auto w-full px-4 xl:container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="block py-6 lg:py-8" aria-label="Retour à l'accueil">
            <div className="relative h-10 w-[175px]">
              <Image
                src="/images/logo/logo.svg"
                alt="Logo les Clés d'Alsace"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100px, 175px"
                priority
              />
            </div>
          </Link>

          {/* Burger (mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
            className="lg:hidden rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary"
          >
            <span className="block h-[2px] w-[30px] bg-dark my-[6px] transition-transform origin-center transform-gpu">
              <span className={`${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            </span>
            <span
              className={`block h-[2px] w-[30px] bg-dark my-[6px] ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span className="block h-[2px] w-[30px] bg-dark my-[6px] transition-transform">
              <span className={`${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </span>
          </button>

          {/* Mobile menu */}
          <MobileSubmenu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            scrollToSection={scrollToSection}
          />

          {/* Desktop menu */}
          <DesktopSubmenu scrollToSection={scrollToSection} />

          {/* CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/contact"
              className="whitespace-nowrap rounded-full bg-primary px-6 py-3 text-base font-bold text-white hover:bg-opacity-90 hover:shadow-md transition"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
