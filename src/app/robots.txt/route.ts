export function GET() {
  const content = `
User-agent: *
Disallow:

Sitemap: https://www.clefsdalsace.fr/sitemap.xml
`;

  return new Response(content.trim(), {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
