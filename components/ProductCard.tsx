import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from 'lib/utils';
import { Product } from 'lib/types';

type ProductCardProps = {
  item: Product;
};

export default function ProductCard({ item }: ProductCardProps) {
  const productId = item.id.split('/').pop();
  return (
    <li className="relative border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out group">
      <div className="relative overflow-hidden h-[450px] w-full">
        <Image
          src={item.featuredImage?.url || '/image-coming-soon.jpg'}
          alt={item.featuredImage?.altText || 'Default alt text'}
          layout="fill"
          className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <Link
          href={`/product/${productId}`}
          className="absolute bottom-0 left-0 w-full bg-blue-600 text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
        >
          View Product
        </Link>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
        <h4 className="text-gray-500 mt-1">
          {formatPrice(
            item.priceRangeV2.minVariantPrice.amount,
            item.priceRangeV2.minVariantPrice.currencyCode,
          )}
        </h4>
        <p className="text-sm text-gray-600 mt-2 mb-3">{item.description}</p>
      </div>
    </li>
  );
}
