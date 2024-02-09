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
          <p className="text-[#71717a] dark:text-[#a1a1aa] text-sm">
            {jobTitle}
          </p>
        </div>
      </div>
    </div>
  );
}
