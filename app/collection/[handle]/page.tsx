import { getCollection } from 'lib/shopify';
import { Product } from 'lib/types';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from 'components/ProductCard';
import { notFound } from 'next/navigation';
interface CollectionPageProps {
  params: {
    handle: string;
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const json = await getCollection(params.handle);
  if (!json || !json.data || !json.data.collectionByHandle) return notFound();

  return (
    <main className="container mx-auto py-5 px-4">
      <div>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-5">Products</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {json.data.collectionByHandle.products.edges.map((edge) => {
            const product: Product = edge.node;
            return <ProductCard key={product.id} item={product} />;
          })}
        </ul>
      </div>
    </main>
  );
}
