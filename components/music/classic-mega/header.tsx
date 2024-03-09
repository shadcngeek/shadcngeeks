"use client";

import React from "react";

import Logo from "./logo";
import { Menu } from "./menu";
import { Input } from "@/components/ui/input";

function Header() {
  return (
    <div className="dark:text-slate-400 flex justify-between">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex gap-3 items-center">
          <div className="shrink-0">
            <Logo />
          </div>
          <Input placeholder="Search..." />
        </div>
      </form>
      <Menu />
    </div>
  );
}

export default Header;
