import * as React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

function TextBriefIcon() {
  return (
    <Card className="max-w-[350px]">
      <CardHeader>
        <div className="w-14 h-1w-14 border dark:border-slate-800 p-4 rounded-lg">
          <Image src={"logo.svg"} width={150} height={150} alt="logo" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="font-semibold">About Life</p>
          <p className="text-slate-700 dark:text-slate-400">
            Life is a fascinating journey filled with twists and turns. Embrace
            each moment, learn from challenges, and savor the victories. Every
            step you take contributes to your unique story, making it a tapestry
            of resilience and growth.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default TextBriefIcon;
