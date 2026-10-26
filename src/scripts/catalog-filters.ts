import { matchesCatalogProduct } from "../lib/catalog-filter.mjs";

const form = document.querySelector<HTMLFormElement>("[data-catalog-filters]");

if (form) {
  const searchInput = form.querySelector<HTMLInputElement>("[data-filter-search]");
  const categorySelect = form.querySelector<HTMLSelectElement>("[data-filter-category]");
  const productTypeSelect = form.querySelector<HTMLSelectElement>("[data-filter-type]");
  const coolingTypeSelect = form.querySelector<HTMLSelectElement>("[data-filter-cooling]");
  const productCards = Array.from(document.querySelectorAll<HTMLElement>("[data-product-card]"));
  const resultCount = document.querySelector<HTMLElement>("[data-results-count]");
  const emptyResults = document.querySelector<HTMLElement>("[data-empty-results]");

  function updateResults(): void {
    const filters = {
      search: searchInput?.value ?? "",
      category: categorySelect?.value ?? "",
      productType: productTypeSelect?.value ?? "",
      coolingType: coolingTypeSelect?.value ?? "",
    };

    let visibleCount = 0;

    for (const card of productCards) {
      const coolingTypes = card.dataset.coolingTypes?.split(/\s+/).filter(Boolean) ?? [];
      const matches = matchesCatalogProduct(
        {
          searchText: card.dataset.search ?? "",
          category: card.dataset.category ?? "",
          productType: card.dataset.productType ?? "",
          coolingTypes,
        },
        filters,
      );

      card.hidden = !matches;
      visibleCount += Number(matches);
    }

    if (resultCount) {
      const noun = visibleCount === 1 ? "producto" : "productos";
      resultCount.textContent = `${visibleCount} ${noun}`;
    }

    if (emptyResults) {
      emptyResults.hidden = visibleCount > 0;
    }
  }

  form.addEventListener("input", updateResults);
  form.addEventListener("change", updateResults);
  form.addEventListener("submit", (event) => event.preventDefault());
  form.addEventListener("reset", () => requestAnimationFrame(updateResults));

  updateResults();
}
