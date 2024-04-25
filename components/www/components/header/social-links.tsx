"use client";
import React from "react";
import Link from "next/link";

import { Github, MoonStarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:text-rose-600 dark:hover:text-rose-600 transition">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function SocialLinks() {
  return (
    <div className="w-full flex justify-end">
      <ul className="flex gap-4">
        <li>
          <Link
            href={"https://github.com/shadcngeek/shadcngeeks"}
            target="_blank"
          >
            <div className="hover:text-rose-600 dark:hover:text-rose-600 text-slate-700 dark:text-white transition size-10 flex items-center justify-center rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">

            <Github className="size-5" />
          </div>
          </Link>
        </li>
        <ModeToggle />
      </ul>
    </div>
  );
}

export default SocialLinks;
