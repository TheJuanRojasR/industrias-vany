/**
 * @param {string | undefined | null} value
 * @returns {string}
 */
export function normalizeCatalogSearch(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es");
}

/**
 * @param {{ searchText: string, category: string, productType: string, coolingTypes: string[] }} product
 * @param {{ search?: string, category?: string, productType?: string, coolingType?: string }} filters
 * @returns {boolean}
 */
export function matchesCatalogProduct(product, filters = {}) {
  const search = normalizeCatalogSearch(filters.search);
  const searchText = normalizeCatalogSearch(product.searchText);

  return (
    (!search || searchText.includes(search)) &&
    (!filters.category || product.category === filters.category) &&
    (!filters.productType || product.productType === filters.productType) &&
    (!filters.coolingType || product.coolingTypes.includes(filters.coolingType))
  );
}
