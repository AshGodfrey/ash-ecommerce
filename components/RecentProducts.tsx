import ProductCard from './ProductCard';
import { getRecentProducts } from 'lib/shopify';
import { Product } from 'lib/types';
import { notFound } from 'next/navigation';
export default async function RecentProducts() {
  const json = await getRecentProducts(3);
  if (!json || !json.data) return notFound();
  const products = json.data.products.nodes;
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Recent Products</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: Product) => {
          return <ProductCard key={product.id} item={product} />;
        })}
      </ul>
    </div>
  );
}
