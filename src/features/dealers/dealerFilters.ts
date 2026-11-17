import { retailDealers } from "./dealerData";

function normalizeLocation(value: string): string {
  return value.trim().toLocaleLowerCase("ru-RU").replaceAll("ё", "е");
}

export function findRetailDealersByLocation(query: string) {
  const normalizedQuery = normalizeLocation(query);

  if (!normalizedQuery) return retailDealers;

  return retailDealers.filter((dealer) =>
    normalizeLocation(dealer.location).includes(normalizedQuery),
  );
}
