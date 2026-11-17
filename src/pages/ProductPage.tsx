import { useParams } from "react-router";
import { ProductDetails } from "../features/products/ProductDetails";
import { NotFoundPage } from "./NotFoundPage";

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  return <ProductDetails key={slug} slug={slug} notFound={<NotFoundPage />} />;
}
