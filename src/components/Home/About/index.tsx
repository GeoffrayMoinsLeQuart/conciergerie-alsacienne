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
              ABOUT US
            </span>
            <h2 className="mb-5 max-w-[400px] text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-[45px] md:leading-tight">
              Better design, better experience
            </h2>
            <p className="max-w-[570px] text-base font-medium text-body-color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dui ligula, malesuada vel convallis in, tincidunt ut mi Vestibulum
              sit amet.
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <h3 className="mb-6 text-2xl font-semibold text-black md:text-3xl">
              Connect With Us
            </h3>
            <p className="mb-10 text-base font-medium text-body-color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dui ligula, malesuada vel convallis in, tincidunt ut mi.
              Vestibulum sit amet urna placerat, tempor soloa demanium testi lor
              Aliq lorem vitae semper tempor.
            </p>

            <SocialLinks />
          </div>
        </div>
      </div>

      <Graphic />
    </section>
  );
}
