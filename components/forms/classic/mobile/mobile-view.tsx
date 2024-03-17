"use client";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import LeftMenuItems from "../left-menu/left-menu-items";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export function MobileView() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-4 md:p-6 dark:border-slate-800">
        <LeftMenuItems />
      </SheetContent>
    </Sheet>
  );
}
