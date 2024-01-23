"use client";
import * as React from "react";

import { DollarSign, MoveDownRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { cn } from "@/lib/utils";

import { StatisticTypes } from "../../types";

import { Line, LineChart, ResponsiveContainer } from "recharts";

import { tableChartData } from "../data/data";

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

export function Statistic({
  icon,
  graph,
  title,
  children,
  className,
}: StatisticTypes) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon ? (
          icon
        ) : (
          <DollarSign className="text-[#71717a] dark:text-[#a1a1aa] h-4 w-4" />
        )}
      </CardHeader>
      <CardContent>
        {children}
        {graph ? graph : <StatisticChart />}
      </CardContent>
    </Card>
  );
}
