import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { MoreHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarMore() {
  return (
    <Card className="w-[350px]">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/avatars/02.png" />
              <AvatarFallback className="text-pink-500">OM</AvatarFallback>
            </Avatar>
            <div>
              <p>John Doe</p>
              <p className="text-sm text-[#71717a] dark:text-[#a1a1aa]">
                San Diego, CA
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
      </CardContent>
    </Card>
  );
}
