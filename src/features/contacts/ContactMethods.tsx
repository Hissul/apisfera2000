import { Mail, Phone } from "lucide-react";
import { Container } from "../../components/Container";
import { SectionHeading } from "../../components/SectionHeading";
import { contactEmail } from "./contactContent";
import { wholesalePhones } from "./wholesalePhones";

export function ContactMethods() {
  return (
    <section className="bg-brand-white">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          title="Связаться с нами"
          description="На официальном сайте компании для оптовых вопросов указаны телефоны и электронная почта."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {wholesalePhones.map(({ display, href }) => (
            <li key={href}>
              <a
                href={href}
                aria-label={`Позвонить в «Аписферу 2000»: ${display}`}
                className="flex min-h-16 items-center gap-3 rounded-2xl border border-brand-bronze/15 px-5 py-4 text-base font-semibold text-brand-bronze motion-safe:transition-colors hover:bg-brand-cream focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
              >
                <Phone aria-hidden="true" className="shrink-0" size={20} />
                {display}
              </a>
            </li>
          ))}
          <li>
            <a
              href={contactEmail.href}
              aria-label={`Написать в «Аписферу 2000»: ${contactEmail.display}`}
              className="flex min-h-16 items-center gap-3 rounded-2xl border border-brand-bronze/15 px-5 py-4 text-base font-semibold text-brand-bronze motion-safe:transition-colors hover:bg-brand-cream focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
            >
              <Mail aria-hidden="true" className="shrink-0" size={20} />
              <span className="break-all">{contactEmail.display}</span>
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
}
