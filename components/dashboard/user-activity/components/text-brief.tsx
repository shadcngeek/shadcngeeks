import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TextBrief() {
  return (
    <Card className="w-[40%]">
      <CardHeader>
        <CardTitle>Embrace the Journey</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-[#71717a] dark:text-[#a1a1aa]">
            Life is a fascinating journey filled with twists and turns. Embrace
            each moment, learn from challenges, and savor the victories. Every
            step you take contributes to your unique story, making it a tapestry
            of resilience and growth.
          </p>
          <Button variant={"outline"}> Read More</Button>
        </div>
      </CardContent>
    </Card>
  );
}
