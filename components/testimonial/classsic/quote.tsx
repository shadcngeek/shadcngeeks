import React from "react";

import UserAvatar from "./avatar/user-avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { QuoteTypes } from "./types";

function Quote({ fullName, jobTitle, quote, imgSrc }: QuoteTypes) {
  return (
    <Card className="max-w-[350px] xl:max-w-[400px]">
      <CardHeader className="mx-auto w-fit flex flex-col items-center">
        <UserAvatar imgSrc={imgSrc} />
        <p className="font-bold">{fullName}</p>
        <p className="text-sm text-slate-400">{jobTitle}</p>
      </CardHeader>
      <CardContent className="">
        <blockquote className="text-center text-slate-500">{quote}</blockquote>
      </CardContent>
    </Card>
  );
}

export default Quote;
