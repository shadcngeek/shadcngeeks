import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Bell, HelpCircle, Search, Settings } from "lucide-react";
import AccountSettings from "./account-settings/account-settings";

function HeaderSocial() {
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
      </div>

      <div className="">
        <ul className="flex gap-8 items-center text-sm font-semibold justify-end dark:text-white">
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
      </div>
    </div>
  );
}

export default HeaderSocial;
