import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Container } from "../components/Container";
import { Navigation } from "./Navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    mobileMenuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    function handleEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  return (
    <header className="border-b border-brand-bronze/15 bg-brand-white">
      <Container className="flex items-center justify-between gap-3 py-3 lg:gap-8">
        <Link
          to="/"
          aria-label="Аписфера 2000 — на главную"
          onClick={() => setIsMenuOpen(false)}
          className="min-w-0 flex-1 rounded-sm focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite lg:flex-none"
        >
          <img
            src="/images/apisfera-logo.jpg"
            alt="Логотип компании «Аписфера 2000»"
            width="335"
            height="124"
            className="block h-auto w-full max-w-[260px]"
          />
        </Link>

        <div className="hidden lg:block">
          <Navigation />
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-md border border-brand-bronze/25 text-brand-bronze focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X aria-hidden="true" size={24} />
          ) : (
            <Menu aria-hidden="true" size={24} />
          )}
        </button>
      </Container>

      <div
        id="mobile-navigation"
        ref={mobileMenuRef}
        hidden={!isMenuOpen}
        className="border-t border-brand-bronze/15 lg:hidden"
      >
        <Container className="py-3">
          <Navigation mobile onNavigate={() => setIsMenuOpen(false)} />
        </Container>
      </div>
    </header>
  );
}
