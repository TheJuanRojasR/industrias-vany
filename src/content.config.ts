import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { CATEGORY_SLUGS, COOLING_TYPE_SLUGS, PRODUCT_TYPE_SLUGS } from "./config/catalog";

const products = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.md",
    base: "./src/content/products",
  }),
  schema: ({ image }) =>
    z.object({
      name: z.string().min(1),
      category: z.enum(CATEGORY_SLUGS),
      productType: z.enum(PRODUCT_TYPE_SLUGS),
      coolingTypes: z.array(z.enum(COOLING_TYPE_SLUGS)).default([]),
      reference: z.string().optional(),
      summary: z.string().min(1).max(200),
      description: z.string().min(1),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      sample: z.boolean().default(false),
      specs: z
        .array(
          z.object({
            label: z.string().min(1),
            value: z.string().min(1),
          }),
        )
        .default([]),
      features: z.array(z.string().min(1)).default([]),
      applications: z.array(z.string().min(1)).default([]),
      warranty: z.string().optional(),
      images: z
        .array(
          z.object({
            src: image(),
            alt: z.string().min(1),
          }),
        )
        .default([]),
      seo: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
        })
        .optional(),
    }),
});

export const collections = { products };
