import React from "react";
import Image from "next/image";

import { useAtom } from "jotai";

import { Button } from "@/components/ui/button";

import { UserListTypes } from "../types";
import { chats, messages } from "../data/db";
import { currentUserAtom, currentChatsAtom } from "../jotaiAtoms/atoms";

function UserList({ id, date, fullName, lastMessage }: UserListTypes) {
  const [, setTextMessages] = useAtom(currentChatsAtom);
  const [, setUser] = useAtom(currentUserAtom);

  return (
    <Button
      onClick={() => {
        setUser(messages[id as number]);
        setTextMessages(chats[`user${(id as number) + 1}`]?.messages);
      }}
      variant="outline"
      className="py-8"
    >
      <div className="w-full">
        <div className="flex gap-3 justify-start w-full items-center">
          <Image
            width={40}
            height={40}
            alt="avatar"
            className="rounded-full"
            src={"/avatars/01.png"}
          />
          <div>
            <p className="text-left text-lg">{fullName}</p>
            <p className="text-left text-sm font-light">{lastMessage}</p>
          </div>
        </div>
      </div>
    </Button>
  );
}

export default UserList;
