import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TextBrief() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Embrace the Journey</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <p className="text-[#71717a] dark:text-[#a1a1aa]">
            Life is a fascinating journey filled with twists and turns. Embrace
            each moment, learn from challenges, and savor the victories. Every
            step you take contributes to your unique story, making it a tapestry
            of resilience and growth.
          </p>
          <p className="mt-10">Space Explorer</p>
          <p className="text-xs text-[#71717a] dark:text-[#a1a1aa]">
            UI Designer
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
