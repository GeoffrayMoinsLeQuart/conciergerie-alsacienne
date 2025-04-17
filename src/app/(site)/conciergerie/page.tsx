import SectionTitle from "@/components/Common/SectionTitle";
import Tarification from "@/components/Conciergerie/TarificationConciergerie";
import { Metadata } from "next";
import Link from "next/link";
import Intro from "@/components/Intro";
import SelectionEtAccompagnement from "@/components/Conciergerie/SelectionEtAccompagnement";
import NotreExpertise from "@/components/Conciergerie/NotreExpertise";
import NosPrestations from "@/components/Conciergerie/NosPrestations";
import ProcessusConciergerie from "@/components/Conciergerie/ProcessusConciergerie";
import SectionTransparence from "@/components/Conciergerie/SectionTransparence";
import SectionConfiance from "@/components/Conciergerie/SectionConfiance";
import FAQ from "@/components/FAQ";
import { getFAQs } from "@/sanity/sanity-utils";
// import TransformationSlider from "@/components/Transformations/Slider";

const siteName: string = process.env.SITE_NAME || "Conciergerie Alsacienne";

export const metadata: Metadata = {
  title: `Services de Conciergerie en Alsace | ${siteName}`,
  description:
    "Conciergerie haut de gamme avec sélection rigoureuse des biens et accompagnement personnalisé en décoration. Boostez votre rentabilité locative avec La Conciergerie Alsacienne.",
};

export default async function ConciergeriePage(): Promise<JSX.Element> {
  const faqItems = await getFAQs("conciergerie");

  return (
    <>
      <Intro
        title="Conciergerie Premium & Valorisation Immobilière"
        content="Une gestion des locations courtes durées sereine et de qualité, avec un
        accompagnement personnalisé pour valoriser votre bien, offrir
        une belle expérience aux voyageurs et optimiser vos revenus."
      />

      {/* Critères de Sélection Section */}
      <SelectionEtAccompagnement />
      {/* Transformations Section */}
      <section className="bg-white py-20">
        <div className="container">
          <SectionTitle
            mainTitle="TRANSFORMATIONS RÉUSSIES"
            title="Avant / Après : le pouvoir de la valorisation"
            paragraph="Voici quelques exemples concrets de biens que nous avons transformés pour les intégrer à notre portefeuille premium."
            center
          />
          <div className="mt-10">
            {/* <TransformationSlider /> */}
            <div className="rounded-lg border border-dashed border-gray-300 p-10 text-center text-sm italic text-body-color">
              [Cette section présentera bientôt notre galerie de transformations
              avant/après, illustrant comment nous avons métamorphosé des biens
              pour maximiser leur attractivité et leur rentabilité]
            </div>
          </div>
        </div>
      </section>
      {/* Service de Décoration Section */}
      <NotreExpertise />
      {/* Nos Services Section */}
      <NosPrestations />
      {/* Processus Section */}
      <ProcessusConciergerie />
      {/* Coûts Initiaux Section */}
      <SectionTransparence />
      {/* Chiffres Clés & Avantages Section */}
      <SectionConfiance />
      {/* Tarification */}
      <Tarification />
      {/* Section FAQ */}
      <FAQ
        items={faqItems}
        title="Vos questions fréquentes"
        subtitle="Retrouvez les réponses aux questions les plus courantes sur notre service de conciergerie."
        mainTitle="FAQ"
        center={true}
      />
      {/* CTA Section */}
      <section className="bg-primary py-20 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Prêt à valoriser votre bien ?
          </h2>
          <p className="mb-6 text-white text-opacity-90">
            Contactez-nous dès aujourd'hui pour une évaluation préliminaire de
            votre bien. Que votre propriété soit déjà prête à rejoindre notre
            portefeuille premium ou qu'elle nécessite quelques améliorations,
            nous avons la solution adaptée.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-7 py-3 text-center text-base font-medium text-primary hover:bg-opacity-90"
          >
            Demander une évaluation personnalisée
          </Link>
        </div>
      </section>
    </>
  );
}
