import { useEffect, useState } from "react";

import { ClipboardList } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export function Copy() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClosePopover = () => {
      if (open) {
        setTimeout(() => {
          setOpen(false);
        }, 1500);
      }
    };
    handleClosePopover();
  }, [open]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <ClipboardList
            className={cn(
              open
                ? "text-blue-500 dark:text-blue-500"
                : "text-slate-700 dark:text-slate-400"
            )}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit" side="top">
        <p>Copied!</p>
      </PopoverContent>
    </Popover>
  );
}
