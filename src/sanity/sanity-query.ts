import { groq } from "next-sanity";

// Requêtes existantes
export const postQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    metadata,
    slug,
    publishedAt,
    mainImage,
    "categories": categories[]->{ title, "slug": slug.current },
  }
`;

export const categoryQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description
  }
`;

export const postQueryBySlug = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    metadata,
    body,
    slug,
    publishedAt,
    mainImage,
    author->{
      name,
      image
    },
    "categories": categories[]->{ title, "slug": slug.current },
  }
`;

export const postQueryByTag = groq`
  *[_type == "post" && $tag in tags]| order(publishedAt desc) {
    _id,
    title,
    metadata,
    slug,
    publishedAt,
    mainImage,
  }
`;

export const propertyQuery = groq`
  *[_type == "propertyType"] | order(_createdAt desc) {
    _id,
    name,
    shortDescription,
    longDescription,
    slug,
    imagePrincipale,
    galleryImage[] {
      asset,
      caption
    },
    categories[] {
      value
    },
    modeGestion,
    surface,
    revenuMensuel,
    occupation,
    nbChambres,
    nbSdb,
    coordinates,
    loyer
  }
`;

export const propertyQueryBySlug = groq`
  *[_type == "propertyType" && slug.current == $slug][0] {
    _id,
    name,
    shortDescription,
    longDescription,
    slug,
    imagePrincipale,
    galleryImage[] {
      asset,
      caption
    },
    categories[] {
      value
    },
    modeGestion,
    surface,
    revenuMensuel,
    occupation,
    nbChambres,
    coordinates,
    loyer
  }
`;


export const faqQuery = groq`
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
    type,
    topic,
    order
  }
`;

export const faqQueryByType = groq`
  *[_type == "faq" && $type in type] | order(order asc) {
    _id,
    question,
    answer,
    type,
    topic,
    order
  }
`;

export const faqQueryByTopic = groq`
  *[_type == "faq" && topic == $topic] | order(order asc) {
    _id,
    question,
    answer,
    type,
    topic,
    order
  }
`;

// Requêtes simplifiées pour la pagination et le filtrage des posts
export const postQueryWithPagination = groq`
  *[_type == "post"] | order(publishedAt desc)[$start...$end] {
    _id,
    title,
    metadata,
    slug,
    publishedAt,
    mainImage,
    "categories": categories[]->{ title, "slug": slug.current },
  }
`;

export const postQueryWithCategories = groq`
  *[_type == "post" && references(*[_type == "category" && slug.current in $categories]._id)] | order(publishedAt desc)[$start...$end] {
    _id,
    title,
    metadata,
    slug,
    publishedAt,
    mainImage,
    "categories": categories[]->{ title, "slug": slug.current },
  }
`;

export const postQueryWithSearch = groq`
  *[_type == "post" && title match $search] | order(publishedAt desc)[$start...$end] {
    _id,
    title,
    metadata,
    slug,
    publishedAt,
    mainImage,
    "categories": categories[]->{ title, "slug": slug.current },
  }
`;

export const postQueryWithCategoriesAndSearch = groq`
  *[_type == "post" && references(*[_type == "category" && slug.current in $categories]._id) && title match $search] | order(publishedAt desc)[$start...$end] {
    _id,
    title,
    metadata,
    slug,
    publishedAt,
    mainImage,
    "categories": categories[]->{ title, "slug": slug.current },
  }
`;

// Requêtes simplifiées pour le comptage des posts
export const postCountQuery = groq`
  { "total": count(*[_type == "post"]) }
`;

export const postCountWithCategoriesQuery = groq`
  { "total": count(*[_type == "post" && references(*[_type == "category" && slug.current in $categories]._id)]) }
`;

export const postCountWithSearchQuery = groq`
  { "total": count(*[_type == "post" && title match $search]) }
`;

export const postCountWithCategoriesAndSearchQuery = groq`
  { "total": count(*[_type == "post" && references(*[_type == "category" && slug.current in $categories]._id) && title match $search]) }
`;
