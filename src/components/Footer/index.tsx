'use client';

import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { localBusinessSchema } from "@/app/config/pageSchema"; // ✅ import du schéma centralisé

const Footer = () => {
  const footerLinks = {
    services: {
      title: "Nos Services",
      links: [
        { name: "Conciergerie Airbnb", href: "/conciergerie" },
        { name: "Gestion Locative", href: "/gestion-locative" },
        { name: "Nos Biens", href: "/nos-biens" },
        { name: "Estimation Gratuite", href: "/estimation" },
      ],
    },
    company: {
      title: "Entreprise",
      links: [
        { name: "À propos", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Témoignages", href: "/#testimonials" },
        { name: "Contact", href: "/contact" },
      ],
    },
    legal: {
      title: "Légal",
      links: [
        { name: "Mentions légales", href: "/mentions-legales" },
        { name: "CGV", href: "/conditions-generales-vente" },
        { name: "Politique de confidentialité", href: "/politique-confidentialite" },
        { name: "Cookies", href: "/cookies" },
      ],
    },
  };

  return (
    <footer aria-labelledby="footer-title" className="bg-gray-950 text-white relative">
      <h2 id="footer-title" className="sr-only">
        Pied de page – Les Clés d’Alsace
      </h2>

      {/* --- Section principale --- */}
      <div aria-labelledby="footer-main" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 id="footer-main" className="sr-only">Informations et navigation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Identité + contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#0072FF] to-[#E63946] flex items-center justify-center shadow-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 22V12H15V22"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold">Les Clés d’Alsace</div>
                <div className="text-sm text-gray-400">Conciergerie Premium</div>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Votre partenaire de confiance pour la gestion locative et la conciergerie Airbnb à Mulhouse et ses environs.
              <span className="text-accent font-semibold"> +40% de revenus garantis</span>.
            </p>

            <div aria-labelledby="footer-contact" className="space-y-3">
              <h4 id="footer-contact" className="sr-only">Coordonnées de contact</h4>
              <a href="tel:+33621471922" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-accent" />
                <span>06 21 47 19 22</span>
              </a>
              <a href="mailto:lesclefsdalsace@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-accent" />
                <span>lesclefsdalsace@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <span>Mulhouse, Alsace<br />France</span>
              </div>
            </div>
          </div>

          {/* Liens dynamiques */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} aria-labelledby={`footer-${key}`}>
              <h3 id={`footer-${key}`} className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* --- Bas de page --- */}
      <div className="border-t border-gray-800" aria-labelledby="footer-bottom">
        <h3 id="footer-bottom" className="sr-only">Bas de page et réseaux sociaux</h3>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Les Clés d’Alsace. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com/clefsdalsace" target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#0072FF] flex items-center justify-center transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/clefsdalsace" target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E63946] flex items-center justify-center transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/company/clefsdalsace" target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#0072FF] flex items-center justify-center transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* --- Import du schéma JSON-LD --- */}
      <Script
        id="ld-json-footer"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </footer>
  );
};

export default Footer;