import SectionTitle from "@/components/Common/SectionTitle";
import Tarification from "@/components/Tarification";
import { prestationData } from "@/static-data/prestation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhatsappButton from "@/components/button-whatsapp/button-whatsapp";
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

      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/assets/background/overlay_1.jpg)" }}
      >
        <div className="bg-white/90">
          <div className="container mx-auto flex flex-col items-center justify-center py-20 text-center md:min-h-screen">
            {/* Responsive Image */}
            <div className="w-full">
              <Image
                src="https://res.cloudinary.com/dx96rdxwk/image/upload/v1717939157/Immobilier/website/Header-desktop_nddksd.webp"
                alt="marketing market"
                width={1200}
                height={500}
                className="mx-auto hidden rounded-lg md:block"
              />
              <Image
                src="https://res.cloudinary.com/dx96rdxwk/image/upload/v1717939157/Immobilier/website/Header-tablet_uczvdn.webp"
                alt="marketing market"
                width={800}
                height={400}
                className="mx-auto hidden rounded-lg sm:block md:hidden"
              />
              <Image
                src="https://res.cloudinary.com/dx96rdxwk/image/upload/v1717939157/Immobilier/website/Header-mobil_kvve7t.webp"
                alt="marketing market"
                width={400}
                height={300}
                className="mx-auto rounded-lg sm:hidden"
              />
            </div>

            {/* Text Content */}
            <div className="mt-10 text-center">
              <h1 className={`mb-4 text-3xl font-bold text-black md:text-4xl`}>
                Conciergerie Premium & Valorisation Immobilière
              </h1>

              <p className="text-gray-600">
                Une gestion locative sans stress avec un accompagnement haut de
                gamme. Notre exigence : des biens parfaitement optimisés et
                valorisés pour une expérience inoubliable côté voyageur — et des
                revenus optimisés côté propriétaire.
                <br />
                <strong>Notre engagement d&apos;excellence</strong> nous conduit
                à sélectionner exclusivement des biens à forte valeur ajoutée,
                garantissant ainsi une expérience exceptionnelle pour les
                voyageurs et des revenus maximisés pour vous.
              </p>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-center">
                <Link
                  href="/simulateur"
                  className="rounded-md bg-primary px-6 py-3 font-medium text-white"
                >
                  Estimer mes revenus
                </Link>
                <Link
                  href="/contact"
                  className="rounded-md bg-black px-6 py-3 font-medium text-white"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Critères de Sélection Section */}
      <section className="bg-[#f8f9ff] py-20">
        <div className="container">
          <SectionTitle
            mainTitle="SÉLECTION & ACCOMPAGNEMENT"
            title="Exigence & Transformation"
            paragraph="Notre modèle repose sur deux piliers : une sélection rigoureuse des biens et un accompagnement sur-mesure pour révéler leur potentiel."
            center
          />

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Design soigné et ambiance unique",
                "Nous privilégions les biens au caractère unique et à l'esthétique soignée, offrant une expérience mémorable à vos voyageurs.",
              ],
              [
                "Mobilier harmonieux et de qualité",
                "Un mobilier de qualité et harmonieux est essentiel pour garantir le confort et la satisfaction de vos hôtes.",
              ],
              [
                "Équipements modernes et fonctionnels",
                "Des équipements modernes et fonctionnels pour un confort optimal et une expérience sans faille pour vos voyageurs.",
              ],
              [
                "Emplacement et attractivité locative",
                "L'emplacement et les caractéristiques du bien doivent permettre une valorisation premium et des revenus optimisés.",
              ],
            ].map(([title, desc], i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-primary font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mb-3 text-xl font-bold text-black">{title}</h3>
                <p className="font-medium text-body-color">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-lg bg-white p-8 shadow-md">
            <h3 className="mb-4 text-center text-2xl font-bold text-black">
              Notre Approche de Sélection
            </h3>
            <p className="mb-5 text-center text-base font-medium leading-relaxed text-body-color">
              Nous considérons chaque bien comme unique, avec son propre
              potentiel. Notre processus d&apos;évaluation n&apos;est pas
              simplement un filtre, mais une opportunité de valorisation.
            </p>
            <p className="text-center text-base font-medium leading-relaxed text-body-color">
              Lorsqu&apos;un bien ne répond pas encore à tous nos critères, nous
              ne le refusons pas définitivement - nous vous proposons plutôt un
              parcours d&apos;amélioration personnalisé grâce à notre service
              d&apos;accompagnement pour la décoration et l&apos;aménagement,
              disponible en formules Standard et Luxe.
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
            <div className="rounded-lg border border-dashed border-gray-300 p-10 text-center text-sm italic text-body-color">
              [Cette section présentera bientôt notre galerie de transformations
              avant/après, illustrant comment nous avons métamorphosé des biens
              pour maximiser leur attractivité et leur rentabilité]
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
            <div
              className="wow fadeInUp rounded-lg bg-white p-8 shadow-md"
              data-wow-delay="0.1s"
            >
              <h3 className="mb-4 text-2xl font-bold text-black">
                Niveau Standard
              </h3>
              <ul className="mb-6 space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span className="text-base font-medium text-body-color">
                    Interventions ciblées pour atteindre nos critères de qualité
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span className="text-base font-medium text-body-color">
                    Optimisation des espaces existants
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span className="text-base font-medium text-body-color">
                    Sélection d'éléments décoratifs essentiels
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span className="text-base font-medium text-body-color">
                    Conseils pour l'aménagement et la disposition
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span className="text-base font-medium text-body-color">
                    Idéal pour les biens nécessitant des améliorations
                    ponctuelles
                  </span>
                </li>
              </ul>
            </div>
            <div
              className="wow fadeInUp rounded-lg bg-primary p-8 shadow-md"
              data-wow-delay="0.2s"
            >
              <h3 className="mb-4 text-2xl font-bold text-white">
                Niveau Luxe
              </h3>
              <ul className="mb-6 space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-white">✓</span>
                  <span className="text-base font-medium text-white text-opacity-90">
                    Transformation complète pour un positionnement ultra-premium
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-white">✓</span>
                  <span className="text-base font-medium text-white text-opacity-90">
                    Conception d'ambiance sur mesure
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-white">✓</span>
                  <span className="text-base font-medium text-white text-opacity-90">
                    Mobilier et équipements haut de gamme
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-white">✓</span>
                  <span className="text-base font-medium text-white text-opacity-90">
                    Éléments décoratifs exclusifs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-white">✓</span>
                  <span className="text-base font-medium text-white text-opacity-90">
                    Parfait pour les biens de caractère visant l'excellence
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="mb-6 text-base font-medium leading-relaxed text-body-color">
              Les tarifs de ces services sont déterminés sur devis après
              évaluation complète de votre bien et de vos objectifs.
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

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {prestationData.map((prestation, index) => (
              <div
                key={prestation.id}
                className="group relative overflow-hidden rounded-lg bg-white p-8 text-center shadow-service transition duration-300 hover:shadow-xl"
                data-wow-delay={`0.${index + 1}s`}
              >
                {/* Icône */}
                <div className="mx-auto mb-6 h-16 w-16">
                  <Image
                    src={prestation.icon}
                    alt={prestation.title}
                    width={64}
                    height={64}
                    className="mx-auto object-contain"
                  />
                </div>

                {/* Titre */}
                <h3 className="mb-3 text-xl font-bold text-black">
                  {prestation.title}
                </h3>

                {/* Description */}
                <p className="text-base font-medium leading-relaxed text-body-color">
                  {prestation.details}
                </p>
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

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "1",
                "Évaluation préliminaire",
                "Visite de votre bien, diagnostic selon nos critères de qualité, et recommandations personnalisées. Si des améliorations sont nécessaires, nous vous proposons notre service d'accompagnement.",
              ],
              [
                "2",
                "Préparation du bien",
                "État des lieux complet, création d'annonces attractives avec photos professionnelles, et mise en place de tous les éléments nécessaires. Si vous avez opté pour notre service de décoration, nous coordonnons l'ensemble des interventions.",
              ],
              [
                "3",
                "Gestion quotidienne",
                "Gestion complète des réservations, accueil personnalisé des voyageurs, ménage professionnel entre chaque séjour, et résolution de toutes les problématiques qui pourraient survenir.",
              ],
              [
                "4",
                "Suivi & Optimisation",
                "Rapports détaillés sur l'activité de votre bien, optimisation continue des tarifs selon la saisonnalité et les événements locaux, et conseils pour améliorer constamment la performance de votre investissement.",
              ],
            ].map(([num, title, desc]) => (
              <div key={num} className="text-center">
                <div className="mx-auto mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-primary font-bold text-white">
                  {num}
                </div>
                <h3 className="mb-2 text-lg font-bold text-black">{title}</h3>
                <p className="text-base text-body-color">{desc}</p>
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

          <div className="mx-auto max-w-3xl rounded-lg bg-[#f8f9ff] p-8 shadow-md">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-bold text-black">
                  Frais de démarrage
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-base font-medium text-body-color">
                      <strong>État des lieux</strong> détaillé de votre bien
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-base font-medium text-body-color">
                      <strong>Création d'annonces</strong> et
                      <strong>photos professionnelles</strong>
                    </span>
                  </li>
                  <li className="flex items-start pb-4">
                    <span className="mr-2 text-primary text-white">•</span>
                    <span className="text-base font-medium text-body-color">
                      350€ - 500€ selon la taille
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-black">
                  Services optionnels
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-base font-medium text-body-color">
                      <strong>Décoration niveau Standard</strong> (sur devis
                      personnalisé)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-base font-medium text-body-color">
                      <strong>Décoration niveau Luxe</strong> (sur devis
                      personnalisé)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-center text-sm italic text-body-color">
              Ces montants sont indicatifs et peuvent varier selon les
              spécificités de votre bien. Une évaluation personnalisée vous sera
              proposée lors de notre première rencontre.
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

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["+20%", "de revenus en moyenne"],
              ["100%", "automatisé & délégué"],
              ["0€", "de frais fixes en formule %"],
              ["5⭐", "moyenne des avis voyageurs"],
            ].map(([value, label], i) => (
              <div key={i} className="text-center">
                <h4 className="text-4xl font-bold text-primary">{value}</h4>
                <p className="mt-2 text-base font-medium text-body-color">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Expertise locale",
                "Notre équipe connaît parfaitement le marché alsacien et les attentes des voyageurs dans notre région.",
              ],
              [
                "Service personnalisé",
                "Nous adaptons nos services à vos besoins spécifiques et à ceux de votre bien pour une gestion optimale.",
              ],
              [
                "Tranquillité d'esprit",
                "Vous n'avez plus à vous soucier de la gestion quotidienne de votre bien, nous nous occupons de tout.",
              ],
              [
                "Sélection exclusive",
                "Notre politique de sélection rigoureuse garantit que votre bien sera associé à d'autres propriétés de standing.",
              ],
              [
                "Expertise en décoration",
                "Notre service d'accompagnement vous permet de sublimer votre bien et d'en maximiser le potentiel locatif.",
              ],
              [
                "Optimisation continue",
                "Nous ajustons constamment les tarifs et la stratégie pour maximiser vos revenus tout au long de l'année.",
              ],
            ].map(([title, desc], i) => (
              <div key={i} className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-2 text-xl font-bold text-black">{title}</h3>
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
