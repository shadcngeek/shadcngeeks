import * as React from "react";

import { AvatarMore } from "./avatar-more";
import { Card, CardContent } from "@/components/ui/card";

import { FeedbackListTypes } from "../../types";

export function TextBrief({ feedback, fullName, jobTitle }: FeedbackListTypes) {
  return (
    <Card className="w-[350px] bg-transparent dark:bg-transparent overflow-hidden  relative before:w-full before:h-full before:bg-slate-800 dark:before:bg-slate-200 before:absolute before:opacity-5">
      <CardContent className="p-6 ">
        <AvatarMore fullName={fullName} jobTitle={jobTitle} />

        <div className="flex gap-3">
          <div className="mt-5 text-slate-700 dark:text-slate-400">
            <p className="text-slate-700 dark:text-slate-400">{feedback}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
