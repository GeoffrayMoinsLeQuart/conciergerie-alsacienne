import ImageUrlBuilder from "@sanity/image-url";
import { createClient, type QueryParams } from "next-sanity";
import clientConfig from "./config/client-config";
import {
  postQuery,
  categoryQuery,
  postQueryBySlug,
  postQueryByTag,
  propertyQuery,
} from "./sanity-query";
import { Blog } from "@/types/blog";
import { integrations, messages } from "../../integrations.config";

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
    const client = createClient(clientConfig);
    return client.fetch<QueryResponse>(query, qParams as any, {
      cache: "force-cache",
      next: { tags },
    });
  } else {
    return {} as QueryResponse;
  }
}

// Function to fetch properties
export async function fetchProperties() {
  return await sanityFetch({
    query: propertyQuery,
    qParams: {},
    tags: ["propertyType"],
  });
}

export async function getPosts() {
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
