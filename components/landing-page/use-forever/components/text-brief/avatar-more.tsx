import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { AvatarTypes } from "../../types";

export function AvatarMore({ fullName, jobTitle }: AvatarTypes) {
  return (
    <div className="">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="/avatars/02.png" />
          <AvatarFallback className="text-pink-500">OM</AvatarFallback>
        </Avatar>
        <div>
          <p>{fullName}</p>
          <p className="text-slate-700 dark:text-slate-400 text-sm">
            {jobTitle}
          </p>
        </div>
      </div>
    </div>
  );
}
