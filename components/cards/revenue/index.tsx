import * as React from "react";

import { DollarSign, MoveDownRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Revenue() {
  return (
    <Card className="w-[350px]">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium">Revenue</CardTitle>
        <DollarSign className="text-[#71717a] dark:text-[#a1a1aa] h-4 w-4" />
      </CardHeader>
      <CardContent>
        <div className="flex gap-3">
          <p className="text-2xl font-bold">$892,324</p>
          <div className="flex flex-col items-center text-[#71717a] dark:text-[#a1a1aa]">
            <MoveDownRight size={15} />
            <p className="text-xs">20%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
