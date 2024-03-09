import * as React from "react";

import { AvatarMore } from "./avatar-more";
import { Card, CardContent } from "@/components/ui/card";

import { FeedbackListTypes } from "../../types";

export function TextBrief({ feedback, fullName, jobTitle }: FeedbackListTypes) {
  return (
    <Card className="max-w-[350px] bg-transparent dark:bg-transparent overflow-hidden  relative before:w-full before:h-full before:bg-slate-800 dark:before:bg-slate-200 before:absolute before:opacity-5">
      <CardContent className="p-6 ">
        <AvatarMore fullName={fullName} jobTitle={jobTitle} />

        <div className="flex gap-3">
          <div className="mt-5 text-[#71717a] dark:text-[#a1a1aa]">
            <p className="text-[#71717a] dark:text-[#a1a1aa]">{feedback}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
