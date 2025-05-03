'use client';

import { navbarData, SECTION_CONFIG } from '@/static-data/navbar';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

interface DesktopMenuProps {
  scrollToSection: (id: string) => void;
}

export default function DesktopMenu({ scrollToSection }: DesktopMenuProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleSubClick = (path: string, anchor: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === path) {
      scrollToSection(anchor);
      return;
    }
    router.push(`${path}#${anchor}`, { scroll: false });
    setTimeout(() => scrollToSection(anchor), 100);
  };

  return (
    <nav
      id="navbar"
      className="hidden lg:block"
      role="navigation"
      aria-label="Navigation principale"
    >
      <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-center">
        {navbarData.map((item) => {
          const path = item.external ? item.href! : `/${item.href}`;
          const submenu = SECTION_CONFIG[path] || [];
          return (
            <li key={item.id} className="relative group lg:px-5">
              <Link
                href={path}
                onClick={() => {}}
                className={`flex items-center py-2 text-base text-black transition hover:text-primary lg:py-6 ${
                  pathname === path ? 'text-primary font-semibold' : ''
                }`}
                aria-haspopup={submenu.length > 0}
              >
                {item.title}
                {submenu.length > 0 && <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />}
              </Link>
              {submenu.length > 0 && (
                <ul
                  className="
                    absolute left-0 top-full mt-0.5 w-max rounded-lg bg-white p-2 shadow-lg
                    opacity-0 translate-y-1 pointer-events-none
                    group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                    transition-all duration-200
                  "
                  role="menu"
                  aria-label={`Sous-menu ${item.title}`}
                >
                  {submenu.map(({ id, label }) => (
                    <li key={id} role="presentation">
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
