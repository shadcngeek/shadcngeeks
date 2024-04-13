"use client";
import React from "react";

import { LineChart, Line } from "recharts";

import { Revenue } from "./revenue";
import { Card, CardContent } from "@/components/ui/card";

import data from "./data";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function TinyLineChart() {
  return (
    <Card className="max-w-[350px]">
      <Revenue />
      <CardContent>
        <ScrollArea>
          <LineChart width={300} height={100} data={data}>
            <Line
              dataKey="pv"
              strokeWidth={2}
              type="monotone"
              stroke="#8884d8"
            />
          </LineChart>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
