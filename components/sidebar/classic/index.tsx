import React from "react";
import Link from "next/link";

import { UserAvatar } from "./user-avatar";

import { favorites, settings } from "./data/nav";
import SmallDeviceDisplay from "./small-device/small-device-display";
import { cn } from "@/lib/utils";

function SidebarClassic() {
  return (
    <main className="dark:bg-slate-950 h-dvh md:p-4">
      <div className="md:hidden flex flex-col h-full">
        <div className="border-b dark:border-b-slate-800 p-4">
          <SmallDeviceDisplay />
        </div>
        <div className="p-4 h-full w-full">
          <div className="dark:bg-slate-950 h-full border-2 border-dashed dark:border-slate-800 rounded-lg"></div>
        </div>
      </div>

      <div className="hidden h-full md:flex w-full overflow-hidden border dark:border-slate-800 rounded-lg">
        <div
          aria-label="navigation"
          className="p-4 flex flex-col justify-between w-[400px] border-r dark:border-slate-800 h-full"
        >
          <div className="space-y-10">
            <p className="text-2xl font-bold text-rose-600">ShadcnGeeks </p>
            <div className="text-slate-900">
              <p className="dark:text-slate-100 p-4">MAIN</p>
              {favorites.map(({ icon, label, isActive }) => (
                <Link
                  href={"#"}
                  key={label}
                  className={cn(
                    isActive && "bg-rose-500 text-white",
                    "rounded-lg dark:text-slate-100 hover:bg-slate-100 dark:hover:text-rose-500 dark:hover:bg-slate-900 hover:text-rose-500 transition flex gap-3 items-center p-4"
                  )}
                >
                  {icon}
                  <p>{label}</p>
                </Link>
              ))}
            </div>

            <div className="text-slate-900">
              <p className="dark:text-slate-100 p-4">INFORMATION</p>
              {settings.map(({ icon, label }) => (
                <Link
                  href={"#"}
                  key={label}
                  className="rounded-lg dark:text-slate-100 hover:bg-slate-100 dark:hover:text-rose-500 dark:hover:bg-slate-900 hover:text-rose-500 transition flex gap-3 items-center p-4"
                >
                  {icon}
                  <p>{label}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-slate-900 mt-auto">
            <div className="dark:text-slate-100 flex gap-3 items-center p-4">
              <UserAvatar />
              <p>Phillip Doglas</p>
            </div>
          </div>
        </div>

        <div className="w-full dark:bg-slate-900  flex flex-col">
          <div className="h-20 border-b dark:border-b-slate-800 dark:bg-slate-950"></div>
          <div className="p-4 h-full w-full">
            <div className="dark:bg-slate-950 h-full border-2 border-dashed dark:border-slate-800 rounded-lg"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SidebarClassic;
