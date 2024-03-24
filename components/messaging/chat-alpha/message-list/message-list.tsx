import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { MessageTypes } from "../types";

function MessageList({
  date,
  fullName,
  lastMessage,
  newMessages,
  profileImage,
}: MessageTypes) {
  return (
    <div className="flex flex-col gap-3 items-center p-4 border-b w-full border-l border-r dark:border-slate-900 border-slate-100">
      <div className="flex gap-3 items-center w-full">
        <Avatar>
          <AvatarImage alt="@user" src={profileImage} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex w-full justify-between items-start dark:text-white">
          <p>{fullName}</p>
          <p className="text-sm text-slate-700 dark:text-slate-400">{date}</p>
        </div>
      </div>
      <div className="w-full pl-12 flex items-center justify-between">
        <p className="text-sm text-slate-700">{lastMessage}</p>
        {newMessages && (
          <div className="bg-blue-500 rounded-full w-[15px] h-[15px]">
            <p className="text-xs text-center text-white dark:text-slate-900">
              {newMessages}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MessageList;
