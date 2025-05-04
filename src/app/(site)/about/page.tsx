import { Metadata } from 'next';
import PageTitle from '@/components/Common/PageTitle';
import Image from 'next/image';
import Script from 'next/script';
import { getMetadata } from '@/app/config/pageMetadata';

export const metadata: Metadata = getMetadata('about');

export default function AboutPage() {
  const missionText = `Chez Conciergerie Alsacienne, nous allions passion du terroir et expertise hôtelière pour offrir un service clé en main, local et personnalisé.`;
  const founder = {
    name: 'Jean Dupont',
    role: 'Fondateur & Expert Local',
    photo: '/images/team/jean-dupont.jpg',
    bio: `Après 10 ans dans la gestion hôtelière et Airbnb, Jean a créé la Conciergerie Alsacienne pour proposer un accompagnement premium, à taille humaine.`,
  };
  const stats = [
    { label: 'Biens gérés', value: '120+' },
    { label: 'Clients satisfaits', value: '85 %' },
    { label: "Années d'expérience", value: '10' },
  ];
  const whyUs = [
    { title: 'Expertise locale', icon: '🏠', desc: 'Une connaissance pointue du marché alsacien.' },
    { title: 'Service sur ‑ mesure', icon: '🎯', desc: 'Des offres taillées pour vos besoins.' },
    { title: 'Réactivité', icon: '⚡️', desc: 'Nous sommes disponibles 7j/7, 24h/24.' },
    { title: 'Transparence', icon: '🔍', desc: 'Rapports clairs et bilans réguliers.' },
  ];  

  return (
    <>
      <PageTitle
        pageTitle="À Propos"
        pageDescription="Votre partenaire local, 100 % Alsacien, pour une gestion haut de gamme"
        showMenu
      />

      <main role="main">
        <section className="relative bg-primary/10 py-20 text-center" aria-labelledby="titre-hero">
          <div className="container mx-auto px-4">
            <h1 id="titre-hero" className="mb-4 text-4xl font-bold text-primary">
              Conciergerie Alsacienne
            </h1>
            <p className="mb-8 text-xl text-body-color">
              Votre partenaire local, 100 % Alsacien, pour une gestion haut de gamme
            </p>
            <figure>
              <Image
                src="/images/about-hero.jpg"
                alt="Maison traditionnelle alsacienne"
                width={900}
                height={450}
                className="mx-auto rounded-lg object-cover shadow-lg"
              />
              <figcaption className="sr-only">Vue d'une maison traditionnelle en Alsace</figcaption>
            </figure>
          </div>
        </section>

        <section className="py-16" aria-labelledby="notre-mission">
          <div className="container mx-auto px-4">
            <h2 id="notre-mission" className="mb-4 text-3xl font-semibold text-black">
              Notre mission
            </h2>
            <p className="max-w-3xl text-base text-body-color">{missionText}</p>
          </div>
        </section>

        <section className="bg-[#f8f9ff] py-16" aria-labelledby="qui-sommes-nous">
          <div className="container mx-auto flex flex-wrap items-center px-4">
            <div className="mb-8 w-full lg:mb-0 lg:w-5/12">
              <Image
                src={founder.photo}
                alt={`Portrait de ${founder.name}`}
                width={400}
                height={400}
                className="rounded-full object-cover shadow-md"
              />
            </div>
            <div className="w-full lg:w-7/12 lg:pl-12">
              <h2 id="qui-sommes-nous" className="mb-2 text-2xl font-bold text-black">
                {founder.name}
              </h2>
              <span className="text-sm italic text-body-color">{founder.role}</span>
              <p className="mt-4 text-base text-body-color">{founder.bio}</p>
            </div>
          </div>
        </section>

        <section className="py-16" aria-labelledby="stats">
          <div className="container mx-auto px-4 text-center">
            <h2 id="stats" className="mb-8 text-3xl font-semibold text-black">
              Nos chiffres clés
            </h2>
            <div className="mx-[-16px] flex flex-wrap justify-center">
              {stats.map((stat) => (
                <div key={stat.label} className="mb-8 w-1/2 px-4 md:w-1/3 lg:mb-0">
                  <h3 className="text-4xl font-bold text-primary">{stat.value}</h3>
                  <p className="text-base text-body-color">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f9ff] py-16" aria-labelledby="pourquoi-nous">
          <div className="container mx-auto px-4">
            <h2 id="pourquoi-nous" className="mb-8 text-center text-3xl font-semibold text-black">
              Pourquoi nous choisir ?
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {whyUs.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg bg-white p-6 text-center shadow-sm transition hover:shadow-lg"
                >
                  <div className="mb-4 text-4xl" role="img" aria-label={item.title}>
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-medium">{item.title}</h3>
                  <p className="text-body-color">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 text-center" aria-labelledby="cta-contact">
          <div className="container mx-auto px-4">
            <h2 id="cta-contact" className="mb-4 text-3xl font-semibold text-black">
              Prêts à démarrer ?
            </h2>
            <p className="mb-6 text-base text-body-color">
              Contactez ‑ nous pour un audit gratuit de votre bien et découvrez comment maximiser
              vos revenus en toute sérénité.
            </p>
            <a
              href="/contact"
              className="hover:bg-primary-dark inline-block rounded-full bg-primary px-8 py-4 font-medium text-white transition"
            >
              Nous contacter
            </a>
          </div>
        </section>
      </main>

      <Script id="json-ld-breadcrumb-about" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Accueil',
              item: 'https://www.conciergerie-alsacienne.fr',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'À propos',
              item: 'https://www.conciergerie-alsacienne.fr/about',
            },
          ],
        })}
      </Script>

      <Script id="json-ld-about" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'À propos | Conciergerie Alsacienne',
          url: 'https://www.conciergerie-alsacienne.fr/about',
          description:
            'Une conciergerie 100% alsacienne, fondée par des professionnels passionnés. Découvrez notre mission, nos valeurs, notre exigence.',
          publisher: {
            '@type': 'Organization',
            name: 'Conciergerie Alsacienne',
            url: 'https://www.conciergerie-alsacienne.fr',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.conciergerie-alsacienne.fr/logo.svg',
            },
          },
        })}
      </Script>
    </>
  );
}
