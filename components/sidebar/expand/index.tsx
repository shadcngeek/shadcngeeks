"use client";
import React from "react";
import Link from "next/link";

import {
  ResizablePanel,
  ResizableHandle,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { UserAvatar } from "./user-avatar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CollapsibleDisplay } from "./collapsible/collapsible";
import SmallDeviceDisplay from "./small-device/small-device-display";

import { cn } from "@/lib/utils";
import { favorites, settings } from "./data/nav";

function SidebarExpand() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

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

      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction="horizontal"
          onLayout={(sizes: number[]) => {
            document.cookie = `react-resizable-panels:layout=${JSON.stringify(
              sizes
            )}`;
          }}
          className="hidden md:block h-full h-full items-stretch border dark:border-slate-800 rounded-lg"
        >
          <ResizablePanel
            minSize={0}
            maxSize={22}
            defaultSize={400}
            collapsedSize={0}
            collapsible={true}
            // @ts-ignore
            onCollapse={(collapsed: any) => {
              setIsCollapsed(collapsed);
              document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                collapsed
              )}`;
            }}
            className={cn(
              isCollapsed &&
                "min-w-[50px] transition-all duration-300 ease-in-out"
            )}
          >
            <div
              aria-label="navigation"
              className="p-4 flex flex-col justify-between w-[400px] border-r dark:border-slate-800 h-full"
            >
              <div className="space-y-10">
                <p className="text-2xl font-bold text-rose-600">ShadcnGeeks </p>
                <div className="text-slate-900">
                  <CollapsibleDisplay title="MAIN">
                    {favorites.map(({ icon, label, isActive }) => (
                      <Link
                        href={"#"}
                        key={label}
                        className={cn(
                          isActive
                            ? "bg-rose-500 text-slate-100 dark:bg-rose-500 dark:text-slate-100"
                            : "dark:text-slate-100",
                          "rounded-lg  hover:bg-slate-100 dark:hover:text-rose-500 dark:hover:bg-slate-900 hover:text-rose-500 transition flex gap-3 items-center p-4"
                        )}
                      >
                        {icon}
                        <p>{label}</p>
                      </Link>
                    ))}
                  </CollapsibleDisplay>
                </div>

                <div className="text-slate-900">
                  <CollapsibleDisplay title="INFORMATION">
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
                  </CollapsibleDisplay>
                </div>
              </div>

              <div className="text-slate-900 mt-auto">
                <div className="dark:text-slate-100 flex gap-3 items-center p-4">
                  <UserAvatar />
                  <p>Phillip Doglas</p>
                </div>
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={440} className="flex flex-col">
            <div className="h-20 border-b dark:border-b-slate-800 dark:bg-slate-950"></div>
            <div className="p-4 h-full w-full">
              <div className="dark:bg-slate-950 h-full border-2 border-dashed dark:border-slate-800 rounded-lg"></div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
    </main>
  );
}

export default SidebarExpand;
