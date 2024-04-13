import * as React from "react";

import { DollarSign, MoveDownRight } from "lucide-react";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Revenue() {
  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium">Yearly income</CardTitle>
        <DollarSign className="text-slate-700 dark:text-slate-400 h-4 w-4" />
      </CardHeader>
      <CardContent>
        <div className="flex gap-3">
          <p className="text-2xl font-bold">$892,324</p>
          <div className="flex flex-col items-center text-slate-700 dark:text-slate-400">
            <MoveDownRight size={15} />
            <p className="text-xs">20%</p>
          </div>
        </div>
      </CardContent>
    </>
  );
}
