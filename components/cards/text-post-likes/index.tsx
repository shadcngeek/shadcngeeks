import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { AvatarMore } from "./avatar-more";
import { ThumbsUp } from "lucide-react";

export function TextPostLikes() {
  return (
    <Card className="w-[350px]">
      <CardContent className="p-6">
        <div className="pb-5">
          <AvatarMore title="John Doe" description="6:40 PM Friday, March 20" />
        </div>
        <div className="text-[#71717a] dark:text-[#a1a1aa]">
          <p>
            Life is a fascinating journey filled with twists and turns. Embrace
            each moment, learn from challenges, and savor the victories. Every
            step you take contributes to your unique story, making it a tapestry
            of resilience and growth.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <ThumbsUp size={24} />
            <p>350 Likes</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
