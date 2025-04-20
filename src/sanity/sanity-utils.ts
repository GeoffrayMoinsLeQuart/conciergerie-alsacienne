import ImageUrlBuilder from "@sanity/image-url";
import { createClient, type QueryParams } from "next-sanity";
import clientConfig from "./config/client-config";
import {
  postQuery,
  categoryQuery,
  postQueryBySlug,
  postQueryByTag,
  propertyQuery,
  faqQuery,
  faqQueryByType,
  faqQueryByTopic,
  postQueryWithPagination,
  postCountQuery,
} from "./sanity-query";
import { Blog } from "@/types/blog";
import { integrations, messages } from "../../integrations.config";
import { Property } from "@/types/property";
import { FAQItem } from "@/components/FAQ";

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string;
  qParams: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  if (integrations?.isSanityEnabled) {
    try {
      console.log("Attempting to create Sanity client");
      const client = createClient(clientConfig);

      const result = await client.fetch<QueryResponse>(query, qParams as any, {
        cache: "force-cache",
        next: { tags },
      });

      return result;
    } catch (error) {
      console.error("Error in sanityFetch:", error);
      return {} as QueryResponse;
    }
  } else {
    return {} as QueryResponse;
  }
}

// Function to fetch properties
export async function fetchProperties(): Promise<Property[]> {
  console.log("Starting fetchProperties...");

  try {
    const properties = await sanityFetch<Property[]>({
      query: propertyQuery,
      qParams: {},
      tags: ["propertyType"],
    });

    // Vérifier si le tableau est vide ou si les propriétés n'ont pas de slug
    if (!properties || properties.length === 0) {
      console.log("No properties found");
    } else if (properties.some((p) => !p.slug)) {
      console.log("Warning: Some properties don't have a slug property");
      // Log the properties with missing slugs
      properties
        .filter((p) => !p.slug)
        .forEach((p, i) => console.log(`Property ${i} missing slug:`, p));
    }

    return properties || [];
  } catch (error) {
    console.error("Error in fetchProperties:", error);
    return [];
  }
}

// Interface pour le résultat du comptage
interface CountResult {
  total: number;
}

// Fonction modifiée pour récupérer les posts avec pagination et filtrage
export async function getPosts({
  page = 1,
  limit = 9,
  categories = [],
  search = "",
} = {}) {
  const start = (page - 1) * limit;
  const end = start + limit;
  
  try {
    // Récupérer les posts avec pagination et filtrage
    const posts: Blog[] = await sanityFetch({
      query: postQueryWithPagination,
      qParams: { 
        start, 
        end, 
        categories: categories.length > 0 ? categories : undefined,
        search: search ? `*${search}*` : undefined
      },
      tags: ["post"],
    });
    
    // Récupérer le nombre total de posts pour la pagination
    const countResult = await sanityFetch<CountResult>({
      query: postCountQuery,
      qParams: { 
        categories: categories.length > 0 ? categories : undefined,
        search: search ? `*${search}*` : undefined
      },
      tags: ["post"],
    });
    
    const total = countResult?.total || 0;
    
    return {
      posts: posts || [],
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        page,
        limit
      }
    };
  } catch (error) {
    console.error("Error in getPosts with pagination:", error);
    return {
      posts: [],
      pagination: {
        total: 0,
        pages: 0,
        page: 1,
        limit
      }
    };
  }
}

// Fonction originale pour la compatibilité
export async function getPostsOriginal() {
  const posts: Blog[] = await sanityFetch({
    query: postQuery,
    qParams: {},
    tags: ["post"],
  });

  return posts;
}

export async function getCategories() {
  const categories = await sanityFetch({
    query: categoryQuery,
    qParams: {},
    tags: ["category"],
  });

  return categories;
}

export async function getPostBySlug(slug: string) {
  const post: Blog = await sanityFetch({
    query: postQueryBySlug,
    tags: ["post"],
    qParams: { slug },
  });

  return post;
}

export async function getPostByTag(tag: string) {
  const posts: Blog[] = await sanityFetch({
    query: postQueryByTag,
    qParams: { tag: tag as any },
    tags: ["post"],
  });

  return posts;
}

export function imageBuilder(source: string) {
  return ImageUrlBuilder(clientConfig as any).image(source);
}

// FAQ Utility Functions
export async function getFAQs(): Promise<FAQItem[]> {
  return await sanityFetch({
    query: faqQuery,
    qParams: {},
    tags: ["faq"],
  });
}

export async function getFAQsByType(type: string): Promise<FAQItem[]> {
  return await sanityFetch({
    query: faqQueryByType,
    qParams: { type },
    tags: ["faq"],
  });
}

export async function getFAQsByTopic(topic: string): Promise<FAQItem[]> {
  return await sanityFetch({
    query: faqQueryByTopic,
    qParams: { topic },
    tags: ["faq"],
  });
}
