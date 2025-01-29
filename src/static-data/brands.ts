import formbold from "@/../public/images/brands/formbold-2.svg";
import formbold2 from "@/../public/images/brands/formbold.svg";
import graygrids from "@/../public/images/brands/graygrids-2.svg";
import lineicons from "@/../public/images/brands/lineicons-2.svg";
import lineicons2 from "@/../public/images/brands/lineicons.svg";
import tailadmin from "@/../public/images/brands/tailadmin-2.svg";
import uideck from "@/../public/images/brands/uideck-2.svg";
import uideck2 from "@/../public/images/brands/uideck.svg";
import { Brand } from "@/types/brands";
import { v4 as uuid } from "uuid";

export const brandsData: Brand[] = [
  {
    id: uuid(),
    name: "Lineicons",
    image: lineicons,
    link: "https://lineicons.com",
  },
  {
    id: uuid(),
    name: "Formbold",
    image: formbold,
    link: "https://formbold.com",
  },
  {
    id: uuid(),
    name: "Tailadmin",
    image: tailadmin,
    link: "https://tailadmin.com",
  },
  {
    id: uuid(),
    name: "Uideck",
    image: uideck,
    link: "https://uideck.com",
  },
  {
    id: uuid(),
    name: "Graygrids",
    image: graygrids,
    link: "https://graygrids.com",
  },
];

export const heroClientsData: Brand[] = [
  {
    id: uuid(),
    name: "Lineicons",
    image: lineicons2,
    link: "https://lineicons.com",
  },
  {
    id: uuid(),
    name: "Formbold",
    image: formbold2,
    link: "https://formbold.com",
  },
  {
    id: uuid(),
    name: "Uideck",
    image: uideck2,
    link: "https://uideck.com",
  },
];
