'use client';

import Button from 'next/link';
import { formatPrice } from 'lib/utils';
import { Product } from 'lib/types';
import ImageComponent from './ImageComponent';
import { create } from './actions';
import { useRouter } from 'next/navigation';

type ProductCardProps = {
  item: Product;
};

export default function ProductCard({ item }: ProductCardProps) {
  const productId = item.id.split('/').pop();
  const router = useRouter();
  return (
    <li className="relative border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out group">
      <div className="relative overflow-hidden h-[450px] w-full">
        <ImageComponent
          src={item.featuredImage?.url}
          alt={item.featuredImage?.altText}
          fill={true}
          className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <Button
          href={`/product/${productId}`}
          className="absolute bottom-0 left-0 w-full bg-blue-600 text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
          onClick={() => {
            (async () => {
              if (productId) {
                await create(productId);
                router.refresh();
              }
            })();
          }}
        >
          View Product
        </Button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
        <h4 className="text-gray-500 mt-1">
          {formatPrice(
            item.priceRangeV2.minVariantPrice.amount,
            item.priceRangeV2.minVariantPrice.currencyCode,
          )}
        </h4>
      </div>
    </li>
  );
}
