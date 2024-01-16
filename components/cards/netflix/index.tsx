import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";

export function Netflix() {
  return (
    <Card className="w-[350px]">
      <CardContent className="text-center p-6">
        <p className="text-xl font-bold">MERCURY</p>
        <p className="text-[3em] font-extrabold mt-2">20 days</p>
        <p className="text-[#71717a] dark:text-[#a1a1aa]">
          Saved on daily builds
        </p>
      </CardContent>
    </Card>
  );
}
