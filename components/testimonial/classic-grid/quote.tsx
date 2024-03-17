import React from "react";

import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import { StarFilledIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import UserAvatar from "./avatar/user-avatar";

import { QuoteTypes } from "./types";

function Quote({
  quote,
  stars,
  imgSrc,
  fullName,
  jobTitle,
  className,
  textClassName,
}: QuoteTypes) {
  return (
    <Card className={cn("w-[300px] md:w-[400px]", className)}>
      <CardHeader className="mx-auto w-fit flex flex-col items-center">
        <UserAvatar imgSrc={imgSrc} />
        <p className="font-bold">{fullName}</p>
        <p className="text-sm text-slate-400">{jobTitle}</p>
      </CardHeader>
      <CardContent className="">
        <blockquote className={cn("text-center text-slate-500", textClassName)}>
          {quote}
        </blockquote>
      </CardContent>
      <CardFooter className="w-fit mx-auto">
        {Array.from({ length: stars }).map((_, index) => (
          <StarFilledIcon key={index} className="text-rose-600" />
        ))}
        {stars < 5 &&
          Array.from({ length: 5 - stars }).map((_, index) => (
            <StarIcon key={index} className="text-rose-600 w-4 h-4" />
          ))}
      </CardFooter>
    </Card>
  );
}

export default Quote;
