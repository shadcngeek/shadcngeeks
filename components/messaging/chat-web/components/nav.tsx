"use client";
import { useAtom } from "jotai";

import UserList from "./user-list";

import { ScrollArea } from "@/components/ui/scroll-area";

import { NavTypes } from "../types";
import { dbMessagesAtom } from "../jotaiAtoms/atoms";

export function Nav({ isCollapsed }: NavTypes) {
  const [dbMessages] = useAtom(dbMessagesAtom);
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2 h-full"
    >
      <ScrollArea className="h-full w-full rounded-md">
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {dbMessages.map((data, index) => (
            <UserList key={index} {...data} id={index} />
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}
