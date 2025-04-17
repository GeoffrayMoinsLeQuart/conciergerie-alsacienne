import SectionTitle from "@/components/Common/SectionTitle";
import Tarification from "@/components/Tarification";
import { prestationData } from "@/static-data/prestation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// import TransformationSlider from "@/components/Transformations/Slider";

const siteName: string = process.env.SITE_NAME || "Conciergerie Alsacienne";

export const metadata: Metadata = {
  title: `Services de Conciergerie en Alsace | ${siteName}`,
  description:
    "Conciergerie haut de gamme avec sélection rigoureuse des biens et accompagnement personnalisé en décoration. Boostez votre rentabilité locative avec La Conciergerie Alsacienne.",
};

export default function ConciergeriePage(): JSX.Element {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white pt-[120px] pb-20">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Conciergerie Premium & Valorisation Immobilière
            </h1>
            <p className="mt-6 text-lg text-body-color">
              Une gestion locative sans stress avec un accompagnement haut de gamme. Notre exigence : des biens parfaitement optimisés et valorisés pour une expérience inoubliable côté voyageur — et des revenus optimisés côté propriétaire.
            </p>
            <p className="mt-4 text-lg text-body-color">
              <strong>Notre engagement d&apos;excellence</strong> nous conduit à sélectionner exclusivement des biens à forte valeur ajoutée, garantissant ainsi une expérience exceptionnelle pour les voyageurs et des revenus maximisés pour vous.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/simulateur" className="bg-primary text-white px-6 py-3 rounded-md font-medium">
                Estimer mes revenus
              </Link>
              <Link href="/contact" className="bg-black text-white px-6 py-3 rounded-md font-medium">
                Nous contacter
              </Link>
            </div>
          </div>
          <div className="text-center">
            <Image
              src="/images/services/conciergerie-hero.jpg"
              alt="Visuel Conciergerie"
              width={600}
              height={400}
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Critères de Sélection Section */}
      <section className="bg-[#f8f9ff] py-20">
        <div className="container">
          <SectionTitle
            mainTitle="SÉLECTION & ACCOMPAGNEMENT"
            title="Exigence & Transformation"
            paragraph="Notre modèle repose sur deux piliers : une sélection rigoureuse des biens — et un accompagnement sur-mesure pour révéler leur potentiel."
            center
          />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {[
              ["Design soigné & ambiance unique", "Nous privilégions les biens au caractère unique et à l'esthétique soignée, offrant une expérience mémorable à vos voyageurs."],
              ["Mobilier harmonieux & de qualité", "Un mobilier de qualité et harmonieux est essentiel pour garantir le confort et la satisfaction de vos hôtes."],
              ["Équipements modernes & fonctionnels", "Des équipements modernes et fonctionnels pour un confort optimal et une expérience sans faille pour vos voyageurs."],
              ["Emplacement & attractivité locative", "L'emplacement et les caractéristiques du bien doivent permettre une valorisation premium et des revenus optimisés."]
            ].map(([title, desc], i) => (
              <div key={i} className="text-center">
                <div className="mb-4 mx-auto flex items-center justify-center h-[60px] w-[60px] rounded-full bg-primary text-white font-bold">
                  {i + 1}
                </div>
                <h3 className="mb-3 text-xl font-bold text-black">{title}</h3>
                <p className="text-body-color font-medium">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-white p-8 rounded-lg shadow-md">
            <h3 className="mb-4 text-2xl font-bold text-black text-center">
              Notre Approche de Sélection
            </h3>
            <p className="mb-5 text-base font-medium leading-relaxed text-body-color text-center">
              Nous considérons chaque bien comme unique, avec son propre potentiel. Notre processus d&apos;évaluation 
              n&apos;est pas simplement un filtre, mais une opportunité de valorisation.
            </p>
            <p className="text-base font-medium leading-relaxed text-body-color text-center">
              Lorsqu&apos;un bien ne répond pas encore à tous nos critères, nous ne le refusons pas définitivement - 
              nous vous proposons plutôt un parcours d&apos;amélioration personnalisé grâce à notre service d&apos;accompagnement 
              pour la décoration et l&apos;aménagement, disponible en formules Standard et Luxe.
            </p>
          </div>
        </div>
      </section>

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
            <div className="text-center italic text-sm text-body-color p-10 border border-dashed border-gray-300 rounded-lg">
              [Cette section présentera bientôt notre galerie de transformations avant/après, 
              illustrant comment nous avons métamorphosé des biens pour maximiser leur attractivité et leur rentabilité]
            </div>
          </div>
        </div>
      </section>

      {/* Service de Décoration Section */}
      <section className="bg-[#f8f9ff] py-20">
        <div className="container">
          <SectionTitle
            mainTitle="NOTRE EXPERTISE"
            title="Sublimez Votre Bien Immobilier"
            paragraph="Notre expertise ne se limite pas à la gestion locative. Nous proposons également un service d'accompagnement pour la décoration et l'aménagement de votre bien, vous permettant ainsi de maximiser son potentiel et son attractivité."
            center
          />

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
            <div className="wow fadeInUp bg-white p-8 rounded-lg shadow-md" data-wow-delay="0.1s">
              <h3 className="mb-4 text-2xl font-bold text-black">
                Niveau Standard
              </h3>
              <ul className="mb-6 space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span className="text-base font-medium text-body-color">Interventions ciblées pour atteindre nos critères de qualité</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span className="text-base font-medium text-body-color">Optimisation des espaces existants</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span className="text-base font-medium text-body-color">Sélection d'éléments décoratifs essentiels</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span className="text-base font-medium text-body-color">Conseils pour l'aménagement et la disposition</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span className="text-base font-medium text-body-color">Idéal pour les biens nécessitant des améliorations ponctuelles</span>
                </li>
              </ul>
            </div>
            <div className="wow fadeInUp bg-primary p-8 rounded-lg shadow-md" data-wow-delay="0.2s">
              <h3 className="mb-4 text-2xl font-bold text-white">
                Niveau Luxe
              </h3>
              <ul className="mb-6 space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-white">✓</span>
                  <span className="text-base font-medium text-white text-opacity-90">Transformation complète pour un positionnement ultra-premium</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-white">✓</span>
                  <span className="text-base font-medium text-white text-opacity-90">Conception d'ambiance sur mesure</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-white">✓</span>
                  <span className="text-base font-medium text-white text-opacity-90">Mobilier et équipements haut de gamme</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-white">✓</span>
                  <span className="text-base font-medium text-white text-opacity-90">Éléments décoratifs exclusifs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-white">✓</span>
                  <span className="text-base font-medium text-white text-opacity-90">Parfait pour les biens de caractère visant l'excellence</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="mb-6 text-base font-medium leading-relaxed text-body-color">
              Les tarifs de ces services sont déterminés sur devis après évaluation complète de votre bien et de vos objectifs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-opacity-90 lg:px-7"
            >
              Demander un devis personnalisé
            </Link>
          </div>
        </div>
      </section>

      {/* Nos Services Section */}
      <section className="bg-white py-20">
        <div className="container">
          <SectionTitle
            mainTitle="NOS SERVICES"
            title="Une conciergerie complète pour votre bien"
            paragraph="Nous proposons une gamme complète de services pour assurer une gestion optimale de votre bien et une expérience exceptionnelle pour vos voyageurs."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 mt-12">
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

      {/* Processus Section */}
      <section className="bg-[#f8f9ff] py-20">
        <div className="container">
          <SectionTitle
            mainTitle="PROCESSUS"
            title="Un accompagnement fluide et sur-mesure"
            paragraph="Notre méthodologie vous garantit une mise en location rapide, optimisée, et sans effort de votre part."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
            {[
              ["1", "Évaluation préliminaire", "Visite de votre bien, diagnostic selon nos critères de qualité, et recommandations personnalisées. Si des améliorations sont nécessaires, nous vous proposons notre service d'accompagnement."],
              ["2", "Préparation du bien", "État des lieux complet, création d'annonces attractives avec photos professionnelles, et mise en place de tous les éléments nécessaires. Si vous avez opté pour notre service de décoration, nous coordonnons l'ensemble des interventions."],
              ["3", "Gestion quotidienne", "Gestion complète des réservations, accueil personnalisé des voyageurs, ménage professionnel entre chaque séjour, et résolution de toutes les problématiques qui pourraient survenir."],
              ["4", "Suivi & Optimisation", "Rapports détaillés sur l'activité de votre bien, optimisation continue des tarifs selon la saisonnalité et les événements locaux, et conseils pour améliorer constamment la performance de votre investissement."]
            ].map(([num, title, desc]) => (
              <div key={num} className="text-center">
                <div className="mx-auto mb-4 flex items-center justify-center h-[60px] w-[60px] rounded-full bg-primary text-white font-bold">
                  {num}
                </div>
                <h3 className="font-bold text-black text-lg mb-2">{title}</h3>
                <p className="text-body-color text-base">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coûts Initiaux Section */}
      <section className="bg-white py-20">
        <div className="container">
          <SectionTitle
            mainTitle="TRANSPARENCE"
            title="Des coûts clairs et prévisibles"
            paragraph="La mise en place de votre bien dans notre portefeuille implique certains frais de démarrage évalués au cas par cas."
            center
          />

          <div className="max-w-3xl mx-auto bg-[#f8f9ff] p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-black mb-4">Frais de démarrage</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-base font-medium text-body-color"><strong>État des lieux</strong> détaillé de votre bien (150€-300€ selon la taille)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-base font-medium text-body-color"><strong>Création d'annonces</strong> et <strong>photos professionnelles</strong> (200€-400€ pour l'ensemble)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-4">Services optionnels</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-base font-medium text-body-color"><strong>Décoration niveau Standard</strong> (sur devis personnalisé)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-base font-medium text-body-color"><strong>Décoration niveau Luxe</strong> (sur devis personnalisé)</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm italic text-body-color text-center">
              Ces montants sont indicatifs et peuvent varier selon les spécificités de votre bien. 
              Une évaluation personnalisée vous sera proposée lors de notre première rencontre.
            </p>
          </div>
        </div>
      </section>

      {/* Chiffres Clés & Avantages Section */}
      <section className="bg-[#f8f9ff] py-20">
        <div className="container">
          <SectionTitle
            mainTitle="POURQUOI NOUS FAIRE CONFIANCE ?"
            title="Des résultats concrets"
            paragraph="Notre exigence, notre approche design et notre pilotage dynamique ont un impact direct sur vos revenus."
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
            {[
              ["+20%", "de revenus en moyenne"],
              ["100%", "automatisé & délégué"],
              ["0€", "de frais fixes en formule %"],
              ["5⭐", "moyenne des avis voyageurs"],
            ].map(([value, label], i) => (
              <div key={i} className="text-center">
                <h4 className="text-4xl font-bold text-primary">{value}</h4>
                <p className="text-base font-medium text-body-color mt-2">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["Expertise locale", "Notre équipe connaît parfaitement le marché alsacien et les attentes des voyageurs dans notre région."],
              ["Service personnalisé", "Nous adaptons nos services à vos besoins spécifiques et à ceux de votre bien pour une gestion optimale."],
              ["Tranquillité d'esprit", "Vous n'avez plus à vous soucier de la gestion quotidienne de votre bien, nous nous occupons de tout."],
              ["Sélection exclusive", "Notre politique de sélection rigoureuse garantit que votre bien sera associé à d'autres propriétés de standing."],
              ["Expertise en décoration", "Notre service d'accompagnement vous permet de sublimer votre bien et d'en maximiser le potentiel locatif."],
              ["Optimisation continue", "Nous ajustons constamment les tarifs et la stratégie pour maximiser vos revenus tout au long de l'année."]
            ].map(([title, desc], i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
                <p className="text-body-color">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarification */}
      <Tarification />

      {/* CTA Section */}
      <section className="bg-primary py-20 text-center">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à valoriser votre bien ?
          </h2>
          <p className="text-white text-opacity-90 mb-6">
            Contactez-nous dès aujourd'hui pour une évaluation préliminaire de votre bien. Que votre propriété soit déjà prête à rejoindre notre portefeuille premium ou qu'elle nécessite quelques améliorations, nous avons la solution adaptée.
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
