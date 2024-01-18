import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";

import data from "./data";
import { ContentTypes } from "./types";

function Content({ subTitle, title }: ContentTypes) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl font-bold">{title}</p>
      <p className="text-[#71717a] dark:text-[#a1a1aa] text-sm">{subTitle}</p>
    </div>
  );
}

export function SocialCounts() {
  return (
    <Card className="w-[350px]">
      <CardContent className="p-6">
        <div className="flex justify-between">
          {data.map(({ subTitle, title }) => (
            <Content key={subTitle} subTitle={subTitle} title={title} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
