import React from "react";
import { Play } from "lucide-react";

import { UserAvatar } from "./avatar";
import { Button } from "@/components/ui/button";

import { PeopleTypes } from "./types";

function PlayList({ fullName, img, jobTitle }: PeopleTypes) {
  return (
    <div className="flex gap-5">
      <UserAvatar avatarImg={img} />
      <div className="flex justify-between items-center w-full">
        <div>
          <p className="dark:text-white">{fullName}</p>
          <p className="text-sm text-slate-700 dark:text-400">{jobTitle}</p>
        </div>

        <div className="flex gap-3 items-center">
          <p className="text-sm text-slate-700 dark:text-slate-400">05:30</p>
          <Button size={"icon"} variant={"ghost"}>
            <Play className="w-4 h-4" />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PlayList;
