import { Portfolio } from "@/types/portfolio";
import { v4 as uuid } from "uuid";

const portfolioDetails = (
  <div>
    <p className="mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
    </p>
    <p className="mb-10 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis
      scelerisque fermentum. Neque sodales ut etiam sit amet. Ligula ullamcorper
      proin libero nunc consequat interdum varius. Quam pellentesque nec nam.
    </p>
    <h4 className="mb-8 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">01.</span> Marketing solutions
    </h4>
    <ul className="list mb-7 list-inside list-disc">
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          {" "}
          Consectetur adipiscing elit in voluptate velit.{" "}
        </span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color"> Mattis vulputate cupidatat. </span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          {" "}
          Vulputate enim nulla aliquet porttitor odio pellentesque{" "}
        </span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">
          {" "}
          Ligula ullamcorper malesuada proin{" "}
        </span>
      </li>
    </ul>
    <p className="mb-10 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
    </p>
    <h4 className="mb-8 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">02.</span> Branding solutions
    </h4>
    <p className="mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis
      scelerisque fermentum. Neque sodales ut etiam sit door telium sieat amet.
    </p>
  </div>
);

export const portfolioData: Portfolio[] = [
  {
    id: uuid(),
    title: "Startup landing page",
    slug: "startup-landing-page",
    sortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.",
    image: "/images/portfolio/portfolio-01.jpg",
    tags: ["web", "design"],
    categories: ["landing page"],
    details: portfolioDetails,
  },
  {
    id: uuid(),
    title: "Job portal landing page",
    slug: "job-portal-landing-page",
    sortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.",
    image: "/images/portfolio/portfolio-02.jpg",
    tags: ["app"],
    details: portfolioDetails,
  },
  {
    id: uuid(),
    title: "SaaS landing page",
    slug: "saas-landing-page",
    sortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.",
    image: "/images/portfolio/portfolio-03.jpg",
    tags: ["graphic"],
    details: portfolioDetails,
  },
  {
    id: uuid(),
    title: "Business & corporate template",
    slug: "business-corporate-template",
    sortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.",
    image: "/images/portfolio/portfolio-04.jpg",
    tags: ["web design", "graphic"],
    details: portfolioDetails,
  },
];
