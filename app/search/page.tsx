import ProductCard from 'components/ProductCard';
import { getProducts } from 'lib/shopify';
import { notFound } from 'next/navigation';
import { Product } from 'lib/types';

export const runtime = 'edge';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.',
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const searchValue = searchParams ? (searchParams['q'] as string) : '';
  const json = await getProducts({ query: searchValue });
  if (!json || !json.data) return notFound();
  return (
    <main className="container mx-auto py-5 px-4">
      <div>
        {json.data.products.nodes.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {json.data.products.nodes.map((product: Product) => {
              return <ProductCard key={product.id} item={product} />;
            })}
          </ul>
        ) : (
          <p>No results found for {searchValue}</p>
        )}
      </div>
    </main>
  );
}
