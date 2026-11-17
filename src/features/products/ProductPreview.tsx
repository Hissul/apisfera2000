import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { Container } from "../../components/Container";
import { SectionHeading } from "../../components/SectionHeading";
import { previewProducts } from "./previewProducts";

export function ProductPreview() {
  return (
    <section className="bg-brand-white">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          title="Продукция для пчеловодства"
          description="Пять наименований, представленных в каталоге компании."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {previewProducts.map(({ slug, name }) => (
            <li key={slug}>
              <Link
                to={`/catalogue/${slug}`}
                className="flex min-h-32 flex-col justify-between rounded-2xl border border-brand-bronze/15 bg-brand-white p-6 motion-safe:transition-colors hover:border-brand-bronze focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
              >
                <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-gold" />
                <div className="flex items-end justify-between gap-3">
                  <h3 className="text-xl font-semibold text-brand-bronze">{name}</h3>
                  <ArrowUpRight aria-hidden="true" className="shrink-0 text-brand-bronze" size={20} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
