import Graphic from "./Graphic";
import SocialLinks from "./SocialLinks";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 bg-white pb-[120px] pt-20 lg:pt-[145px]"
    >
      <div className="container">
        <div className="mx-[-16px] flex flex-wrap">
          <div className="mb-8 w-full px-4 lg:mb-0 lg:w-1/2 xl:w-7/12">
            <span className="mb-3 text-lg font-bold text-primary md:text-xl">
              NOTRE PROMESSE
            </span>
            <h2 className="mb-5 max-w-[570px] text-2xl font-semibold leading-tight text-black sm:text-4xl sm:leading-tight md:text-3xl md:leading-tight">
              Une gestion sans souci pour des revenus maximisés
            </h2>
            <ul>
              <li>
                <p className="max-w-[570px] text-base font-medium text-body-color">
                  Connaissance approfondie du marché local
                </p>
              </li>
              <li>
                <p className="max-w-[570px] text-base font-medium text-body-color">
                  Service personnalisé avec interlocuteur unique
                </p>
              </li>
              <li>
                <p className="max-w-[570px] text-base font-medium text-body-color">
                  Transparence totale et reporting détaillé
                </p>
              </li>
              <li>
                <p className="max-w-[570px] text-base font-medium text-body-color">
                  Optimisation continue de vos revenus
                </p>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
          <span className="mb-3 text-lg font-bold text-primary md:text-xl invisible">
              NOTRE PROMESSE
            </span>
            <h3 className="mb-6 text-2xl font-semibold text-black md:text-3xl">
              Connect With Us
            </h3>
            <p className="mb-10 text-base font-medium text-body-color">
              Notre équipe locale connaît parfaitement les spécificités du
              marché et s&apos;engage à vous offrir un service d&apos;excellence pour une
              rentabilité optimale de votre bien.
            </p>

            <SocialLinks />
          </div>
        </div>
      </div>

      <Graphic />
    </section>
  );
}
