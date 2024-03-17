"use client";
import Link from "next/link";
import { useAtom } from "jotai";

import UserList from "./user-list";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { NavTypes } from "../types";

import { dbMessagesAtom } from "../jotaiAtoms/atoms";

export function Nav({ isCollapsed, isSmallDevice }: NavTypes) {
  const [dbMessages] = useAtom(dbMessagesAtom);
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2 h-full"
    >
      <ScrollArea className="h-full w-full rounded-md">
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {isSmallDevice
            ? dbMessages.map(
                ({ fullName, lastMessage, profileImage }, index) => (
                  <Link key={index} href={`/messaging/chat-web/${index}`}>
                    <div className="w-full p-2 border dark:border-slate-800 rounded-md">
                      <div className="flex gap-3 justify-start w-full items-center">
                        <Avatar>
                          <AvatarImage alt="@user" src={profileImage} />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-left text-lg">{fullName}</p>
                          <p className="text-left text-sm font-light">
                            {lastMessage}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              )
            : dbMessages.map((data, index) => (
                <UserList key={index} {...data} id={index} />
              ))}
        </nav>
      </ScrollArea>
    </div>
  );
}
