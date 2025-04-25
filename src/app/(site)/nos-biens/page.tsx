import { Metadata } from 'next';
import Properties from '@/components/Property';
import { fetchProperties } from '@/sanity/sanity-utils';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Biens en gestion courte et longue durée | Conciergerie Alsacienne',
  description:
    'Découvrez des logements soignés, rentables, gérés avec attention. Une vitrine de notre méthode et de notre engagement.',
  openGraph: {
    title: 'Nos biens en location à Mulhouse, Colmar et alentours',
    description: 'Du studio rénové à la maison familiale, chaque bien reflète notre exigence.',
    url: 'https://www.conciergerie-alsacienne.fr/nos-biens',
    siteName: 'Conciergerie Alsacienne',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Des logements performants sous notre gestion',
    description: 'Optimisation, sérénité, résultats. En images.',
  },
};

export default async function PropertiesPage() {
  const properties = await fetchProperties();

  return (
    <main id="nos-biens" aria-labelledby="properties-title">
      <section className="bg-white pt-10 sm:pt-16 lg:pt-20">
        <div className="container mx-auto px-4">
          <header className="mb-10 text-center">
            <h1
              id="properties-title"
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            >
              Nos biens en gestion
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Studios, T2 ou maisons, en courte ou longue durée : découvrez les logements que nous
              gérons, optimisés pour la rentabilité et la satisfaction voyageurs.
            </p>
          </header>

          {properties && properties.length > 0 ? (
            <Properties properties={properties} />
          ) : (
            <div className="py-20 text-center text-gray-600" role="status" aria-live="polite">
              Aucun bien à afficher pour le moment.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
