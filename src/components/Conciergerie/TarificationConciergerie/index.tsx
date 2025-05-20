'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';
import SectionTitle from '@/components/Common/SectionTitle';
import { t } from '@/app/libs/content';
import { Mail, Check } from 'lucide-react';
import CTAButtons from '@/components/Buttons/CTAButtons';

const MotionArticle = dynamic(() => import('framer-motion').then((mod) => mod.motion.article), {
  ssr: false,
});
const MotionSpan = dynamic(() => import('framer-motion').then((mod) => mod.motion.span), {
  ssr: false,
});

interface Plan {
  name: string;
  price: string;
  features: string[];
  recommended: boolean;
  badge?: string | null;
  href: string;
}

const Tarification: FC = () => {
  const pageKey = 'conciergerie';
  const baseKey = 'Conciergerie.Tarification';

  const mainTitle = t(pageKey, `${baseKey}.mainTitle`) as string;
  const title = t(pageKey, `${baseKey}.title`) as string;
  const paragraph = t(pageKey, `${baseKey}.paragraph`) as string;
  const plans = t(pageKey, `${baseKey}.plans`) as Plan[];
  const choiceFormule = t(pageKey, `${baseKey}.choiceFormule`) as string;
  const ctaLabel = t(pageKey, `${baseKey}.ctaLabel`) as string;

  return (
    <section id="tarifs" aria-labelledby="tarifs-heading" className="bg-[#f8f9ff] py-24">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <SectionTitle
            id="tarifs-heading"
            mainTitle={mainTitle}
            title={title}
            paragraph={paragraph}
            center
          />
        </header>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {plans.map((plan, index) => {
            const cardBg = plan.recommended
              ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white'
              : 'bg-white text-gray-900';
            return (
              <MotionArticle
                key={index}
                className={`relative flex flex-col justify-between rounded-2xl p-8 pt-10 shadow-pricing transition-transform duration-300 hover:scale-[1.02] ${cardBg}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                aria-label={`Offre ${plan.name}`}
              >
                {plan.recommended && plan.badge && (
                  <MotionSpan
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute right-4 top-2 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-primary shadow-sm"
                  >
                    ⭐ {plan.badge}
                  </MotionSpan>
                )}

                <header className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                  <p className="text-lg font-bold opacity-80">{plan.price}</p>
                </header>

                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check size={18} className="mt-1 shrink-0 text-green-500" />
                      <span className="text-base leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.href}
                  role="button"
                  className={`mt-auto inline-block w-full rounded-lg px-6 py-3 text-center text-sm font-semibold transition ${
                    plan.recommended
                      ? 'bg-white text-primary hover:bg-white/80'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                  aria-label={`Choisir ${plan.name}`}
                >
                  {choiceFormule}
                </a>
              </MotionArticle>
            );
          })}
        </div>
        <footer className="mt-14 text-center">
          <CTAButtons
            primary={{
              label: ctaLabel,
              href: '/contact',
              icon: <Mail className="h-5 w-5" />,
              colorClass: 'bg-primary text-white hover:bg-opacity-90',
            }}
          />
        </footer>
      </div>
    </section>
  );
};

export default Tarification;
