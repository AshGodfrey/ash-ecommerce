import { getCollection } from "lib/shopify";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "/components/ProductCard";

export default async function CollectionPage({ params }: CollectionPageProps) {
  const json = await getCollection(params.handle);
  if (!json) return notFound();
  const { collection } = json.data;
  return (
    <main className="container mx-auto py-5 px-4">
      <div>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-5">Products</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {json.data.collectionByHandle.products.edges.map((edge) => {
            return <ProductCard key={edge.node.id} item={edge.node} />;
          })}
        </ul>
      </div>
    </main>
  );
}
