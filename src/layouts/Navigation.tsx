import { NavLink } from "react-router";
import { navigationItems } from "./navigationItems";

type NavigationProps = {
  mobile?: boolean;
  onNavigate?: () => void;
};

export function Navigation({ mobile = false, onNavigate }: NavigationProps) {
  return (
    <nav aria-label={mobile ? "Мобильная навигация" : "Основная навигация"}>
      <ul
        className={
          mobile ? "flex flex-col gap-1" : "flex flex-wrap items-center gap-x-6"
        }
      >
        {navigationItems.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === "/"}
              onClick={onNavigate}
              className={({ isActive }) =>
                mobile
                  ? `block rounded-sm border-l-4 px-4 py-3 text-base font-medium text-brand-bronze focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-graphite ${isActive ? "border-brand-gold bg-brand-cream" : "border-transparent hover:bg-brand-cream"}`
                  : `inline-block border-b-2 px-1 py-2 text-[15px] font-semibold text-brand-bronze focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-graphite ${isActive ? "border-brand-gold" : "border-transparent hover:border-brand-honey"}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
