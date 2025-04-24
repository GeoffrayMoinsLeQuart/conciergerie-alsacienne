import { fetchProperties, getPosts } from "@/sanity/sanity-utils";

export async function GET() {
  const properties = await fetchProperties();
  const { posts: blogPosts } = await getPosts();

  const baseUrl = "https://www.conciergerie-alsacienne.fr";

  const staticRoutes = [
    "/",
    "/conciergerie",
    "/gestion-locative",
    "/simulateur",
    "/faq",
    "/nos-biens",
    "/blog",
  ];

  const staticUrls = staticRoutes.map(
    (route) =>
      `<url><loc>${baseUrl}${route}</loc><lastmod>${new Date().toISOString()}</lastmod></url>`,
  );

  const propertyUrls = properties.map(
    (property) =>
      `<url><loc>${baseUrl}/property/${property.slug.current}</loc><lastmod>${property.createdAt || new Date().toISOString()}</lastmod></url>`,
  );

  const blogUrls = blogPosts.map(
    (post) =>
      `<url><loc>${baseUrl}/blog/${post.slug.current}</loc><lastmod>${post.publishedAt || new Date().toISOString()}</lastmod></url>`,
  );

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${[...staticUrls, ...propertyUrls, ...blogUrls].join("")}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
