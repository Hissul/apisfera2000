import { Container } from "../../components/Container";
import {
  contactEmail,
  orderInformation,
} from "./contactContent";
import { ContactMethods } from "./ContactMethods";
import "./contacts.css";

export function ContactsContent() {
  return (
    <>
      <section className="contacts-page__intro" aria-labelledby="contacts-title">
        <Container className="max-w-7xl">
          <h1 id="contacts-title">Контакты</h1>
          <p className="contacts-page__lead">
            Свяжитесь с компанией по вопросам продукции и оптового заказа.
          </p>
          <ContactMethods />
        </Container>
      </section>

      <section className="contacts-page__order" aria-labelledby="contacts-order-title">
        <Container className="max-w-7xl">
          <div className="contacts-page__order-content">
            <h2 id="contacts-order-title">
              Как оформить оптовый заказ
            </h2>
            <p>
              {orderInformation.directPurchase}
            </p>
            <p>
              {orderInformation.nextStep}
            </p>
            <a
              href={contactEmail.href}
              aria-label={`Написать на ${contactEmail.display}`}
              className="contacts-page__order-link"
            >
              Написать по электронной почте
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
