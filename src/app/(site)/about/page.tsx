// src/app/(site)/about/page.tsx

import { Metadata } from "next";
import PageTitle from "@/components/Common/PageTitle";
import Image from "next/image";

export const metadata: Metadata = {
  title: "À Propos | Conciergerie Alsacienne",
  description:
    "Découvrez qui nous sommes, notre mission, nos valeurs et nos chiffres clés. Conciergerie Alsacienne, votre partenaire local 100% Alsacien.",
};

export default function AboutPage() {
  // TODO : remplacer ces constantes par vos hooks Sanity si vous avez déjà des fonctions dédiées
  const missionText = `Chez Conciergerie Alsacienne, nous allions passion du terroir et expertise hôtelière pour offrir 
  un service clé en main, local et personnalisé.`;
  const founder = {
    name: "Jean Dupont",
    role: "Fondateur & Expert Local",
    photo: "/images/team/jean-dupont.jpg",
    bio: `Après 10 ans dans la gestion hôtelière et Airbnb, Jean a créé la Conciergerie Alsacienne 
    pour proposer un accompagnement premium, à taille humaine.`,
  };
  const stats = [
    { label: "Biens gérés", value: "120+" },
    { label: "Clients satisfaits", value: "85 %" },
    { label: "Années d’expérience", value: "10" },
  ];
  const whyUs = [
    { title: "Expertise locale", icon: "🏠", desc: "Une connaissance pointue du marché alsacien." },
    { title: "Service sur‑mesure", icon: "🎯", desc: "Des offres taillées pour vos besoins." },
    { title: "Réactivité", icon: "⚡️", desc: "Nous sommes disponibles 7j/7, 24h/24." },
    { title: "Transparence", icon: "🔍", desc: "Rapports clairs et bilans réguliers." },
  ];

  return (
    <>
      <PageTitle
        pageTitle="À Propos"
        pageDescription="Votre partenaire local, 100 % Alsacien, pour une gestion haut de gamme"
        showMenu
      />

      {/* 1. Hero */}
      <section className="relative bg-primary/10 py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Conciergerie Alsacienne
          </h1>
          <p className="text-xl text-body-color mb-8">
            Votre partenaire local, 100 % Alsacien, pour une gestion haut de gamme
          </p>
          <Image
            src="/images/about-hero.jpg"
            alt="Maison traditionnelle alsacienne"
            width={900}
            height={450}
            className="mx-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* 2. Notre Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Notre mission
          </h2>
          <p className="text-base text-body-color max-w-3xl">
            {missionText}
          </p>
        </div>
      </section>

      {/* 3. Qui sommes‑nous ? */}
      <section className="py-16 bg-[#f8f9ff]">
        <div className="container mx-auto px-4 flex flex-wrap items-center">
          <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
            <Image
              src={founder.photo}
              alt={founder.name}
              width={400}
              height={400}
              className="rounded-full shadow-md object-cover"
            />
          </div>
          <div className="w-full lg:w-7/12 lg:pl-12">
            <h3 className="text-2xl font-bold text-black mb-2">
              {founder.name}
            </h3>
            <span className="text-sm text-body-color italic">
              {founder.role}
            </span>
            <p className="mt-4 text-base text-body-color">
              {founder.bio}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Nos chiffres clés */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-black mb-8">
            Nos chiffres clés
          </h2>
          <div className="mx-[-16px] flex flex-wrap">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="w-1/3 px-4 mb-8 lg:mb-0"
              >
                <h4 className="text-4xl font-bold text-primary">
                  {stat.value}
                </h4>
                <p className="text-base text-body-color">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pourquoi nous choisir ? */}
      <section className="py-16 bg-[#f8f9ff]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-black mb-8 text-center">
            Pourquoi nous choisir ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h5 className="text-xl font-medium mb-2">
                  {item.title}
                </h5>
                <p className="text-body-color">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Appel à l’action */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Prêts à démarrer ?
          </h2>
          <p className="text-base text-body-color mb-6">
            Contactez‑nous pour un audit gratuit de votre bien et découvrez comment 
            maximiser vos revenus en toute sérénité.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full bg-primary px-8 py-4 text-white font-medium hover:bg-primary-dark transition"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </>
  );
}
