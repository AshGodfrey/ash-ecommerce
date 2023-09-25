import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { getProduct } from "lib/shopify";
import ProductImage from "../../../components/ProductPage/ProductImage";
import ProductDetails from "../../../components/ProductPage/ProductDetails";
import AddToCart from "../../../components/ProductPage/AddToCart";

export default async function ProductPage({ params }: SingleProductPageProps) {
  const json = await getProduct(params.id);
  if (!json) return notFound();
  const { product } = json.data;

  return (
    <div className="container mx-auto my-10 md:pb-12">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <ProductImage image={product.featuredImage} />
        <div>
          <ProductDetails product={product} />
          <AddToCart />
        </div>
      </div>
    </div>
  );
}
