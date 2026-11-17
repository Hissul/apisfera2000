import { ArrowUpRight } from "lucide-react";
import { Container } from "../../components/Container";
import {
  contactEmail,
  contactSources,
  orderInformation,
} from "./contactContent";
import { ContactMethods } from "./ContactMethods";

export function ContactsContent() {
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
              Контакты
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-graphite sm:text-lg">
              Свяжитесь с компанией по вопросам продукции и оптового заказа.
            </p>
          </div>
        </Container>
      </section>

      <ContactMethods />

      <section className="bg-brand-cream py-14 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-brand-bronze sm:text-3xl">
              Как оформить оптовый заказ
            </h2>
            <p className="mt-5 leading-8 text-brand-graphite">
              {orderInformation.directPurchase}
            </p>
            <p className="mt-4 leading-8 text-brand-graphite">
              {orderInformation.nextStep}
            </p>
            <a
              href={contactEmail.href}
              aria-label={`Написать на ${contactEmail.display}`}
              className="mt-7 inline-flex min-h-11 items-center rounded-md bg-brand-bronze px-5 py-2.5 text-sm font-semibold text-brand-white motion-safe:transition-colors hover:bg-brand-graphite focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
            >
              Написать по электронной почте
            </a>
          </div>

          <div className="mt-12 border-t border-brand-bronze/15 pt-7">
            <h2 className="text-base font-semibold text-brand-bronze">
              Источники сведений
            </h2>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {contactSources.map(({ title, url }) => (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-sm text-sm text-brand-bronze underline underline-offset-4 hover:text-brand-graphite focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
                  >
                    {title}
                    <ArrowUpRight aria-hidden="true" size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
