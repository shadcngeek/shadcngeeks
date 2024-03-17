"use client";
import Link from "next/link";

import { Menu } from "lucide-react";
import { Bell, HelpCircle, Search, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import AccountSettings from "../account-settings/account-settings";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export function MobileView() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant="ghost">
          <Menu className="dark:text-slate-400" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-4 md:p-6 dark:border-slate-800">
        <nav role="navigation" aria-label="Main" className="w-full">
          <div className="flex items-center gap-20 mb-5">
            <Link href={"/"} className="">
              <p className="font-bold text-rose-600 text-2xl">ShadcnGeeks</p>
            </Link>
          </div>

          <ul className="text-slate-700 dark:text-slate-400 flex flex-col gap-8 text-sm font-semibold w-full">
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

            <li>
              <Link href="#" className="flex items-center gap-3">
                <Search className="hover:text-rose-600 transition" />
                <p>Search</p>
              </Link>
            </li>

            <li>
              <Link href="#" className="flex items-center gap-3">
                <Bell className="hover:text-rose-600 transition" />
                <p>Notification</p>
              </Link>
            </li>

            <li>
              <Link href="#" className="flex items-center gap-3">
                <Settings className="hover:text-rose-600 transition" />
                <p>Settings</p>
              </Link>
            </li>

            <li className="flex items-center gap-3">
              <AccountSettings />
              <p>Account</p>
            </li>

            <ul className="flex gap-3 justify-start">
              <li>
                <Link href="#">
                  <Button className="font-semibold" variant={"outline"}>
                    Login
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Button className="bg-rose-600 dark:bg-rose-600 hover:bg-rose-700 dark:hover:bg-rose-700 dark:text-slate-400">
                    Signup
                  </Button>
                </Link>
              </li>
            </ul>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
