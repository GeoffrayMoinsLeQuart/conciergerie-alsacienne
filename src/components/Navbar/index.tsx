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

  if (!isHydrated) return null;

  return (
    <header
      className={`header fixed top-0 left-0 z-50 w-full transition ${
        sticky ? 'sticky-navbar' : 'bg-white/95 backdrop-blur-md'
      } h-[74px] lg:h-[80px] flex items-center`}
      role="banner"
    >
      <div className="mx-auto w-full px-4 xl:container">
        {/* Container aligné verticalement */}
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Retour à l'accueil">
            <div className="relative h-12 w-[110px] lg:h-12 lg:w-[140px]">
              <Image
                src="/images/logo/logo.svg"
                alt="Logo Les Clés d'Alsace"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 80px, 150px"
                priority
              />
            </div>
          </Link>

          {/* Burger menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
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

          {/* Mobile menu */}
          <MobileSubmenu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            scrollToSection={scrollToSection}
          />

          {/* Desktop menu */}
          <DesktopSubmenu scrollToSection={scrollToSection} />

          {/* CTA Desktop */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/contact"
              className="whitespace-nowrap rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white hover:bg-opacity-90 hover:shadow-md transition"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
