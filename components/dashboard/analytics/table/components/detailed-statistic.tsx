"use client";

import * as React from "react";

import { DollarSign, MoveDownRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { cn } from "@/lib/utils";

import { StatisticTypes } from "../../types";
import { StatisticList } from "./statistic-list";
import { detailedStatisticData } from "../data/data";

export function DetailedStatistic({ className }: StatisticTypes) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
        <DollarSign className="text-slate-700 dark:text-slate-400 h-4 w-4" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex gap-3">
            <p className="text-2xl font-bold">$892,324</p>
            <div className="flex flex-col items-center text-slate-700 dark:text-slate-400">
              <MoveDownRight size={15} />
              <p className="text-xs">20%</p>
            </div>
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-400">
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
