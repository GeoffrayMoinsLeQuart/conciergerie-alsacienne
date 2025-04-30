'use client';

import { navbarData, SECTION_CONFIG } from '@/static-data/navbar';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, MouseEvent } from 'react';
import { ChevronDown } from 'lucide-react';

interface MobileMenuProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

export default function MobileMenu({ menuOpen, setMenuOpen }: MobileMenuProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  // scroll with 56px offset
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 56;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  // click handler for submenu links
  const handleSubClick = (path: string, anchor: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMenuOpen(false);

    if (pathname === path) {
      scrollToSection(anchor);
      return;
    }
    router.push(`${path}#${anchor}`, { scroll: false });
    setTimeout(() => scrollToSection(anchor), 100);
  };

  return (
    <nav
      id="navbar-mobile"
      className={`absolute top-full right-4 z-50 mt-2 w-64 rounded-lg bg-white p-4 shadow-md transition-all duration-200 ease-in-out
        ${menuOpen ? 'block' : 'hidden'}
        lg:hidden`}
      role="navigation"
      aria-label="Navigation mobile"
    >
      <ul className="flex flex-col gap-1">
        {navbarData.map((item) => {
          const path = item.external ? item.href! : `/${item.href}`;
          const submenu = SECTION_CONFIG[path] || [];
          const isOpen = openItemId === item.id;

          return (
            <li key={item.id} className="relative">
              <div className="flex items-center justify-between">
                {/* titre principal : navigation normale */}
                <Link
                  href={path}
                  onClick={() => setMenuOpen(false)}
                  className={`py-2 text-base text-black hover:text-primary transition ${
                    pathname === path ? 'text-primary font-semibold' : ''
                  }`}
                >
                  {item.title}
                </Link>

                {/* chevron : toggle sous-menu */}
                {submenu.length > 0 && (
                  <button
                    aria-label={`${isOpen ? 'Fermer' : 'Ouvrir'} sous-menu ${item.title}`}
                    onClick={() =>
                      setOpenItemId((prev) =>
                        prev === item.id.toString() ? null : item.id.toString(),
                      )
                    }
                    className="p-2 focus:outline-none"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transform transition-transform duration-150 ${
                        openItemId === item.id.toString() ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* accordéon */}
              {submenu.length > 0 && (
                <ul
                  className={`overflow-hidden transition-[max-height] duration-200 ease-in-out ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                  role="menu"
                  aria-label={`Sous-menu ${item.title}`}
                >
                  {submenu.map(({ id, label }) => (
                    <li key={id}>
                      <Link
                        href={`${path}#${id}`}
                        scroll={false}
                        onClick={handleSubClick(path, id)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-primary"
                        role="menuitem"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
