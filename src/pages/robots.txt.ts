import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const baseUrl = new URL(import.meta.env.BASE_URL, site ?? "https://usuario.github.io");
  const sitemapUrl = new URL("sitemap-index.xml", baseUrl);
  const body = ["User-agent: *", "Allow: /", "", `Sitemap: ${sitemapUrl}`].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
