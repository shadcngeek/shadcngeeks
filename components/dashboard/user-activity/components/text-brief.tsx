import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TextBrief() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Embrace the Journey</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-slate-700 dark:text-slate-400">
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
