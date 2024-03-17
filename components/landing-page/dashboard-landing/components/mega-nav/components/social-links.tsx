import React from "react";
import Link from "next/link";

import { Github, Menu, MoonStarIcon, Twitter } from "lucide-react";

import { SheetDrawer } from "./sheet";
import { Input } from "@/components/ui/input";

function SocialLinks() {
  return (
    <div className="w-full flex justify-end">
      <ul className="flex gap-5">
        <li className="hidden lg:block">
          <Input placeholder="Search documentation..." />
        </li>
        <li className="hidden sm:block border border-slate-200 dark:border-slate-800 p-2 rounded-md">
          <Link href={"#"}>
            <Github className="text-slate-700 dark:text-slate-400 transition dark:hover:text-white" />
          </Link>
        </li>
        <li className="hidden sm:block border border-slate-200 dark:border-slate-800 p-2 rounded-md">
          <Link href={"#"}>
            <Twitter className="text-slate-700 dark:text-slate-400 transition dark:hover:text-white" />
          </Link>
        </li>
        <li className="hidden sm:block border border-slate-200 dark:border-slate-800 p-2 rounded-md">
          <Link href={"#"}>
            <MoonStarIcon className="text-slate-700 dark:text-slate-400 transition dark:hover:text-white" />
          </Link>
        </li>
        <SheetDrawer
          trigger={
            <li className="border border-slate-200 dark:border-slate-800 p-2 rounded-md block lg:hidden">
              <Menu className="text-slate-700 dark:text-slate-400 transition dark:hover:text-white" />
            </li>
          }
          content={""}
        />
      </ul>
    </div>
  );
}

export default SocialLinks;
