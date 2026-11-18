import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router";
import type { Product } from "./productTypes";

type ProductCardProps = {
  product: Product;
  headingLevel?: 2 | 3;
  imageLoading?: "eager" | "lazy";
};

export function ProductCard({
  product,
  headingLevel = 2,
  imageLoading = "lazy",
}: ProductCardProps) {
  const Heading = headingLevel === 3 ? "h3" : "h2";

  return (
    <li>
      <Link
        to={`/catalogue/${product.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-bronze/15 bg-brand-white motion-safe:transition-[border-color,box-shadow] hover:border-brand-bronze/45 hover:shadow-lg hover:shadow-brand-bronze/5 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
      >
        <div className="relative aspect-[4/3] overflow-hidden border-b border-brand-bronze/10 bg-brand-white">
          {product.image ? (
            <img
              src={product.image.src}
              alt={product.image.alt}
              width={product.image.width}
              height={product.image.height}
              loading={imageLoading}
              fetchPriority={imageLoading === "eager" ? "high" : "auto"}
              decoding="async"
              className="absolute inset-0 h-full w-full object-contain p-5"
            />
          ) : (
            <ImageIcon
              aria-hidden="true"
              size={40}
              strokeWidth={1.25}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-bronze/40"
            />
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <span
            aria-hidden="true"
            className="mb-4 h-1 w-8 rounded-full bg-brand-gold"
          />
          <Heading className="text-xl font-semibold text-brand-bronze">
            {product.name}
          </Heading>
          {product.description && (
            <p className="mt-2 text-sm leading-6 text-brand-graphite">
              {product.description}
            </p>
          )}
          {product.purpose && (
            <p className="mt-3 text-sm leading-6 text-brand-graphite">
              {product.purpose}
            </p>
          )}
          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-bronze group-hover:text-brand-graphite">
            Подробнее
            <ArrowUpRight aria-hidden="true" size={18} />
          </span>
        </div>
      </Link>
    </li>
  );
}
