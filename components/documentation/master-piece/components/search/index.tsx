"use client";
import * as React from "react";
import { File } from "lucide-react";

import {
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandInput,
  CommandDialog,
} from "@/components/ui/command";
import { docs } from "../side-nav/data/nav";
import { Button } from "@/components/ui/button";

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
          placeholder="Type a command or search..."
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {docs.map(({ content }) => (
            <>
              {content.map(({ title }) => (
                <CommandItem key={title}>
                  <File className="mr-2 h-4 w-4" />
                  <span>{title}</span>
                </CommandItem>
              ))}
            </>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
