import React from "react";

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

function Quote({ fullName, jobTitle, quote, imgSrc, stars }: QuoteTypes) {
  return (
    <div>
      <Card className="w-[400px] border-none rounded-none shadow-none">
        <CardHeader className="mx-auto w-fit flex flex-col items-center">
          <UserAvatar imgSrc={imgSrc} />
          <p className="font-bold">{fullName}</p>
          <p className="text-sm text-slate-400">{jobTitle}</p>
        </CardHeader>
        <CardContent className="">
          <blockquote className="text-center text-slate-500">
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
    </div>
  );
}

export default Quote;
