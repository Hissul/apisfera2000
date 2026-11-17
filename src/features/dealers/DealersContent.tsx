import { ArrowUpRight, Search } from "lucide-react";
import { useRef, useState } from "react";
import { Container } from "../../components/Container";
import { DealerCard } from "./DealerCard";
import { dealersSource, onlineStores } from "./dealerData";
import { findRetailDealersByLocation } from "./dealerFilters";

export function DealersContent() {
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const visibleDealers = findRetailDealersByLocation(query);

  function clearSearch() {
    setQuery("");
    searchRef.current?.focus();
  }

  return (
    <>
      <section className="bg-brand-cream py-14 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <span
              aria-hidden="true"
              className="mb-6 block h-1 w-9 rounded-full bg-brand-gold"
            />
            <p className="text-sm font-semibold tracking-[0.12em] text-brand-bronze uppercase">
              Аписфера 2000
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-brand-bronze sm:text-4xl">
              Где купить
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-graphite sm:text-lg">
              Продавцы перечислены на официальном сайте компании. Перед покупкой
              уточняйте у них актуальность контактов и наличие нужного товара.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-brand-white py-14 sm:py-20">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-brand-bronze sm:text-3xl">
            Интернет-магазины
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {onlineStores.map((store) => (
              <li key={store.id}>
                <DealerCard {...store} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-brand-cream py-14 sm:py-20">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-brand-bronze sm:text-3xl">
            Розничные продавцы
          </h2>
          <div className="mt-7 max-w-xl">
            <label
              htmlFor="dealer-city-search"
              className="block text-sm font-semibold text-brand-graphite"
            >
              Поиск по городу или региону
            </label>
            <div className="relative mt-2">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute top-3.5 left-4 text-brand-bronze"
                size={19}
              />
              <input
                ref={searchRef}
                id="dealer-city-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Например, Москва"
                className="min-h-12 w-full rounded-md border border-brand-bronze/30 bg-brand-white py-2 pr-4 pl-11 text-brand-graphite placeholder:text-brand-graphite/70 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-graphite"
              />
            </div>
          </div>

          <div className="mt-5 flex min-h-11 items-center justify-between gap-4">
            <p role="status" className="text-sm text-brand-graphite">
              Найдено продавцов: {visibleDealers.length}
            </p>
            {query && (
              <button
                type="button"
                onClick={clearSearch}
                className="cursor-pointer rounded-sm text-sm font-semibold text-brand-bronze underline underline-offset-4 hover:text-brand-graphite focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
              >
                Сбросить поиск
              </button>
            )}
          </div>

          {visibleDealers.length ? (
            <ul className="mt-5 grid gap-4 md:grid-cols-2">
              {visibleDealers.map((dealer) => (
                <li key={dealer.id}>
                  <DealerCard {...dealer} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 rounded-2xl border border-brand-bronze/15 bg-brand-white p-6 leading-7 text-brand-graphite">
              По этому запросу продавцы не найдены. Попробуйте другое название
              города или региона.
            </p>
          )}

          <p className="mt-10 border-t border-brand-bronze/15 pt-6 text-sm leading-6 text-brand-graphite">
            Источник списка:{" "}
            <a
              href={dealersSource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-sm font-semibold text-brand-bronze underline underline-offset-4 hover:text-brand-graphite focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
            >
              {dealersSource.title}
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </p>
        </Container>
      </section>
    </>
  );
}
