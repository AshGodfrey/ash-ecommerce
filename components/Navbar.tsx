import { fetchAllCollections } from "../lib/shopify";
import Link from "next/link";
export default async function Navbar() {
  var collections = await fetchAllCollections();
  return (
    <nav className="bg-slate-200 text-white border-t border-gray-300">
      <nav className="bg-slate-400 p-4">
        <ul className="flex justify-start space-x-10 pl-20">
          {collections.data.collections.edges.map((collection, index) => (
            <li key={index}>
              <Link
                href={`/collection/${collection.node.handle}`}
                className="text-white hover:text-gray-200"
              >
                {collection.node.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </nav>
  );
}
