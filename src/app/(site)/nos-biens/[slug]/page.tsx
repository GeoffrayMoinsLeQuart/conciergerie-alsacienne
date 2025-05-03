import PageTitle from '@/components/Common/PageTitle';
import { fetchProperties, getPropertyBySlug, imageBuilder } from '@/sanity/sanity-utils';
import { notFound } from 'next/navigation';
import MarkdownRenderer from '@/utils/markdownConfig';
import Link from 'next/link';
import ProjectDetailsGallery from '@/components/Gallery/property-gallery';
import { Metadata } from 'next';
import Script from 'next/script';
import { generateBreadcrumbList } from '@/utils/BreadcrumbGenerator';

export const revalidate = 600;

export async function generateStaticParams() {
  const properties = await fetchProperties();
  return properties
    .filter((p) => !!p.slug?.current)
    .map((property) => ({
      slug: property.slug.current,
    }));
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

  const description =
    property.shortDescription?.slice(0, 155) ||
    `Découvrez ce bien pris en charge par notre conciergerie, entre rigueur et performance.`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: `${siteURL}/nos-biens/${property.slug.current}`,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: property.name,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ✅ NE PAS utiliser "await params"
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const property = await getPropertyBySlug(slug); // ✅ Plus efficace que fetchAll puis .find()

  if (!property) return notFound();

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

  const slides = [];

  if (imagePrincipale) {
    slides.push({
      src: imageBuilder(imagePrincipale).url(),
      alt: shortDescription || 'Image principale',
    });
  }

  if (galleryImage?.length > 0) {
    galleryImage.forEach((img) => {
      slides.push({
        src: imageBuilder(img).url(),
        alt: img.caption || 'Image additionnelle',
      });
    });
  }

  // Optional: navigation entre propriétés (si tu veux vraiment garder ça avec ISR)
  const allProperties = await fetchProperties();
  const currentIndex = allProperties.findIndex((p) => p.slug?.current === slug);
  const prev = allProperties[currentIndex - 1];
  const next = allProperties[currentIndex + 1];

  return (
    <>
      <PageTitle pageTitle={name} pageDescription={shortDescription || ''} />

      <section className="bg-white pb-20 pt-[90px]">
        <div className="container">
          <div className="-mx-5 flex flex-wrap gap-y-10">
            {/* COLONNE GAUCHE (TOUJOURS AFFICHÉE) */}
            <div className="w-full px-5 lg:w-8/12">
              <ProjectDetailsGallery slides={slides} />

              {/* INFOS CLÉS – MOBILE SEULEMENT */}
              <div className="mt-10 block lg:hidden">
                <ul className="divide-y divide-gray-200 border-t text-sm text-gray-700">
                  {surface && (
                    <li className="flex justify-between py-2">
                      <span className="font-medium">Surface</span>
                      <span>{surface} m²</span>
                    </li>
                  )}
                  {modeGestion && (
                    <li className="flex justify-between py-2">
                      <span className="font-medium">Gestion</span>
                      <span>{modeGestion}</span>
                    </li>
                  )}
                  {nbChambres !== undefined && (
                    <li className="flex justify-between py-2">
                      <span className="font-medium">Chambres</span>
                      <span>{nbChambres}</span>
                    </li>
                  )}
                  {loyer && modeGestion === 'Gestion Locative' && (
                    <li className="flex justify-between py-2">
                      <span className="font-medium">Loyer</span>
                      <span>{loyer} €</span>
                    </li>
                  )}
                  {revenuMensuel && modeGestion === 'Conciergerie' && (
                    <li className="flex justify-between py-2">
                      <span className="font-medium">Revenu</span>
                      <span>{revenuMensuel} €</span>
                    </li>
                  )}
                  {occupation && modeGestion === 'Conciergerie' && (
                    <li className="flex justify-between py-2">
                      <span className="font-medium">Occupation</span>
                      <span>{occupation}%</span>
                    </li>
                  )}
                  {categories?.length > 0 && (
                    <li className="flex justify-between py-2">
                      <span className="font-medium">Type</span>
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
                  Vous avez un bien similaire ?
                </h3>
                <p className="mb-5 text-sm text-body-color">
                  Nous pouvons estimer son potentiel et le prendre en gestion.
                </p>
                <Link
                  href="/estimation"
                  className="inline-block rounded bg-primary px-6 py-3 text-white hover:bg-primary/90"
                >
                  Estimer la rentabilité
                </Link>
              </div>

              {/* NAVIGATION ENTRE BIENS */}
              <div className="mt-16 flex justify-between text-sm text-primary">
                {prev ? (
                  <Link href={`/nos-biens/${prev.slug.current}`}>← Propriété précédente</Link>
                ) : (
                  <span />
                )}
                {next && <Link href={`/nos-biens/${next.slug.current}`}>Propriété suivante →</Link>}
              </div>
            </div>

            {/* COLONNE DROITE – DESKTOP SEULEMENT */}
            <div className="hidden px-5 lg:block lg:w-4/12">
              <div className="mb-8 rounded-md border border-[#D7DFFF] bg-[#F8F9FF] px-6 py-8">
                <h3 className="mb-6 text-xl font-bold text-primary">Informations clés</h3>
                <ul className="space-y-3 text-base text-body-color">
                  {modeGestion && (
                    <li className="flex justify-between">
                      <span className="font-medium">Mode de gestion</span>
                      <span>{modeGestion}</span>
                    </li>
                  )}
                  {surface && (
                    <li className="flex justify-between">
                      <span className="font-medium">Surface</span>
                      <span>{surface} m²</span>
                    </li>
                  )}
                  {nbChambres !== undefined && (
                    <li className="flex justify-between">
                      <span className="font-medium">Chambres</span>
                      <span>{nbChambres}</span>
                    </li>
                  )}
                  {loyer && modeGestion === 'Gestion Locative' && (
                    <li className="flex justify-between">
                      <span className="font-medium">Loyer mensuel</span>
                      <span>{loyer} €</span>
                    </li>
                  )}
                  {revenuMensuel && modeGestion === 'Conciergerie' && (
                    <li className="flex justify-between">
                      <span className="font-medium">Revenu estimé</span>
                      <span>{revenuMensuel} €</span>
                    </li>
                  )}
                  {occupation && modeGestion === 'Conciergerie' && (
                    <li className="flex justify-between">
                      <span className="font-medium">Taux d'occupation</span>
                      <span>{occupation}%</span>
                    </li>
                  )}
                  {categories?.length > 0 && (
                    <li className="flex justify-between">
                      <span className="font-medium">Type</span>
                      <span>{categories.map((c) => c.value).join(', ')}</span>
                    </li>
                  )}
                </ul>
              </div>

              <div className="rounded-md border border-[#D7DFFF] bg-[#F8F9FF] px-6 py-8">
                <h3 className="mb-6 text-xl font-bold text-primary">
                  Vous avez un bien similaire ?
                </h3>
                <p className="mb-5 text-sm text-body-color">
                  Nous pouvons estimer son potentiel et le prendre en gestion.
                </p>
                <Link
                  href="/estimation"
                  className="inline-block rounded bg-primary px-6 py-3 text-white hover:bg-primary/90"
                >
                  Estimer la rentabilité
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Script id="json-ld-property" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: name,
            description: shortDescription || longDescription?.slice(0, 150),
            image:
              slides.length > 0 ? slides[0].src : `${process.env.SITE_URL}/default-property.jpg`,
            sku: slug,
            brand: {
              '@type': 'Organization',
              name: 'Conciergerie Alsacienne',
            },
            offers: {
              '@type': 'Offer',
              priceCurrency: 'EUR',
              price: modeGestion === 'Conciergerie' ? revenuMensuel || '0' : loyer || '0',
              availability: 'https://schema.org/InStock',
              url: `${process.env.SITE_URL}/nos-biens/${slug}`,
            },
            additionalProperty: [
              {
                '@type': 'PropertyValue',
                name: 'Surface',
                value: `${surface} m²`,
              },
              ...(nbChambres !== undefined
                ? [
                    {
                      '@type': 'PropertyValue',
                      name: 'Chambres',
                      value: nbChambres,
                    },
                  ]
                : []),
              ...(categories?.length
                ? [
                    {
                      '@type': 'PropertyValue',
                      name: 'Type',
                      value: categories.map((c) => c.value).join(', '),
                    },
                  ]
                : []),
            ],
          })}
        </Script>
        <Script id="json-ld-breadcrumb" type="application/ld+json">
          {JSON.stringify(
            generateBreadcrumbList([
              {
                name: 'Accueil',
                url: 'https://www.conciergerie-alsacienne.fr',
              },
              {
                name: 'Nos biens',
                url: 'https://www.conciergerie-alsacienne.fr/nos-biens',
              },
              {
                name: name,
                url: `https://www.conciergerie-alsacienne.fr/nos-biens/${slug}`,
              },
            ]),
          )}
        </Script>
      </section>
    </>
  );
}
