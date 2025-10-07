import { NavbarItem } from '@/types/navbar';
import { v4 as uuid } from 'uuid';

export const navbarData: NavbarItem[] = [
  {
    id: uuid(),
    title: 'Accueil',
    href: '/',
    external: false,
  },
  {
    id: uuid(),
    title: 'Conciergerie',
    href: 'conciergerie',
    external: false,
  },
  {
    id: uuid(),
    title: 'Gestion locative',
    href: 'gestion-locative',
    external: false,
  },

  {
    id: uuid(),
    title: 'Blog',
    href: 'blog',
    external: false,
  },
  {
    id: uuid(),
    title: 'FAQ',
    href: 'faq',
    external: false,
  },
  // {
  //   id: uuid(),
  //   title: "Pages",
  //   submenu: [
  //     {
  //       id: uuid(),
  //       title: "Home Page",
  //       href: "/",
  //       external: false,
  //     },
  //     {
  //       id: uuid(),
  //       title: "Services Page",
  //       href: "/service",
  //       external: false,
  //     },
  //     {
  //       id: uuid(),
  //       title: "Portfolio Page",
  //       href: "/portfolio",
  //     },
  //     {
  //       id: uuid(),
  //       title: "Blog Page",
  //       href: "/blog",
  //       external: false,
  //     },
  //     {
  //       id: uuid(),
  //       title: "Contact Page",
  //       href: "/contact",
  //     },
  //     {
  //       id: uuid(),
  //       title: "Docs",
  //       href: "/docs",
  //       external: false,
  //     },
  //     {
  //       id: uuid(),
  //       title: "Sign in",
  //       href: "/auth/signin",
  //       external: false,
  //     },
  //     {
  //       id: uuid(),
  //       title: "Sign up",
  //       href: "/auth/signup",
  //       external: false,
  //     },
  //     {
  //       id: uuid(),
  //       title: "Error 404",
  //       href: "/404",
  //       external: false,
  //     },
  //   ],
  // },
];

// src/config/sectionConfig.ts
export const SECTION_CONFIG: Record<string, { id: string; label: string }[]> = {
  '/conciergerie': [
    { id: 'selection', label: 'Sélection' },
    { id: 'transformations', label: 'Transformations' },
    { id: 'prestations', label: 'Prestations' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'processus', label: 'Processus' },
    { id: 'tarifs', label: 'Tarifs' },
    { id: 'faq', label: 'FAQ' },
  ],
  '/gestion-locative': [
    { id: 'processus', label: 'Prestations' },
    { id: 'profils', label: 'Profils' },
    { id: 'garanties', label: 'Garanties' },
    { id: 'temoignages', label: 'Témoignages' },
    { id: 'tarifs', label: 'Tarifs' },
    { id: 'faq', label: 'FAQ' },
  ],
};
