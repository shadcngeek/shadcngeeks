"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { NavMenuTypes } from "../types";

export function NavMenu({ className }: NavMenuTypes) {
  return (
    <ul className={cn("dark:text-white flex gap-4 items-center", className)}>
      <Link
        className="py-3 px-4 dark:hover:bg-slate-800 hover:bg-pink-200 hover:text-pink-500 rounded-md transition w-full"
        href={"#"}
      >
        <li>Creations</li>
      </Link>
      <Link
        className="py-3 px-4 dark:hover:bg-slate-800 hover:bg-pink-200 hover:text-pink-500 rounded-md transition w-full"
        href={"#"}
      >
        <li>Gallery</li>
      </Link>
      <Link
        className="py-3 px-4 dark:hover:bg-slate-800 hover:bg-pink-200 hover:text-pink-500 rounded-md transition w-full"
        href={"#"}
      >
        <li>Pricing</li>
      </Link>
      <Link
        className="py-3 px-4 dark:hover:bg-slate-800 hover:bg-pink-200 hover:text-pink-500 rounded-md transition w-full"
        href={"#"}
      >
        <li>Gallery</li>
      </Link>
    </ul>
  );
}
