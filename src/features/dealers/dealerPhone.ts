// Короткие местные номера и опечатки в источнике не превращаем в ссылки.
export function getPrimaryPhone(phoneText: string) {
  const display = phoneText.split(/[,;]/)[0].trim();
  const digits = display.replace(/\D/g, "");

  if (
    (display.startsWith("+7") || display.startsWith("8")) &&
    digits.length === 11
  ) {
    return { display, href: `tel:+7${digits.slice(1)}` };
  }

  if (/^\(\d{3,5}\)/.test(display) && digits.length === 10) {
    return { display, href: `tel:+7${digits}` };
  }

  return null;
}
