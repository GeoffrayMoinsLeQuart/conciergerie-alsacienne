export function GET() {
  const content = `
User-agent: *
Disallow:

Sitemap: https://www.conciergerie-alsacienne.fr/sitemap.xml
`;

  return new Response(content.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
