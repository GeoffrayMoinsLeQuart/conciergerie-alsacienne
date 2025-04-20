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
  postQueryWithCategories,
  postQueryWithSearch,
  postQueryWithCategoriesAndSearch,
  postCountQuery,
  postCountWithCategoriesQuery,
  postCountWithSearchQuery,
  postCountWithCategoriesAndSearchQuery,
} from "./sanity-query";
import { Blog, Category } from "@/types/blog";
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
      // Nettoyer les paramètres pour éviter les valeurs undefined
      const cleanParams = Object.fromEntries(
        Object.entries(qParams).filter(([_, value]) => value !== undefined)
      );
      
      console.log("Sanity query params:", JSON.stringify(cleanParams));
      const client = createClient(clientConfig);

      const result = await client.fetch<QueryResponse>(query, cleanParams, {
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

// Interface pour les paramètres de getPosts
interface GetPostsParams {
  page?: number;
  limit?: number;
  categories?: string[];
  search?: string;
}

// Fonction simplifiée pour récupérer les posts avec pagination et filtrage
export async function getPosts({
  page = 1,
  limit = 9,
  categories = [],
  search = "",
}: GetPostsParams = {}) {
  const start = (page - 1) * limit;
  const end = start + limit;
  
  try {
    console.log("Fetching posts with params:", { page, limit, categories, search });
    
    let posts: Blog[] = [];
    let countResult: CountResult = { total: 0 };
    
    // Sélectionner la requête appropriée en fonction des filtres
    if (categories.length > 0 && search) {
      // Cas 1: Catégories ET recherche
      posts = await sanityFetch({
        query: postQueryWithCategoriesAndSearch,
        qParams: { 
          start, 
          end,
          categories,
          search: `*${search}*`
        },
        tags: ["post"],
      });
      
      countResult = await sanityFetch<CountResult>({
        query: postCountWithCategoriesAndSearchQuery,
        qParams: { 
          categories,
          search: `*${search}*`
        },
        tags: ["post"],
      });
    } else if (categories.length > 0) {
      // Cas 2: Seulement catégories
      posts = await sanityFetch({
        query: postQueryWithCategories,
        qParams: { 
          start, 
          end,
          categories
        },
        tags: ["post"],
      });
      
      countResult = await sanityFetch<CountResult>({
        query: postCountWithCategoriesQuery,
        qParams: { categories },
        tags: ["post"],
      });
    } else if (search) {
      // Cas 3: Seulement recherche
      posts = await sanityFetch({
        query: postQueryWithSearch,
        qParams: { 
          start, 
          end,
          search: `*${search}*`
        },
        tags: ["post"],
      });
      
      countResult = await sanityFetch<CountResult>({
        query: postCountWithSearchQuery,
        qParams: { search: `*${search}*` },
        tags: ["post"],
      });
    } else {
      // Cas 4: Aucun filtre
      posts = await sanityFetch({
        query: postQueryWithPagination,
        qParams: { start, end },
        tags: ["post"],
      });
      
      countResult = await sanityFetch<CountResult>({
        query: postCountQuery,
        qParams: {},
        tags: ["post"],
      });
    }
    
    console.log(`Retrieved ${posts?.length || 0} posts`);
    
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

// Fonction pour récupérer tous les posts sans pagination
export async function getAllPosts() {
  try {
    console.log("Fetching all posts");
    
    const posts: Blog[] = await sanityFetch({
      query: postQuery,
      qParams: {},
      tags: ["post"],
    });
    
    console.log(`Retrieved ${posts?.length || 0} posts`);
    
    return posts || [];
  } catch (error) {
    console.error("Error in getAllPosts:", error);
    return [];
  }
}

export async function getCategories() {
  const categories = await sanityFetch<Category[]>({
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
