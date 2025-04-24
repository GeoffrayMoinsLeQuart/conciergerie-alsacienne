import Link from "next/link";
import Image from "next/image";
import { Calculator, Mail } from "lucide-react";
import CTAButtons from "@/components/Buttons/CTAButtons";

export default function Hero() {
  return (
    <section className="relative mb-24 overflow-hidden bg-cover bg-center bg-no-repeat">
      <div className="bg-white/90">
        <div className="container mx-auto flex flex-col items-center justify-center pt-20 text-center md:min-h-screen">
          {/* Responsive Image */}
          <div className="w-full">
            <Image
              src="https://res.cloudinary.com/dx96rdxwk/image/upload/v1717939157/Immobilier/website/Header-desktop_nddksd.webp"
              alt="marketing market"
              width={1200}
              height={500}
              className="mx-auto hidden rounded-lg md:block"
              priority
            />
            <Image
              src="https://res.cloudinary.com/dx96rdxwk/image/upload/v1717939157/Immobilier/website/Header-tablet_uczvdn.webp"
              alt="marketing market"
              width={800}
              height={400}
              className="mx-auto hidden rounded-lg sm:block md:hidden"
              priority
            />
            <Image
              src="https://res.cloudinary.com/dx96rdxwk/image/upload/v1717939157/Immobilier/website/Header-mobil_kvve7t.webp"
              alt="marketing market"
              width={400}
              height={300}
              className="mx-auto rounded-lg sm:hidden"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="mt-10 text-center">
            <h1 className={`mb-4 text-2xl font-bold text-black md:text-3xl`}>
              Conciergerie & Gestion Locative à Mulhouse
            </h1>

            <p className="text-xl text-gray-600">
              Votre partenaire 100% alsacien pour une gestion haut de gamme de
              vos locations courte durée.
            </p>
            <p className="mb-8 text-xl text-gray-600">
              Proximité, exigence, sérénité.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-center">
              <CTAButtons
                primary={{
                  label: "Estimer mes revenus",
                  href: "/simulateur",
                  icon: <Calculator className="h-5 w-5" />,
                }}
                secondary={{
                  label: "Nous contacter",
                  href: "/contact",
                  icon: <Mail className="h-5 w-5" />,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
