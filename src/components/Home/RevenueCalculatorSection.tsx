'use client';

import RevenueCalculator from '@/components/Home/RevenueCalculator';

export default function RevenueCalculatorSection() {
  return (
    <section id="revenus" className="py-20 bg-gradient-to-b from-[#FFFDFB] to-[#FFF8F6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs tracking-widest uppercase text-[#7A869A] mb-2">Simulateur rapide</p>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Calculez vos <span className="text-[#E63946]">revenus potentiels</span>
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez combien vous pourriez gagner avec votre bien.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <RevenueCalculator />
        </div>
      </div>
    </section>
  );
}
