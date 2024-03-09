import * as React from "react";

import { AvatarMore } from "./avatar-more";
import { FeedbackListTypes } from "../../types";
import { Card, CardContent } from "@/components/ui/card";

export function TextBrief({ feedback, fullName, jobTitle }: FeedbackListTypes) {
  return (
    <Card className="w-[350px]">
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
