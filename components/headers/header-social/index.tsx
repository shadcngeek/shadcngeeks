import React from "react";
import Link from "next/link";

import { Bell, Search, Settings } from "lucide-react";

import { MobileView } from "./mobile/mobile-view";
import AccountSettings from "./account-settings/account-settings";

function HeaderSocial() {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 p-4 flex justify-between items-center dark:bg-slate-950">
      <div className="flex items-center gap-20">
        <Link href={"/"} className="">
          <p className="font-bold text-rose-600 text-2xl">ShadcnGeeks</p>
        </Link>
      </div>
      <nav
        role="navigation"
        aria-label="Main"
        className="text-slate-700 hidden lg:block w-full"
      >
        <ul className="flex gap-8 items-center text-sm font-semibold justify-center w-full dark:text-slate-400">
          <li>
            <Link href="#">Getting Started</Link>
          </li>
          <li>
            <Link href="#">Components</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
          <li>
            <Link href="#">GitHub</Link>
          </li>
        </ul>
      </nav>

      <nav role="navigation" className="hidden lg:block">
        <ul className="flex gap-8 items-center text-sm font-semibold justify-end dark:text-slate-400">
          <li>
            <Link href="#">
              <Search className="hover:text-rose-600 transition" />
            </Link>
          </li>

          <li>
            <Link href="#">
              <Bell className="hover:text-rose-600 transition" />
            </Link>
          </li>

          <li>
            <Link href="#">
              <Settings className="hover:text-rose-600 transition" />
            </Link>
          </li>

          <li>
            <AccountSettings />
          </li>
        </ul>
      </nav>

      <div className="block lg:hidden">
        <MobileView />
      </div>
    </div>
  );
}

export default HeaderSocial;
