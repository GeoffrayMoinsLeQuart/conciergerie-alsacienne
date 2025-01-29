import formbold from "@/../public/images/brands/formbold.svg";
import lineicons from "@/../public/images/brands/lineicons.svg";
import tailgrids from "@/../public/images/brands/tailgrids.svg";
import uideck from "@/../public/images/brands/uideck.svg";
import { Testimonial } from "@/types/testimonial";
import { v4 as uuid } from "uuid";

export const testimonialData: Testimonial[] = [
  {
    id: uuid(),
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
    companyLogo: lineicons,
    companyName: "lineicons",
    name: "Musharof Chy",
    image: "/images/testimonial/image-1.png",
    designation: "Founder @ LineIcons",
  },
  {
    id: uuid(),
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
    companyLogo: tailgrids,
    companyName: "tailgrids",
    name: "Devid Sailio",
    image: "/images/testimonial/image-2.png",
    designation: "Founder @ TailGrids",
  },
  {
    id: uuid(),
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
    companyLogo: formbold,
    companyName: "formbold",
    name: "Jenifer Lofeez",
    image: "/images/testimonial/image-3.png",
    designation: "Founder @ Formbold",
  },
  {
    id: uuid(),
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
    companyLogo: uideck,
    companyName: "uideck",
    name: "Justin Herry",
    image: "/images/testimonial/image-4.png",
    designation: "Founder @ UIdeck",
  },
];
