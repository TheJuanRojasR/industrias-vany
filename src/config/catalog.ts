export const PRODUCT_CATEGORIES = [
  {
    slug: "refrigeracion",
    name: "Refrigeración",
    description:
      "Neveras verticales y horizontales, vitrinas refrigeradas, neveras carniceras y para helado.",
  },
  {
    slug: "coccion",
    name: "Cocción",
    description: "Freidoras de alto rendimiento, estufas y asadores de arepas.",
  },
  {
    slug: "extraccion",
    name: "Extracción",
    description: "Campanas de extracción para espacios de cocina profesional.",
  },
  {
    slug: "mobiliario",
    name: "Mobiliario",
    description: "Mesones de acero inoxidable para preparación y trabajo.",
  },
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];
export type ProductCategorySlug = ProductCategory["slug"];

export const CATEGORY_SLUGS = PRODUCT_CATEGORIES.map((category) => category.slug) as [
  ProductCategorySlug,
  ...ProductCategorySlug[],
];

export const PRODUCT_TYPES = [
  { slug: "neveras-verticales", name: "Neveras verticales", category: "refrigeracion" },
  { slug: "neveras-horizontales", name: "Neveras horizontales", category: "refrigeracion" },
  { slug: "vitrinas-refrigeradas", name: "Vitrinas refrigeradas", category: "refrigeracion" },
  { slug: "neveras-carniceras", name: "Neveras carniceras", category: "refrigeracion" },
  { slug: "neveras-para-helado", name: "Neveras para helado", category: "refrigeracion" },
  {
    slug: "freidoras-alto-rendimiento",
    name: "Freidoras de alto rendimiento",
    category: "coccion",
  },
  { slug: "estufas", name: "Estufas", category: "coccion" },
  { slug: "asadores-arepas", name: "Asadores de arepas", category: "coccion" },
  { slug: "campanas-extraccion", name: "Campanas de extracción", category: "extraccion" },
  { slug: "mesones", name: "Mesones", category: "mobiliario" },
] as const;

export type ProductType = (typeof PRODUCT_TYPES)[number];
export type ProductTypeSlug = ProductType["slug"];

export const PRODUCT_TYPE_SLUGS = PRODUCT_TYPES.map((type) => type.slug) as [
  ProductTypeSlug,
  ...ProductTypeSlug[],
];

export const COOLING_TYPES = [
  { slug: "congelacion", name: "Congelación" },
  { slug: "refrigeracion", name: "Refrigeración" },
  { slug: "mixta", name: "Mixta" },
] as const;

export type CoolingType = (typeof COOLING_TYPES)[number];
export type CoolingTypeSlug = (typeof COOLING_TYPES)[number]["slug"];

export const COOLING_TYPE_SLUGS = COOLING_TYPES.map((type) => type.slug) as [
  CoolingTypeSlug,
  ...CoolingTypeSlug[],
];

export function getCategoryName(slug: ProductCategorySlug): string {
  return PRODUCT_CATEGORIES.find((category) => category.slug === slug)?.name ?? slug;
}

export function getProductTypeName(slug: ProductTypeSlug): string {
  return PRODUCT_TYPES.find((type) => type.slug === slug)?.name ?? slug;
}

export function getCoolingTypeName(slug: CoolingTypeSlug): string {
  return COOLING_TYPES.find((type) => type.slug === slug)?.name ?? slug;
}
