import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router";
import type { Product } from "./productTypes";
import { showcaseImages } from "./showcaseImages";

type CatalogueProductCardProps = {
  product: Product;
  imageLoading: "eager" | "lazy";
};

export function CatalogueProductCard({ product, imageLoading }: CatalogueProductCardProps) {
  const image = product.image
    ? (showcaseImages[product.slug as keyof typeof showcaseImages] ?? product.image)
    : null;

  return (
    <li>
      <article className="catalogue-card">
        <div className="catalogue-card__visual">
          {image ? (
            <img
              src={image.src}
              alt={product.image?.alt ?? product.name}
              width={image.width}
              height={image.height}
              loading={imageLoading}
              fetchPriority={imageLoading === "eager" ? "high" : "auto"}
              decoding="async"
            />
          ) : (
            <ImageIcon aria-hidden="true" size={40} strokeWidth={1.25} />
          )}
        </div>

        <div className="catalogue-card__content">
          <div>
            <h2>{product.name}</h2>
            {product.description && <p className="catalogue-card__description">{product.description}</p>}
            {product.purpose && (
              <div className="catalogue-card__purpose">
                <span>Назначение</span>
                <p>{product.purpose}</p>
              </div>
            )}
          </div>
          <div className="catalogue-card__bottom">
            <span className="catalogue-card__price">Цена по запросу</span>
            <Link
              to={`/catalogue/${product.slug}`}
              aria-label={`Подробнее о препарате ${product.name}`}
            >
              Подробнее <ArrowUpRight aria-hidden="true" size={19} />
            </Link>
          </div>
        </div>
      </article>
    </li>
  );
}
