import Link from "next/link";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { docs } from "../../side-nav/data/nav";
import { Button } from "@/components/ui/button";

export function SheetDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size={"icon"}>
          <Menu className="size-4" />{" "}
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        {docs.map(({ title, content }) => (
          <div key={title} className="text-slate-900 mt-4 first:mt-0">
            <p className="dark:text-slate-100 p-2 text-sm font-bold">{title}</p>
            {content.map(({ title, url, isActive }) => (
              <Link
                key={title}
                href={`#`}
                className={cn(
                  isActive && "text-rose-500 ",
                  "flex gap-3 items-center p-2 text-sm dark:text-white"
                )}
              >
                <p>{title}</p>
              </Link>
            ))}
          </div>
        ))}
      </SheetContent>
    </Sheet>
  );
}
