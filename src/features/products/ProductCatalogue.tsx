import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { ProductCard } from "./ProductCard";
import {
  filterProductsByPurpose,
  isProductPurposeFilter,
  productPurposeOptions,
  type ProductPurposeFilter,
} from "./productFilters";
import { productRepository } from "./productRepository";
import type { Product } from "./productTypes";

export function ProductCatalogue() {
  const [products, setProducts] = useState<readonly Product[] | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);
  const [purpose, setPurpose] = useState<ProductPurposeFilter>("all");

  useEffect(() => {
    let active = true;

    productRepository.list().then(
      (items) => {
        if (active) setProducts(items);
      },
      () => {
        if (active) setLoadFailed(true);
      },
    );

    return () => {
      active = false;
    };
  }, []);

  const visibleProducts = products
    ? filterProductsByPurpose(products, purpose)
    : [];

  return (
    <section className="bg-brand-cream py-14 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-brand-bronze sm:text-4xl">
            Каталог продукции
          </h1>
          <p className="mt-4 text-base leading-7 text-brand-graphite">
            Препараты и кормовая добавка для пчеловодства, представленные
            компанией «Аписфера 2000».
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-brand-bronze/15 bg-brand-white p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6">
          <div className="w-full sm:max-w-sm">
            <label
              htmlFor="product-purpose"
              className="block text-sm font-semibold text-brand-bronze"
            >
              Назначение
            </label>
            <select
              id="product-purpose"
              value={purpose}
              onChange={(event) => {
                const selected = event.target.value;
                if (isProductPurposeFilter(selected)) setPurpose(selected);
              }}
              className="mt-2 min-h-11 w-full rounded-lg border border-brand-bronze/35 bg-brand-white px-3 py-2 text-brand-graphite focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-graphite"
            >
              <option value="all">Все назначения</option>
              {productPurposeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {products && !loadFailed && (
            <p
              role="status"
              aria-live="polite"
              className="text-sm text-brand-graphite"
            >
              Показано: {visibleProducts.length} из {products.length}
            </p>
          )}
        </div>

        {loadFailed ? (
          <p role="alert" className="mt-8 text-brand-graphite">
            Не удалось загрузить продукцию.
          </p>
        ) : products === null ? (
          <p role="status" className="mt-8 text-brand-graphite">
            Загрузка продукции…
          </p>
        ) : visibleProducts.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-brand-bronze/15 bg-brand-white p-6">
            <p className="text-brand-graphite">
              {purpose === "all"
                ? "В каталоге пока нет продукции."
                : "По выбранному назначению продукция не найдена."}
            </p>
            {purpose !== "all" && (
              <button
                type="button"
                onClick={() => setPurpose("all")}
                className="mt-4 inline-flex min-h-11 items-center rounded-md text-sm font-semibold text-brand-bronze underline underline-offset-4 hover:text-brand-graphite focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
              >
                Сбросить фильтр
              </button>
            )}
          </div>
        ) : (
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
