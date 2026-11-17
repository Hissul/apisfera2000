import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "../components/Button";
import { Container } from "../components/Container";

export function NotFoundPage() {
  return (
    <section className="py-16">
      <Container>
        <h1 className="text-3xl font-semibold text-brand-bronze">
          Страница не найдена
        </h1>
        <p className="mt-4 text-brand-graphite">
          Проверьте адрес или вернитесь на главную страницу.
        </p>
        <ButtonLink className="mt-6" to="/" variant="bronze">
          <ArrowLeft aria-hidden="true" size={18} />
          На главную
        </ButtonLink>
      </Container>
    </section>
  );
}
