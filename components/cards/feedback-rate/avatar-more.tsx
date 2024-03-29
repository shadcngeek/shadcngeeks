import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarMoreTypes {
  title: string;
}

export function AvatarMore({ title }: AvatarMoreTypes) {
  return (
    <div className="">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="/avatars/02.png" />
          <AvatarFallback className="text-pink-500">OM</AvatarFallback>
        </Avatar>
        <p>{title}</p>
      </div>
    </div>
  );
}
