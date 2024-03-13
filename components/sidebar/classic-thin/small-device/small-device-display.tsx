import Link from "next/link";

import { cn } from "@/lib/utils";
import { Menu, Settings } from "lucide-react";

import {
  Sheet,
  SheetFooter,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { favorites } from "../data/nav";

function SmallDeviceDisplay() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant="outline" className="dark:text-slate-100">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="flex flex-col justify-between dark:border-x-slate-800"
      >
        <div className="space-y-10">
          <p className="text-2xl font-bold text-rose-600">ShadcnGeeks </p>
          <div className="text-slate-900">
            {favorites.map(({ icon, label, isActive }) => (
              <Link
                href={"#"}
                key={label}
                className={cn(
                  isActive && "bg-rose-500 text-slate-100",
                  "rounded-lg dark:text-slate-100 hover:bg-slate-100 dark:hover:text-rose-500 dark:hover:bg-slate-900 hover:text-rose-500 transition flex gap-3 items-center p-4"
                )}
              >
                {icon}
                <p>{label}</p>
              </Link>
            ))}
          </div>
        </div>
        <SheetFooter className="m-0">
          <div className="text-slate-900 mt-auto">
            <div className="dark:text-slate-100 flex gap-3 items-center">
              <Link
                href={"#"}
                className="w-full rounded-lg dark:text-slate-100 hover:bg-slate-100 dark:hover:text-rose-500 dark:hover:bg-slate-900 hover:text-rose-500 transition flex gap-3 items-center p-4"
              >
                <Settings />
                <p>Settings</p>
              </Link>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default SmallDeviceDisplay;
