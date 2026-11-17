import { Link } from 'react-router'
import { Container } from '../components/Container'
import { navigationItems } from './navigationItems'

export function Footer() {
  return (
    <footer className="border-t border-brand-bronze/15 bg-brand-cream">
      <Container className="flex flex-col gap-5 py-8 sm:flex-row sm:items-start sm:justify-between">
        <Link
          to="/"
          className="w-fit text-base font-semibold text-brand-bronze focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
        >
          Аписфера 2000
        </Link>
        <nav aria-label="Навигация в подвале">
          <ul className="flex flex-wrap gap-x-5 gap-y-3">
            {navigationItems.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm text-brand-bronze underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  )
}
