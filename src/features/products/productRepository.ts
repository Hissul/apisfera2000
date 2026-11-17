import { localProducts } from "./localProducts";
import type { Product } from "./productTypes";

export interface ProductRepository {
  list(): Promise<readonly Product[]>;
  getBySlug(slug: string): Promise<Product | null>;
}

export const productRepository: ProductRepository = {
  async list() {
    return localProducts;
  },
  async getBySlug(slug) {
    return localProducts.find((product) => product.slug === slug) ?? null;
  },
};
