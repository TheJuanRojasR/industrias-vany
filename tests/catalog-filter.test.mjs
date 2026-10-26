import assert from "node:assert/strict";
import test from "node:test";
import { matchesCatalogProduct } from "../src/lib/catalog-filter.mjs";

const sampleProduct = {
  searchText: "Nevera vertical refrigeracion acero inoxidable",
  category: "refrigeracion",
  productType: "neveras-verticales",
  coolingTypes: ["congelacion", "refrigeracion", "mixta"],
};

test("matches a product when no filters are selected", () => {
  assert.equal(matchesCatalogProduct(sampleProduct, {}), true);
});

test("search ignores case and accent differences", () => {
  assert.equal(matchesCatalogProduct(sampleProduct, { search: "REFRIGERACIÓN" }), true);
});

test("filters by category", () => {
  assert.equal(matchesCatalogProduct(sampleProduct, { category: "coccion" }), false);
});

test("filters by product type", () => {
  assert.equal(
    matchesCatalogProduct(sampleProduct, { productType: "neveras-horizontales" }),
    false,
  );
});

test("matches a cooling type offered by the product", () => {
  assert.equal(matchesCatalogProduct(sampleProduct, { coolingType: "mixta" }), true);
});

test("combines search and filters", () => {
  assert.equal(
    matchesCatalogProduct(sampleProduct, {
      search: "vertical",
      category: "refrigeracion",
      productType: "neveras-verticales",
      coolingType: "congelacion",
    }),
    true,
  );
});
