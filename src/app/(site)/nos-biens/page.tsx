import Properties from '@/components/Property';
import { fetchProperties } from '../../../../lib/sanity/sanity-utils';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import { getMetadata } from '@/app/config/pageMetadata';
import { makePropertiesSchema } from '@/app/config/pageSchema';
import { t } from '@/app/libs/content';
import type { Property } from '@/types/property';

export const revalidate = 3600;
export const metadata = getMetadata('nos-biens');

export default async function PropertiesPage() {
  // Récupération SSR des biens
  const properties: Property[] = await fetchProperties();
  // Génération du JSON-LD structuré
  const schema = makePropertiesSchema(properties);

  // Texte externalisé
  const pageKey = 'nos-biens';
  const hero = t(pageKey, 'NosBiens.hero') as { title: string; description: string };
  const noItems = t(pageKey, 'NosBiens.noItems.message') as string;
  const aria = t(pageKey, 'NosBiens.pageAriaLabel') as string;

  return (
    <>
      {/* Injection unique du schéma JSON-LD */}
      <SeoSchemaInjector schema={schema} />

      <main id="nos-biens" aria-labelledby="properties-title" aria-label={aria}>
        <section className="bg-white pt-10 sm:pt-16 lg:pt-20">
          <div className="container mx-auto px-4">
            <header className="mb-10 text-center">
              <h1
                id="properties-title"
                className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
              >
                {hero.title}
              </h1>
              <p className="mt-4 text-lg text-gray-600">{hero.description}</p>
            </header>

            {properties.length > 0 ? (
              <Properties properties={properties} />
            ) : (
              <div className="py-20 text-center text-gray-600" role="status" aria-live="polite">
                {noItems}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
