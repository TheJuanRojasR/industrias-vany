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
