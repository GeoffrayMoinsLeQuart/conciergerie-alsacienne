import SectionTitle from "@/components/Common/SectionTitle";
import { prestationData } from "@/static-data/prestation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteName = process.env.SITE_NAME || "Conciergerie Alsacienne";

export const metadata: Metadata = {
  title: `Services de Conciergerie en Alsace | ${siteName}`,
  description:
    "Découvrez nos services de conciergerie premium pour votre bien immobilier en Alsace. Accueil personnalisé, ménage professionnel et gestion complète de vos locations saisonnières.",
};

export default function ConciergeriePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white pb-20 pt-[120px] lg:pb-[90px] lg:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-6/12">
              <div className="mb-8 lg:mb-0">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Services de Conciergerie Premium en Alsace
                </h1>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg md:text-xl">
                  Notre service de conciergerie vous libère totalement des
                  contraintes liées à la gestion de votre bien. De
                  l&apos;accueil personnalisé des voyageurs à l&apos;entretien
                  impeccable de votre logement, nous prenons soin de chaque
                  détail.
                </p>
                <div className="flex flex-wrap">
                  <Link
                    href="/reserver"
                    className="mb-5 mr-5 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-opacity-90 lg:px-7"
                  >
                    Demander un devis
                  </Link>
                  <Link
                    href="/contact"
                    className="mb-5 inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-center text-base font-medium text-white hover:bg-opacity-90 lg:px-7"
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="relative z-10 text-center lg:mr-0 lg:text-right">
                <Image
                  src="/images/services/conciergerie-hero.jpg"
                  alt="Image de conciergerie"
                  width={600}
                  height={400}
                  className="mx-auto rounded-lg lg:ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#f8f9ff] py-20 lg:py-[120px]">
        <div className="container">
          <SectionTitle
            mainTitle="NOS SERVICES"
            title="Une conciergerie complète pour votre bien"
            paragraph="Nous proposons une gamme complète de services pour assurer une gestion optimale de votre bien et une expérience exceptionnelle pour vos voyageurs."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {prestationData.map((prestation, index) => (
              <div
                key={prestation.id}
                className="wow fadeInUp group relative overflow-hidden rounded-lg bg-white shadow-service"
                data-wow-delay={`0.${index + 1}s`}
              >
                <div className="relative z-10 p-9">
                  <h3 className="mb-4 text-xl font-bold text-black">
                    {prestation.title}
                  </h3>
                  <p className="mb-7 text-base font-medium leading-relaxed text-body-color">
                    {prestation.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-20 lg:py-[120px]">
        <div className="container">
          <SectionTitle
            mainTitle="NOTRE PROCESSUS"
            title="Comment fonctionne notre service"
            paragraph="Nous avons développé un processus simple et efficace pour vous offrir un service de conciergerie sans faille."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="wow fadeInUp group relative" data-wow-delay="0.1s">
              <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black">
                Évaluation initiale
              </h3>
              <p className="mb-7 text-base font-medium leading-relaxed text-body-color">
                Nous évaluons votre bien et définissons ensemble une stratégie
                personnalisée pour maximiser vos revenus.
              </p>
            </div>
            <div className="wow fadeInUp group relative" data-wow-delay="0.2s">
              <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black">
                Mise en place
              </h3>
              <p className="mb-7 text-base font-medium leading-relaxed text-body-color">
                Nous préparons votre bien, créons des annonces attractives et
                mettons en place tous les éléments nécessaires.
              </p>
            </div>
            <div className="wow fadeInUp group relative" data-wow-delay="0.3s">
              <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black">
                Gestion quotidienne
              </h3>
              <p className="mb-7 text-base font-medium leading-relaxed text-body-color">
                Nous gérons les réservations, l&apos;accueil des voyageurs, le
                ménage et toutes les interventions nécessaires.
              </p>
            </div>
            <div className="wow fadeInUp group relative" data-wow-delay="0.4s">
              <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-black">
                Suivi et optimisation
              </h3>
              <p className="mb-7 text-base font-medium leading-relaxed text-body-color">
                Nous vous fournissons des rapports détaillés et optimisons
                continuellement la stratégie pour améliorer vos revenus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#f8f9ff] py-20 lg:py-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0">
                <Image
                  src="/images/services/benefits.jpg"
                  alt="Avantages de notre conciergerie"
                  width={500}
                  height={480}
                  className="mx-auto rounded-lg"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[470px]">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                    Pourquoi choisir notre conciergerie ?
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Notre service de conciergerie vous offre de nombreux
                    avantages pour une gestion sans souci de votre bien.
                  </p>
                </div>
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                    Expertise locale
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Notre équipe connaît parfaitement le marché alsacien et les
                    attentes des voyageurs dans notre région.
                  </p>
                </div>
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                    Service personnalisé
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Nous adaptons nos services à vos besoins spécifiques et à
                    ceux de votre bien pour une gestion optimale.
                  </p>
                </div>
                <div className="mb-1">
                  <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                    Tranquillité d&apos;esprit
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Vous n&apos;avez plus à vous soucier de la gestion
                    quotidienne de votre bien, nous nous occupons de tout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="text-center lg:text-left">
                <div className="mb-10 lg:mb-0">
                  <h2 className="mb-3 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight">
                    Prêt à nous confier votre bien ?
                  </h2>
                  <p className="text-base font-medium leading-relaxed text-white">
                    Contactez-nous dès aujourd&apos;hui pour discuter de votre
                    projet et découvrir comment notre service de conciergerie
                    peut vous aider.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="flex flex-wrap justify-center lg:justify-end">
                <Link
                  href="/reserver"
                  className="mb-5 mr-5 inline-flex items-center justify-center rounded-md bg-white px-7 py-3 text-center text-base font-medium text-primary hover:bg-opacity-90"
                >
                  Demander un devis
                </Link>
                <Link
                  href="/contact"
                  className="mb-5 inline-flex items-center justify-center rounded-md bg-[#13C296] px-7 py-3 text-center text-base font-medium text-white hover:bg-opacity-90"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
