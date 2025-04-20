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
  *[_type == "property"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    propertyType,
    description,
    mainImage,
    images,
    address,
    price,
    bedrooms,
    bathrooms,
    surface,
    features,
    "owner": owner->{
      name,
      email,
      phone
    }
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

// Type pour les paramètres des requêtes de pagination
interface PaginationParams {
  categories?: string[];
  search?: string;
  start?: number;
  end?: number;
}

// Nouvelles requêtes pour la pagination et le filtrage
export const postQueryWithPagination = groq`
  *[_type == "post"
    ${(params: PaginationParams) => params.categories ? `&& references(*[_type == "category" && slug.current in $categories]._id)` : ''}
    ${(params: PaginationParams) => params.search ? `&& title match $search` : ''}
  ] | order(publishedAt desc)[$start...$end] {
    _id,
    title,
    metadata,
    slug,
    publishedAt,
    mainImage,
    "categories": categories[]->{ title, "slug": slug.current },
  }
`;

export const postCountQuery = groq`
  {
    "total": count(*[_type == "post"
      ${(params: PaginationParams) => params.categories ? `&& references(*[_type == "category" && slug.current in $categories]._id)` : ''}
      ${(params: PaginationParams) => params.search ? `&& title match $search` : ''}
    ])
  }
`;
