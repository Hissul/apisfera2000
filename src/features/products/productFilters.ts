import type { Product, ProductPurposeId } from "./productTypes";

export type ProductPurposeFilter = ProductPurposeId | "all";

export const productPurposeOptions: readonly {
  readonly value: ProductPurposeId;
  readonly label: string;
}[] = [
  { value: "varroatosis", label: "Лечение варроатоза" },
  { value: "acarapidosis", label: "Лечение акарапидоза" },
  { value: "family-development", label: "Стимуляция развития семей" },
];

export function isProductPurposeFilter(
  value: string,
): value is ProductPurposeFilter {
  return (
    value === "all" ||
    productPurposeOptions.some((option) => option.value === value)
  );
}

export function filterProductsByPurpose(
  products: readonly Product[],
  purpose: ProductPurposeFilter,
): readonly Product[] {
  if (purpose === "all") return products;
  return products.filter((product) =>
    product.purposeCategoryIds?.includes(purpose),
  );
}
