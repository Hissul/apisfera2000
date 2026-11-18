import { Link } from "react-router";
import { Container } from "../components/Container";
import { navigationItems } from "./navigationItems";

export function Footer() {
  return (
    <footer className="border-t border-brand-bronze/15 bg-brand-cream">
      <Container className="flex max-w-7xl flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between sm:gap-12 sm:py-14">
        <div>
          <Link
            to="/"
            aria-label="Аписфера 2000 — на главную"
            className="footer-wordmark w-fit text-3xl font-medium text-brand-bronze focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
          >
            Аписфера 2000
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-6 text-brand-graphite">
            Ветеринарная санитария в пчеловодстве и разработка препаратов для здоровья пчёл.
          </p>
        </div>
        <nav aria-label="Навигация в подвале">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
            {navigationItems.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm font-semibold text-brand-bronze underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
