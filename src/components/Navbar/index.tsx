'use client';

import { navbarData } from '@/static-data/navbar';
import { onScroll } from '@/utils/scrollActive';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
// import GlobalSearchModal from '../GlobalSearch';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Gestion du sticky menu
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy sur la home uniquement
  useEffect(() => {
    if (pathname === '/') {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, [pathname]);

  return (
    <>
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

            {/* Burger menu (mobile) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Ouvrir le menu de navigation"
              className="lg:hidden rounded-lg px-3 py-2 ring-primary focus:ring-2"
            >
              <span className="block h-[2px] w-[30px] bg-dark my-[6px] transition-transform origin-center transform-gpu">
                <span
                  className={`block transition-transform ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
                />
              </span>
              <span
                className={`block h-[2px] w-[30px] bg-dark my-[6px] ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span className="block h-[2px] w-[30px] bg-dark my-[6px] transition-transform">
                <span
                  className={`block transition-transform ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
                />
              </span>
            </button>

            {/* Menu principal */}
            <nav
              id="navbar"
              className={`absolute top-full right-4 w-full max-w-[250px] rounded-lg bg-white p-5 shadow-lg transition-all duration-300 ease-in-out lg:static lg:block lg:max-w-none lg:bg-transparent lg:p-0 lg:shadow-none ${
                menuOpen ? 'block' : 'hidden'
              }`}
              role="navigation"
              aria-label="Navigation principale"
            >
              <ul className="flex flex-col gap-2 lg:flex-row lg:items-center">
                {navbarData.map((item) => (
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
                        <button
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          aria-haspopup="true"
                          aria-expanded={dropdownOpen}
                          className="flex items-center justify-between w-full py-2 text-base text-black hover:text-primary lg:py-6"
                        >
                          {item.title}
                          <svg
                            className={`ml-2 h-4 w-4 transition-transform ${
                              dropdownOpen ? 'rotate-180' : ''
                            }`}
                            viewBox="0 0 14 8"
                            fill="currentColor"
                          >
                            <path d="M6.54564 5.09128L11.6369 0L13.0913 1.45436L6.54564 8L0 1.45436L1.45436 0L6.54564 5.09128Z" />
                          </svg>
                        </button>

                        {item.submenu && (
                          <ul
                            className={`mt-2 space-y-2 rounded-lg bg-white p-4 shadow-lg lg:absolute lg:top-full lg:left-0 lg:mt-0 lg:w-[250px] lg:opacity-0 lg:invisible lg:group-hover:visible lg:group-hover:opacity-100 transition-opacity duration-300 ${
                              dropdownOpen ? 'block' : 'hidden lg:block'
                            }`}
                          >
                            {item.submenu.map((sub) => (
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

            {/* CTA (desktop only) */}
            <div className="hidden items-center gap-4 lg:flex">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-6 py-3 text-base font-bold text-white hover:bg-opacity-90 hover:shadow-md transition"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* 🔍 Future recherche globale (à activer si nécessaire) */}
      {/* {searchModalOpen && (
        <GlobalSearchModal
          searchModalOpen={searchModalOpen}
          setSearchModalOpen={setSearchModalOpen}
        />
      )} */}
    </>
  );
}
