import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { CatalogueProductCard } from "./CatalogueProductCard";
import { productRepository } from "./productRepository";
import type { Product } from "./productTypes";
import "./catalogue.css";

export function ProductCatalogue() {
  const [products, setProducts] = useState<readonly Product[] | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);

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

  return (
    <section className="catalogue-page" aria-labelledby="catalogue-title">
      <Container className="catalogue-page__container">
        <div className="catalogue-page__intro">
          <h1 id="catalogue-title">Каталог продукции</h1>
          <p>
            Препараты и кормовая добавка для пчеловодства, представленные
            компанией «Аписфера 2000».
          </p>
        </div>

        {loadFailed ? (
          <p role="alert" className="mt-10 text-brand-graphite">
            Не удалось загрузить продукцию.
          </p>
        ) : products === null ? (
          <p role="status" className="mt-10 text-brand-graphite">
            Загрузка продукции…
          </p>
        ) : products.length === 0 ? (
          <p className="mt-10 bg-brand-white p-6 text-brand-graphite">
            В каталоге пока нет продукции.
          </p>
        ) : (
          <ul className="catalogue-page__list">
            {products.map((product, index) => (
              <CatalogueProductCard
                key={product.slug}
                product={product}
                imageLoading={index === 0 ? "eager" : "lazy"}
              />
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
