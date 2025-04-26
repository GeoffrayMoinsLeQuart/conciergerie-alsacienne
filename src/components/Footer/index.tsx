'use client';

import Link from 'next/link';
import { footerLinks, footerNewsData, footerQuickLinks } from '@/static-data/footer';
import { v4 as uuid } from 'uuid';

// Social links data
const footerSocialLinks = [
  {
    id: uuid(),
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

const FooterLinkItem = ({
  title,
  href,
  external,
}: {
  title: string;
  href: string;
  external?: boolean;
}) => (
  <li>
    <Link
      href={href}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-block text-base text-body-color hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
    >
      {title}
    </Link>
  </li>
);

const FooterContact = () => (
  <section aria-labelledby="footer-contact" className="mb-10">
    <h2 id="footer-contact" className="sr-only">
      Coordonnées
    </h2>
    <div>
      <p className="mb-4 text-3xl font-bold text-white">Contactez-nous !</p>
      <address className="not-italic space-y-1 text-body-color">
        <a
          href="mailto:contact@conciergerie-alsacienne.fr"
          className="block hover:text-primary transition-colors"
        >
          contact@conciergerie-alsacienne.fr
        </a>
        <span>15 Rue des Fleurs, 68100 Mulhouse</span>
        <a href="tel:+33389XXXXXX" className="block hover:text-primary transition-colors">
          +33 3 89 XX XX XX
        </a>
      </address>
    </div>
  </section>
);

const FooterGraphic = () => (
  <div aria-hidden="true">
    <div className="absolute bottom-0 left-0 -z-10">
      <svg
        width="143"
        height="138"
        viewBox="0 0 143 138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="118" r="101" stroke="url(#gradient1)" strokeWidth="34" />
        <defs>
          <linearGradient
            id="gradient1"
            x1="-12.8"
            y1="-37.3"
            x2="99.2"
            y2="173.8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div className="absolute right-3 top-3 -z-10 opacity-50">
      <svg
        width="61"
        height="77"
        viewBox="0 0 61 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          {[...Array(25)].map((_, i) => {
            const x = (i % 5) * 14 + 1.67;
            const y = Math.floor(i / 5) * 14 + 1.67;
            return <circle key={i} cx={x} cy={y} r="1.67" fill="white" />;
          })}
        </g>
      </svg>
    </div>
  </div>
);

const FooterBottom = () => (
  <div className="mt-10 border-t border-white/10 pt-12 text-center">
    <div className="mb-5 flex justify-center space-x-4">
      {footerSocialLinks.map(({ id, href, title, icon }) => (
        <a
          key={id}
          href={href}
          aria-label={title}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-body-color text-dark hover:bg-primary hover:text-white transition-colors"
        >
          {icon}
        </a>
      ))}
    </div>
    <p className="text-base font-medium text-body-color">
      &copy; {new Date().getFullYear()} Conciergerie Alsacienne. Tous droits réservés.
    </p>
  </div>
);

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 mb-16">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12">
            <FooterContact />
          </div>
          <nav aria-label="Nos Services" className="w-full px-4 md:w-1/2 lg:w-3/12 mb-10">
            <h3 className="mb-6 text-xl font-semibold text-white">Nos Services</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <FooterLinkItem key={link.id} {...link} />
              ))}
            </ul>
          </nav>
          <nav aria-label="Blog" className="w-full px-4 md:w-1/2 lg:w-2/12 mb-10">
            <h3 className="mb-6 text-xl font-semibold text-white">Blog</h3>
            <ul className="space-y-3">
              {footerNewsData.map((link) => (
                <FooterLinkItem key={link.id} {...link} />
              ))}
            </ul>
          </nav>
          <nav aria-label="Liens Rapides" className="w-full px-4 md:w-1/2 lg:w-3/12 mb-10">
            <h3 className="mb-6 text-xl font-semibold text-white">Liens Rapides</h3>
            <ul className="space-y-3">
              {footerQuickLinks.map((link) => (
                <FooterLinkItem key={link.id} {...link} />
              ))}
            </ul>
          </nav>
        </div>

        <FooterBottom />
      </div>

      <FooterGraphic />
    </footer>
  );
}
