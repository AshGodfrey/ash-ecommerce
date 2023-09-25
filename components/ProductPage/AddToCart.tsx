export default function AddToCart() {
  return (
    <div className="flex items-center space-x-3">
      <label htmlFor="quantity" className="text-lg font-medium text-gray-600">
        Quantity:
      </label>
      <input
        id="quantity"
        type="number"
        min="1"
        className="border p-1.5 text-lg rounded-md shadow-sm transition-shadow duration-300 focus:ring-2 focus:ring-blue-300 focus:outline-none"
      />
      <button
        className="bg-blue-600 text-white py-2 px-5 rounded-md transition-all duration-300 hover:bg-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50 hover:scale-105"
        type="button"
      >
        Add to Cart
      </button>
    </div>
  );
}
