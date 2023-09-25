import Link from "next/link";

const { COMPANY_NAME, SITE_NAME } = process.env;
import { Suspense } from "react";
const currentYear = new Date().getFullYear();
const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "");
const copyrightName = COMPANY_NAME || SITE_NAME || "";

export default function Footer() {
  const skeleton =
    "w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700";
  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith(".")
              ? "."
              : ""}{" "}
            All rights reserved.
          </p>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          <p>Designed in Colorado</p>
        </div>
      </div>
    </footer>
  );
}
