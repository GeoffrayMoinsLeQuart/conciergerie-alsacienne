// app/revenus/page.tsx
import RevenueCalculator from '@/components/Home/RevenueCalculator';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import { getMetadata } from '@/app/config/pageMetadata';
import { makeRevenueCalculatorSchema } from '@/app/config/pageSchema';

export const metadata = getMetadata('revenus');

export default function RevenueCalculatorPage() {
  const schema = makeRevenueCalculatorSchema();

  return (
    <>
      {/* ✅ Injection SEO structurée */}
      <SeoSchemaInjector schema={schema} />

      <main id="revenus" aria-label="Calculateur de rentabilité locative">
        <section className="py-24 bg-gradient-to-b from-[#FFFDFB] to-[#FFF8F6] relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* HEADER */}
            <div className="text-center mb-16">
              <p className="text-xs tracking-widest uppercase text-[#7A869A] mb-3">
                Simulateur en ligne
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Calculez vos <span className="text-[#E63946]">revenus potentiels</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez combien votre bien peut rapporter grâce à notre gestion optimisée.
              </p>
            </div>

            {/* CALCULATEUR */}
            <div className="max-w-4xl mx-auto">
              <RevenueCalculator />
            </div>

            {/* FOOTNOTE */}
            <div className="text-center mt-8 text-sm text-gray-500">
              Basé sur les données réelles des Clés d’Alsace • Simulation indicative sans engagement
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
