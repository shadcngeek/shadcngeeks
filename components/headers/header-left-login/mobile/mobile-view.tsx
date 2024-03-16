"use client";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";

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

          <ul className="text-slate-700 flex flex-col gap-8 text-sm font-semibold w-full dark:text-slate-400">
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

            <ul className="flex gap-3 justify-start">
              <li>
                <Link href="#">
                  <Button
                    className="font-semibold dark:text-slate-400"
                    variant={"outline"}
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
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
