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
              <ul className="flex flex-wrap items-center gap-8">
                <li>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                  >
                    Estimer mes revenus
                  </Link>
                </li>
                <li className="leading-none">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center py-1 text-center text-base font-normal text-body-color hover:text-primary"
                  >
                    <span className="mr-2">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="11" cy="11" r="11" fill="#3056D3" />
                        <rect
                          x="6.90906"
                          y="13.3636"
                          width="8.18182"
                          height="1.63636"
                          fill="white"
                        />
                        <rect
                          x="10.1818"
                          y="6"
                          width="1.63636"
                          height="4.09091"
                          fill="white"
                        />
                        <path
                          d="M11 12.5454L13.8343 9.47726H8.16576L11 12.5454Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    Nos services
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
