import React from "react";
import Link from "next/link";

function HeaderCenter() {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 p-4 flex justify-between items-center dark:bg-slate-950">
      <div className="flex items-center gap-20">
        <Link href={"/"} className="">
          <p className="font-bold text-rose-600 text-2xl">ShadcnGeeks</p>
        </Link>
      </div>
      <div className="w-full">
        <ul className="flex gap-8 items-center text-sm font-semibold justify-center w-full dark:text-white">
          <li>
            <Link href="#" className="hover:text-rose-600 transition">
              Getting Started
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-rose-600 transition">
              Components
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-rose-600 transition">
              Documentation
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-rose-600 transition">
              GitHub
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderCenter;
