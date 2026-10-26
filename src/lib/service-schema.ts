import { SITE } from "../config/site";
import type { JsonLd } from "./structured-data";

export function buildServiceSchema(input: {
  name: string;
  description: string;
  url: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
    },
    url: input.url,
  };
}
