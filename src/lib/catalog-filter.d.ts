export interface CatalogFilterableProduct {
  searchText: string;
  category: string;
  productType: string;
  coolingTypes: string[];
}

export interface CatalogFilters {
  search?: string;
  category?: string;
  productType?: string;
  coolingType?: string;
}

export function normalizeCatalogSearch(value?: string | null): string;

export function matchesCatalogProduct(
  product: CatalogFilterableProduct,
  filters?: CatalogFilters,
): boolean;
