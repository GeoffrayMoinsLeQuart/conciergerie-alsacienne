'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';
import CTAButtons from '@/components/Buttons/CTAButtons';
import { Clock, Sparkles, User } from 'lucide-react';
import { t } from '@/app/libs/content';
import Badge from '@/components/Badge';

const MotionSection = dynamic(() => import('framer-motion').then((mod) => mod.motion.section), {
  ssr: false,
});

const CTAConciergerie: FC = () => {
  const pageKey = 'conciergerie';
  const baseKey = 'Conciergerie.CTAConciergerie';

  const heading = t(pageKey, `${baseKey}.heading`) as string;
  const paragraph = t(pageKey, `${baseKey}.paragraph`) as string;
  const buttonLabel = t(pageKey, `${baseKey}.secondaryLabel`) as string;
  const buttonHref = t(pageKey, `${baseKey}.secondaryHref`) as string;

  return (
    <MotionSection
      id="cta"
      role="contentinfo"
      aria-labelledby="cta-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-primary py-20 text-center"
    >
      <div className="container mx-auto max-w-3xl px-4">
        <header>
          <h2 id="cta-heading" className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {heading}
          </h2>
          <p className="mb-6 text-white text-opacity-90">{paragraph}</p>
        </header>

        <div className="flex justify-center gap-6 mb-8">
          {/* Badge 1 : fond blanc, texte et bordure blancs pour contraste */}
          <Badge
            icon={<Clock className="w-4 h-4" />}
            variant="outline"
            className="border-white text-white bg-white/10"
          >
            Réponse en 24 h garantie
          </Badge>

          {/* Badge 2 : fond blanc plein, texte primary */}
          <Badge
            icon={<User className="w-4 h-4" />}
            variant="outline"
            className="bg-white text-primary"
          >
            Conseiller dédié
          </Badge>
        </div>

        <CTAButtons
          secondary={{
            label: buttonLabel,
            href: buttonHref,
            icon: <Sparkles className="h-5 w-5" />,
            colorClass: 'bg-white text-primary border-white hover:bg-primary hover:text-white',
          }}
        />
      </div>
    </MotionSection>
  );
};

export default CTAConciergerie;
