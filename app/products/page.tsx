import Image from "next/image";
import Link from "next/link";
import { getProducts } from "lib/shopify";

import ProductCard from "/components/ProductCard";

export default async function Products() {
  const json = await getProducts();

  return (
    <main className="container mx-auto py-5 px-4">
      <div>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-5">
          Our Products
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {json.data.products.nodes.map((product) => {
            return <ProductCard key={product.id} item={product} />;
          })}
        </ul>
      </div>
    </main>
  );
}
