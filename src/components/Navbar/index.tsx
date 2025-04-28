"use client";

import { navbarData } from '@/static-data/navbar';
import { onScroll } from '@/utils/scrollActive';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
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
                alt="Logo Conciergerie Alsacienne"
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
              <span
                className={`${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
              />
            </span>
            <span
              className={`block h-[2px] w-[30px] bg-dark my-[6px] ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span className="block h-[2px] w-[30px] bg-dark my-[6px] transition-transform">
              <span
                className={`${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
              />
            </span>
          </button>

          {/* Nav */}
          <nav
            id="navbar"
            className={`absolute top-full right-4 w-full max-w-[250px] rounded-lg bg-white p-5 shadow-lg transition-all duration-300 ease-in-out lg:static lg:block lg:max-w-none lg:bg-transparent lg:p-0 lg:shadow-none ${
              menuOpen ? 'block' : 'hidden'
            }`}
            role="navigation"
            aria-label="Navigation principale"
          >
            <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-center">
              {navbarData.map(item => (
                <li key={item.id} className="relative group lg:px-5">
                  {item.href ? (
                    <Link
                      href={item.external ? item.href : `/${item.href}`}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-2 text-base text-black transition hover:text-primary lg:py-6 ${
                        pathname === `/${item.href}` ? 'text-primary font-semibold' : ''
                      }`}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <span className="block py-2 text-base text-black lg:py-6">
                        {item.title}
                      </span>
                      {item.submenu && (
                        <ul className="lg:absolute lg:top-full lg:left-0 mt-2 space-y-2 rounded-lg bg-white p-4 shadow-lg lg:invisible lg:group-hover:visible lg:group-hover:opacity-100 lg:opacity-0 transition-opacity duration-300">
                          {item.submenu.map(sub => (
                            <li key={sub.id}>
                              <Link
                                href={sub.href}
                                onClick={() => setMenuOpen(false)}
                                className={`block px-4 py-2 text-sm transition hover:text-primary ${
                                  pathname === sub.href ? 'text-primary font-semibold' : ''
                                }`}
                              >
                                {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>

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
