import { Menu } from "lucide-react";

import { Input } from "@/components/ui/input";
import { UserNav } from "../user-nav/user-nav";
import { MainNav } from "../main-nav/main-nav";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { CalendarDateRangePicker } from "../date-range-picker/date-range-picker";

function SmallDeviceDisplay() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant="outline" className="dark:text-slate-100">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="dark:border-x-slate-800">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <Input type="search" placeholder="Search..." className="w-full" />
          <div className="space-y-6">
            <CalendarDateRangePicker />
            <Button>Download</Button>
          </div>
          <MainNav className="flex-col items-start gap-6 justify-start space-x-0" />
          <div className="flex items-center gap-3">
            <UserNav />
            <p className="text-sm font-medium">Account</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default SmallDeviceDisplay;
