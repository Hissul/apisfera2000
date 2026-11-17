import { Container } from "../components/Container";

type PagePlaceholderProps = {
  title: string;
};

export function PagePlaceholder({ title }: PagePlaceholderProps) {
  return (
    <section className="py-16">
      <Container>
        <h1 className="text-3xl font-semibold text-brand-bronze">{title}</h1>
        <p className="mt-4 text-brand-graphite">Раздел готовится.</p>
      </Container>
    </section>
  );
}
