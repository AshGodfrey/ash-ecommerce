import Link from "next/link";
import Image from "next/image";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export default async function Header() {
  const logo = await client.getEntry("vygrfEogli0DJbCJPHZzK");
  return (
    <header className="bg-slate-200 text-slate-800 p-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <Image
              src={"https:" + logo.fields.logo.fields.file.url}
              alt={logo.fields.logo.fields.alt}
              width={400}
              height={250}
              className="your-logo-styles"
            />
          </Link>
          <ul className="hidden md:flex space-x-4">
            <li>
              <a href="#" className="hover:text-blue-300">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Cart
              </a>
            </li>
          </ul>
          <button className="md:hidden flex items-center">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
