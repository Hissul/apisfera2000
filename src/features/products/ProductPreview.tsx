import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Container } from "../../components/Container";
import { SectionHeading } from "../../components/SectionHeading";
import { productRepository } from "./productRepository";
import type { Product } from "./productTypes";

export function ProductPreview() {
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
    <section className="bg-brand-white">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          title="Продукция для пчеловодства"
          description="Пять наименований, представленных в каталоге компании."
        />
        {loadFailed ? (
          <p role="alert" className="mt-8 text-brand-graphite">
            Не удалось загрузить продукцию.
          </p>
        ) : products === null ? (
          <p role="status" className="mt-8 text-brand-graphite">
            Загрузка продукции…
          </p>
        ) : (
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map(({ slug, name, description }) => (
              <li key={slug}>
                <Link
                  to={`/catalogue/${slug}`}
                  className="flex h-full min-h-32 flex-col rounded-2xl border border-brand-bronze/15 bg-brand-white p-6 motion-safe:transition-colors hover:border-brand-bronze focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
                >
                  <span
                    aria-hidden="true"
                    className="h-1 w-8 rounded-full bg-brand-gold"
                  />
                  <div className="mt-6 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-brand-bronze">
                        {name}
                      </h3>
                      {description && (
                        <p className="mt-2 text-sm leading-5 text-brand-graphite">
                          {description}
                        </p>
                      )}
                    </div>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="shrink-0 text-brand-bronze"
                      size={20}
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
