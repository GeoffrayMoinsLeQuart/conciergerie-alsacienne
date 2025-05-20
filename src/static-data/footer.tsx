import { FooterLink, FooterSocial } from '@/types/footer';
import { v4 as uuid } from 'uuid';

export const footerLinks: FooterLink[] = [
  {
    id: uuid(),
    title: 'Conciergerie',
    href: '/conciergerie',
    external: false,
  },
  {
    id: uuid(),
    title: 'Gestion Locative',
    href: '/gestion-locative',
    external: false,
  },
  {
    id: uuid(),
    title: 'Nos Biens',
    href: '/nos-biens',
    external: false,
  },
  {
    id: uuid(),
    title: 'Nous Contacter',
    href: '/contact',
    external: false,
  },
];

export const footerNewsData: FooterLink[] = [
  {
    id: uuid(),
    title: 'Conseils Propriétaires',
    href: '/blog',
    external: false,
  },
  {
    id: uuid(),
    title: 'Actualités Airbnb',
    href: '/blog',
    external: false,
  },
  {
    id: uuid(),
    title: 'Tourisme en Alsace',
    href: '/blog',
    external: false,
  },
  {
    id: uuid(),
    title: 'Témoignages',
    href: '/#testimonial',
    external: false,
  },
];

export const footerQuickLinks: FooterLink[] = [
  {
    id: uuid(),
    title: 'Accueil',
    href: '/',
    external: false,
  },
  {
    id: uuid(),
    title: 'Demander un Devis',
    href: '/contact',
    external: false,
  },
  {
    id: uuid(),
    title: 'À Propos',
    href: '/about',
    external: false,
  },
  {
    id: uuid(),
    title: 'Mentions Légales',
    href: '/mentions-legales',
    external: false,
  },
];

export const footerSocialLinks: FooterSocial[] = [
  {
    id: uuid(),
    label: 'Facebook',
    title: 'Facebook',
    href: 'https://facebook.com/conciergerie',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12.1 10.494V7.42717C12.1 6.23996 13.085 5.27753 14.3 5.27753H16.5V2.05308L13.5135 1.84464C10.9664 1.66688 8.8 3.63794 8.8 6.13299V10.494H5.5V13.7184H8.8V20.1668H12.1V13.7184H15.4L16.5 10.494H12.1Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: uuid(),
    label: 'Twitter',
    title: 'Twitter',
    href: 'https://twitter.com/conciergerie',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: uuid(),
    label: 'LinkedIn',
    title: 'LinkedIn',
    href: 'https://linkedin.com/company/conciergerie',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M6.94043 5.00002C6.94017 5.53046 6.7292 6.03906 6.35394 6.41394C5.97868 6.78883 5.46986 6.99929 4.93943 6.99902C4.409 6.99876 3.90039 6.78779 3.52551 6.41253C3.15062 6.03727 2.94016 5.52846 2.94043 4.99802C2.9407 4.46759 3.15166 3.95899 3.52692 3.5841C3.90218 3.20922 4.411 2.99876 4.94143 2.99902C5.47186 2.99929 5.98047 3.21026 6.35535 3.58552C6.73024 3.96078 6.9407 4.46959 6.94043 5.00002ZM7.00043 8.48002H3.00043V21H7.00043V8.48002ZM13.3204 8.48002H9.34043V21H13.2804V14.43C13.2804 10.77 18.0504 10.43 18.0504 14.43V21H22.0004V13.07C22.0004 6.90002 14.9404 7.13002 13.2804 10.16L13.3204 8.48002Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];
