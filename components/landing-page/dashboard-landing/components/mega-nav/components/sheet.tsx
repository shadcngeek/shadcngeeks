import Link from "next/link";

import { Github, MoonStarIcon, Twitter } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { SheetTypes } from "../types";
import { NavMenu } from "./header-lists";

export function SheetDrawer({ trigger }: SheetTypes) {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent className="space-y-5" side={"left"}>
        <div className="">
          <NavMenu className="flex flex-col gap-3 justify-start items-start" />
        </div>

        <ul className="flex gap-3">
          <li className="border border-slate-200 dark:border-slate-800 p-2 rounded-md">
            <Link href={"#"}>
              <Github className="text-slate-700 dark:text-slate-400 transition dark:hover:text-white" />
            </Link>
          </li>
          <li className="border border-slate-200 dark:border-slate-800 p-2 rounded-md">
            <Link href={"#"}>
              <Twitter className="text-slate-700 dark:text-slate-400 transition dark:hover:text-white" />
            </Link>
          </li>
          <li className="border border-slate-200 dark:border-slate-800 p-2 rounded-md">
            <Link href={"#"}>
              <MoonStarIcon className="text-slate-700 dark:text-slate-400 transition dark:hover:text-white" />
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
