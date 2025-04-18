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

// FAQ Queries
export const faqQuery = groq`
  *[_type == "faq" && isActive == true] | order(order asc) {
    _id,
    question,
    answer,
    type,
    topic,
    icon,
    order
  }
`;

export const faqQueryByType = groq`
  *[_type == "faq" && isActive == true && $type in type] | order(order asc) {
    _id,
    question,
    answer,
    type,
    topic,
    icon,
    order
  }
`;

export const faqQueryByTopic = groq`
  *[_type == "faq" && isActive == true && topic == $topic] | order(order asc) {
    _id,
    question,
    answer,
    type,
    topic,
    icon,
    order
  }
`;
