// src/app/about/page.tsx
import { Metadata } from 'next';
import PageTitle from '@/components/Common/PageTitle';
import Image from 'next/image';
import { getMetadata } from '@/app/config/pageMetadata';
import { t } from '@/app/libs/content';
import { aboutSchema } from '@/app/config/pageSchema';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';

export const metadata: Metadata = getMetadata('about');

const pageKey = 'about';

export default function AboutPage() {
  // SEO & Page title
  const pageTitle = t(pageKey, 'About.pageTitle') as string;
  const pageDescription = t(pageKey, 'About.pageDescription') as string;

  // Hero section
  const heroTitle = t(pageKey, 'About.Hero.title') as string;
  const heroSubtitle = t(pageKey, 'About.Hero.subtitle') as string;
  const heroImageAlt = t(pageKey, 'About.Hero.imageAlt') as string;

  // Mission section
  const missionHeading = t(pageKey, 'About.Mission.heading') as string;
  const missionText = t(pageKey, 'About.Mission.text') as string;

  // Founder section
  const founderName = t(pageKey, 'About.Founder.name') as string;
  const founderRole = t(pageKey, 'About.Founder.role') as string;
  const founderBio = t(pageKey, 'About.Founder.bio') as string;
  const founderPhoto = '/images/team/jean-dupont.jpg';
  const founderPhotoAlt = t(pageKey, 'About.Founder.photoAlt') as string;

  // Stats section
  const stats = t(pageKey, 'About.Stats') as Array<{ label: string; value: string }>;

  // Why Us section
  const whyUs = t(pageKey, 'About.WhyUs') as Array<{
    icon: string;
    title: string;
    desc: string;
  }>;

  // Final CTA
  const ctaHeading = t(pageKey, 'About.CTA.heading') as string;
  const ctaText = t(pageKey, 'About.CTA.text') as string;
  const ctaButtonLabel = t(pageKey, 'About.CTA.buttonLabel') as string;
  const ctaButtonLink = t(pageKey, 'About.CTA.buttonLink') as string;

  return (
    <>
      {/* Inject SEO schema */}
      <SeoSchemaInjector schema={aboutSchema} />

      {/* Page Title */}
      <PageTitle pageTitle={pageTitle} pageDescription={pageDescription} showMenu />

      <main role="main">
        {/* Hero */}
        <section className="relative bg-primary/10 py-20 text-center" aria-labelledby="titre-hero">
          <div className="container mx-auto px-4">
            <h1 id="titre-hero" className="mb-4 text-4xl font-bold text-primary">
              {heroTitle}
            </h1>
            <p className="mb-8 text-xl text-body-color">{heroSubtitle}</p>
            <figure>
              <Image
                src="/images/about-hero.jpg"
                alt={heroImageAlt}
                width={900}
                height={450}
                className="mx-auto rounded-lg object-cover shadow-lg"
              />
              <figcaption className="sr-only">{heroImageAlt}</figcaption>
            </figure>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16" aria-labelledby="notre-mission">
          <div className="container mx-auto px-4">
            <h2 id="notre-mission" className="mb-4 text-3xl font-semibold text-black">
              {missionHeading}
            </h2>
            <p className="max-w-3xl text-base text-body-color">{missionText}</p>
          </div>
        </section>

        {/* Founder */}
        <section className="bg-[#f8f9ff] py-16" aria-labelledby="qui-sommes-nous">
          <div className="container mx-auto flex flex-wrap items-center px-4">
            <div className="mb-8 w-full lg:mb-0 lg:w-5/12">
              <Image
                src={founderPhoto}
                alt={founderPhotoAlt}
                width={400}
                height={400}
                className="rounded-full object-cover shadow-md"
              />
            </div>
            <div className="w-full lg:w-7/12 lg:pl-12">
              <h2 id="qui-sommes-nous" className="mb-2 text-2xl font-bold text-black">
                {founderName}
              </h2>
              <span className="text-sm italic text-body-color">{founderRole}</span>
              <p className="mt-4 text-base text-body-color">{founderBio}</p>
            </div>
          </div>
        </section>

        {/* Stats */}
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

        {/* Why Us */}
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

        {/* CTA */}
        <section className="py-16 text-center" aria-labelledby="cta-contact">
          <div className="container mx-auto px-4">
            <h2 id="cta-contact" className="mb-4 text-3xl font-semibold text-black">
              {ctaHeading}
            </h2>
            <p className="mb-6 text-base text-body-color">{ctaText}</p>
            <a
              href={ctaButtonLink}
              className="hover:bg-primary-dark inline-block rounded-full bg-primary px-8 py-4 font-medium text-white transition"
            >
              {ctaButtonLabel}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
