import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { getPrimaryPhone } from "./dealerPhone";

type DealerCardProps = {
  name: string | null;
  location?: string;
  address?: string | null;
  phoneText: string | null;
  websiteHref?: string | null;
};

export function DealerCard({
  name,
  location,
  address,
  phoneText,
  websiteHref,
}: DealerCardProps) {
  const primaryPhone = phoneText ? getPrimaryPhone(phoneText) : null;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-brand-bronze/15 bg-brand-white p-5 sm:p-6">
      {location && (
        <p className="mb-2 text-sm font-semibold text-brand-bronze">
          {location}
        </p>
      )}
      <h3 className="text-lg font-semibold leading-6 text-brand-graphite">
        {name ?? "Название продавца не указано в источнике"}
      </h3>

      {address && (
        <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-brand-graphite">
          <MapPin
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-brand-bronze"
            size={17}
          />
          <span>{address}</span>
        </p>
      )}

      {phoneText && (
        <div className="mt-3 flex items-start gap-2 text-sm leading-6 text-brand-graphite">
          <Phone
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-brand-bronze"
            size={17}
          />
          <div>
            <p className="break-words">{phoneText}</p>
            {primaryPhone && (
              <a
                href={primaryPhone.href}
                className="mt-1 inline-block rounded-sm font-semibold text-brand-bronze underline underline-offset-4 hover:text-brand-graphite focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
              >
                Позвонить: {primaryPhone.display}
              </a>
            )}
          </div>
        </div>
      )}

      {websiteHref && (
        <a
          href={websiteHref}
          aria-label={`Сайт магазина «${name}»`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-fit items-center gap-1 rounded-sm text-sm font-semibold text-brand-bronze underline underline-offset-4 hover:text-brand-graphite focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
        >
          Перейти на сайт магазина
          <ArrowUpRight aria-hidden="true" size={15} />
        </a>
      )}
    </article>
  );
}
