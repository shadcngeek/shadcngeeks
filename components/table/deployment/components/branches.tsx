import React from "react";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { DataTableToolbarProps } from "../types";

const branches = [
  {
    value: "feature/implement-auth0",
    label: "feature/implement-auth0",
  },
  {
    value: "enhancement/switch-to-shadcn-ui",
    label: "enhancement/switch-to-shadcn-ui",
  },
  {
    value: "bug/fix-infinite-rerender",
    label: "bug/fix-infinite-rerender",
  },
  {
    value: "main",
    label: "main",
  },
];

export function Branches<TData>({ table }: DataTableToolbarProps<TData>) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="min-w-[250px] justify-between"
        >
          {value
            ? branches.find((framework) => framework.value === value)?.label
            : "All Branches..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0 ">
        <Command>
          <CommandInput placeholder="Search branch..." />
          <CommandEmpty>No branch found.</CommandEmpty>
          <CommandGroup>
            {branches.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  table.getColumn("branch")?.setFilterValue(currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
