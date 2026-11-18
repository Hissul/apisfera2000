import type { ProductImage } from "./productTypes";

export const showcaseImages = {
  teda: {
    src: "/images/products/showcase/teda-showcase.jpg",
    width: 502,
    height: 515,
  },
  apistim: {
    src: "/images/products/showcase/apistim-showcase.jpg",
    width: 606,
    height: 485,
  },
  muravinka: {
    src: "/images/products/showcase/muravinka-showcase.jpg",
    width: 742,
    height: 517,
  },
  apitak: {
    src: "/images/products/showcase/apitak-showcase.jpg",
    width: 452,
    height: 259,
  },
  vetfor: {
    src: "/images/products/showcase/vetfor-showcase.jpg",
    width: 696,
    height: 511,
  },
} as const satisfies Record<string, Pick<ProductImage, "src" | "width" | "height">>;
