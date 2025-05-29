'use client';

import CTAButtons from '@/components/Buttons/CTAButtons';
import dynamic from 'next/dynamic';
import { t } from '@/app/libs/content';
import Badge from '@/components/Badge';
import { Calculator, Clock, Mail, User } from 'lucide-react';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false,
});

export default function HeroClient() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-10 min-h-[200px]"
    >
      <h1 id="hero-title" className="mb-4 text-2xl font-bold text-black md:text-3xl lg:text-4xl">
        {t('home', 'Hero.title')}
      </h1>
      <p className="text-lg text-gray-600 md:text-xl">{t('home', 'Hero.subtitle')}</p>
      <p className="mb-8 text-lg text-gray-600 md:text-xl">{t('home', 'Hero.tagline')}</p>

      <div className="flex flex-wrap justify-center gap-6 mb-8 min-h-[40px]">
        <Badge icon={<Clock className="w-4 h-4" />} variant="filled">
          Réponse en 24 h garantie
        </Badge>
        <Badge icon={<User className="w-4 h-4" />} variant="outline">
          Conseiller dédié
        </Badge>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center min-h-[48px]">
        <CTAButtons
          primary={{
            label: t('home', 'Hero.primaryLabel'),
            href: '/estimation',
            icon: <Calculator className="h-5 w-5" />,
          }}
          secondary={{
            label: t('home', 'Hero.secondaryLabel'),
            href: '/contact',
            icon: <Mail className="h-5 w-5" />,
          }}
        />
      </div>
    </MotionDiv>
  );
}
