import React from "react";
import Link from "next/link";

import { UserAvatar } from "./user-avatar";

import { favorites } from "./data/nav";
import SmallDeviceDisplay from "./small-device/small-device-display";
import { Settings } from "lucide-react";
import { cn } from "@/lib/utils";

function SidebarClassicThin() {
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
          className="p-4 flex flex-col items-center justify-between w-[80px] border-r dark:border-slate-800 h-full"
        >
          <div>
            <p className="text-2xl font-bold text-rose-600 text-center mt-2 mb-10">
              SG{" "}
            </p>
            <div className="text-slate-900">
              {favorites.map(({ icon, label, isActive }) => (
                <Link
                  href={"#"}
                  key={label}
                  className={cn(
                    isActive && "bg-rose-500 text-slate-100",
                    "w-fit rounded-lg dark:text-slate-100 hover:bg-slate-100 dark:hover:text-rose-500 dark:hover:bg-slate-900 hover:text-rose-500 transition flex items-center p-4"
                  )}
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href={"#"}
            className="w-fit rounded-lg dark:text-slate-100 hover:bg-slate-100 dark:hover:text-rose-500 dark:hover:bg-slate-900 hover:text-rose-500 transition flex items-center p-4"
          >
            <Settings />
          </Link>
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

export default SidebarClassicThin;
