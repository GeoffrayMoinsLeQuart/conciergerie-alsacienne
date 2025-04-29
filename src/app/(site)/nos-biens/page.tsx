import Properties from '@/components/Property';
import { fetchProperties } from '@/sanity/sanity-utils';
import { getMetadata } from '@/app/config/pageMetadata';

export const revalidate = 3600;

export const metadata = getMetadata('nos-biens');

export default async function PropertiesPage() {
  const properties = await fetchProperties();

  return (
    <main id="nos-biens" aria-labelledby="properties-title">
      <section className="bg-white pt-10 sm:pt-16 lg:pt-20">
        <div className="container mx-auto px-4">
          <header className="mb-10 text-center">
            <h1 id="properties-title" className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
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
