import { getMetadata } from '@/app/config/pageMetadata';
import SimulateurClient from './SimulateurClient';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import { estimationSchema } from '@/app/config/pageSchema';

export const metadata = getMetadata('estimation');

export default function EstimationPage() {
  return (
    <>
      {/* Injection unique du schéma JSON-LD */}
      <SeoSchemaInjector schema={estimationSchema} />

      {/* Simulateur côté client */}
      <SimulateurClient />
    </>
  );
}
