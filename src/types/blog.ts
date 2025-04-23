import { PortableTextBlock } from "sanity";

export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Category = {
  title: string;
  slug: string;
  description?: string;
  _id?: string;
};

export type Blog = {
  _id: number;
  title: string;
  slug?: any;
  metadata?: string;
  body?: PortableTextBlock[];
  mainImage?: any;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
  categories?: string[]; // Ajout de cette propriété
};