import * as React from "react";

import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { AvatarMore } from "./avatar-more";

export function FeedbackRate() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <AvatarMore title="Alexandra Makoz" />
      </CardHeader>
      <CardContent>
        <div className="flex gap-3">
          <div className="text-slate-700 dark:text-slate-400">
            <p className="text-slate-700 dark:text-slate-400">
              Dreams are the compass guiding you to extraordinary destinations.
              Chase them fearlessly, for within the pursuit lies the magic of
              self-discovery and accomplishment. Every dream realized is a
              testament to your courage and determination.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex gap-1">
          {Array.from({ length: 4 }).map((_, index) => (
            <StarFilledIcon key={index} className="w-5 h-5 text-orange-500" />
          ))}
          <StarIcon className="text-orange-500 w-5 h-5" />
        </div>
      </CardFooter>
    </Card>
  );
}
