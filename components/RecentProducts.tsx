import ProductCard from "./ProductCard";

export default function RecentProducts({ products }) {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Recent Products
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => {
          return <ProductCard key={product.id} item={product} />;
        })}
      </ul>
    </div>
  );
}
