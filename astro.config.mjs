// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { env } from "node:process";

// Provisional until the client purchases the domain.
const SITE_URL = env.SITE_URL ?? "https://industriasvany.com";

export default defineConfig({
  site: SITE_URL,
  output: "static",
  trailingSlash: "always",
  server: ({ command }) => ({
    port: command === "dev" ? 4400 : 4401,
  }),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
