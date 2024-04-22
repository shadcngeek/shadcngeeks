import Link from "next/link";

import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

import { favorites, settings } from "../data/nav";

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

          <div className="text-slate-900">
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
      </SheetContent>
    </Sheet>
  );
}

export default SmallDeviceDisplay;
