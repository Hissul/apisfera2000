import {
  ArrowLeft,
  ArrowUpRight,
  FileText,
  Image as ImageIcon,
  Phone,
} from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ButtonLink } from "../../components/Button";
import { Container } from "../../components/Container";
import { wholesalePhones } from "../contacts/wholesalePhones";
import { ProductCard } from "./ProductCard";
import { productRepository } from "./productRepository";
import type { Product } from "./productTypes";

type ProductDetailsState =
  | { status: "loading" }
  | { status: "not-found" }
  | { status: "error" }
  | {
      status: "ready";
      product: Product;
      relatedProducts: readonly Product[];
    };

type ProductDetailsProps = {
  slug: string | undefined;
  notFound: ReactNode;
};

export function ProductDetails({ slug, notFound }: ProductDetailsProps) {
  const [state, setState] = useState<ProductDetailsState>({
    status: "loading",
  });

  useEffect(() => {
    let active = true;

    async function loadProduct() {
      try {
        const product = slug ? await productRepository.getBySlug(slug) : null;
        if (!active) return;
        if (!product) {
          setState({ status: "not-found" });
          return;
        }

        const relatedSlugs = [
          ...new Set(product.relatedProductSlugs ?? []),
        ].filter((relatedSlug) => relatedSlug !== product.slug);
        const relatedProducts = (
          await Promise.all(
            relatedSlugs.map((relatedSlug) =>
              productRepository.getBySlug(relatedSlug),
            ),
          )
        ).filter((related): related is Product => related !== null);

        if (active) setState({ status: "ready", product, relatedProducts });
      } catch {
        if (active) setState({ status: "error" });
      }
    }

    void loadProduct();
    return () => {
      active = false;
    };
  }, [slug]);

  if (state.status === "not-found") return notFound;

  if (state.status === "loading" || state.status === "error") {
    return (
      <section className="py-16">
        <Container>
          {state.status === "error" ? (
            <h1 aria-live="assertive" className="text-xl font-semibold text-brand-bronze">
              Не удалось загрузить информацию о продукте.
            </h1>
          ) : (
            <>
              <h1 className="sr-only">Информация о продукте</h1>
              <p role="status" className="text-brand-graphite">
                Загрузка информации о продукте…
              </p>
            </>
          )}
          {state.status === "error" && (
            <ButtonLink to="/catalogue" variant="bronze" className="mt-6">
              <ArrowLeft aria-hidden="true" size={18} />
              Вернуться в каталог
            </ButtonLink>
          )}
        </Container>
      </section>
    );
  }

  const { product, relatedProducts } = state;
  const hasProductFacts = Boolean(
    product.purpose || product.composition || product.application,
  );

  return (
    <>
      <section className="bg-brand-cream py-10 sm:py-16">
        <Container>
          <nav
            aria-label="Хлебные крошки"
            className="text-sm text-brand-graphite"
          >
            <Link
              to="/catalogue"
              className="rounded-sm text-brand-bronze underline underline-offset-4 hover:text-brand-graphite focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
            >
              Каталог
            </Link>
            <span aria-hidden="true" className="mx-2 text-brand-bronze">
              /
            </span>
            <span aria-current="page">{product.name}</span>
          </nav>

          <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-brand-bronze/15 bg-brand-white">
              {product.image ? (
                <img
                  src={product.image.src}
                  alt={product.image.alt}
                  width={product.image.width}
                  height={product.image.height}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-contain p-6 sm:p-8"
                />
              ) : (
                <ImageIcon
                  aria-hidden="true"
                  className="text-brand-bronze/40"
                  size={48}
                  strokeWidth={1.25}
                />
              )}
            </div>

            <div>
              <span
                aria-hidden="true"
                className="mb-5 block h-1 w-9 rounded-full bg-brand-gold"
              />
              <h1 className="text-3xl font-semibold tracking-tight text-brand-bronze sm:text-4xl">
                {product.name}
              </h1>
              {product.description && (
                <p className="mt-5 text-lg leading-8 text-brand-graphite">
                  {product.description}
                </p>
              )}
              {product.instruction && (
                <a
                  href={product.instruction.href}
                  aria-label={`Открыть инструкцию к продукту «${product.name}» (PDF)`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-md bg-brand-bronze px-5 py-2.5 text-sm font-semibold text-brand-white motion-safe:transition-colors hover:bg-brand-graphite focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
                >
                  <FileText aria-hidden="true" size={18} />
                  Открыть инструкцию (PDF)
                </a>
              )}
            </div>
          </div>
        </Container>
      </section>

      {hasProductFacts && (
        <section className="bg-brand-white py-14 sm:py-20">
          <Container>
            <div className="grid gap-5 md:grid-cols-2">
              {product.purpose && (
                <div className="rounded-2xl border border-brand-bronze/15 p-6">
                  <h2 className="text-xl font-semibold text-brand-bronze">
                    Назначение
                  </h2>
                  <p className="mt-3 leading-7 text-brand-graphite">
                    {product.purpose}
                  </p>
                </div>
              )}
              {product.composition && (
                <div className="rounded-2xl border border-brand-bronze/15 p-6">
                  <h2 className="text-xl font-semibold text-brand-bronze">
                    Состав
                  </h2>
                  <p className="mt-3 leading-7 text-brand-graphite">
                    {product.composition}
                  </p>
                </div>
              )}
              {product.application && (
                <div className="rounded-2xl border border-brand-bronze/15 p-6 md:col-span-2">
                  <h2 className="text-xl font-semibold text-brand-bronze">
                    Применение
                  </h2>
                  <p className="mt-3 leading-7 text-brand-graphite">
                    {product.application}
                  </p>
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-brand-cream py-14 sm:py-20">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-brand-bronze sm:text-3xl">
            Где приобрести
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-brand-graphite">
            Для вопросов об оптовом приобретении на сайте компании указаны
            телефоны. Наличие и условия заказа уточняйте напрямую.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {wholesalePhones.map(({ display, href }) => (
              <li key={href}>
                <a
                  href={href}
                  aria-label={`Позвонить в «Аписферу 2000»: ${display}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-brand-bronze/25 bg-brand-white px-4 py-2 text-sm font-semibold text-brand-bronze hover:border-brand-bronze focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
                >
                  <Phone aria-hidden="true" size={17} />
                  {display}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl leading-7 text-brand-graphite">
            Список розничных продавцов опубликован на действующем сайте
            компании. Наличие конкретного продукта уточняйте у продавца.
          </p>
          <a
            href="https://apisfera2000.ru/gde-kupit"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-brand-bronze underline underline-offset-4 hover:text-brand-graphite focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
          >
            Розничные продавцы на сайте компании
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </Container>
      </section>

      {relatedProducts.length > 0 && (
        <section className="bg-brand-white py-14 sm:py-20">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-bronze sm:text-3xl">
              Связанные продукты
            </h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((related) => (
                <ProductCard
                  key={related.slug}
                  product={related}
                  headingLevel={3}
                />
              ))}
            </ul>
          </Container>
        </section>
      )}
    </>
  );
}
