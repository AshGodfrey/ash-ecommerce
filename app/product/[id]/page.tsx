import Image from 'next/image';
import Link from 'next/link';
import { getProduct } from 'lib/shopify';
import ProductImage from 'components/ProductPage/ProductImage';
import ProductDetails from 'components/ProductPage/ProductDetails';
import AddToCart from 'components/ProductPage/AddToCart';
import { notFound } from 'next/navigation';

interface SingleProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: SingleProductPageProps) {
  const json = await getProduct(params.id);
  const { product } = json.data;
  if (!product) {
    return notFound();
  }
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
