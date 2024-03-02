import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { AvatarMoreTypes } from "../types";

export function AvatarMore({ title, imgSrc }: AvatarMoreTypes) {
  return (
    <div className="">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src={imgSrc} />
          <AvatarFallback className="text-pink-500">OM</AvatarFallback>
        </Avatar>
        <p>{title}</p>
      </div>
    </div>
  );
}
