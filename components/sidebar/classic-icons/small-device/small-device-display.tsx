import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  Cpu,
  Menu,
  User,
  Home,
  Coins,
  Wrench,
  Activity,
  Bookmark,
  Computer,
  Settings,
  Keyboard,
  FolderCog,
  TrendingUp,
  ShoppingBag,
  ScatterChart,
} from "lucide-react";

import {
  Sheet,
  SheetFooter,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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
        className="flex flex-col justify-between dark:border-x-slate-800 bg-blue-500 dark:bg-blue-500"
      >
        <div className="space-y-20">
          <div className="text-slate-900 space-y-3">
            <div className="space-y-2">
              <p className="text-white">HOME</p>
              <div className="flex gap-3">
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

            <div className="flex gap-3">
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
              <div className="flex gap-3">
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

            <div className="flex gap-3">
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
        <SheetFooter className="m-0">
          <div className="flex justify-start gap-3 w-full">
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
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default SmallDeviceDisplay;
