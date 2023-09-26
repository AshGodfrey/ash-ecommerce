import Link from 'next/link';

function getCopyrightInfo() {
  const { COMPANY_NAME, SITE_NAME } = process.env;
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';
  return {
    copyrightDate,
    copyrightName,
  };
}

export default function Footer() {
  const { copyrightDate, copyrightName } = getCopyrightInfo();
  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400 bg-slate-200 dark:bg-neutral-900">
      <div className="border-t border-neutral-200 py-4 md:py-6">
        <div className="container mx-auto px-4 md:flex md:items-center md:justify-between">
          <p className="text-center md:text-left mb-2 md:mb-0">
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.')
              ? '.'
              : ''}{' '}
            All rights reserved.
          </p>
          <hr className="mx-auto md:hidden h-px w-16 bg-neutral-300 dark:bg-neutral-700" />
          <p className="text-center md:text-right">Designed in Colorado</p>
        </div>
      </div>
    </footer>
  );
}
