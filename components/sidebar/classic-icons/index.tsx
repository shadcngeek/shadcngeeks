import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  Cpu,
  Home,
  User,
  Coins,
  Wrench,
  Activity,
  Bookmark,
  Computer,
  Keyboard,
  Settings,
  FolderCog,
  TrendingUp,
  ShoppingBag,
  ScatterChart,
} from "lucide-react";

import SmallDeviceDisplay from "./small-device/small-device-display";

function SidebarClassicIcon() {
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
          className="p-4 flex flex-col items-center justify-between w-[320px] border-r dark:border-slate-800 h-full bg-blue-500"
        >
          <div>
            <p className="text-2xl font-bold text-white mt-2 mb-10">
              ShadcnGeeks
            </p>

            <div className="space-y-20">
              <div className="text-slate-900 space-y-3">
                <div className="space-y-2">
                  <p className="text-white">HOME</p>
                  <div className="flex justify-between gap-3">
                    <Link
                      href={"#"}
                      className={cn(
                        "border border-blue-300 dark:border-blue-300 text-blue-300 dark:text-blue-300",
                        "w-fit rounded-lg hover:bg-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-600 hover:text-blue-300 transition flex items-center p-4"
                      )}
                    >
                      <ShoppingBag />
                    </Link>
                    <Link
                      href={"#"}
                      className={cn(
                        "border border-blue-300 dark:border-blue-300 text-blue-300 dark:text-blue-300",
                        "w-fit rounded-lg hover:bg-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-600 hover:text-blue-300 transition flex items-center p-4"
                      )}
                    >
                      <TrendingUp />
                    </Link>
                    <Link
                      href={"#"}
                      className={cn(
                        "border border-blue-300 dark:border-blue-300 text-blue-300 dark:text-blue-300",
                        "w-fit rounded-lg hover:bg-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-600 hover:text-blue-300 transition flex items-center p-4"
                      )}
                    >
                      <ScatterChart />
                    </Link>
                  </div>
                </div>

                <div className="flex justify-between gap-3">
                  <Link
                    href={"#"}
                    className={cn(
                      "border border-blue-300 dark:border-blue-300 text-blue-300 dark:text-blue-300",
                      "w-fit rounded-lg hover:bg-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-600 hover:text-blue-300 transition flex items-center p-4"
                    )}
                  >
                    <Coins />
                  </Link>
                  <Link
                    href={"#"}
                    className={cn(
                      "border border-blue-300 dark:border-blue-300 text-blue-300 dark:text-blue-300",
                      "w-fit rounded-lg hover:bg-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-600 hover:text-blue-300 transition flex items-center p-4"
                    )}
                  >
                    <Activity />
                  </Link>
                  <Link
                    href={"#"}
                    className={cn(
                      "border border-blue-300 dark:border-blue-300 text-blue-300 dark:text-blue-300",
                      "w-fit rounded-lg hover:bg-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-600 hover:text-blue-300 transition flex items-center p-4"
                    )}
                  >
                    <Bookmark />
                  </Link>
                </div>
              </div>

              <div className="text-slate-900 space-y-3">
                <div className="space-y-2">
                  <p className="text-white">SETTINGS</p>
                  <div className="flex justify-between gap-3">
                    <Link
                      href={"#"}
                      className={cn(
                        "border border-blue-300 dark:border-blue-300 text-blue-300 dark:text-blue-300",
                        "w-fit rounded-lg hover:bg-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-600 hover:text-blue-300 transition flex items-center p-4"
                      )}
                    >
                      <Keyboard />
                    </Link>
                    <Link
                      href={"#"}
                      className={cn(
                        "border border-blue-300 dark:border-blue-300 text-blue-300 dark:text-blue-300",
                        "w-fit rounded-lg hover:bg-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-600 hover:text-blue-300 transition flex items-center p-4"
                      )}
                    >
                      <Wrench />
                    </Link>
                    <Link
                      href={"#"}
                      className={cn(
                        "border border-blue-300 dark:border-blue-300 text-blue-300 dark:text-blue-300",
                        "w-fit rounded-lg hover:bg-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-600 hover:text-blue-300 transition flex items-center p-4"
                      )}
                    >
                      <Settings />
                    </Link>
                  </div>
                </div>

                <div className="flex justify-between gap-3">
                  <Link
                    href={"#"}
                    className={cn(
                      "border border-blue-300 dark:border-blue-300 text-blue-300 dark:text-blue-300",
                      "w-fit rounded-lg hover:bg-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-600 hover:text-blue-300 transition flex items-center p-4"
                    )}
                  >
                    <FolderCog />
                  </Link>
                  <Link
                    href={"#"}
                    className={cn(
                      "border border-blue-300 dark:border-blue-300 text-blue-300 dark:text-blue-300",
                      "w-fit rounded-lg hover:bg-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-600 hover:text-blue-300 transition flex items-center p-4"
                    )}
                  >
                    <Computer />
                  </Link>
                  <Link
                    href={"#"}
                    className={cn(
                      "border border-blue-300 dark:border-blue-300 text-blue-300 dark:text-blue-300",
                      "w-fit rounded-lg hover:bg-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-600 hover:text-blue-300 transition flex items-center p-4"
                    )}
                  >
                    <Cpu />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-3">
            <Link
              href={"#"}
              className={cn(
                "border border-blue-300 dark:border-blue-300 text-blue-300 dark:text-blue-300",
                "w-fit rounded-lg hover:bg-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-600 hover:text-blue-300 transition flex items-center p-4"
              )}
            >
              <Home />
            </Link>
            <Link
              href={"#"}
              className={cn(
                "border border-blue-300 dark:border-blue-300 text-blue-300 dark:text-blue-300",
                "w-fit rounded-lg hover:bg-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-600 hover:text-blue-500 transition flex items-center p-4"
              )}
            >
              <User />
            </Link>
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

export default SidebarClassicIcon;
