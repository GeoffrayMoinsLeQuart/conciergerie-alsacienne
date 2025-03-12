import { groq } from "next-sanity";

export const propertyQuery = `*[_type == "propertyType"]{
  _id,
  name,
  shortDescription,
  longDescription,
  "slug": slug.current,
  "image": imagePrincipale.asset->url,
  "galleryImage": galleryImage[]{
    "url": asset->url,
    caption
  },
  categories
}`;

export const postQuery = groq`*[_type == "post"] {
    title,
    metadata,
    slug,
    tags,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    mainImage,
    publishedAt,
    body
  }`;

export const postQueryBySlug = groq`*[_type == "post" && slug.current == $slug][0] {
    title,
    metadata,
    slug,
    tags,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    mainImage,
    publishedAt,
    body
  }`;

export const postQueryByCategory = groq`*[_type == "post" && category->slug.current == $slug] {
    title,
    metadata,
    slug,
    tags,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    mainImage,
    publishedAt,
    body
  }`;

export const categoryQuery = groq`*[_type == "category"] {
        _id,
        name,
        image,
        slug,
      }`;

export const postQueryByTag = groq`*[_type == "post" && $tag in tags] {
    title,
    metadata,
    slug,
    tags,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    mainImage,
    publishedAt,
    body
  }`;

export const postQueryCategory = groq`*[_type == "category"] {
    name,
    slug  
  }`;
