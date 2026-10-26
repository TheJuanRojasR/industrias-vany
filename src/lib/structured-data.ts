import { SITE } from "../config/site";

export type JsonLd = Record<string, unknown>;

export function buildProductSchema(input: {
  name: string;
  description: string;
  category: string;
  productType: string;
  url: string;
  images?: string[];
  reference?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: input.name,
    description: input.description,
    category: `${input.category} / ${input.productType}`,
    brand: {
      "@type": "Brand",
      name: SITE.name,
    },
    ...(input.reference ? { sku: input.reference } : {}),
    ...(input.images?.length ? { image: input.images } : {}),
    url: input.url,
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildFaqSchema(items: ReadonlyArray<{ question: string; answer: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
