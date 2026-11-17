import { ArrowRight, Image } from "lucide-react";
import { Link } from "react-router";
import { ButtonLink } from "../components/Button";
import { Container } from "../components/Container";
import {
  CompanyAdvantages,
  CompanySummary,
} from "../features/company/CompanySections";
import { ContactMethods } from "../features/contacts/ContactMethods";
import { ProductPreview } from "../features/products/ProductPreview";

export function HomePage() {
  return (
    <>
      <section aria-labelledby="home-hero-title" className="bg-brand-white">
        <Container className="grid items-center gap-10 py-14 sm:gap-12 sm:py-20 lg:min-h-[620px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14 lg:py-24">
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-1 w-8 rounded-full bg-brand-gold"
              />
              <p className="text-sm font-semibold tracking-[0.16em] text-brand-bronze uppercase">
                Аписфера 2000
              </p>
            </div>

            <h1
              id="home-hero-title"
              className="mt-6 max-w-[13ch] text-[clamp(2.5rem,5vw,4rem)] leading-[1.08] font-semibold tracking-tight text-brand-bronze"
            >
              Наука на страже здоровья пчёл
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-brand-graphite sm:text-lg sm:leading-8">
              Научно-производственная компания занимается вопросами ветеринарной
              санитарии в пчеловодстве и разработкой препаратов для борьбы с
              болезнями пчёл.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <ButtonLink to="/catalogue">
                Смотреть каталог
                <ArrowRight aria-hidden="true" size={18} />
              </ButtonLink>
              <Link
                to="/company"
                className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-brand-bronze underline underline-offset-4 hover:text-brand-graphite focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
              >
                О компании
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="relative flex min-h-72 items-center justify-center overflow-hidden rounded-3xl border border-brand-bronze/10 bg-brand-cream sm:min-h-96 lg:min-h-[440px]"
          >
            <div className="absolute inset-5 rounded-2xl border border-brand-bronze/10 bg-brand-white/40 sm:inset-8" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-brand-bronze/15 bg-brand-white/70 text-brand-bronze/45">
              <Image size={42} strokeWidth={1.25} />
            </div>
          </div>
        </Container>
      </section>
      <CompanyAdvantages />
      <ProductPreview />
      <CompanySummary />
      <ContactMethods />
    </>
  );
}
