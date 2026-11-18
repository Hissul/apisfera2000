import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { companyAdvantages, companyProfile, companySummary } from "./companyContent";

export function CompanyAdvantages() {
  return (
    <section className="home-approach" aria-labelledby="home-approach-title">
      <div className="home-shell home-approach__grid">
        <div>
          <p className="home-kicker"><span aria-hidden="true" /> Наш подход</p>
          <h2 id="home-approach-title" className="home-section-title">Внимание к здоровью пчелиной семьи</h2>
        </div>
        <ol className="home-approach__list">
          {companyAdvantages.map(({ title, description }, index) => (
            <li key={title}>
              <span className="home-approach__number">0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CompanySummary() {
  return (
    <section className="home-story" aria-labelledby="home-story-title">
      <div className="home-shell home-story__grid">
        <div className="home-story__visual">
          <img
            src="/images/company/company-pexels-optimized.webp"
            alt="Пчеловод осматривает рамку с сотами"
            width="3200"
            height="2133"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="home-story__copy">
          <p className="home-kicker"><span aria-hidden="true" /> О компании</p>
          <h2 id="home-story-title" className="home-section-title">Опыт и научный подход — для пчеловодства</h2>
          <p>{companySummary}</p>
          <Link className="home-arrow-link" to="/company">
            Узнать о компании <ArrowUpRight aria-hidden="true" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CompanyScience() {
  const research = companyProfile.sections.find((section) => section.id === "research");

  return (
    <section className="home-science" aria-labelledby="home-science-title">
      <div className="home-shell home-science__grid">
        <div className="home-science__copy">
          <p className="home-kicker"><span aria-hidden="true" /> Научная деятельность</p>
          <h2 id="home-science-title" className="home-section-title">От задач пасеки к разработке препаратов</h2>
          {research && <p>{research.text}</p>}
        </div>
        <div className="home-science__visual">
          <img
            src="/images/company/research-pexels-optimized.webp"
            alt="Исследователь изучает образец с помощью микроскопа"
            width="2400"
            height="3600"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
