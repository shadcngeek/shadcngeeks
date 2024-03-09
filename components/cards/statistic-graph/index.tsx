"use client";
import * as React from "react";

import { DollarSign, MoveDownRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Line, LineChart, ResponsiveContainer } from "recharts";

import { tableChartData } from "./data";

function StatisticChart() {
  return (
    <div className="w-full h-[70px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={tableChartData}>
          <Line dot={false} dataKey="pv" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function StatisticGraph() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium">Recent Marketing</CardTitle>

        <DollarSign className="text-slate-700 dark:text-slate-400 h-4 w-4" />
      </CardHeader>
      <CardContent>
        <div className="flex gap-3">
          <p className="text-2xl font-bold">$760,503</p>
          <div className="flex flex-col items-center text-slate-700 dark:text-slate-400">
            <MoveDownRight size={15} />
            <p className="text-xs">20%</p>
          </div>
        </div>
        <StatisticChart />
      </CardContent>
    </Card>
  );
}

export default StatisticGraph;
