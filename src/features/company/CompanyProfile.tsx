import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "../../components/Button";
import { Container } from "../../components/Container";
import { companyProfile } from "./companyContent";

export function CompanyProfile() {
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
              О компании
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-graphite sm:text-lg">
              {companyProfile.introduction}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-brand-white py-14 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {companyProfile.sections.map(({ id, title, text }) => (
              <article
                key={id}
                className="rounded-2xl border border-brand-bronze/15 bg-brand-white p-6 sm:p-8"
              >
                <span
                  aria-hidden="true"
                  className="mb-5 block h-1 w-8 rounded-full bg-brand-gold"
                />
                <h2 className="text-xl font-semibold text-brand-bronze">
                  {title}
                </h2>
                <p className="mt-4 leading-7 text-brand-graphite">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t border-brand-bronze/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-brand-graphite">
              Источник сведений:{" "}
              {companyProfile.sources.map(({ title, url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-sm font-semibold text-brand-bronze underline underline-offset-4 hover:text-brand-graphite focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
                >
                  {title}
                  <ArrowUpRight aria-hidden="true" size={15} />
                </a>
              ))}
            </p>
            <ButtonLink to="/catalogue" variant="bronze">
              Смотреть продукцию
              <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
