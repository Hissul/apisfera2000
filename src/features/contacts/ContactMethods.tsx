import { contactEmail } from "./contactContent";
import { wholesalePhones } from "./wholesalePhones";

export function ContactMethods() {
  return (
    <ul className="contacts-page__methods" aria-label="Телефоны и электронная почта">
      {wholesalePhones.map(({ display, href, whatsappHref, maxHref }) => (
        <li key={href}>
          <span>Телефон</span>
          <div className="contacts-page__method-line">
            <a href={href} aria-label={`Позвонить в «Аписферу 2000»: ${display}`}>
              {display}
            </a>
            {whatsappHref && (
              <div className="contacts-page__messengers">
                <a
                  className="contacts-page__messenger"
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Написать в WhatsApp на номер ${display}`}
                  title={`Написать в WhatsApp: ${display}`}
                >
                  <img src="/images/social/whatsapp.webp" alt="" width="25" height="25" />
                </a>
                {maxHref ? (
                  <a
                    className="contacts-page__messenger"
                    href={maxHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Написать в MAX на номер ${display}`}
                    title={`Написать в MAX: ${display}`}
                  >
                    <img src="/images/social/max.svg" alt="" width="25" height="25" />
                  </a>
                ) : (
                  <button
                    className="contacts-page__messenger contacts-page__messenger--pending"
                    type="button"
                    disabled
                    aria-label={`MAX для номера ${display}: ссылка пока не добавлена`}
                    title="Ссылка MAX пока не добавлена"
                  >
                    <img src="/images/social/max.svg" alt="" width="25" height="25" />
                  </button>
                )}
              </div>
            )}
          </div>
        </li>
      ))}
      <li>
        <span>Электронная почта</span>
        <a
          href={contactEmail.href}
          aria-label={`Написать в «Аписферу 2000»: ${contactEmail.display}`}
        >
          {contactEmail.display}
        </a>
      </li>
    </ul>
  );
}
