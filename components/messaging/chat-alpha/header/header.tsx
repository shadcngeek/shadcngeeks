import React from "react";

import { MoreVertical, Phone, Video } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AccountSettings from "../account-settings/account-settings";

import { MakeCallTypes } from "../types";

function Header({ setIsCalling, setIsVideo }: MakeCallTypes) {
  return (
    <div className="flex items-center w-full border-b dark:border-b-slate-800 justify-between dark:bg-slate-950 ">
      <div className="w-[300px] p-4 grow-0 shrink-0 border-r text-2xl font-bold text-blue-500 dark:border-slate-800">
        ChitChat
      </div>
      <div className="w-[400px] border-r grow-0 shrink-0 px-4">
        <Input placeholder="Search people" />
      </div>
      <div className="flex gap-5 justify-end w-[705px] shrink-0   border-r dark:border-r-slate-800 pr-10">
        <Button
          size={"icon"}
          onClick={
            setIsCalling &&
            (() => {
              setIsCalling((isCalling) => !isCalling);
              setIsVideo && setIsVideo(false);
            })
          }
          className="text-slate-600 dark:text-slate-500 rounded-full h-10 w-10 bg-transparent hover:bg-transparent dark:hover:bg-transparent  dark:bg-transparent "
        >
          <Phone />
        </Button>
        <Button
          size={"icon"}
          onClick={
            setIsVideo &&
            (() => {
              setIsVideo((isCalling) => !isCalling);
              setIsCalling && setIsCalling(false);
            })
          }
          className="text-slate-600 dark:text-slate-500 rounded-full h-10 w-10 bg-transparent hover:bg-transparent dark:hover:bg-transparent  dark:bg-transparent "
        >
          <Video />
        </Button>
        <Button
          size={"icon"}
          className="text-slate-600 dark:text-slate-500 rounded-full h-10 w-10 bg-transparent hover:bg-transparent dark:hover:bg-transparent  dark:bg-transparent "
        >
          <MoreVertical />
        </Button>
      </div>
      <div className="flex gap-5 items-center w-full h-full py-2 px-4 justify-end dark:border-slate-800">
        <AccountSettings />
      </div>
    </div>
  );
}

export default Header;
