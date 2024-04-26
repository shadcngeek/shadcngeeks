import Link from "next/link";

import { Menu } from "lucide-react";

import {
  Sheet,
  SheetFooter,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";
import { UserAvatar } from "../user-avatar";
import { Button } from "@/components/ui/button";

import { docs, settings } from "../data/nav";
import { cn } from "@/lib/utils";

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
            <p className="dark:text-slate-100 p-4">MAIN</p>
            {docs.map(({ icon, label, isActive }) => (
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
        <SheetFooter>
          <div className="text-slate-900 mt-auto">
            <div className="dark:text-slate-100 flex gap-3 items-center p-4">
              <UserAvatar />
              <p>Phillip Doglas</p>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default SmallDeviceDisplay;
