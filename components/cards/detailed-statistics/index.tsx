"use client";

import * as React from "react";

import { DollarSign, MoveDownRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { StatisticList } from "./statistic-list";

import { cn } from "@/lib/utils";
import { detailedStatisticData } from "./data";

export function DetailedStatistic() {
  return (
    <Card className={cn("w-full")}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
        <DollarSign className="text-[#71717a] dark:text-[#a1a1aa] h-4 w-4" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex gap-3">
            <p className="text-2xl font-bold">$892,324</p>
            <div className="flex flex-col items-center text-[#71717a] dark:text-[#a1a1aa]">
              <MoveDownRight size={15} />
              <p className="text-xs">20%</p>
            </div>
          </div>
          <p className="text-xs text-[#71717a] dark:text-[#a1a1aa]">
            Last year earning $85,536.
          </p>
        </div>
        <div className="mt-5">
          {detailedStatisticData.map(({ amount, subTitle, title, icon }) => (
            <StatisticList
              key={title}
              icon={icon()}
              title={title}
              amount={amount}
              subTitle={subTitle}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
