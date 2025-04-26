// src/components/Intro.tsx
import { FC } from 'react';
import { Calculator, Sparkles } from 'lucide-react';
import Image from 'next/image';
import CTAButtons from '@/components/Buttons/CTAButtons';

interface IntroProps {
  variant: 'conciergerie' | 'gestion';
}

const IntroContent = {
  conciergerie: {
    title: 'Conciergerie haut de gamme et optimisation locative',
    content: [
      'Confiez-nous la gestion de votre bien en location courte durée en toute sérénité.',
      "Notre équipe locale s'occupe de tout : préparation du logement, accueil voyageurs, ménage, suivi technique et ajustements tarifaires.",
      'Offrez une expérience inoubliable à vos hôtes — et des revenus vraiment optimisés à votre patrimoine.',
    ],
    image:
      'https://res.cloudinary.com/dx96rdxwk/image/upload/v1745434488/Conciergerie%20alsacienne/Icon%20landing/Conciergerie/ChatGPT_Image_Apr_23_2025_08_23_19_PM_1_nam8th.webp',
    buttons: {
      primary: {
        text: 'Discuter de mon projet',
        href: '/contact',
        icon: <Sparkles className="h-5 w-5" aria-hidden="true" />,
      },
      secondary: {
        text: 'Estimer mes revenus',
        href: '/simulateur',
        icon: <Calculator className="h-5 w-5" aria-hidden="true" />,
      },
    },
  },
  gestion: {
    title: 'Gestion locative haut de gamme en Alsace',
    content: [
      'Libérez-vous des contraintes, confiez-nous votre bien.',
      'Nous assurons une gestion rigoureuse et humaine : loyers garantis, relation locataire fluide, entretien maîtrisé.',
      'Sérénité et rentabilité, sans compromis.',
    ],
    image:
      'https://res.cloudinary.com/dx96rdxwk/image/upload/v1745434488/Conciergerie%20alsacienne/Icon%20landing/Conciergerie/ChatGPT_Image_Apr_23_2025_08_23_19_PM_1_nam8th.webp',
    buttons: {
      primary: {
        text: 'Estimer mes revenus',
        href: '/simulateur',
        icon: <Calculator className="h-5 w-5" aria-hidden="true" />,
      },
      secondary: {
        text: 'Nous contacter',
        href: '/contact',
        icon: <Sparkles className="h-5 w-5" aria-hidden="true" />,
      },
    },
  },
};

const Intro: FC<IntroProps> = ({ variant }) => {
  const { title, content, image, buttons } = IntroContent[variant];

  return (
    <section
      id="intro"
      aria-labelledby="intro-heading"
      className="relative bg-white pb-20 pt-[120px] lg:pb-[110px] lg:pt-[150px]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 lg:w-6/12 xl:w-6/12">
            <header className="grid gap-6 text-center lg:text-left">
              <h1
                id="intro-heading"
                className="mb-3 text-3xl font-bold leading-snug text-dark sm:text-5xl"
              >
                {title}
              </h1>
              <div className="mx-auto mb-6 max-w-[480px] space-y-2 text-lg text-body-color lg:mx-0">
                {content.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              <CTAButtons
                primary={{
                  label: buttons.primary.text,
                  href: buttons.primary.href,
                  icon: buttons.primary.icon,
                  colorClass: 'bg-primary text-white hover:bg-opacity-90 focus:ring-2 focus:ring-primary',
                }}
                secondary={{
                  label: buttons.secondary.text,
                  href: buttons.secondary.href,
                  icon: buttons.secondary.icon,
                }}
              />
            </header>
          </div>

          <div className="mt-10 w-full px-4 lg:mt-0 lg:w-6/12">
            <div className="relative flex w-full lg:justify-end">
              {/* Décorations abstraites */}
              <div
                aria-hidden="true"
                className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-[#E0E7FF] opacity-30 blur-2xl"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-primary opacity-20 blur-sm"
              />

              {/* Image mise en cache et réservée */}
              <div className="relative z-10 flex aspect-[491/515] w-full max-w-[491px]">
                <Image
                  src={image}
                  alt={
                    variant === 'conciergerie'
                      ? 'Illustration conciergerie haut de gamme en Alsace'
                      : 'Illustration gestion locative premium en Alsace'
                  }
                  width={846}
                  height={563}
                  priority
                  className="h-auto w-full rounded-2xl object-cover shadow-lg"
                />
                {/* Motif décoratif SVG */}
                <span aria-hidden="true" className="absolute -bottom-8 -left-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {[...Array(5)].flatMap((_, row) =>
                      [...Array(5)].map((_, col) => (
                        <circle
                          key={`${row}-${col}`}
                          cx={2.5 + 22 * col}
                          cy={2.5 + 22 * row}
                          r="2.5"
                          fill="#3056D3"
                        />
                      ))
                    )}
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
