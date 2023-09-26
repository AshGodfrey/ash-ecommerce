import Link from 'next/link';

export default function Links() {
  return (
    <div>
      <ul className="hidden md:flex space-x-4">
        <li>
          <Link href="#" className="hover:text-blue-300">
            Account
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-blue-300">
            Wishlist
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-blue-300">
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
}
