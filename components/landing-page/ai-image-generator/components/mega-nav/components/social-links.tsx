import React from "react";
import Link from "next/link";

import { Github, Menu, MoonStarIcon, Twitter } from "lucide-react";

import { SheetDrawer } from "./sheet";
import { UserAccount } from "./drop-down";

function SocialLinks() {
  return (
    <div className="w-full flex justify-end">
      <ul className="flex gap-5 items-center">
        <li className="hidden sm:block ">
          <Link href={"#"}>
            <Github className="text-slate-700 dark:text-white dark:hover:text-pink-500 hover:text-pink-500 transition" />
          </Link>
        </li>
        <li className="hidden sm:block ">
          <Link href={"#"}>
            <Twitter className="text-slate-700 dark:text-white dark:hover:text-pink-500 hover:text-pink-500 transition" />
          </Link>
        </li>
        <li className="hidden sm:block h-fit">
          <UserAccount />
        </li>
        <li className="hidden sm:block ">
          <Link href={"#"}>
            <MoonStarIcon className="text-slate-700 dark:text-white dark:hover:text-pink-500 hover:text-pink-500 transition" />
          </Link>
        </li>
        <SheetDrawer
          trigger={
            <li className=" block md:hidden">
              <Menu className="text-slate-700 dark:text-white dark:hover:text-pink-500 hover:text-pink-500 transition" />
            </li>
          }
          content={""}
        />
      </ul>
    </div>
  );
}

export default SocialLinks;
