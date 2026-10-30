// @ts-check
import { defineConfig } from "astro/config";
import { env } from "node:process";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const owner = env.GITHUB_REPOSITORY_OWNER ?? "usuario";
const repository = env.GITHUB_REPOSITORY?.split("/")[1] ?? "industrias-vany";
const isGitHubPages = Boolean(env.GITHUB_ACTIONS || env.GITHUB_REPOSITORY_OWNER);

const SITE_URL = env.SITE_URL ?? `https://${owner}.github.io`;
const BASE_PATH = env.BASE_PATH ?? (isGitHubPages ? `/${repository}/` : "/");

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: "always",
  // Dedicated ports to avoid conflicts with other local Astro projects.
  server: ({ command }) => ({
    port: command === "dev" ? 4400 : 4401,
  }),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
