import React from "react";

import { BarChart3 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

function StatIcon() {
  return (
    <Card className="w-[200px]">
      <CardContent className="p-6 text-2xl text-center">
        <div className="mx-auto w-fit bg-rose-600 rounded-full p-2 mb-2">
          <BarChart3 className="text-white" />
        </div>
        <p className="text 2xl font-bold">$43K</p>
        <p className="text-sm text-slate-700 dark:text-slate-400">Marketing</p>
      </CardContent>
    </Card>
  );
}

export default StatIcon;
