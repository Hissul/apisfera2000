import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { contactEmail } from "./contactContent";
import { wholesalePhones } from "./wholesalePhones";

export function HomeContactSection() {
  return (
    <section className="home-contact" aria-labelledby="home-contact-title">
      <div className="home-shell home-contact__grid">
        <div>
          <p className="home-kicker"><span aria-hidden="true" /> Контакты</p>
          <h2 id="home-contact-title" className="home-section-title">Остались вопросы?</h2>
          <p>Свяжитесь с компанией по вопросам продукции и заказа.</p>
          <Link className="home-arrow-link" to="/contacts">
            Все контакты <ArrowUpRight aria-hidden="true" size={20} />
          </Link>
        </div>
        <div className="home-contact__details">
          <p>Для оптовых вопросов</p>
          {wholesalePhones.map(({ display, href }) => (
            <a key={href} href={href} aria-label={`Позвонить: ${display}`}>{display}</a>
          ))}
          <a className="home-contact__email" href={contactEmail.href} aria-label={`Написать: ${contactEmail.display}`}>{contactEmail.display}</a>
        </div>
      </div>
    </section>
  );
}
