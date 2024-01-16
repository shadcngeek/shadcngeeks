import * as React from "react";

import { MoreHorizontal } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function UserProgress() {
  return (
    <Card className="w-[350px]">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarFallback className="text-pink-500">OM</AvatarFallback>
            </Avatar>
            <div>
              <p>John Doe</p>
              <p className="text-sm text-[#71717a] dark:text-[#a1a1aa]">
                Frontend Engineer
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
        <div>
          <div className="my-5 h-1 w-full bg-[#71717a] dark:bg-[#a1a1aa] relative rounded-full">
            <div className="mt-5 h-1 w-52 bg-pink-500 rounded-full"></div>
          </div>
          <div className="flex justify-between text-sm text-[#71717a] dark:text-[#a1a1aa]">
            <p>Professional</p>
            <p>792 Points</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
