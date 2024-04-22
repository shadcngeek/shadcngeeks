import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { favorites, settings } from "./data/nav";

function SideNav() {
  return (
    <main className="dark:bg-slate-950 h-dvh">
      <nav
        aria-label="navigation"
        className="p-4 py-0 flex flex-col justify-between w-[300px] h-full"
      >
        <div className="space-y-10">
          <div className="text-slate-900 text-sm">
            <p className="dark:text-slate-100 p-4 pt-0">MAIN</p>
            {favorites.map(({ icon, label, isActive }) => (
              <Link
                href={"#"}
                key={label}
                className={cn(
                  isActive
                    ? "text-blue-500 dark:text-blue-500"
                    : "dark:text-white",
                  "rounded-lg flex gap-3 items-center p-4 hover:text-blue-600 transition dark:hover:text-blue-600"
                )}
              >
                {icon}
                <p>{label}</p>
              </Link>
            ))}
          </div>

          <div className="text-slate-900 text-sm">
            <p className="dark:text-slate-100 p-4">INFORMATION</p>
            {settings.map(({ icon, label }) => (
              <Link
                href={"#"}
                key={label}
                className={cn(
                  "rounded-lg flex gap-3 items-center p-4 dark:text-white hover:text-blue-600 transition dark:hover:text-blue-600"
                )}
              >
                {icon}
                <p>{label}</p>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </main>
  );
}

export default SideNav;
