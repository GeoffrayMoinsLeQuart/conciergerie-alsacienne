'use client';

import SectionTitle from '../../Common/SectionTitle';
import { FC, useState } from 'react';
import { ShieldCheck, UserCheck, Sparkles, Calculator } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import CTAButtons from '@/components/Buttons/CTAButtons';
import dynamic from 'next/dynamic';
import { t } from '@/app/libs/content';

const MotionArticle = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.article),
  { ssr: false }
);

interface PlanData {
  name: string;
  price: string;
  priceLabel: string;
  tagline?: string;
  tag?: string;
  inheritsFrom?: string;
  features: string[];
  bgClass: string;
  textClass: string;
  button: { text: string; href: string; style: string };
  icon: string;
  iconButton: string;
}

const iconMap = {
  ShieldCheck,
  UserCheck,
  Sparkles,
  Calculator
};

const TarificationGestionLocative: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pageKey = 'gestionLocative';
  const baseKey = 'GestionLocative.TarificationGestionLocative';

  const mainTitle         = t(pageKey, `${baseKey}.mainTitle`)         as string;
  const title             = t(pageKey, `${baseKey}.title`)             as string;
  const paragraph         = t(pageKey, `${baseKey}.paragraph`)         as string;
  const modalButtonLabel  = t(pageKey, `${baseKey}.modalButtonLabel`)  as string;
  const plans             = t(pageKey, `${baseKey}.plans`)             as PlanData[];
  const comparison        = t(pageKey, `${baseKey}.comparison`)        as string[];
  const simulator         = t(pageKey, `${baseKey}.simulator`)         as {
    heading: string;
    paragraph: string;
    buttonLabel: string;
    buttonHref: string;
  };

  const planHasFeature = (plan: PlanData, feature: string) => {
    if (plan.inheritsFrom) {
      const parent = plans.find((p) => p.name === plan.inheritsFrom);
      if (parent && parent.features.includes(feature)) return true;
    }
    return plan.features.includes(feature);
  };

  return (
    <section
      className="bg-white py-20 lg:py-[120px]"
      id="tarifs"
      aria-label="Tarification Gestion Locative"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          mainTitle={mainTitle}
          title={title}
          paragraph={paragraph}
          center
        />

        <div className="mb-10 flex justify-center">
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-full border border-primary bg-white px-6 py-2 text-sm font-medium text-primary shadow-sm transition hover:bg-primary hover:text-white"
          >
            {modalButtonLabel}
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan, idx) => {
            const Icon     = iconMap[plan.icon as keyof typeof iconMap];
            const IconBtn  = iconMap[plan.iconButton as keyof typeof iconMap];
            return (
              <MotionArticle
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col justify-between rounded-2xl border border-gray-200 p-8 shadow-md transition duration-300 ease-in-out hover:shadow-xl ${plan.bgClass}`}
              >
                {plan.tag && (
                  <span className="absolute -top-4 left-6 rounded-full bg-primary px-4 py-1 text-sm font-medium text-white shadow-md">
                    {plan.tag}
                  </span>
                )}

                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className={`text-xl font-bold ${plan.textClass}`}>
                      {plan.name}
                    </h3>
                  </div>

                  {plan.tagline && (
                    <p className="mb-4 text-sm italic text-gray-500">
                      {plan.tagline}
                    </p>
                  )}

                  <div className="mb-6 flex items-baseline text-3xl font-bold text-primary">
                    <span>{plan.price}</span>
                    <span className="ml-2 text-base font-medium text-gray-500">
                      {plan.priceLabel}
                    </span>
                  </div>

                  <ul className="mb-8 space-y-2 text-sm text-gray-700">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <CTAButtons
                  primary={{
                    label: plan.button.text,
                    href: plan.button.href,
                    colorClass: plan.button.style,
                    icon: <IconBtn className="h-5 w-5" aria-hidden="true" />
                  }}
                />
              </MotionArticle>
            );
          })}
        </div>

        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-4xl rounded-xl bg-white p-6 shadow-xl">
              <Dialog.Title className="mb-6 text-xl font-bold text-gray-800">
                Tableau comparatif des formules
              </Dialog.Title>
              <div className="overflow-auto">
                <table className="w-full table-auto border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b text-gray-700">
                      <th className="px-4 py-2 font-semibold">Fonctionnalités</th>
                      {plans.map((plan) => (
                        <th key={plan.name} className="px-4 py-2 text-center">
                          {plan.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((feature) => (
                      <tr key={feature} className="border-t">
                        <td className="px-4 py-2 text-gray-700">{feature}</td>
                        {plans.map((plan) => (
                          <td key={plan.name} className="px-4 py-2 text-center">
                            {planHasFeature(plan, feature) ? '✓' : '-'}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>

        <div className="mx-auto mt-16 w-full rounded-xl border border-primary bg-primary bg-opacity-5 px-6 py-8 text-center shadow-sm lg:max-w-[600px]">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 flex flex-col items-center justify-center gap-2 sm:flex-row">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary bg-opacity-10">
                <Calculator className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800">
                {simulator.heading}
              </h4>
            </div>
            <p className="mb-6 text-sm text-gray-600">
              {simulator.paragraph}
            </p>
            <CTAButtons
              primary={{
                label: simulator.buttonLabel,
                href: simulator.buttonHref,
                icon: <Calculator className="h-5 w-5" aria-hidden="true" />,
                colorClass: 'bg-primary text-white hover:bg-opacity-90'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TarificationGestionLocative;
