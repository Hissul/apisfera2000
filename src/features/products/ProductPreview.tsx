import { ArrowLeft, ArrowRight, ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { Link } from "react-router";
import { productRepository } from "./productRepository";
import type { Product } from "./productTypes";
import { showcaseImages } from "./showcaseImages";

function ShowcaseProductCard({ product }: { product: Product }) {
  const showcaseImage = product.image
    ? (showcaseImages[product.slug as keyof typeof showcaseImages] ?? product.image)
    : null;

  return (
    <article className="home-product">
      <div className="home-product__image">
        {showcaseImage ? (
          <img
            src={showcaseImage.src}
            alt={product.image?.alt ?? product.name}
            width={showcaseImage.width}
            height={showcaseImage.height}
            loading="lazy"
            decoding="async"
          />
        ) : <ImageIcon aria-hidden="true" size={38} strokeWidth={1.25} />}
      </div>
      <div className="home-product__content">
        <div>
          <h3 className="home-product__name">{product.name}</h3>
          {(product.description ?? product.purpose) && (
            <p className="home-product__description">{product.description ?? product.purpose}</p>
          )}
        </div>
        <div className="home-product__bottom">
          <p className="home-product__price">Цена по запросу</p>
          <Link className="home-product__link" to={`/catalogue/${product.slug}`}>
            О препарате <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ProductPreview() {
  const [products, setProducts] = useState<readonly Product[] | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);
  const [firstVisible, setFirstVisible] = useState(1);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    productRepository.list().then(
      (items) => { if (active) setProducts(items); },
      () => { if (active) setLoadFailed(true); },
    );
    return () => { active = false; };
  }, []);

  const updatePosition = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    const cards = viewport.querySelectorAll<HTMLLIElement>(".home-products__track > li");
    const step = cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : 0;
    setCanScrollBack(viewport.scrollLeft > 2);
    setCanScrollForward(maxScroll - viewport.scrollLeft > 2);
    setFirstVisible(step > 0 ? Math.min(cards.length, Math.round(viewport.scrollLeft / step) + 1) : 1);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || !products?.length) return;
    updatePosition();
    const observer = new ResizeObserver(updatePosition);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [products, updatePosition]);

  function move(direction: -1 | 1) {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const cards = viewport.querySelectorAll<HTMLLIElement>(".home-products__track > li");
    if (cards.length < 2) return;
    const step = cards[1].offsetLeft - cards[0].offsetLeft;
    viewport.scrollBy({
      left: direction * step,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    move(event.key === "ArrowRight" ? 1 : -1);
  }

  return (
    <section className="home-products" aria-labelledby="home-products-title">
      <div className="home-shell home-products__layout">
        <div className="home-products__intro">
          <p className="home-kicker"><span aria-hidden="true" /> Каталог</p>
          <h2 id="home-products-title" className="home-section-title">Препараты для пчеловодства</h2>
        </div>
        <div className="home-products__showcase">
          {loadFailed ? (
            <p role="alert" className="home-products__status">Не удалось загрузить продукцию.</p>
          ) : products === null ? (
            <p role="status" className="home-products__status">Загрузка продукции…</p>
          ) : products.length === 0 ? (
            <p role="status" className="home-products__status">Препараты пока не представлены.</p>
          ) : (
            <>
              <div className="home-products__controls">
                <span className="home-products__counter">
                  <span className="sr-only">Показан препарат {firstVisible} из {products.length}</span>
                  <span aria-hidden="true">{String(firstVisible).padStart(2, "0")} / {String(products.length).padStart(2, "0")}</span>
                </span>
                <div className="home-products__buttons">
                  <button
                    type="button"
                    aria-label="Предыдущий препарат"
                    aria-controls="home-products-viewport"
                    disabled={!canScrollBack}
                    onClick={() => move(-1)}
                  >
                    <ArrowLeft aria-hidden="true" size={20} />
                  </button>
                  <button
                    type="button"
                    aria-label="Следующий препарат"
                    aria-controls="home-products-viewport"
                    disabled={!canScrollForward}
                    onClick={() => move(1)}
                  >
                    <ArrowRight aria-hidden="true" size={20} />
                  </button>
                </div>
              </div>
              <div
                id="home-products-viewport"
                ref={viewportRef}
                className="home-products__viewport"
                role="region"
                aria-label="Препараты для пчеловодства"
                tabIndex={0}
                onScroll={updatePosition}
                onKeyDown={handleKeyDown}
              >
                <ul className="home-products__track">
                  {products.map((product) => (
                    <li key={product.slug}>
                      <ShowcaseProductCard product={product} />
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
          <Link className="home-arrow-link home-products__catalogue-link" to="/catalogue">
            Весь каталог <ArrowUpRight aria-hidden="true" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
