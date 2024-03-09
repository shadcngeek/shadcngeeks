import Link from "next/link";

import { Github, MoonStarIcon, Twitter } from "lucide-react";

import { AccountSettings } from "./Account";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { SheetTypes } from "../types";
import { NavMenu } from "./header-lists";

export function SheetDrawer({ trigger }: SheetTypes) {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent className="space-y-5 overflow-y-scroll" side={"left"}>
        <div className="">
          <NavMenu className="flex flex-col gap-3 justify-start items-start" />
        </div>

        <AccountSettings />
        <ul className="flex gap-5">
          <li>
            <Link href={"#"}>
              <Github className="text-slate-700 dark:text-slate-400 hover:text-pink-500  transition dark:hover:text-pink-500" />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <Twitter className="text-slate-700 dark:text-slate-400 hover:text-pink-500  transition dark:hover:text-pink-500" />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <MoonStarIcon className="text-slate-700 dark:text-slate-400 hover:text-pink-500  transition dark:hover:text-pink-500" />
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
