import * as React from "react";

import { MoreHorizontal, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarMoreTypes {
  title: string;
  description: string;
}

export function AvatarMore({ description, title }: AvatarMoreTypes) {
  return (
    <div className="flex justify-between items-start">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="/avatars/02.png" />
          <AvatarFallback className="text-pink-500">OM</AvatarFallback>
        </Avatar>
        <div>
          <p>{title}</p>
          <p className="text-sm text-[#71717a] dark:text-[#a1a1aa]">
            {description}
          </p>
        </div>
      </div>
      <Button
        variant="ghost"
        className="hover:bg-transparent p-0 w-fit h-fit text-[#71717a] dark:text-[#a1a1aa]"
      >
        <MoreHorizontal size={15} />
      </Button>
    </div>
  );
}
