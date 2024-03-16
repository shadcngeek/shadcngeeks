import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MobileView } from "./mobile/mobile-view";

function HeaderLeftLogin() {
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
        <ul className="flex gap-8 items-center text-sm font-semibold justify-start w-full dark:text-slate-400 px-10">
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
      </nav>

      <div className="hidden lg:block">
        <ul className="flex gap-8 items-center text-sm font-semibold justify-end dark:text-slate-400">
          <li>
            <Link href="#">
              <Button
                className="font-semibold dark:text-slate-400"
                variant={"link"}
              >
                Login
              </Button>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Button className="bg-rose-600 dark:bg-rose-600 hover:bg-rose-700 dark:hover:bg-rose-700 dark:text-white">
                Signup
              </Button>
            </Link>
          </li>
        </ul>
      </div>

      <div className="block lg:hidden">
        <MobileView />
      </div>
    </div>
  );
}

export default HeaderLeftLogin;
