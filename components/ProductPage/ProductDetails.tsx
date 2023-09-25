import formatPrice from 'lib/utils';

export default function ProductDetails({ product }) {
  return (
    <div className="p-6 md:w-2/3 space-y-6">
      <h3 className="font-semibold text-5xl text-gray-800 mb-4">
        {product.title}
      </h3>
      <h4 className="text-3xl font-light text-gray-600 mb-4">
      {formatPrice(product.priceRangeV2.minVariantPrice.amount, product.priceRangeV2.minVariantPrice.currencyCode)}
   
      </h4>
      <p className="text-gray-700 text-xl">{product.description}</p>
    </div>
  );
}
