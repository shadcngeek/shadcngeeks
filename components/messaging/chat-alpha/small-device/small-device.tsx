"use client";
import { Menu } from "lucide-react";

import { MoreVertical, Phone, Video } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

import { MakeCallTypes } from "../types";
import { Input } from "@/components/ui/input";
import AccountSettings from "../account-settings/account-settings";

export function SmallDeviceView({ setIsCalling, setIsVideo }: MakeCallTypes) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant="outline" className="mx-3">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-4 md:p-6 dark:border-slate-800">
        <div className="flex flex-col gap-5 justify-start w-[705px] shrink dark:-slate-800">
          <div className="text-2xl font-bold text-blue-500 dark:border-slate-800">
            ChitChat
          </div>

          <div>
            <form
              role="form"
              id="search-people"
              aria-label="Search people"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input className="w-[250x]" placeholder="Search people" />
            </form>
          </div>

          <Button
            size={"icon"}
            onClick={
              setIsCalling &&
              (() => {
                setIsCalling((isCalling) => !isCalling);
                setIsVideo && setIsVideo(false);
              })
            }
            className="text-slate-600 dark:text-slate-500 rounded-full justify-start w-full gap-3 bg-transparent hover:bg-transparent dark:hover:bg-transparent  dark:bg-transparent "
          >
            <Phone />
            <p>Direct Call</p>
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
            className="text-slate-600 dark:text-slate-500 rounded-full justify-start w-full gap-3 bg-transparent hover:bg-transparent dark:hover:bg-transparent  dark:bg-transparent "
          >
            <Video />
            <p>Video Call</p>
          </Button>
          <Button
            size={"icon"}
            className="text-slate-600 dark:text-slate-500 rounded-full justify-start w-full gap-3 bg-transparent hover:bg-transparent dark:hover:bg-transparent  dark:bg-transparent "
          >
            <MoreVertical />
            <p>More</p>
          </Button>

          <div className="flex gap-3 items-center">
            <AccountSettings />
            <p className="text-slate-700 dark:text-slate-400">Account</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
