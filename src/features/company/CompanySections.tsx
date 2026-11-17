import { ArrowRight } from "lucide-react";
import { ButtonLink } from "../../components/Button";
import { Container } from "../../components/Container";
import { SectionHeading } from "../../components/SectionHeading";
import { companyAdvantages, companySummary } from "./companyContent";

export function CompanyAdvantages() {
  return (
    <section className="bg-brand-cream">
      <Container className="py-16 sm:py-20">
        <SectionHeading title="Преимущества подхода" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {companyAdvantages.map(({ title, description }) => (
            <li
              key={title}
              className="rounded-2xl border border-brand-bronze/10 bg-brand-white p-6"
            >
              <span aria-hidden="true" className="block h-1 w-8 rounded-full bg-brand-gold" />
              <h3 className="mt-6 text-lg font-semibold text-brand-bronze">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-graphite">{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function CompanySummary() {
  return (
    <section className="bg-brand-cream">
      <Container className="grid gap-6 py-16 sm:py-20 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:gap-12">
        <SectionHeading title="О компании" />
        <div>
          <p className="max-w-2xl text-base leading-7 text-brand-graphite sm:text-lg sm:leading-8">
            {companySummary}
          </p>
          <ButtonLink className="mt-6" to="/company" variant="bronze">
            Подробнее о компании
            <ArrowRight aria-hidden="true" size={18} />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
