export type ProductSource = {
  readonly title: string;
  readonly url: string;
  readonly checkedAt: string;
};

export type ProductImage = {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  readonly sourceUrl: string;
  readonly rights: string;
};

export type ProductInstruction = {
  readonly href: string;
  readonly title: string;
  readonly sourceUrl: string;
};

export type ProductPurposeId =
  | "varroatosis"
  | "acarapidosis"
  | "family-development";

export type Product = {
  readonly slug: string;
  readonly name: string;
  readonly purpose: string | null;
  readonly purposeCategoryIds: readonly ProductPurposeId[] | null;
  readonly description: string | null;
  readonly composition: string | null;
  readonly application: string | null;
  readonly image: ProductImage | null;
  readonly instruction: ProductInstruction | null;
  readonly sources: readonly [ProductSource, ...ProductSource[]];
  readonly relatedProductSlugs: readonly string[] | null;
};
