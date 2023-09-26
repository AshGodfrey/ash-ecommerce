import Link from 'next/link';
import Search from './Search';
import Logo from './Logo';
import Links from './Links';

export default async function Header() {
  return (
    <header className="bg-slate-200 text-slate-800 p-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="mx-5">
            <Search />
          </div>
          <Links />
        </div>
      </div>
    </header>
  );
}
