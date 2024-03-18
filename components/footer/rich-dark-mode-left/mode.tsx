import { Monitor, Moon, MoonStarIcon, Sun } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export function Mode() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size={"icon"} variant="ghost">
          <MoonStarIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit" side="top">
        <ul className="space-y-2">
          <li>
            <Button
              className="flex items-center gap-3 w-full justify-start"
              variant={"ghost"}
              size={"sm"}
            >
              <Sun className="text-slate-700 dark:text-slate-400" />{" "}
              <p className="text-slate-700 dark:text-slate-400 text-sm">Dark</p>{" "}
            </Button>
          </li>
          <li>
            <Button
              className="flex items-center gap-3 w-full justify-start"
              variant={"ghost"}
              size={"sm"}
            >
              <Moon className="text-slate-700 dark:text-slate-400" />{" "}
              <p className="text-slate-700 dark:text-slate-400 text-sm">Dark</p>{" "}
            </Button>
          </li>
          <li>
            <Button
              className="flex items-center gap-3 w-full justify-start"
              variant={"ghost"}
              size={"sm"}
            >
              <Monitor className="text-slate-700 dark:text-slate-400" />{" "}
              <p className="text-slate-700 dark:text-slate-400 text-sm">
                System
              </p>{" "}
            </Button>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
