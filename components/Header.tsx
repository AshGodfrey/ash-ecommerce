import client from 'lib/contentfulClient';
import Link from 'next/link';
import Image from 'next/image';
import Search from './Search';

interface LogoFields {
  logo: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  alt: string;
}

interface LogoEntry {
  fields: LogoFields;
}

export default async function Header() {
  const logo = (await client.getEntry(
    process.env.HEADER_CONTENT!,
  )) as unknown as LogoEntry;

  const logoUrl = logo.fields?.logo?.fields?.file?.url;
  const logoAlt = logo.fields?.alt;

  if (!logoUrl || !logoAlt) {
    return null;
  }
  return (
    <header className="bg-slate-200 text-slate-800 p-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <Image
              src={'https:' + logoUrl}
              alt={logoAlt}
              width={400}
              height={250}
            />
          </Link>
            <Search />
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
