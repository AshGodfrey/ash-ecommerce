import ProductCard from './ProductCard';
import { getProduct } from 'lib/shopify';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';

const FEATURED_PRODUCT = '8744296284441'

export default async function FeaturedProduct() {
  const productCookie = cookies().get('product');

  const productId = productCookie ? productCookie.value : FEATURED_PRODUCT;

  const json = await getProduct(productId);
  const product = json?.data?.product;

  if (!product) {
    return notFound();
  }

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Product</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard key={product.id} item={product} />;
      </ul>
    </div>
  );
}
