import React from "react";

import { StarIcon } from "lucide-react";
import { StarFilledIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { AvatarMore } from "./feedback-rate/avatar-more";

import { QuoteTypes } from "./types";

function Quote({ fullName, quote, imgSrc }: QuoteTypes) {
  return (
    <Card className="max-w-[350px] xl:max-w-[400px]">
      <CardHeader>
        <AvatarMore title={fullName} imgSrc={imgSrc} />
      </CardHeader>
      <CardContent>
        <div className="flex gap-3">
          <div className="text-[#71717a] dark:text-[#a1a1aa]">
            <blockquote className="text-slate-500">{quote}</blockquote>
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

export default Quote;
