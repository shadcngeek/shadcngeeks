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
          <div className="mt-5 text-[#71717a] dark:text-[#a1a1aa]">
            <p className="text-[#71717a] dark:text-[#a1a1aa]">{feedback}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
