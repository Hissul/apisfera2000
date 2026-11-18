import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CompanyAdvantages, CompanyScience, CompanySummary } from "../features/company/CompanySections";
import { HomeContactSection } from "../features/contacts/HomeContactSection";
import { ProductPreview } from "../features/products/ProductPreview";
import "../styles/home.css";

export function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-hero-title">
        <img
          className="home-hero__image"
          src="/images/hero/hero.jpg"
          alt="Пчёлы на сотах"
          width="1200"
          height="673"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="home-hero__shade" aria-hidden="true" />
        <div className="home-shell home-hero__inner">
          <div className="home-hero__content">
            <p className="home-kicker home-hero__kicker"><span aria-hidden="true" /> Аписфера 2000 / Ветеринария пчеловодства</p>
            <h1 id="home-hero-title">Наука на страже здоровья пчёл</h1>
            <p className="home-hero__description">
              Разрабатываем препараты для борьбы с болезнями пчёл и работаем в области ветеринарной санитарии пчеловодства.
            </p>
            <div className="home-hero__actions">
              <Link className="home-hero__button" to="/catalogue">
                Смотреть каталог <ArrowRight aria-hidden="true" size={20} />
              </Link>
              <Link className="home-hero__text-link" to="/company">
                О компании <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
          </div>
          <p className="home-hero__footnote">Научно-производственная компания · с 2000 года</p>
        </div>
      </section>
      <CompanyAdvantages />
      <ProductPreview />
      <CompanySummary />
      <CompanyScience />
      <HomeContactSection />
    </div>
  );
}
