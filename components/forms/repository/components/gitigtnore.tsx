import React from "react";

import { Check, ChevronsUpDown } from "lucide-react";

import {
  Command,
  CommandItem,
  CommandEmpty,
  CommandGroup,
  CommandInput,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { GitIgnoreTypes } from "../types";

export function GitIgnore({ items, placeHolder }: GitIgnoreTypes) {
  const [value, setValue] = React.useState("");
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="max-w-[300px] justify-between"
        >
          {value ? (
            <p className="text-xs text-[#71717a] dark:text-[#a1a1aa]">
              {placeHolder}
              <span className="text-sm text-black dark:text-white">
                {" "}
                {items.find((item) => item.value === value)?.label}
              </span>
            </p>
          ) : (
            <p className="text-xs text-[#71717a] dark:text-[#a1a1aa]">
              {placeHolder}
              <span className="text-sm text-black dark:text-white"> None</span>
            </p>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {items.map((item) => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === item.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
