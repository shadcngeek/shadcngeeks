"use client";
import Link from "next/link";
import * as React from "react";

import { Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { Command as CommandPrimitive } from "cmdk";
import { type DialogProps } from "@radix-ui/react-dialog";

import {
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandInput,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import { docsData } from "../side-nav/data/search-doc";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg max-w-[800px] h-[600px]">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5 dark:[&_[cmdk-group-heading]]:text-slate-400">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export function SearchDoc() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        size={"sm"}
        variant={"outline"}
        onClick={() => setOpen(true)}
        className="gap-3 text-slate-700 dark:text-slate-400 font-normal"
      >
        Search documentation...
        <p className="text-sm text-muted-foreground">
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border dark:border-slate-800 bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>J
          </kbd>
        </p>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          className="dark:border-b-slate-800"
          placeholder="Search documentation..."
        />
        <CommandList className="!max-h-full">
          <CommandEmpty>No results found.</CommandEmpty>
          {docsData.map(({ description, isFavorite, title }) => (
            <>
              {
                <CommandItem
                  className="flex justify-between items-center !p-4"
                  key={title}
                >
                  <Link href={"#"} className="space-y-2">
                    <p>{title}</p>
                    <p className="max-w-[600px] text-sm text-slate-700 dark:text-slate-400">
                      {description}
                    </p>
                  </Link>
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    className="hover:text-rose-500 dark:hover:text-rose-500"
                  >
                    <Star
                      className={cn(
                        "mr-2 h-4 w-4",
                        isFavorite && "text-rose-500"
                      )}
                    />
                  </Button>
                </CommandItem>
              }
            </>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
