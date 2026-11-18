import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { getPrimaryPhone } from "./dealerPhone";

type DealerCardProps = {
  name: string | null;
  location?: string;
  address?: string | null;
  phoneText: string | null;
  details?: string;
  websiteHref?: string | null;
  variant?: "online" | "retail";
};

export function DealerCard({
  name,
  location,
  address,
  phoneText,
  details,
  websiteHref,
  variant = "retail",
}: DealerCardProps) {
  const primaryPhone = phoneText ? getPrimaryPhone(phoneText) : null;
  const storePhones = variant === "online" && phoneText
    ? phoneText.split(/[,;]/).map(getPrimaryPhone).filter((phone) => phone !== null)
    : [];
  const websiteLink = websiteHref ? (
    <a
      href={websiteHref}
      aria-label={`Сайт магазина «${name}»`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-fit items-center gap-1 rounded-sm text-sm font-semibold text-brand-bronze underline underline-offset-4 hover:text-brand-graphite focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
    >
      Перейти на сайт магазина
      <ArrowUpRight aria-hidden="true" size={15} />
    </a>
  ) : null;

  return (
    <article className={`flex h-full flex-col rounded-2xl border border-brand-bronze/15 bg-brand-white p-5 ${variant === "online" ? "sm:p-6" : ""}`}>
      {location && (
        <p className="mb-2 text-sm font-semibold text-brand-bronze">
          {location}
        </p>
      )}
      <h3 className="text-lg font-semibold leading-6 text-brand-graphite">
        {name ?? "Название продавца не указано в источнике"}
      </h3>

      {details && (
        <p className="mt-4 text-sm leading-6 text-brand-graphite">
          {details}
        </p>
      )}

      {address && (
        <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-brand-graphite">
          <MapPin
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-brand-bronze"
            size={17}
          />
          <span>{address}</span>
        </p>
      )}

      {variant === "online" ? (
        <div className="mt-auto pt-6">
          {storePhones.length > 0 ? (
            <ul className="flex min-h-11 flex-nowrap items-center gap-2">
              {storePhones.map((phone) => (
                <li key={phone.href}>
                  <a
                    href={phone.href}
                    aria-label={`Позвонить: ${phone.display}`}
                    className="inline-flex min-h-11 items-center gap-1.5 whitespace-nowrap rounded-sm text-[13px] font-semibold text-brand-bronze underline underline-offset-4 hover:text-brand-graphite focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite lg:text-base"
                  >
                    <Phone aria-hidden="true" className="shrink-0" size={16} />
                    {phone.display}
                  </a>
                </li>
              ))}
            </ul>
          ) : phoneText && (
            <p className="min-h-11 text-sm text-brand-graphite">{phoneText}</p>
          )}
          <div className="mt-2 flex min-h-11 items-center">{websiteLink}</div>
        </div>
      ) : (
        <>
          <div className="mt-auto pt-2">
            {primaryPhone ? (
              <a
                href={primaryPhone.href}
                aria-label={`Позвонить: ${primaryPhone.display}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-sm text-base font-semibold text-brand-bronze underline underline-offset-4 hover:text-brand-graphite focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite"
              >
                <Phone aria-hidden="true" className="shrink-0" size={17} />
                {primaryPhone.display}
              </a>
            ) : phoneText && (
              <p className="flex min-h-11 items-center gap-2 break-words text-sm text-brand-graphite">
                <Phone aria-hidden="true" className="shrink-0 text-brand-bronze" size={17} />
                {phoneText}
              </p>
            )}
            {websiteLink && <div className="mt-5">{websiteLink}</div>}
          </div>
        </>
      )}
    </article>
  );
}
