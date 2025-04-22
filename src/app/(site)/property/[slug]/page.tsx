import PageTitle from "@/components/Common/PageTitle";
import { fetchProperties, imageBuilder } from "@/sanity/sanity-utils";
import { notFound } from "next/navigation";
import MarkdownRenderer from "@/utils/markdownConfig";
import { Property } from "@/types/property";
import Link from "next/link";
import ProjectDetailsGallery from "@/components/Gallery/property-gallery";

export const revalidate = 3600;

export async function generateStaticParams() {
  const properties = await fetchProperties();
  return properties.map((property) => ({
    slug: property.slug?.current || "",
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const properties = await fetchProperties();
  const property = properties.find((p) => p.slug?.current === slug);

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
      alt: shortDescription || "Image principale",
    });
  }

  if (galleryImage?.length > 0) {
    galleryImage.forEach((img) => {
      slides.push({
        src: imageBuilder(img).url(),
        alt: img.caption || "Image additionnelle",
      });
    });
  }

  const currentIndex = properties.findIndex((p) => p.slug?.current === slug);
  const prev = properties[currentIndex - 1];
  const next = properties[currentIndex + 1];

  return (
    <>
      <PageTitle pageTitle={name} pageDescription={shortDescription || ""} />

      <section className="bg-white pb-20 pt-[90px]">
        <div className="container">
          <div className="-mx-5 flex flex-wrap gap-y-10">
            {/* Colonne gauche : galerie + description */}
            <div className="w-full px-5 lg:w-8/12">
              {/* Galerie */}
              <ProjectDetailsGallery slides={slides} />

              {/* Infos clés sous la galerie en mobile */}
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
                  {loyer && modeGestion === "Gestion Locative" && (
                    <li className="flex justify-between py-2">
                      <span className="font-medium">Loyer</span>
                      <span>{loyer} €</span>
                    </li>
                  )}
                  {revenuMensuel && modeGestion === "Conciergerie" && (
                    <li className="flex justify-between py-2">
                      <span className="font-medium">Revenu</span>
                      <span>{revenuMensuel} €</span>
                    </li>
                  )}
                  {occupation && modeGestion === "Conciergerie" && (
                    <li className="flex justify-between py-2">
                      <span className="font-medium">Occupation</span>
                      <span>{occupation}%</span>
                    </li>
                  )}
                  {categories?.length > 0 && (
                    <li className="flex justify-between py-2">
                      <span className="font-medium">Type</span>
                      <span>{categories.map((c) => c.value).join(", ")}</span>
                    </li>
                  )}
                </ul>
              </div>

              {/* Titre + description */}
              <h1 className="mb-7 mt-8 text-2xl font-bold text-black sm:text-4xl lg:text-3xl">
                {name}
              </h1>
              {longDescription && (
                <div className="prose max-w-none">
                  <MarkdownRenderer markdownContent={longDescription} />
                </div>
              )}

              <div className="mt-12 block rounded-md border border-[#D7DFFF] bg-[#F8F9FF] px-6 py-8 lg:hidden">
                <h3 className="mb-6 text-xl font-bold text-primary">
                  Vous avez un bien similaire ?
                </h3>
                <p className="mb-5 text-sm text-body-color">
                  Nous pouvons estimer son potentiel et le prendre en gestion.
                </p>
                <Link
                  href="/simulateur"
                  className="inline-block rounded bg-primary px-6 py-3 text-white hover:bg-primary/90"
                >
                  Estimer la rentabilité
                </Link>
              </div>

              {/* Navigation entre biens */}
              <div className="mt-16 flex justify-between text-sm text-primary">
                {prev ? (
                  <Link href={`/property/${prev.slug.current}`}>
                    ← Propriété précédente
                  </Link>
                ) : (
                  <span />
                )}
                {next && (
                  <Link href={`/property/${next.slug.current}`}>
                    Propriété suivante →
                  </Link>
                )}
              </div>
            </div>

            {/* Colonne droite desktop uniquement */}
            <div className="hidden px-5 lg:block lg:w-4/12">
              <div className="mb-8 rounded-md border border-[#D7DFFF] bg-[#F8F9FF] px-6 py-8">
                <h3 className="mb-6 text-xl font-bold text-primary">
                  Informations clés
                </h3>
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
                  {loyer && modeGestion === "Gestion Locative" && (
                    <li className="flex justify-between">
                      <span className="font-medium">Loyer mensuel</span>
                      <span>{loyer} €</span>
                    </li>
                  )}
                  {revenuMensuel && modeGestion === "Conciergerie" && (
                    <li className="flex justify-between">
                      <span className="font-medium">Revenu estimé</span>
                      <span>{revenuMensuel} €</span>
                    </li>
                  )}
                  {occupation && modeGestion === "Conciergerie" && (
                    <li className="flex justify-between">
                      <span className="font-medium">Taux d’occupation</span>
                      <span>{occupation}%</span>
                    </li>
                  )}
                  {categories?.length > 0 && (
                    <li className="flex justify-between">
                      <span className="font-medium">Type</span>
                      <span>{categories.map((c) => c.value).join(", ")}</span>
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
                  href="/simulateur"
                  className="inline-block rounded bg-primary px-6 py-3 text-white hover:bg-primary/90"
                >
                  Estimer la rentabilité
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
