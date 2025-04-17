import Link from "next/link";
import HeroClients from "./HeroClients";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <div
      id="home"
      className="relative bg-white pb-20 pt-[120px] lg:pb-[110px] lg:pt-[150px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12 xl:w-6/12">
            <div className="hero-content">
              <h1 className="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                Conciergerie & Gestion Locative à Mulhouse
              </h1>
              <p className="mb-8 max-w-[480px] text-base text-body-color">
                Service clé en main de gestion Airbnb et locations saisonnières.
                Maximisez vos revenus et libérez-vous totalement des contraintes
                de gestion grâce à notre expertise locale.
              </p>
              <ul className="flex flex-wrap items-center gap-4">
                <li>
                  <Link
                    href="/simulateur"
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-6 xl:px-8"
                  >
                    Estimer mes revenus
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg border border-primary px-8 py-4 text-center text-base font-normal text-primary hover:bg-primary hover:text-white lg:px-6 xl:px-8"
                  >
                    concier
                  </Link>
                </li>
              </ul>

              <HeroClients />
            </div>
          </div>
          <div className="hidden px-4 xl:block xl:hidden"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex w-full max-lg:mt-10 lg:justify-end">
              <HeroImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
