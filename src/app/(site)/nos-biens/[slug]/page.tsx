import { t } from '@/app/libs/content';
import PageTitle from '@/components/Common/PageTitle';
import { fetchProperties, getPropertyBySlug, imageBuilder } from '@/sanity/sanity-utils';
import { notFound } from 'next/navigation';
import MarkdownRenderer from '@/utils/markdownConfig';
import Link from 'next/link';
import ProjectDetailsGallery from '@/components/Gallery/property-gallery';
import { Metadata } from 'next';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import { makePropertyPageSchema } from '@/app/config/pageSchema';

export const revalidate = 600;
const pageKey = 'nosBiens';
const baseKey = 'NosBiens';

export async function generateStaticParams() {
  const properties = await fetchProperties();
  return properties
    .filter((p) => !!p.slug?.current)
    .map((property) => ({ slug: property.slug.current }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  const siteURL = process.env.SITE_URL || 'https://www.conciergerie-alsacienne.fr';
  const siteName = 'Conciergerie Alsacienne';

  if (!property) {
    return {
      title: `Bien introuvable | ${siteName}`,
      description: "Ce bien n'existe plus ou a été retiré de notre catalogue.",
      robots: { index: false, follow: false },
    };
  }

  const imageUrl = property.imagePrincipale
    ? imageBuilder(property.imagePrincipale).url()
    : `${siteURL}/default-property.jpg`;

  const fullTitle = `${property.name} | ${siteName}`;
  const description = property.shortDescription || property.longDescription?.slice(0, 155) || '';

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: `${siteURL}/nos-biens/${property.slug.current}`,
      siteName,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: property.name }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: { index: true, follow: true },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  if (!property) return notFound();

  const schema = makePropertyPageSchema(property);

  const {
    name,
    shortDescription,
    longDescription,
    modeGestion,
    revenuMensuel,
    occupation,
    loyer,
    surface,
    nbChambres,
    categories,
    imagePrincipale,
    galleryImage,
  } = property;

  // slides
  const slides: { src: string; alt: string }[] = [];
  if (imagePrincipale) {
    slides.push({
      src: imageBuilder(imagePrincipale).url(),
      alt: shortDescription || 'Image principale',
    });
  }
  galleryImage?.forEach((img) =>
    slides.push({
      src: imageBuilder(img).url(),
      alt: img.caption || 'Image additionnelle',
    }),
  );

  // prev / next
  const all = await fetchProperties();
  const idx = all.findIndex((p) => p.slug?.current === slug);
  const prev = all[idx - 1];
  const next = all[idx + 1];

  // JSON-LD
  return (
    <>
      <SeoSchemaInjector schema={schema} />

      <PageTitle
        pageTitle={t(pageKey, `${baseKey}.pageTitle`) as string}
        pageDescription={t(pageKey, `${baseKey}.pageDescription`) as string}
        showMenu={false}
      />

      <section
        id="nos-biens"
        aria-label={t(pageKey, `${baseKey}.pageAriaLabel`) as string}
        className="bg-white pb-20 pt-[90px]"
      >
        <div className="container mx-auto px-4">
          <div className="-mx-5 flex flex-wrap gap-y-10">
            {/* GAUCHE */}
            <div className="w-full px-5 lg:w-8/12">
              <ProjectDetailsGallery slides={slides} />

              {/* Infos clé MOBILE */}
              <div className="mt-10 block lg:hidden">
                <ul className="divide-y divide-gray-200 border-t text-sm text-gray-700">
                  {surface && (
                    <li className="flex justify-between py-2">
                      <span className="font-medium">
                        {t(pageKey, `${baseKey}.mobileInfo.surface`)}
                      </span>
                      <span>{surface} m²</span>
                    </li>
                  )}
                  {modeGestion && (
                    <li className="flex justify-between py-2">
                      <span className="font-medium">
                        {t(pageKey, `${baseKey}.mobileInfo.gestion`)}
                      </span>
                      <span>{modeGestion}</span>
                    </li>
                  )}
                  {nbChambres != null && (
                    <li className="flex justify-between py-2">
                      <span className="font-medium">
                        {t(pageKey, `${baseKey}.mobileInfo.chambres`)}
                      </span>
                      <span>{nbChambres}</span>
                    </li>
                  )}
                  {loyer && modeGestion === 'Gestion Locative' && (
                    <li className="flex justify-between py-2">
                      <span className="font-medium">
                        {t(pageKey, `${baseKey}.mobileInfo.loyer`)}
                      </span>
                      <span>{loyer} €</span>
                    </li>
                  )}
                  {revenuMensuel && modeGestion === 'Conciergerie' && (
                    <li className="flex justify-between py-2">
                      <span className="font-medium">
                        {t(pageKey, `${baseKey}.mobileInfo.revenu`)}
                      </span>
                      <span>{revenuMensuel} €</span>
                    </li>
                  )}
                  {occupation && modeGestion === 'Conciergerie' && (
                    <li className="flex justify-between py-2">
                      <span className="font-medium">
                        {t(pageKey, `${baseKey}.mobileInfo.occupation`)}
                      </span>
                      <span>{occupation}%</span>
                    </li>
                  )}
                  {categories?.length > 0 && (
                    <li className="flex justify-between py-2">
                      <span className="font-medium">
                        {t(pageKey, `${baseKey}.mobileInfo.type`)}
                      </span>
                      <span>{categories.map((c) => c.value).join(', ')}</span>
                    </li>
                  )}
                </ul>
              </div>

              {/* DESCRIPTION */}
              <h1 className="mb-7 mt-8 text-2xl font-bold text-black sm:text-4xl lg:text-3xl">
                {name}
              </h1>
              {longDescription && (
                <div className="prose max-w-none">
                  <MarkdownRenderer markdownContent={longDescription} />
                </div>
              )}

              {/* CTA MOBILE */}
              <div className="mt-12 block rounded-md border border-[#D7DFFF] bg-[#F8F9FF] px-6 py-8 lg:hidden">
                <h3 className="mb-6 text-xl font-bold text-primary">
                  {t(pageKey, `${baseKey}.cta.heading`)}
                </h3>
                <p className="mb-5 text-sm text-body-color">
                  {t(pageKey, `${baseKey}.cta.paragraph`)}
                </p>
                <Link
                  href={t(pageKey, `${baseKey}.cta.buttonHref`) as string}
                  className="inline-block rounded bg-primary px-6 py-3 text-white hover:bg-primary/90"
                >
                  {t(pageKey, `${baseKey}.cta.buttonLabel`)}
                </Link>
              </div>

              {/* NAV prev/next */}
              <div className="mt-16 flex justify-between text-sm text-primary">
                {prev ? (
                  <Link href={`/nos-biens/${prev.slug.current}`}>
                    {t(pageKey, `${baseKey}.prevLabel`)}
                  </Link>
                ) : (
                  <span />
                )}
                {next && (
                  <Link href={`/nos-biens/${next.slug.current}`}>
                    {t(pageKey, `${baseKey}.nextLabel`)}
                  </Link>
                )}
              </div>
            </div>

            {/* DROITE DESKTOP */}
            <div className="hidden px-5 lg:block lg:w-4/12">
              <div className="mb-8 rounded-md border border-[#D7DFFF] bg-[#F8F9FF] px-6 py-8">
                <h3 className="mb-6 text-xl font-bold text-primary">
                  {t(pageKey, `${baseKey}.infoKeyTitle`)}
                </h3>
                <ul className="space-y-3 text-base text-body-color">
                  {modeGestion && (
                    <li className="flex justify-between">
                      <span className="font-medium">
                        {t(pageKey, `${baseKey}.mobileInfo.gestion`)}
                      </span>
                      <span>{modeGestion}</span>
                    </li>
                  )}
                  {surface && (
                    <li className="flex justify-between">
                      <span className="font-medium">
                        {t(pageKey, `${baseKey}.mobileInfo.surface`)}
                      </span>
                      <span>{surface} m²</span>
                    </li>
                  )}
                  {nbChambres != null && (
                    <li className="flex justify-between">
                      <span className="font-medium">
                        {t(pageKey, `${baseKey}.mobileInfo.chambres`)}
                      </span>
                      <span>{nbChambres}</span>
                    </li>
                  )}
                  {loyer && modeGestion === 'Gestion Locative' && (
                    <li className="flex justify-between">
                      <span className="font-medium">
                        {t(pageKey, `${baseKey}.mobileInfo.loyer`)}
                      </span>
                      <span>{loyer} €</span>
                    </li>
                  )}
                  {revenuMensuel && modeGestion === 'Conciergerie' && (
                    <li className="flex justify-between">
                      <span className="font-medium">
                        {t(pageKey, `${baseKey}.mobileInfo.revenu`)}
                      </span>
                      <span>{revenuMensuel} €</span>
                    </li>
                  )}
                  {occupation && modeGestion === 'Conciergerie' && (
                    <li className="flex justify-between">
                      <span className="font-medium">
                        {t(pageKey, `${baseKey}.mobileInfo.occupation`)}
                      </span>
                      <span>{occupation}%</span>
                    </li>
                  )}
                  {categories?.length > 0 && (
                    <li className="flex justify-between">
                      <span className="font-medium">
                        {t(pageKey, `${baseKey}.mobileInfo.type`)}
                      </span>
                      <span>{categories.map((c) => c.value).join(', ')}</span>
                    </li>
                  )}
                </ul>
              </div>

              <div className="rounded-md border border-[#D7DFFF] bg-[#F8F9FF] px-6 py-8">
                <h3 className="mb-6 text-xl font-bold text-primary">
                  {t(pageKey, `${baseKey}.cta.heading`)}
                </h3>
                <p className="mb-5 text-sm text-body-color">
                  {t(pageKey, `${baseKey}.cta.paragraph`)}
                </p>
                <Link
                  href={t(pageKey, `${baseKey}.cta.buttonHref`) as string}
                  className="inline-block rounded bg-primary px-6 py-3 text-white hover:bg-primary/90"
                >
                  {t(pageKey, `${baseKey}.cta.buttonLabel`)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
