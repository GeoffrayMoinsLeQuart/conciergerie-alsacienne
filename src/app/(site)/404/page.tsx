import { getMetadata } from '@/app/config/pageMetadata';
import CommonCard from '@/components/Common/CommonCard';
import Link from 'next/link';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import { errorSchema } from '@/app/config/pageSchema';

export const metadata = getMetadata('error');

export default function ErrorPage() {
  return (
    <section className="py-[120px] lg:pt-[200px]">
      {/* Injection du schéma JSON-LD */}
      <SeoSchemaInjector schema={errorSchema} />

      <div className="px-4 xl:container">
        <CommonCard>
          <div className="relative pt-6 text-center md:pt-8">
            <span className="mb-2 block text-lg font-semibold text-primary">OPPS!</span>
            <h1 className="font-heading mb-5 text-3xl font-semibold text-dark sm:text-4xl md:text-[50px] md:leading-[60px]">
              Page Not found!
            </h1>
          </div>
          <p className="mb-6 text-center text-body-color">
            This page&nbsp;can&#39;t found. Thank you for being us. Please back to home page.
          </p>
          <div className="flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded bg-primary px-8 py-[14px] text-sm font-semibold text-white"
            >
              Go to Home Page
            </Link>
          </div>
        </CommonCard>
      </div>
    </section>
  );
}
