import Link from 'next/link';
import { footerLinks, footerNewsData, footerQuickLinks, footerSocialLinks } from '@/static-data/footer';
import { FC } from 'react';

const Footer: FC = () => (
  <footer
    id="footer"
    aria-labelledby="footer-heading"
    className="relative bg-black text-white overflow-hidden"
  >
    {/* Invisible heading for accessibility */}
    <h2 id="footer-heading" className="sr-only">
      Pied de page
    </h2>

    <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Contact */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Contactez-nous</h3>
        <address className="not-italic mb-6">
          <p className="text-body-color mb-1">contact@conciergerie-alsacienne.fr</p>
          <p className="text-body-color mb-1">15 Rue des Fleurs, 68100 Mulhouse</p>
          <p className="text-body-color">+33 3 89 XX XX XX</p>
        </address>
      </div>

      {/* Services */}
      <nav aria-labelledby="services-heading">
        <h3 id="services-heading" className="text-xl font-semibold mb-4">
          Nos Services
        </h3>
        <ul className="space-y-2">
          {footerLinks.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="text-body-color hover:text-primary transition"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Blog */}
      <nav aria-labelledby="blog-heading">
        <h3 id="blog-heading" className="text-xl font-semibold mb-4">
          Blog
        </h3>
        <ul className="space-y-2">
          {footerNewsData.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="text-body-color hover:text-primary transition"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Quick Links */}
      <nav aria-labelledby="quicklinks-heading">
        <h3 id="quicklinks-heading" className="text-xl font-semibold mb-4">
          Liens Rapides
        </h3>
        <ul className="space-y-2">
          {footerQuickLinks.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="text-body-color hover:text-primary transition"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-white border-opacity-10 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Social Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          {footerSocialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-body-color text-dark rounded-full hover:bg-primary hover:text-white transition"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-body-color text-sm">
          &copy; {new Date().getFullYear()} Conciergerie Alsacienne. Tous droits réservés.
        </p>
      </div>
    </div>

    {/* Decorative Graphics */}
    <div
      className="pointer-events-none absolute -bottom-16 -left-16 opacity-20"
      aria-hidden="true"
    >
      <svg
        width="143"
        height="138"
        viewBox="0 0 143 138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="25"
          cy="118"
          r="101"
          stroke="url(#footer-gradient)"
          strokeWidth="34"
        />
        <defs>
          <linearGradient
            id="footer-gradient"
            x1="-12.7969"
            y1="-37.3359"
            x2="99.2109"
            y2="173.773"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div
      className="pointer-events-none absolute top-0 right-0 opacity-10 transform translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    >
      <svg
        width="61"
        height="77"
        viewBox="0 0 61 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5" fill="white">
          {Array.from({ length: 25 }).map((_, i) => {
            const cols = 5;
            const x = 1.66683 + (i % cols) * 14.3333;
            const y = 1.66667 + Math.floor(i / cols) * 14.6665;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="1.66667"
                transform={`rotate(90 ${x} ${y})`}
              />
            );
          })}
        </g>
      </svg>
    </div>

    {/* JSON-LD Organization Schema */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Conciergerie Alsacienne',
          url: 'https://www.conciergerie-alsacienne.fr',
          logo: 'https://www.conciergerie-alsacienne.fr/logo.png',
          sameAs: footerSocialLinks.map((l) => l.href),
        }),
      }}
    />
  </footer>
);

export default Footer;
