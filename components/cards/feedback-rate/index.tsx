import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { AvatarMore } from "./avatar-more";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";

export function FeedbackRate() {
  return (
    <Card className="w-[350px]">
      <CardContent className="p-6 ">
        <AvatarMore title="Alexandra Makoz" />
        <div className="flex gap-3">
          <div className="mt-5 text-[#71717a] dark:text-[#a1a1aa]">
            <p className="text-[#71717a] dark:text-[#a1a1aa]">
              Dreams are the compass guiding you to extraordinary destinations.
              Chase them fearlessly, for within the pursuit lies the magic of
              self-discovery and accomplishment. Every dream realized is a
              testament to your courage and determination.
            </p>
          </div>
        </div>
        <div className="mt-5 flex gap-1">
          {Array.from({ length: 4 }).map((_, index) => (
            <StarFilledIcon key={index} className="w-5 h-5 text-orange-500" />
          ))}
          <StarIcon className="text-orange-500 w-5 h-5" />
        </div>
      </CardContent>
    </Card>
  );
}
