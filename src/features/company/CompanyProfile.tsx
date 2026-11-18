import { ArrowRight } from "lucide-react";
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
            <h1 className="text-3xl font-semibold tracking-tight text-brand-bronze sm:text-4xl">
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

          <div className="mt-10 flex justify-end">
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
