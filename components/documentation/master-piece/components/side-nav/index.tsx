import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { docs } from "./data/nav";
import { SearchDoc } from "../search";
import { ScrollArea } from "@/components/ui/scroll-area";

function SideNav() {
  return (
    <aside className="shrink-0 pl-8 w-[300px] border-r dark:border-slate-800 fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] md:sticky md:block">
      <ScrollArea className="h-full py-6 pr-6 lg:py-8">
        <div className="mb-5">
          <SearchDoc />
        </div>
        <div>
          {docs.map(({ title, content }) => (
            <div key={title} className="text-slate-900 mt-4 first:mt-0">
              <p className="dark:text-slate-100 p-2 text-sm font-bold">
                {title}
              </p>
              {content.map(({ title, url, isActive }) => (
                <Link
                  key={title}
                  href={`#`}
                  className={cn(
                    isActive
                      ? "text-rose-500 dark:text-rose-500"
                      : "dark:text-white",
                    "flex gap-3 items-center p-2 text-sm"
                  )}
                >
                  <p>{title}</p>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
}

export default SideNav;
