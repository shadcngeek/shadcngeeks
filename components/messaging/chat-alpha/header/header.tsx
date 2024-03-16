import React from "react";

import { MoreVertical, Phone, Video } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AccountSettings from "../account-settings/account-settings";

import { MakeCallTypes } from "../types";
import { SmallDeviceView } from "../small-device/small-device";

function Header({ setIsCalling, setIsVideo }: MakeCallTypes) {
  return (
    <div className="flex items-center w-full border-b dark:border-b-slate-800 justify-between dark:bg-slate-950 ">
      <div className="w-[300px] p-4 grow-0 shrink  text-2xl font-bold text-blue-500 dark:border-slate-800">
        ChitChat
      </div>

      <div className="w-[400px] grow-0 shrink p-0 sm:px-4">
        <form
          role="form"
          id="search-people"
          aria-label="Search people"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input placeholder="Search people" />
        </form>
      </div>
      <div className="hidden md:flex gap-5 justify-end w-[705px] shrink dark:-slate-800 pr-10">
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
      <div className="hidden md:flex gap-5 items-center shrink w-fit sm:w-[400px] h-full py-2 px-4 justify-end dark:border-slate-800">
        <AccountSettings />
      </div>
      <div className="dark:text-slate-400 md:hidden">
        <SmallDeviceView {...{ setIsCalling, setIsVideo }} />
      </div>
    </div>
  );
}

export default Header;
